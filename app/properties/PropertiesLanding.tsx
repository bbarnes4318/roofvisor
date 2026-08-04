"use client";

import { useState, FormEvent, ReactNode } from "react";

const CALENDLY_URL = "https://calendly.com/leadsbystorm-support/30min";

type PlanId = "agent" | "team";

interface PlanOption {
  id: PlanId;
  badge: string;
  title: string;
  price: string;
  cadence: string;
  guaranteeLabel: string;
  summary: string;
  features: string[];
  detail: string;
}

const plans: PlanOption[] = [
  {
    id: "agent",
    badge: "Solo Agent",
    title: "Protected Agent Territory",
    price: "$949",
    cadence: "per month",
    guaranteeLabel: "One Listing Guaranteed",
    summary: "For single agents who want protected local market prospecting without sharing seller leads.",
    features: [
      "50 new predictive seller opportunities monthly",
      "Exclusive protected local market ZIP code",
      "Owner contact details (phone, email, mailing address)",
      "Seller signal scoring & opportunity rationale",
      "Mobile map app & desktop web portal access",
      "AI conversational call scripts & DNC email templates",
      "One listing guaranteed under written program terms",
    ],
    detail: "50 opportunities / month · 1 ZIP code protected",
  },
  {
    id: "team",
    badge: "Growth / Team",
    title: "Expanded Team Territory",
    price: "$1,799",
    cadence: "per month",
    guaranteeLabel: "One Listing Guaranteed",
    summary: "For high-volume agents and small teams expanding reach across multiple ZIP codes.",
    features: [
      "110 new predictive seller opportunities monthly",
      "Up to 3 protected local market ZIP codes",
      "Multi-agent team routing & assignment",
      "Full contact data & 250+ property data points",
      "Mobile map app & desktop web portal access",
      "AI conversational call scripts & DNC email scripts",
      "One listing guaranteed under written program terms",
    ],
    detail: "110 opportunities / month · Up to 3 ZIP codes protected",
  },
];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5 shrink-0 text-emerald-400" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function ProductVisual() {
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [activePin, setActivePin] = useState<"A" | "B" | "C" | "D">("A");

  const pins = {
    A: {
      address: "1420 Pine Ridge Rd, Knoxville TN",
      owner: "Marcus & Sarah K.",
      phone: "(865) 555-0192",
      email: "marcus.k@gmail.com",
      status: "Callable",
      score: 94,
      pointsChecked: 268,
      scriptType: "AI Phone Script",
      script: '"Hi Marcus, I noticed your home was flagged for high seller potential in West Knoxville. Based on recent neighborhood sales..."',
    },
    B: {
      address: "812 Crestview Dr, Knoxville TN",
      owner: "David L.",
      phone: "(865) 555-0144 (DNC)",
      email: "david.l@outlook.com",
      status: "DNC Restricted",
      score: 91,
      pointsChecked: 254,
      scriptType: "Exact DNC Email Script",
      script: '"Subject: Important Market Update for 812 Crestview Dr\n\nHi David, I am reaching out via email regarding your property..."',
    },
    C: {
      address: "304 Magnolia Way, Knoxville TN",
      owner: "Elena R.",
      phone: "(865) 555-0188",
      email: "elena.r@yahoo.com",
      status: "Callable",
      score: 88,
      pointsChecked: 251,
      scriptType: "AI Phone Script",
      script: '"Hello Elena, home values in Magnolia Way have increased 14% over the last 12 months..."',
    },
    D: {
      address: "519 Oak Ridge Hwy, Knoxville TN",
      owner: "Robert & Jen M.",
      phone: "(865) 555-0210 (DNC)",
      email: "robert.m@gmail.com",
      status: "DNC Restricted",
      score: 86,
      pointsChecked: 260,
      scriptType: "Exact DNC Email Script",
      script: '"Subject: Off-Market Inquiry for 519 Oak Ridge Hwy\n\nHi Robert & Jen, I have an active buyer searching in your area..."',
    },
  };

  const currentPin = pins[activePin];

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-[28px] border border-white/10 bg-[#07131d] p-3 shadow-2xl sm:p-5">
      {/* Visual Window Top Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 px-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            VelocityRE Opportunity Map
          </span>
        </div>

        {/* Device Switcher (Mobile App or Laptop) */}
        <div className="flex items-center rounded-xl border border-white/10 bg-[#0c1a26] p-1">
          <button
            type="button"
            onClick={() => setDeviceView("desktop")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold transition ${
              deviceView === "desktop"
                ? "bg-emerald-400 text-[#052012] shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Laptop View
          </button>
          <button
            type="button"
            onClick={() => setDeviceView("mobile")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold transition ${
              deviceView === "mobile"
                ? "bg-emerald-400 text-[#052012] shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Mobile App
          </button>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div className={`mt-3 grid gap-4 ${deviceView === "mobile" ? "max-w-md mx-auto" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
        
        {/* Left / Top: Interactive Map Graphic */}
        <div className="relative min-h-[360px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_65%_25%,rgba(52,211,153,0.15),transparent_40%),linear-gradient(135deg,#0c1c28_0%,#050d14_100%)] p-4 shadow-inner">
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.16)_1px,transparent_1px)] [background-size:28px_28px]" />

          {/* Map Streets SVG */}
          <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 300" fill="none" aria-hidden="true">
            <path d="M-15 76C48 65 72 99 129 92c74-9 80-58 155-48 55 7 77 43 135 29" stroke="#526578" strokeWidth="2.5" />
            <path d="M-15 210c56-22 97-5 143-20 56-19 74-59 139-52 58 7 89 50 155 51" stroke="#526578" strokeWidth="2.5" />
            <path d="M68-15c12 66 2 102 30 151 24 42 60 53 75 108" stroke="#526578" strokeWidth="2.5" />
            <path d="M281-15c-27 42-26 78-12 119 13 38 1 73-21 140" stroke="#526578" strokeWidth="2.5" />
          </svg>

          {/* Header Badge */}
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">
                Protected Market: West Knoxville
              </span>
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-black text-emerald-300">
              ⚡ 250+ Data Points Checked
            </span>
          </div>

          {/* Interactive Property Map Pins */}
          {[
            { id: "A", left: "22%", top: "25%", score: "94", dnc: false },
            { id: "B", left: "64%", top: "22%", score: "91", dnc: true },
            { id: "C", left: "74%", top: "62%", score: "88", dnc: false },
            { id: "D", left: "36%", top: "70%", score: "86", dnc: true },
          ].map((pin) => (
            <button
              key={pin.id}
              type="button"
              onClick={() => setActivePin(pin.id as any)}
              style={{ left: pin.left, top: pin.top }}
              className={`group absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-110 focus:outline-none ${
                activePin === pin.id ? "z-30 scale-110" : "z-20"
              }`}
            >
              <span className={`absolute -inset-3 animate-ping rounded-full ${activePin === pin.id ? "bg-emerald-400/30" : "bg-emerald-400/10"}`} />
              <div
                className={`relative flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1 text-[11px] font-black shadow-xl backdrop-blur ${
                  activePin === pin.id
                    ? "border-emerald-400 bg-emerald-400 text-[#052012] shadow-emerald-500/40"
                    : "border-white/20 bg-[#081520] text-white hover:border-emerald-400"
                }`}
              >
                <span>📍 Pin {pin.id}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-extrabold ${pin.dnc ? "bg-amber-400/20 text-amber-300" : "bg-emerald-950 text-emerald-300"}`}>
                  {pin.score} pts
                </span>
              </div>
            </button>
          ))}

          {/* Bottom Active Pin Overlay Box */}
          <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-[#07131d]/95 p-3 shadow-xl backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Selected Property Pin {activePin}</span>
                  <span className="rounded bg-emerald-400/15 border border-emerald-400/30 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300">
                    Score: {currentPin.score}/100
                  </span>
                </div>
                <p className="text-xs font-extrabold text-white mt-0.5">{currentPin.address}</p>
              </div>
              <span className="rounded-lg bg-emerald-400 px-2.5 py-1 text-[9px] font-black text-[#052012] shadow">
                PIN LOCKED
              </span>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Detailed Property Intelligence & AI Scripts */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1824] p-4 sm:p-5">
          <div className="space-y-4">
            
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-400">Property & Contact Info</span>
                <h3 className="text-sm font-black text-white">{currentPin.owner}</h3>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                currentPin.status.includes("DNC") 
                  ? "bg-amber-400/10 text-amber-300 border border-amber-400/30" 
                  : "bg-emerald-400/10 text-emerald-300 border border-emerald-400/30"
              }`}>
                {currentPin.status}
              </span>
            </div>

            {/* Property Contact Cards */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
                <span className="block text-[8px] font-black uppercase text-slate-400">Phone Contact</span>
                <strong className="block text-[11px] text-white mt-0.5 truncate">{currentPin.phone}</strong>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
                <span className="block text-[8px] font-black uppercase text-slate-400">Email Address</span>
                <strong className="block text-[11px] text-white mt-0.5 truncate">{currentPin.email}</strong>
              </div>
            </div>

            {/* 250+ Data Points Audit Bar */}
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-300">Listing Criteria Check</span>
                <span className="text-[10px] font-extrabold text-white">{currentPin.pointsChecked} / 250+ points passed</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-emerald-400" style={{ width: "95%" }} />
              </div>
            </div>

            {/* Conversational Script Box */}
            <div className="rounded-xl border border-white/10 bg-[#07111a] p-3 text-left">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-300">
                    {currentPin.scriptType}
                  </span>
                </div>
                <span className="text-[8px] font-bold text-slate-400">Ready to Convert</span>
              </div>
              <p className="whitespace-pre-line text-xs font-medium leading-relaxed text-slate-300 font-mono bg-black/20 p-2.5 rounded-lg border border-white/5">
                {currentPin.script}
              </p>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
            <span>💻 Laptop Web Portal &amp; 📱 Mobile App</span>
            <span className="font-bold text-emerald-300">Max Listing Conversion</span>
          </div>
        </div>

      </div>
      <p className="mt-3 text-center text-[10px] text-slate-500">
        Illustrative VelocityRE opportunity map interface on mobile &amp; laptop
      </p>
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
    <main className="min-h-screen overflow-x-hidden bg-[#06111a] text-white font-sans">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111a]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-left">
            <span className="block text-lg font-black tracking-[-0.04em] text-white sm:text-xl">
              VelocityRE<span className="text-emerald-400">.pro</span>
            </span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
              A Leads By Storm company
            </span>
          </button>
          <button
            type="button"
            onClick={() => scrollToId("plans")}
            className="rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-black text-[#052012] shadow-lg shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:bg-emerald-300 sm:px-5 sm:text-sm"
          >
            Choose My Program
          </button>
        </div>
      </header>

      {/* 1. HERO SECTION (Refactored to focus on proposition without inline map) */}
      <section className="relative px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,.15),transparent_45%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Built for listing agents who prospect
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[68px]">
            50 Seller Opportunities. <br className="hidden sm:inline" />
            <span className="text-emerald-400">One Listing Guaranteed.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Reach homeowners showing the strongest signals that they may sell, work a protected local market, and receive one listing guaranteed under the written program terms.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToId("map-feature-section")}
              className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 text-base font-black text-[#052012] shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Explore Opportunity Map <ArrowIcon />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("plans")}
              className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-extrabold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              See My Two Options
            </button>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Plans begin at $949. Written guarantee terms are reviewed before enrollment.
          </p>

          {/* Quick proof stats */}
          <div className="mt-12 grid grid-cols-3 gap-3 max-w-2xl mx-auto sm:gap-4">
            {[
              ["50", "new opportunities monthly"],
              ["1", "listing guaranteed"],
              ["Protected", "local market ZIP code"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 sm:p-5 text-center shadow-lg">
                <strong className="block text-xl font-black tracking-tight text-white sm:text-3xl">{value}</strong>
                <span className="mt-1 block text-[9px] font-bold uppercase leading-4 tracking-[0.08em] text-slate-400 sm:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Guarantee Notice Bar */}
      <section className="border-y border-white/10 bg-[#081722] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
              <ShieldIcon />
            </div>
            <div>
              <strong className="block text-sm font-extrabold text-white">The guarantee is for one listing—not an earnings promise.</strong>
              <span className="text-xs text-slate-400">
                Eligibility, activity requirements, covered period, exclusions, and remedy are governed by the written program agreement.
              </span>
            </div>
          </div>
          <button type="button" onClick={() => scrollToId("guarantee")} className="shrink-0 text-xs font-black text-emerald-300 hover:text-emerald-200">
            See what is guaranteed →
          </button>
        </div>
      </section>

      {/* 2. DEDICATED MAP & CONVERSION FEATURE SECTION (Moved down below the hero section) */}
      <Section id="map-feature-section" className="bg-[#040d14] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(52,211,153,.08),transparent_50%)] pointer-events-none" />

        {/* Section Header Copy */}
        <div className="mx-auto max-w-3xl text-center mb-12 relative z-10">
          
          {/* Note / Badge above title */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Map can be used on mobile app or laptop</span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-[52px]">
            Increase Property Listing Conversion Dramatically
          </h2>

          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Turn seller signals into signed listings with intelligent property mapping, contact enrichment, and AI conversion scripts designed for high-performing real estate agents.
          </p>
        </div>

        {/* Feature Bullets Grid */}
        <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12 relative z-10">
          
          {/* Bullet 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#081520] p-5 shadow-lg hover:border-emerald-400/40 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 font-extrabold text-lg mb-3">
              📍
            </div>
            <h3 className="text-sm font-black text-white">Click on any pin to get detailed property &amp; contact info</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Tap or click any opportunity pin on your mobile phone or laptop to instantly view owner names, verified phone numbers, email addresses, and home facts.
            </p>
          </div>

          {/* Bullet 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#081520] p-5 shadow-lg hover:border-emerald-400/40 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 font-extrabold text-lg mb-3">
              ⚡
            </div>
            <h3 className="text-sm font-black text-white">Checks over 250 data points per property</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Our system continuously audits over 250 data points to ensure each property meets the strict criteria required to convert into a brand-new listing.
            </p>
          </div>

          {/* Bullet 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#081520] p-5 shadow-lg hover:border-emerald-400/40 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 font-extrabold text-lg mb-3">
              🤖
            </div>
            <h3 className="text-sm font-black text-white">AI-Powered conversational scripts</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Provides specific, tailored conversational call scripts for each property owner to guide your conversation and maximize listing conversions.
            </p>
          </div>

          {/* Bullet 4 */}
          <div className="rounded-2xl border border-white/10 bg-[#081520] p-5 shadow-lg hover:border-emerald-400/40 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 font-extrabold text-lg mb-3">
              📧
            </div>
            <h3 className="text-sm font-black text-white">Exact email scripts for DNC properties</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              For Do-Not-Call (DNC) restricted properties where calling is restricted, get the exact email script written to convert the homeowner to a new listing.
            </p>
          </div>

          {/* Bullet 5 */}
          <div className="sm:col-span-2 lg:col-span-2 rounded-2xl border-2 border-emerald-400/40 bg-gradient-to-r from-emerald-400/10 via-[#081520] to-[#081520] p-5 shadow-xl flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">Proven Results</span>
              <h3 className="text-base font-black text-white">Increase property listing conversion dramatically</h3>
              <p className="text-xs text-slate-300">
                By combining predictive seller signals with exact outreach scripts, participating agents consistently convert high-potential homeowners into active listings.
              </p>
            </div>
            <button type="button" onClick={() => scrollToId("plans")} className="shrink-0 rounded-xl bg-emerald-400 px-5 py-3 text-xs font-black text-[#052012] shadow hover:bg-emerald-300 transition">
              Get Started
            </button>
          </div>

        </div>

        {/* Map UI Visual */}
        <div className="relative z-10">
          <ProductVisual />
        </div>
      </Section>

      {/* 3. HOW IT WORKS SECTION */}
      <Section id="how-it-works" className="bg-white text-[#07131d]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700 mb-3">3-STEP SYSTEM</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#07131d] sm:text-5xl">
            How VelocityRE.pro Delivers Guaranteed Listings
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We track seller signals across your protected territory, deliver enriched property intelligence, and back your efforts with a written one-listing guarantee.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            [
              "01",
              "Select your protected market",
              "Lock down exclusive prospecting rights in your primary ZIP code. Your opportunities are never shared with competing local agents.",
            ],
            [
              "02",
              "Access 50 seller opportunities monthly",
              "Receive high-signal properties complete with owner names, contact info, 250+ data point scores, and AI conversation scripts.",
            ],
            [
              "03",
              "Work the map & convert to a listing",
              "Use the mobile app or laptop portal to call, email, or door-track prospects until you secure your guaranteed new listing.",
            ],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-3xl border border-slate-200 bg-[#f8faf9] p-8 shadow-sm hover:shadow-md transition">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-base font-black text-emerald-800">
                {number}
              </span>
              <h3 className="mt-6 text-xl font-black text-[#07131d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. PLANS & PRICING SECTION */}
      <Section id="plans" className="bg-[#07141e]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-3">TERRITORY TIERS</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Select Your Protected Program
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Both plans include exclusive protected territory, mobile &amp; laptop map access, AI conversion scripts, and written one-listing guarantee terms.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-stretch max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-3xl border p-8 transition-all ${
                selectedPlan === plan.id
                  ? "border-emerald-400 bg-[#091b29] shadow-2xl shadow-emerald-500/10"
                  : "border-white/10 bg-[#051119] hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-300">
                    {plan.badge}
                  </span>
                  <span className="text-xs font-black text-emerald-400">{plan.guaranteeLabel}</span>
                </div>

                <h3 className="mt-4 text-2xl font-black text-white">{plan.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{plan.summary}</p>

                <div className="my-6 border-y border-white/10 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400">{plan.cadence}</span>
                  </div>
                  <span className="mt-1 block text-[11px] font-bold text-emerald-400">{plan.detail}</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckIcon className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => choosePlan(plan.id)}
                  className={`w-full rounded-xl py-4 text-sm font-black transition ${
                    selectedPlan === plan.id
                      ? "bg-emerald-400 text-[#052012] shadow-lg hover:bg-emerald-300"
                      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  Choose {plan.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. WRITTEN GUARANTEE EXPLANATION SECTION */}
      <Section id="guarantee" className="bg-[#eef8f3] text-[#07131d]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">
              WRITTEN PROGRAM GUARANTEE
            </span>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#07131d] sm:text-4xl">
              One Listing Guaranteed Under Written Program Agreement
            </h2>
            <p className="text-base leading-7 text-slate-700">
              We stand behind our predictive data. Participating agents who follow the program outreach requirements receive one listing guaranteed under the specific contractual terms, timing, and remedy defined in the agreement.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-md">
            {[
              "Covered program period & activity guidelines",
              "Required outreach via phone, email, or mail",
              "Definition of a qualified listing opportunity",
              "Contractual remedy if one listing is not secured",
            ].map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. TERRITORY VERIFICATION & ZIP CHECK */}
      <Section id="territory" className="bg-[#06111a]">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0a1923] shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                Final territory verification
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Start with your primary ZIP code.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                We do not display fake instant availability. Your market is reviewed against the current territory assignments before enrollment is finalized.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">Selected program</span>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <strong className="block text-lg font-black text-white">
                      {plans.find((plan) => plan.id === selectedPlan)?.title}
                    </strong>
                    <span className="text-xs text-slate-400">
                      {plans.find((plan) => plan.id === selectedPlan)?.detail}
                    </span>
                  </div>
                  <button type="button" onClick={() => scrollToId("plans")} className="text-xs font-black text-emerald-300 hover:text-emerald-200">
                    Change program
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/15 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <form onSubmit={submitTerritory} noValidate>
                <label htmlFor="primary-zip" className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Primary market ZIP code
                </label>
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
                {zipError ? (
                  <p id="zip-error" className="mt-2 text-sm font-bold text-red-300">{zipError}</p>
                ) : (
                  <p id="zip-help" className="mt-2 text-xs leading-5 text-slate-500">
                    You will review the program and written guarantee before enrollment is completed.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-6 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 text-base font-black text-[#052012] shadow-xl shadow-emerald-500/15 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Verify My Market &amp; Continue <ArrowIcon />
                </button>

                <div className="mt-5 space-y-2">
                  {[
                    "No fabricated instant availability",
                    "No payment before territory review",
                    "SMS campaign attribution is preserved",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <CheckIcon className="h-4 w-4 shrink-0 text-emerald-400" /> {item}
                    </div>
                  ))}
                </div>
              </form>
            </div>

          </div>
        </div>
      </Section>

      {/* 7. FAQ SECTION */}
      <Section className="bg-white pb-28 text-[#07131d] sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Questions before enrolling</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">The important answers, upfront.</h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-[#f8faf9] px-6 sm:px-8">
            {[
              ["Are these opportunities shared with other agents?", "Not within your approved protected market. Final territory boundaries and availability are confirmed before enrollment."],
              ["Can the opportunity map be used on mobile app or laptop?", "Yes! You can access the interactive opportunity map, owner contact info, and AI scripts on both mobile app and laptop web portal."],
              ["What kind of data points are checked per property?", "We check over 250 data points including home equity estimates, owner occupancy, length of ownership, mortgage history, and local market sales velocity."],
              ["What script is provided for DNC properties?", "For Do-Not-Call (DNC) restricted properties, we provide the exact email script tailored specifically to convert the property owner into a listing."],
              ["What exactly is guaranteed?", "One listing under the written eligibility, activity, timing, exclusion, and remedy provisions of the program agreement."],
              ["What happens before I enroll?", "You choose a program, submit your market ZIP code, receive final territory confirmation, and review the written guarantee terms."],
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#040b11] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <strong className="text-xl font-black tracking-[-0.04em] text-white">
                VelocityRE<span className="text-emerald-400">.pro</span>
              </strong>
              <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
                Predictive seller opportunities and protected-market prospecting tools for licensed real estate professionals.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-400">
              <a href="/terms" className="hover:text-white">Program Terms</a>
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              <a href="mailto:support@leadsbystorm.com?subject=VelocityRE.pro%20Support" className="hover:text-white">Contact</a>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-[10px] leading-5 text-slate-400">
            VelocityRE.pro provides data-driven prospecting opportunities. No individual homeowner, listing, closing, commission, earnings, or return is guaranteed except for the specific one-listing contractual remedy described in the written program agreement. Eligibility requirements, activity standards, covered period, exclusions, and remedies apply. Commission and return examples are estimates only.
          </p>
          <p className="mt-3 text-[10px] text-slate-400">© {new Date().getFullYear()} Leads By Storm. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#06111a]/95 p-3 backdrop-blur-xl sm:hidden">
        <button
          type="button"
          onClick={() => scrollToId("plans")}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-black text-[#052012]"
        >
          Choose My Program <ArrowIcon />
        </button>
      </div>

    </main>
  );
}
