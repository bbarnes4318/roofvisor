"use client";

import { useState, FormEvent, ReactNode } from "react";

const CALENDLY_URL = "https://calendly.com/leadsbystorm-support/30min";

function ArrowIcon({ className = "h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 shrink-0 text-[#059669] ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

function InteractiveMapVisual() {
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [activePin, setActivePin] = useState<"A" | "B" | "C" | "D">("A");

  const pins = {
    A: {
      address: "2035 Pauline Street",
      cityZip: "Fort Wayne, IN 46802",
      owner: "Corporate Owner",
      phone: "Phone Data Ready",
      status: "Failed Listing",
      disposition: "Maximum Velocity",
      score: "High Signal",
      notes: "Strong equity position. Owner is looking at alternative options to get 2035 Pauline Street sold.",
      dnc: false,
      scriptType: "AI Conversational Phone Script",
      script: "Custom conversational script generated automatically for this property disposition.",
    },
    B: {
      address: "1412 Crestview Ave",
      cityZip: "Fort Wayne, IN 46804",
      owner: "Tired Landlord",
      phone: "DNC Restricted",
      status: "Expired Listing",
      disposition: "Email Rescue Active",
      score: "DNC Match",
      notes: "Property was listed 120 days. Number on DNC list - exact email rescue script ready.",
      dnc: true,
      scriptType: "Exact DNC Email Rescue Template",
      script: "Exact DNC email rescue template generated automatically for this property disposition.",
    },
    C: {
      address: "890 Maplewood Dr",
      cityZip: "Fort Wayne, IN 46805",
      owner: "Pre-Foreclosure",
      phone: "Phone Data Ready",
      status: "Withdrawn",
      disposition: "High Priority",
      score: "Urgent",
      notes: "Notice of default filed 14 days ago. High motivation to close before auction.",
      dnc: false,
      scriptType: "AI Conversational Phone Script",
      script: "Custom conversational script generated automatically for this property disposition.",
    },
    D: {
      address: "3410 Oakridge Blvd",
      cityZip: "Fort Wayne, IN 46807",
      owner: "Vacant Property",
      phone: "Phone Data Ready",
      status: "Failed Listing",
      disposition: "Fast Track",
      score: "92 / 100",
      notes: "Home vacant for 3+ months. Out-of-state owner.",
      dnc: false,
      scriptType: "AI Conversational Phone Script",
      script: "Custom conversational script generated automatically for this property disposition.",
    },
  };

  const currentPin = pins[activePin];

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xl text-[#0F172A]">
      
      {/* Visual Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        {/* View Toggle */}
        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setDeviceView("desktop")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold transition ${
              deviceView === "desktop"
                ? "bg-[#059669] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            💻 Laptop Portal
          </button>
          <button
            type="button"
            onClick={() => setDeviceView("mobile")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold transition ${
              deviceView === "mobile"
                ? "bg-[#059669] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            📱 Mobile App
          </button>
        </div>
      </div>

      {/* Map Content Layout */}
      <div className={`grid gap-6 ${deviceView === "mobile" ? "max-w-md mx-auto" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
        
        {/* Left: Map Surface */}
        <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 shadow-inner">
          {/* Street Map SVG Graphic */}
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.2)_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 400 320" fill="none">
            <path d="M -20 60 L 420 80 M -20 180 L 420 160 M -20 260 L 420 270" stroke="#CBD5E1" strokeWidth="4" />
            <path d="M 80 -20 L 70 340 M 200 -20 L 210 340 M 320 -20 L 310 340" stroke="#CBD5E1" strokeWidth="4" />
            <path d="M 0 120 C 120 120, 200 240, 400 200" stroke="#94A3B8" strokeWidth="6" />
          </svg>

          {/* Header Badge */}
          <div className="relative flex items-center justify-between z-10">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
              Target Market: Fort Wayne, IN
            </span>
            <span className="rounded-full border border-[#059669]/30 bg-[#059669]/10 px-2.5 py-1 text-[9px] font-black text-[#059669]">
              250+ Data Points Checked
            </span>
          </div>

          {/* Interactive Pins */}
          {[
            { id: "A", left: "28%", top: "32%", label: "2035 Pauline St" },
            { id: "B", left: "68%", top: "24%", label: "1412 Crestview" },
            { id: "C", left: "75%", top: "68%", label: "890 Maplewood" },
            { id: "D", left: "32%", top: "74%", label: "3410 Oakridge" },
          ].map((pin) => (
            <button
              key={pin.id}
              type="button"
              onClick={() => setActivePin(pin.id as any)}
              style={{ left: pin.left, top: pin.top }}
              className={`group absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-110 ${
                activePin === pin.id ? "z-30 scale-110" : "z-20"
              }`}
            >
              <span className={`absolute -inset-2.5 animate-ping rounded-full ${activePin === pin.id ? "bg-[#059669]/40" : "bg-[#059669]/20"}`} />
              <div
                className={`relative flex items-center gap-1.5 rounded-full border-2 px-3 py-1 text-[11px] font-black shadow-md ${
                  activePin === pin.id
                    ? "border-[#059669] bg-[#059669] text-white shadow-emerald-500/30"
                    : "border-slate-300 bg-white text-slate-800 hover:border-[#059669]"
                }`}
              >
                <span>📍 Pin {pin.id}</span>
              </div>
            </button>
          ))}

          {/* Bottom Tags Bar */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 justify-center z-10">
            {["Corporate Owned", "Vacant", "Pre-Foreclosure", "Tired Landlord"].map((tag) => (
              <span key={tag} className="rounded-lg border border-slate-300 bg-white/90 px-2 py-0.5 text-[8px] font-black uppercase text-slate-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Property Details & AI Script Preview */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#FAFAFA] p-5">
          <div className="space-y-4">
            
            {/* Property Card Header */}
            <div className="border-b border-slate-200 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#059669]">
                  {currentPin.disposition}
                </span>
                <span className="rounded bg-slate-900 px-2 py-0.5 text-[8px] font-extrabold uppercase text-white">
                  {currentPin.status}
                </span>
              </div>
              <h3 className="mt-1 text-base font-black text-slate-900">{currentPin.address}</h3>
              <p className="text-xs text-slate-500">{currentPin.cityZip}</p>
            </div>

            {/* Facts Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border border-slate-200 bg-white p-2.5">
                <span className="block text-[8px] font-black uppercase text-slate-400">Disposition</span>
                <strong className="block text-slate-800 text-[11px] mt-0.5">{currentPin.owner}</strong>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-2.5">
                <span className="block text-[8px] font-black uppercase text-slate-400">Phone Status</span>
                <strong className={`block text-[11px] mt-0.5 ${currentPin.dnc ? "text-amber-600 font-black" : "text-[#059669] font-black"}`}>
                  {currentPin.phone}
                </strong>
              </div>
            </div>

            {/* Notes */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-600">
              <span className="block text-[8px] font-black uppercase text-slate-400 mb-1">Executive Rationale</span>
              {currentPin.notes}
            </div>

            {/* Script Box */}
            <div className="rounded-xl border border-[#059669]/30 bg-[#059669]/5 p-3">
              <div className="flex items-center justify-between border-b border-[#059669]/20 pb-2 mb-2">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#059669]">
                  {currentPin.scriptType}
                </span>
                <span className="text-[8px] font-bold text-slate-500">Ready to convert</span>
              </div>
              <p className="text-[11px] font-medium text-slate-700 italic leading-normal">
                {currentPin.script}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function PropertiesLanding() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    brokerage: "",
    market: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    
    const destination = new URL(CALENDLY_URL);
    destination.searchParams.set("name", `${formData.firstName} ${formData.lastName}`);
    destination.searchParams.set("email", formData.email);
    destination.searchParams.set("a1", formData.market);
    window.location.assign(destination.toString());
  };

  return (
    <main className="min-h-screen bg-white text-[#0F172A] font-sans">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-3 sm:px-6 lg:px-8">
          <a href="/" className="text-left cursor-pointer flex items-center">
            <img
              src="/logo (2).png"
              alt="VelocityRE.pro Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </a>

          <nav className="flex items-center gap-8 text-xs sm:text-sm font-bold text-slate-600">
            <button type="button" onClick={() => scrollToId("how-it-works")} className="hover:text-slate-900 transition">
              How It Works
            </button>
            <button type="button" onClick={() => scrollToId("pilot-package")} className="hover:text-slate-900 transition">
              Pilot Package
            </button>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative bg-[#FAFAFA] border-b border-slate-200 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-left">
          
          <div className="inline-block rounded-md bg-slate-200 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">
            THE OFF-MARKET LISTING ENGINE
          </div>

          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[64px]">
            Turn Failed Listings Into Listing Appointments.
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Velocity does the groundwork by analyzing failed property listings using over 250 data points, identifying the property owners worth pursuing, and providing AI-Powered proven conversational and email scripting.
            </p>
            <p className="font-semibold text-slate-800">
              The result? A powerful, market-tailored system that keeps you compliant—and increases your listing conversions.
            </p>
          </div>



          <div className="mt-8">
            <button
              type="button"
              onClick={() => scrollToId("claim-market")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#059669] hover:bg-[#047857] px-8 py-4 text-base font-black text-white shadow-lg transition"
            >
              Check My Market &amp; Pilot Price <ArrowIcon />
            </button>
          </div>

        </div>
      </section>

      {/* 3. THE ULTIMATE ADVANTAGE (4-Step Process & Map Visual) */}
      <Section id="how-it-works" className="bg-[#FAFAFA] border-b border-slate-200">
        <div className="max-w-4xl text-left mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#059669] block mb-2">
            THE SOLUTION
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Velocity RE: The Ultimate Advantage
          </h2>
          
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-sm sm:text-base font-medium text-slate-700 leading-relaxed max-w-3xl">
            Velocity RE&apos;s backend engine runs through a 4-part process to hand you property listing opportunities right on your phone and laptop.
          </div>
        </div>

        {/* 4-Step Process List */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mb-16">
          {[
            [
              "01",
              "Step 1: VelocityRE Property Analysis",
              "Our system monitors over 250 data points in local market properties identifying those that meet criteria to engage for a new listing.",
            ],
            [
              "02",
              "Step 2: DNC Waterfall System",
              "Over 60% of phone numbers fall on the DNC list. When a number is legally restricted from being called, we don't waste potential property listings—instead, we capture their email address as an alternative channel to convert.",
            ],
            [
              "03",
              "Step 3: Intelligent Disposition",
              "We analyze properties using a combination of public records and deep research through extensive property databases to create an intelligent disposition for each property.",
            ],
            [
              "04",
              "Step 4: VelocityRE Mobile & Laptop App",
              "We developed our UI for both mobile and laptop. Click a pin, and instantly get the property and contact details along with phone and email scripting all designed specifically for that property's disposition.",
            ],
          ].map(([step, title, desc]) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-xs font-black text-slate-700">
                {step}
              </span>
              <div>
                <h3 className="text-base font-black text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Feature Header & Bullets */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">
            Increase Property Listing Conversion Dramatically
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-12">
          {[
            "Click on any pin to get detailed property and contact info",
            "Checks over 250 data points to ensure each property meets the criteria to convert to a new listing",
            "AI-Powered system provides specific conversational script with property owner to convert to a new listing",
            "For DNC properties where calling is restricted, get the exact email script to convert to a new listing",
            "Increase property listing conversion dramatically",
          ].map((bullet, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-start gap-3">
              <CheckIcon className="mt-0.5" />
              <span className="text-xs font-bold text-slate-800 leading-snug">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Interactive Map Visual Component */}
        <InteractiveMapVisual />
      </Section>

      {/* 4. THE PILOT PROGRAM PACKAGE SECTION */}
      <Section id="pilot-package" className="bg-white border-b border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
          <div className="max-w-3xl text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block mb-2">
              THE PILOT PROGRAM PACKAGE
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              The VelocityRE Pilot Package:
            </h2>
            <p className="mt-6 text-xl font-bold text-slate-700 sm:text-3xl">
              Minimal Risk. Guaranteed Results.
            </p>
          </div>

          {/* Pricing Pill */}
          <div className="shrink-0 rounded-2xl border border-slate-300 bg-slate-100 p-4 text-center">
            <strong className="block text-2xl font-black text-slate-900">$279–$479</strong>
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 block mt-0.5">
              for Pilot Program – BASED ON MARKET
            </span>
          </div>
        </div>

        {/* Increased spacing and smaller font sub-copy */}
        <div className="mt-8 mb-10 space-y-3 max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-500 text-left">
          <p>
            Every VelocityRE pilot is built around the actual opportunity available in your target market. Pilot pricing ranges from $279 to $479, based on the market and the custom package we can support there.
          </p>
          <p>
            Because we deliver a concentrated supply of highly prequalified properties—not shared lists—we can invite only a limited number of pilot agents in each market. If your market is available, we&apos;ll confirm your exact package and price before you enroll.
          </p>
        </div>

        <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-6 text-left">
          Your Pilot Package Includes:
        </h3>

        {/* 3 Package Component Cards (Border removed from center card) */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          
          <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 text-left shadow-sm">
            <strong className="block text-3xl font-black text-slate-900">10 to 15</strong>
            <h4 className="mt-3 text-sm font-black text-slate-900">Highly targeted analyzed listing properties:</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Ready-to-prospect off-market properties tailored directly to your zip codes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 text-left shadow-sm">
            <strong className="block text-3xl font-black text-slate-900">1 to 2</strong>
            <h4 className="mt-3 text-sm font-black text-slate-900">Guaranteed Face-to-Face Appointments:</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Our internal team will schedule 1 to 2 prequalified listing appointments.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 text-left shadow-sm">
            <strong className="block text-3xl font-black text-slate-900">5 to 10</strong>
            <h4 className="mt-3 text-sm font-black text-slate-900">Premium Email Leads:</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              High value opportunities on the DNC list are not wasted. Instead, we provide the exact email address and scripting to engage them through the email channel versus a call.
            </p>
          </div>

        </div>
      </Section>

      {/* 5. CLAIM MARKET LEAD CAPTURE FORM (Dark Navy Section) */}
      <Section id="claim-market" className="bg-white">
        <div className="overflow-hidden rounded-3xl bg-[#0B1928] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left Copy */}
            <div className="text-left space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#059669]">
                EVERY STEP
              </span>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl leading-tight">
                Claim Your Market Before Competitors.
              </h2>
              <p className="text-base font-bold text-emerald-400">
                Exclusive property listing inventory limits the number of agents we invite.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                The supply of highly prequalified properties is different in every market, so each pilot is customized and availability is limited. Enter your information to check your market, receive your exact package, and confirm your exact monthly pilot price within the $279–$479 range.
              </p>
            </div>

            {/* Right Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-[#059669] text-white font-black grid place-items-center mx-auto text-xl">
                    ✓
                  </div>
                  <h3 className="text-lg font-black text-white">Market Submitted!</h3>
                  <p className="text-xs text-slate-300">Redirecting you to schedule your pilot onboarding call...</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[9px] font-black uppercase tracking-wider text-slate-300 mb-1">
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/15 bg-[#06121E] px-4 py-3 text-sm text-white outline-none focus:border-[#059669]"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-black uppercase tracking-wider text-slate-300 mb-1">
                        Last Name
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/15 bg-[#06121E] px-4 py-3 text-sm text-white outline-none focus:border-[#059669]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/15 bg-[#06121E] px-4 py-3 text-sm text-white outline-none focus:border-[#059669]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-300 mb-1">
                      Mobile Phone
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/15 bg-[#06121E] px-4 py-3 text-sm text-white outline-none focus:border-[#059669]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-300 mb-1">
                      Brokerage Name
                    </label>
                    <input
                      required
                      type="text"
                      name="brokerage"
                      value={formData.brokerage}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/15 bg-[#06121E] px-4 py-3 text-sm text-white outline-none focus:border-[#059669]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-wider text-slate-300 mb-1">
                      Target Market / City
                    </label>
                    <input
                      required
                      type="text"
                      name="market"
                      placeholder="Fort Wayne, IN"
                      value={formData.market}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/15 bg-[#06121E] px-4 py-3 text-sm text-white outline-none focus:border-[#059669]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#059669] hover:bg-[#047857] px-6 py-4 text-base font-black text-white shadow-xl transition"
                  >
                    Check My Market &amp; Pricing <ArrowIcon />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </Section>

      {/* 6. FAQ SECTION */}
      <Section className="bg-[#FAFAFA] border-t border-slate-200">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Questions Before Enrolling
            </h2>
          </div>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8">
            {[
              [
                "What is included in the VelocityRE Pilot Package?",
                "Each pilot package includes 10-15 analyzed listing properties, 1-2 guaranteed face-to-face appointments booked for you, and 5-10 premium email leads for DNC-restricted properties.",
              ],
              [
                "Can the opportunity map be used on mobile app or laptop?",
                "Yes! You can view color-coded pins, property details, AI phone scripts, and DNC email templates on both mobile app and laptop web portal.",
              ],
              [
                "What script is provided for DNC-restricted properties?",
                "For Do-Not-Call (DNC) restricted properties, we provide the exact email address and scripting tailored specifically for that property's disposition.",
              ],
              [
                "How much does the pilot package cost?",
                "Pilot pricing ranges from $279 to $479 based on your specific target market and the available property volume.",
              ],
              [
                "Are these opportunities shared with other agents?",
                "No. Exclusive property listing inventory limits the number of agents we invite.",
              ],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5 text-left">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-900">
                  {question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-base text-[#059669] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <img
                src="/logo (2).png"
                alt="VelocityRE.pro Logo"
                className="h-12 sm:h-14 w-auto object-contain mb-1"
              />
              <p className="mt-1 text-xs text-slate-400">
                Off-market listing engine &amp; predictive seller opportunity platform.
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs font-bold text-slate-300">
              <a href="/terms" className="hover:text-white transition">Program Terms</a>
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <button type="button" onClick={() => scrollToId("claim-market")} className="hover:text-white transition">Contact</button>
            </div>
          </div>
          <p className="mt-8 border-t border-slate-800 pt-6 text-[10px] text-slate-500 leading-relaxed text-left">
            VelocityRE.pro provides data-driven prospecting opportunities. Pilot program pricing and guaranteed appointment deliverables are subject to market availability and written agreement terms.
          </p>
          <p className="mt-2 text-[10px] text-slate-500 text-left">© {new Date().getFullYear()} Leads By Storm. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
