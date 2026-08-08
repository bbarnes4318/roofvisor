import { NextResponse } from "next/server";

// Format numbers to E.164 format. Returns null for anything we can't
// confidently normalize, so we never send junk like "+8655512" to Telnyx.
function formatPhoneNumber(raw: string): string | null {
  const trimmed = String(raw ?? "").trim();

  // Respect input that is already E.164
  if (trimmed.startsWith("+")) {
    const digits = trimmed.slice(1).replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 15 ? `+${digits}` : null;
  }

  const clean = trimmed.replace(/\D/g, "");

  if (clean.length === 10) {
    return `+1${clean}`;
  }
  if (clean.length === 11 && clean.startsWith("1")) {
    return `+${clean}`;
  }
  // Plausible international without a leading "+"
  if (clean.length >= 11 && clean.length <= 15) {
    return `+${clean}`;
  }
  return null;
}

// Chunk helper to run requests in batches
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Pull a readable message out of a Telnyx error payload
function describeTelnyxError(status: number, bodyText: string): string {
  try {
    const parsed = JSON.parse(bodyText);
    const errors = parsed?.errors;
    if (Array.isArray(errors) && errors.length > 0) {
      const parts = errors
        .map((e: any) => [e.title, e.detail].filter(Boolean).join(": "))
        .filter(Boolean);
      if (parts.length > 0) return `Telnyx ${status}: ${parts.join(" | ")}`;
    }
  } catch {
    // fall through to raw text
  }
  const snippet = bodyText.replace(/\s+/g, " ").trim().slice(0, 200);
  return `Telnyx ${status}${snippet ? `: ${snippet}` : ""}`;
}

// Single lookup with retry on rate limits and transient server errors
async function lookupNumber(formatted: string, apiKey: string) {
  const url = `https://api.telnyx.com/v2/number_lookup/${encodeURIComponent(
    formatted
  )}?type=carrier&type=caller-name`;

  const maxAttempts = 3;
  let lastError = "Lookup failed";

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: AbortSignal.timeout(20000),
      });

      if (response.ok) {
        return { ok: true as const, data: (await response.json())?.data };
      }

      const errorText = await response.text();
      lastError = describeTelnyxError(response.status, errorText);

      // 401/403/404 and other 4xx (except 429) will not improve on retry
      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === maxAttempts) {
        return { ok: false as const, error: lastError };
      }

      const retryAfter = Number(response.headers.get("retry-after"));
      await sleep(
        Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : 500 * attempt * attempt
      );
    } catch (err: any) {
      lastError =
        err?.name === "TimeoutError"
          ? "Telnyx request timed out after 20s"
          : err?.message || "Failed connection to Telnyx API";
      if (attempt === maxAttempts) {
        return { ok: false as const, error: lastError };
      }
      await sleep(500 * attempt * attempt);
    }
  }

  return { ok: false as const, error: lastError };
}

export async function POST(request: Request) {
  try {
    const apiKey =
      request.headers.get("x-telnyx-api-key")?.trim() ||
      process.env.TELNYX_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Telnyx API Key is missing. Please enter your API key in the configuration field.",
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { numbers } = body;

    if (!Array.isArray(numbers) || numbers.length === 0) {
      return NextResponse.json(
        { error: "Invalid input. Expected an array of phone numbers." },
        { status: 400 }
      );
    }

    const results = [];
    // Process in batches of 5 to respect rate limits and perform lookup quickly
    const numberChunks = chunkArray(numbers, 5);

    for (const chunk of numberChunks) {
      const chunkPromises = chunk.map(async (rawNumber) => {
        const formatted = formatPhoneNumber(rawNumber);

        if (!formatted) {
          const digits = String(rawNumber ?? "").replace(/\D/g, "");
          return {
            inputNumber: rawNumber,
            status: "error",
            error: digits
              ? `Not a valid phone number (${digits.length} digits) — expected 10 digits, or 11 starting with 1`
              : "No digits found in this value — check that the correct CSV column was selected",
          };
        }

        const outcome = await lookupNumber(formatted, apiKey);

        if (!outcome.ok) {
          return {
            inputNumber: rawNumber,
            formattedNumber: formatted,
            status: "error",
            error: outcome.error,
          };
        }

        const lookup = outcome.data;

        return {
          inputNumber: rawNumber,
          formattedNumber: formatted,
          status: "success",
          carrierName: lookup?.carrier?.name || "Unknown",
          carrierType:
            lookup?.carrier?.type || lookup?.portability?.line_type || "Unknown",
          callerName: lookup?.caller_name?.caller_name || "Unknown",
          countryCode: lookup?.country_code || "Unknown",
          nationalFormat: lookup?.national_format || formatted,
        };
      });

      const chunkResults = await Promise.all(chunkPromises);
      results.push(...chunkResults);
    }

    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
