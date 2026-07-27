'use client';

import { FormEvent, ReactNode, useState } from "react";

type PlanId = "agent" | "concierge";

type Plan = {
  id: PlanId;
  label: string;
  title: string;
  description: string;
  investment: string;
  detail: string;
  estimatedNet: string;
  returnMultiple: string;
  features: string[];
  recommended?: boolean;
};

const CALENDLY_URL = "https://calendly.com/leadsbystorm-support/30min";

const plans: Plan[] = [
  {
    id: "agent",
    label: "I work the opportunities",
    title: "Agent-Driven Program",
    description: "You call the homeowners and set your own listing appointments.",
    investment: "$949",
    detail: "$949 monthly program investment",
    estimatedNet: "$7,051",
    returnMultiple: "8.4×",
    features: [
      "50 new seller opportunities every month",
      "Homeowner phone and property information",
      "Predictive seller context for each opportunity",
      "Mobile opportunity map and tap-to-call access",
      "Follow-up and pipeline tracking",
      "Protected local market",
      "One listing guaranteed under written terms",
    ],
  },
  {
    id: "concierge",
    label: "Book the appointments for me",
    title: "Done-for-You Appointment Program",
    description: "Our team calls the opportunities and schedules appointments for you.",
    investment: "$1,898",
    detail: "$949 now + $949 only on your first listing",
    estimatedNet: "$6,102",
    returnMultiple: "4.2×",
    recommended: true,
    features: [
      "Everything in the Agent-Driven Program",
      "Outreach performed on your behalf",
      "Appointment scheduling and prospect follow-up",
      "50 new seller opportunities every month",
      "Protected local market",
      "One listing guaranteed under written terms",
      "Second $949 due only on the first listing",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
    </svg>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1720] shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1c27] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">Seller opportunity map</span>
          <div className="w-12" />
        </div>

        <div className="grid min-h-[420px] grid-cols-[96px_1fr] sm:grid-cols-[132px_1fr]">
          <aside className="border-r border-white/10 bg-[#0a141d] p-3">
            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-500">Pipeline</p>
            <div className="mt-4 space-y-2">
              {[
                ["New", "50"],
                ["Contacted", "18"],
                ["Follow-up", "9"],
                ["Appointment", "4"],
              ].map(([label, count], index) => (
                <div key={label} className={`rounded-lg border px-2 py-2 ${index === 0 ? "border-emerald-400/30 bg-emerald-400/10" : "border-white/5 bg-white/[0.03]"}`}>
                  <span className={`block text-[9px] font-extrabold ${index === 0 ? "text-emerald-300" : "text-slate-400"}`}>{label}</span>
                  <strong className="mt-1 block text-sm text-white">{count}</strong>
                </div>
              ))}
            </div>
          </aside>

          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_65%_25%,rgba(34,197,94,0.14),transparent_32%),linear-gradient(135deg,#122533_0%,#071018_100%)] p-4">
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.16)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-300">Protected market</p>
                <p className="mt-1 text-sm font-extrabold text-white">Knoxville West</p>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-emerald-300">50 active</span>
            </div>

            <div className="relative mt-5 h-[212px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1720]/80">
              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 230" fill="none" aria-hidden="true">
                <path d="M-15 76C48 65 72 99 129 92c74-9 80-58 155-48 55 7 77 43 135 29" stroke="#526578" strokeWidth="2" />
                <path d="M-15 171c56-22 97-5 143-20 56-19 74-59 139-52 58 7 89 50 155 51" stroke="#526578" strokeWidth="2" />
                <path d="M68-15c12 66 2 102 30 151 24 42 60 53 75 108" stroke="#526578" strokeWidth="2" />
                <path d="M281-15c-27 42-26 78-12 119 13 38 1 73-21 140" stroke="#526578" strokeWidth="2" />
              </svg>

              {[
                ["20%", "23%", "A"],
                ["58%", "19%", "B"],
                ["72%", "59%", "C"],
                ["34%", "66%", "D"],
              ].map(([left, top, label]) => (
                <div key={label} className="absolute" style={{ left, top }}>
                  <span className="absolute -inset-3 animate-ping rounded-full bg-emerald-400/20" />
                  <span className="relative grid h-8 w-8 place-items-center rounded-full border-2 border-[#08131b] bg-emerald-400 text-[10px] font-black text-[#052012] shadow-lg shadow-emerald-500/30">{label}</span>
                </div>
              ))}

              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#071018]/90 p-3 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-500">Highest seller signal</p>
                    <p className="mt-1 text-[11px] font-extrabold text-white">Property A · 91 opportunity score</p>
                  </div>
                  <span className="rounded-lg bg-emerald-400 px-2 py-1 text-[8px] font-black text-[#052012]">CALL</span>
                </div>
              </div>
            </div>

            <div className="relative mt-3 grid grid-cols-3 gap-2">
              {[
                ["Owner data", "Included"],
                ["Seller signals", "Explained"],
                ["Follow-up", "Tracked"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                  <span className="block text-[7px] font-black uppercase tracking-wider text-slate-500">{label}</span>
                  <strong className="mt-1 block text-[9px] text-white">{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] text-slate-500">Illustrative VelocityRE opportunity view</p>
    </div>
  );
}

export default function PropertiesLanding() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("agent");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");

  const choosePlan = (planId: PlanId) => {
    setSelectedPlan(planId);
    window.setTimeout(() => scrollToId("territory"), 50);
  };

  const submitTerritory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^\d{5}$/.test(zip)) {
      setZipError("Enter a valid 5-digit ZIP code.");
      return;
    }

    setZipError("");

    const destination = new URL(CALENDLY_URL);
    const sourceParams = new URLSearchParams(window.location.search);

    sourceParams.forEach((value, key) => {
      destination.searchParams.set(key, value);
    });

    destination.searchParams.set("utm_source", sourceParams.get("utm_source") || "realtor-sms");
    destination.searchParams.set("utm_medium", sourceParams.get("utm_medium") || "sms");
    destination.searchParams.set("utm_content", selectedPlan);
    destination.searchParams.set("a1", zip);

    window.location.assign(destination.toString());
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06111a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111a]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-left">
            <span className="block text-lg font-black tracking-[-0.04em] text-white sm:text-xl">VelocityRE<span className="text-emerald-400">.pro</span></span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">A Leads By Storm company</span>
          </button>
          <button type="button" onClick={() => scrollToId("plans")} className="rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-black text-[#052012] shadow-lg shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:bg-emerald-300 sm:px-5 sm:text-sm">
            Choose My Program
          </button>
        </div>
      </header>

      <section className="relative px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(52,211,153,.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.10),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Built for listing agents who prospect
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[66px]">
              50 Seller Opportunities. <span className="text-emerald-400">One Listing Guaranteed.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Reach homeowners showing the strongest signals that they may sell, work a protected local market, and receive one listing guaranteed under the written program terms.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => scrollToId("plans")} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 text-base font-black text-[#052012] shadow-xl shadow-emerald-500/15 transition hover:-translate-y-0.5 hover:bg-emerald-300">
                See My Two Options <ArrowIcon />
              </button>
              <button type="button" onClick={() => scrollToId("how-it-works")} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-extrabold text-white transition hover:border-white/25 hover:bg-white/[0.07]">
                How It Works
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">Plans begin at $949. Written guarantee terms are reviewed before enrollment.</p>

            <div className="mt-9 grid grid-cols-3 gap-2 sm:max-w-[580px] sm:gap-3">
              {[
                ["50", "new opportunities monthly"],
                ["1", "listing guaranteed"],
                ["Protected", "local market"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                  <strong className="block text-lg font-black tracking-tight text-white sm:text-2xl">{value}</strong>
                  <span className="mt-1 block text-[9px] font-bold uppercase leading-4 tracking-[0.08em] text-slate-500 sm:text-[10px]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <ProductVisual />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081722] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300"><ShieldIcon /></div>
            <div>
              <strong className="block text-sm font-extrabold text-white">The guarantee is for one listing—not an earnings promise.</strong>
              <span className="text-xs text-slate-400">Eligibility, activity requirements, covered period, exclusions, and remedy are governed by the written program agreement.</span>
            </div>
          </div>
          <button type="button" onClick={() => scrollToId("guarantee")} className="shrink-0 text-xs font-black text-emerald-300 hover:text-emerald-200">See what is guaranteed →</button>
        </div>
      </section>

      <Section id="how-it-works" className="bg-white text-[#07131d]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">A focused path to a listing conversation</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Not another giant lead list.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">VelocityRE narrows the market to 50 homeowners worth contacting now and gives you the property context needed to begin a relevant conversation.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Identify stronger seller signals", "Property, ownership, financial, listing-history, and local-market signals are evaluated for meaningful changes."],
            ["02", "Deliver contact-ready opportunities", "Each opportunity includes homeowner contact information, property details, and the signals behind the opportunity."],
            ["03", "Work the opportunity to a listing", "Call from the mobile map, track every conversation, schedule follow-up, and move prospects through your listing pipeline."],
          ].map(([number, title, description]) => (
            <article key={number} className="rounded-3xl border border-slate-200 bg-[#f7faf9] p-7 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-xs font-black text-emerald-800">{number}</span>
              <h3 className="mt-6 text-xl font-black tracking-tight text-[#07131d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="plans" className="bg-[#07141e]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Choose how the work gets done</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">Two programs. One clear outcome.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">Both programs include 50 new seller opportunities each month, protected-market availability, and the written one-listing guarantee.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.id} className={`relative flex flex-col rounded-[30px] border p-6 sm:p-8 ${plan.recommended ? "border-emerald-400 bg-[#0b1d26] shadow-[0_24px_70px_rgba(16,185,129,.12)]" : "border-white/10 bg-[#091822]"}`}>
              {plan.recommended ? <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-emerald-400 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#052012]">We do the calling</span> : null}
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">{plan.label}</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">{plan.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{plan.description}</p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/15 p-5">
                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">First-listing program cost</span>
                <strong className="mt-2 block text-4xl font-black tracking-[-0.05em] text-white">{plan.investment}</strong>
                <span className="mt-1 block text-xs text-slate-400">{plan.detail}</span>
              </div>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <CheckIcon className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">Estimated net after cost*</span>
                  <strong className="mt-2 block text-2xl font-black text-white">{plan.estimatedNet}</strong>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">Estimated gross multiple*</span>
                  <strong className="mt-2 block text-2xl font-black text-emerald-300">{plan.returnMultiple}</strong>
                </div>
              </div>

              <button type="button" onClick={() => choosePlan(plan.id)} className={`mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black transition hover:-translate-y-0.5 ${plan.recommended ? "bg-emerald-400 text-[#052012] hover:bg-emerald-300" : "border border-white/15 bg-white/[0.05] text-white hover:border-emerald-400/40 hover:bg-emerald-400/10"}`}>
                Choose {plan.title.replace(" Program", "")} <ArrowIcon />
              </button>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-slate-500">*Examples use an estimated $8,000 take-home commission from one closed listing. Commission, earnings, return, and net-income figures are estimates only and are not guaranteed.</p>
      </Section>

      <Section id="guarantee" className="bg-[#eef8f3] text-[#07131d]">
        <div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border-[12px] border-white bg-emerald-600 text-white shadow-2xl shadow-emerald-900/15">
            <div className="text-center">
              <ShieldIcon />
              <strong className="mt-2 block text-4xl font-black">1</strong>
              <span className="block text-xs font-black uppercase tracking-[0.15em]">Listing guaranteed</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">What is actually guaranteed</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">The listing is the guarantee.</h2>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">The estimated $8,000 take-home commission is not guaranteed. It is simply a comparison amount that should be replaced with your own typical take-home commission.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Covered program period", "Required outreach and follow-up", "Definition of a qualifying listing", "Exclusions and contractual remedy"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                  <CheckIcon className="shrink-0 text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="territory" className="bg-[#06111a]">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(52,211,153,.12),transparent_35%),#0a1923] shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Final territory verification</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">Start with your primary ZIP code.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">We do not display fake instant availability. Your market is reviewed against the current territory assignments before enrollment is finalized.</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">Selected program</span>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <strong className="block text-lg font-black text-white">{plans.find((plan) => plan.id === selectedPlan)?.title}</strong>
                    <span className="text-xs text-slate-400">{plans.find((plan) => plan.id === selectedPlan)?.detail}</span>
                  </div>
                  <button type="button" onClick={() => scrollToId("plans")} className="text-xs font-black text-emerald-300 hover:text-emerald-200">Change program</button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/15 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <form onSubmit={submitTerritory} noValidate>
                <label htmlFor="primary-zip" className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">Primary market ZIP code</label>
                <input
                  id="primary-zip"
                  name="zip"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  value={zip}
                  onChange={(event) => {
                    setZip(event.target.value.replace(/\D/g, "").slice(0, 5));
                    if (zipError) setZipError("");
                  }}
                  placeholder="37909"
                  aria-describedby={zipError ? "zip-error" : "zip-help"}
                  className="mt-3 h-16 w-full rounded-xl border border-white/15 bg-[#07131d] px-5 text-xl font-black tracking-[0.16em] text-white outline-none transition placeholder:text-slate-700 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                />
                {zipError ? <p id="zip-error" className="mt-2 text-sm font-bold text-red-300">{zipError}</p> : <p id="zip-help" className="mt-2 text-xs leading-5 text-slate-500">You will review the program and written guarantee before enrollment is completed.</p>}

                <button type="submit" className="mt-6 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 text-base font-black text-[#052012] shadow-xl shadow-emerald-500/15 transition hover:-translate-y-0.5 hover:bg-emerald-300">
                  Verify My Market & Continue <ArrowIcon />
                </button>

                <div className="mt-5 space-y-2">
                  {["No fabricated instant availability", "No payment before territory review", "SMS campaign attribution is preserved"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-400"><CheckIcon className="h-4 w-4 shrink-0 text-emerald-400" /> {item}</div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white pb-28 text-[#07131d] sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Questions before enrolling</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">The important answers, upfront.</h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-[#f8faf9] px-6 sm:px-8">
            {[
              ["Are these opportunities shared with other agents?", "Not within your approved protected market. Final territory boundaries and availability are confirmed before enrollment."],
              ["Are you guaranteeing that every homeowner will sell?", "No. VelocityRE identifies stronger seller signals, but no individual homeowner is guaranteed to list or choose a participating agent."],
              ["What exactly is guaranteed?", "One listing under the written eligibility, activity, timing, exclusion, and remedy provisions of the program agreement."],
              ["Is the $8,000 commission guaranteed?", "No. It is an estimated take-home commission used to compare the program cost with one possible closed transaction."],
              ["What happens before I enroll?", "You choose a program, submit your market, receive final territory confirmation, and review the written guarantee terms."],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-black text-[#07131d]">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-lg text-emerald-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-1 pt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-[#040b11] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <strong className="text-xl font-black tracking-[-0.04em] text-white">VelocityRE<span className="text-emerald-400">.pro</span></strong>
              <p className="mt-2 max-w-md text-xs leading-5 text-slate-500">Predictive seller opportunities and protected-market prospecting tools for licensed real estate professionals.</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-400">
              <a href="/terms" className="hover:text-white">Program Terms</a>
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              <a href="mailto:support@leadsbystorm.com?subject=VelocityRE.pro%20Support" className="hover:text-white">Contact</a>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-[10px] leading-5 text-slate-600">VelocityRE.pro provides data-driven prospecting opportunities. No individual homeowner, listing, closing, commission, earnings, or return is guaranteed except for the specific one-listing contractual remedy described in the written program agreement. Eligibility requirements, activity standards, covered period, exclusions, and remedies apply. Commission and return examples are estimates only.</p>
          <p className="mt-3 text-[10px] text-slate-700">© {new Date().getFullYear()} Leads By Storm. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#06111a]/95 p-3 backdrop-blur-xl sm:hidden">
        <button type="button" onClick={() => scrollToId("plans")} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-black text-[#052012]">
          Choose My Program <ArrowIcon />
        </button>
      </div>
    </main>
  );
}
