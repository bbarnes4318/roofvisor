import { NextResponse } from "next/server";

// Format numbers to E.164 format
function formatPhoneNumber(raw: string): string | null {
  // Strip all non-digit characters
  const clean = raw.replace(/\D/g, "");
  
  if (clean.length === 10) {
    return `+1${clean}`;
  } else if (clean.length === 11 && clean.startsWith("1")) {
    return `+${clean}`;
  } else if (clean.length > 7) {
    // Fallback for international or other formats if they already start with +
    return raw.startsWith("+") ? raw : `+${clean}`;
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

export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get("x-telnyx-api-key") || process.env.TELNYX_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Telnyx API Key is missing. Please enter your API key in the configuration field." },
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
          return {
            inputNumber: rawNumber,
            status: "error",
            error: "Invalid phone number format",
          };
        }

        try {
          const response = await fetch(
            `https://api.telnyx.com/v2/number_lookup/${encodeURIComponent(formatted)}?carrier&caller-name`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${apiKey}`,
              },
            }
          );

          if (!response.ok) {
            const errorText = await response.text();
            return {
              inputNumber: rawNumber,
              formattedNumber: formatted,
              status: "error",
              error: `Telnyx API Error (${response.status}): ${errorText}`,
            };
          }

          const resData = await response.json();
          const lookup = resData.data;

          return {
            inputNumber: rawNumber,
            formattedNumber: formatted,
            status: "success",
            carrierName: lookup?.carrier?.name || "Unknown",
            carrierType: lookup?.carrier?.type || "Unknown",
            callerName: lookup?.caller_name?.caller_name || "Unknown",
            countryCode: lookup?.country_code || "Unknown",
            nationalFormat: lookup?.national_format || formatted,
          };
        } catch (err: any) {
          return {
            inputNumber: rawNumber,
            formattedNumber: formatted,
            status: "error",
            error: err.message || "Failed connection to Telnyx API",
          };
        }
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
