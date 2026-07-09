import type { Metadata } from "next";
import Script from "next/script";
import PurchaseOptions from "@/components/landing/PurchaseOptions";

export const metadata: Metadata = {
  title: "LeadsByStorm | Confirmed Storm-Damage Roof Inspection Appointments",
  description:
    "We identify homeowners in recent hail and wind zones, confirm their interest, and book inspection appointments directly on your calendar.",
};

const LOGO_SRC = "/logo-clean.png";
const CONTACT_EMAIL = "support@leadsbystorm.com";

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-dark";
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-extrabold transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100 select-none cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "bg-[#145CFF] text-white shadow-lg shadow-blue-500/10 hover:bg-[#2F7DFF] hover:-translate-y-[1px]"
      : variant === "secondary-dark"
      ? "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:-translate-y-[1px]"
      : "border border-[#DDE6F2] bg-white text-[#42526B] hover:text-[#061A2F] hover:border-[#145CFF] hover:bg-[#F5F8FC] hover:-translate-y-[1px]";

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionContainer({
  id,
  children,
  className = "",
  noPadding = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) {
  return (
    <section id={id} className={`${noPadding ? "px-4 sm:px-6 lg:px-8" : "px-4 py-20 sm:px-6 lg:px-8"} ${className}`}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE6F2] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 sm:py-4.5 sm:px-6 lg:px-8">
        <a href="/" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="/"
            className="text-xs sm:text-sm font-extrabold transition-colors text-[#145CFF]"
          >
            <span className="inline sm:hidden">Roofing</span>
            <span className="hidden sm:inline">Roofing Program</span>
          </a>
          <a
            href="/hvac"
            className="text-xs sm:text-sm font-extrabold transition-colors text-[#42526B] hover:text-[#061A2F]"
          >
            <span className="inline sm:hidden">HVAC</span>
            <span className="hidden sm:inline">HVAC Program</span>
          </a>
        </div>

        <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=LeadsByStorm%20Inquiry`} className="px-5 py-2.5 text-xs font-extrabold sm:text-sm">
          Contact Us
        </ButtonLink>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background shadow glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#145CFF]/15 to-[#145CFF]/5 blur-2xl pointer-events-none" />

      {/* Main Mockup Window Container */}
      <div className="relative rounded-2xl border border-white/10 bg-[#090a0f] shadow-2xl overflow-hidden font-sans text-slate-200">
        
        {/* Window OS Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#0f1115]">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            LeadsByStorm Contractor Calendar
          </div>
          <div className="w-12" /> {/* empty space for alignment balancer */}
        </div>

        {/* Dashboard Panels Layout */}
        <div className="flex h-[320px]">
          
          {/* Sidebar Panel - Calendar Agenda (Left) */}
          <div className="w-[170px] border-r border-white/5 bg-[#0f1115] p-2.5 flex flex-col gap-2 shrink-0">
            {/* Header */}
            <div className="pb-1.5 border-b border-white/5 mb-0.5 text-left">
              <span className="text-[7px] text-[#60A5FA] uppercase tracking-widest font-extrabold block">Calendar View</span>
              <span className="text-[11px] font-extrabold text-white">Thu, June 11</span>
            </div>

            {/* Daily Agenda Slots */}
            <div className="flex flex-col gap-2 overflow-hidden">
              {/* 10:00 AM */}
              <div className="flex gap-2 text-left">
                <div className="text-[8px] text-slate-500 w-10 pt-0.5 shrink-0 font-bold">10:00 AM</div>
                <div className="flex-1 bg-white/5 border border-white/5 rounded p-1 opacity-60">
                  <span className="text-[8.5px] font-bold text-slate-300 block truncate">Sarah L.</span>
                  <span className="text-[7px] text-slate-500 block truncate">Winter Park</span>
                </div>
              </div>

              {/* 12:00 PM */}
              <div className="flex gap-2 text-left items-center">
                <div className="text-[8px] text-slate-500 w-10 shrink-0 font-bold">12:00 PM</div>
                <div className="flex-1 border-t border-dashed border-white/5 my-1" />
              </div>

              {/* 2:00 PM */}
              <div className="flex gap-2 text-left items-center">
                <div className="text-[8px] text-slate-500 w-10 shrink-0 font-bold">2:00 PM</div>
                <div className="flex-1 border-t border-dashed border-white/5 my-1" />
              </div>

              {/* 4:00 PM (Highlighted Active) */}
              <div className="flex gap-2 text-left">
                <div className="text-[8px] text-[#60A5FA] w-10 pt-0.5 shrink-0 font-extrabold">4:00 PM</div>
                <div className="flex-1 bg-[#145CFF]/10 border-l-2 border-[#145CFF] rounded-r p-1 shadow-[0_0_10px_rgba(20,92,255,0.1)]">
                  <span className="text-[8.5px] font-extrabold text-white block truncate">Marcus K.</span>
                  <span className="text-[7px] text-[#93C5FD] font-bold block truncate">Orlando, FL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Appointment Details Panel (Right) */}
          <div className="flex-1 bg-[#13161b] flex flex-col h-full overflow-hidden">
            {/* Header info */}
            <div className="px-3.5 py-1.5 bg-[#0f1115] border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5 text-left">
                <svg className="w-3.5 h-3.5 text-[#60A5FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h4 className="text-[10px] font-extrabold text-white">Event Details</h4>
              </div>
              <span className="text-[7px] font-extrabold uppercase tracking-wide bg-emerald-500/10 text-[#00e676] border border-emerald-500/20 px-1.5 py-0.5 rounded">
                Confirmed
              </span>
            </div>

            {/* Scrollable Appointment Content */}
            <div className="flex-1 p-2.5 overflow-y-auto space-y-2 text-left text-[9px] [scrollbar-width:none]">
              
              {/* Scheduled Time Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-0.5">
                <span className="text-[7px] text-[#60A5FA] uppercase tracking-wider font-extrabold">Scheduled Inspection</span>
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] text-white font-extrabold">Thursday, June 11 @ 4:00 PM</span>
                  <span className="text-[6.5px] bg-[#145CFF] text-white px-1 py-0.5 rounded font-extrabold">Calendar-Ready</span>
                </div>
              </div>

              {/* Property Address Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-0.5">
                <span className="text-[7px] text-slate-400 uppercase tracking-wider font-extrabold">Property Address</span>
                <div className="flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-slate-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white font-bold leading-tight">1420 Pine Creek Dr, Orlando, FL 32801</p>
                </div>
              </div>

              {/* Storm Damage Details Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-[#00e676] uppercase tracking-wider font-extrabold">Storm &amp; Damage Report</span>
                <div className="grid grid-cols-2 gap-2 pb-0.5 border-b border-white/5">
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">Date of Loss</span>
                    <span className="text-white font-bold">May 24 (Hail)</span>
                  </div>
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">Hail Size / Wind</span>
                    <span className="text-white font-bold">1.75&quot; / 52 mph</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">Observed Damage Details</span>
                    <p className="text-slate-300 leading-normal font-medium">Multiple wind-blown shingles, fresh ceiling spots in garage.</p>
                  </div>
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">Roofing Details</span>
                    <p className="text-slate-300 leading-normal font-medium">3-Tab Asphalt Shingles (Approx. 12 years old)</p>
                  </div>
                </div>
              </div>

              {/* Contact Notes Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-slate-400 uppercase tracking-wider font-extrabold">Homeowner &amp; Access Notes</span>
                <div className="flex justify-between text-[7.5px] text-slate-300 border-b border-white/5 pb-0.5">
                  <span>Name: <strong className="text-white font-bold">Marcus K.</strong></span>
                  <span>Phone: <strong className="text-white font-bold">(407) 555-0192</strong></span>
                </div>
                <p className="text-slate-400 italic text-[7.5px] leading-normal">
                  Note: Homeowner confirmed attendance. Ladder set up on West side of property recommended.
                </p>
              </div>

            </div>

            {/* Action Bar */}
            <div className="p-1.5 bg-[#0f1115] border-t border-white/5 flex gap-2 justify-end shrink-0">
              <button className="bg-white/5 hover:bg-white/10 text-white text-[8px] font-extrabold px-2 py-1 rounded border border-white/10 transition flex items-center gap-1">
                <svg className="w-2.5 h-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Directions
              </button>
              <button className="bg-[#145CFF] hover:bg-[#2F7DFF] text-white text-[8px] font-extrabold px-2 py-1 rounded transition flex items-center gap-1">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
                </svg>
                Sync to CRM
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Status bar */}
        <div className="px-4 py-1.5 border-t border-white/5 bg-[#0f1115] flex items-center justify-between text-[8px] text-slate-500 shrink-0">
          <div className="flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] shadow-[0_0_4px_#00e676]" />
            <span>Calendar Feed Active</span>
          </div>
          <div>
            <span>Next Inspection: Thursday 1:30 PM</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <SectionContainer noPadding className="overflow-hidden bg-[#F5F8FC] bg-[radial-gradient(#dde6f2_1px,transparent_1px)] bg-[size:24px_24px] text-[#061A2F] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-[#DDE6F2] relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        
        {/* Left Column (Desktop Layout) */}
        <div className="space-y-3 lg:col-span-7 lg:pt-6">
          <p className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-[#145CFF]">
            FOR ROOFING CONTRACTORS IN ACTIVE STORM MARKETS
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl lg:text-5xl lg:leading-[1.1] xl:text-[54px]">
            Exclusive Storm-Damage Roof Inspection Appointments
          </h1>

          {/* Mobile/Tablet Mockup Placement (hidden on lg and above) */}
          <div className="block lg:hidden my-3">
            <HeroVisual />
          </div>

          <p className="text-sm leading-relaxed text-[#42526B] sm:text-base max-w-lg">
            When hail and wind storms hit, homeowners want to know if their roof was damaged. We identify those homeowners, confirm their interest, and schedule inspection appointments directly on your calendar.
          </p>

          <div className="pt-0.5">
            <ButtonLink href="https://calendly.com/leadsbystorm-support/30min">
              Check Appointment Availability
            </ButtonLink>
          </div>

          {/* Hero proof points under CTA */}
          <div className="border-t border-[#DDE6F2] pt-3 space-y-2.5">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-bold text-[#42526B] sm:grid-cols-4">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Exclusive appointments
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Confirmed homeowners
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No-show replacement
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Volume pricing available
              </span>
            </div>
          </div>

        </div>

        {/* Right Column / Mockup Block (hidden on mobile/tablet) */}
        <div className="hidden lg:block lg:col-span-5">
          <HeroVisual />
        </div>

      </div>
    </SectionContainer>
  );
}

function ProblemSection() {
  return (
    <SectionContainer className="bg-white border-b border-[#DDE6F2] py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        
        {/* Left Column */}
        <div className="space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">
            THE PROBLEM WITH ROOFING LEADS
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
            Most Roofing Leads Are Shared or Cold
          </h2>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            Roofing contractors do not need another spreadsheet of names. They need real conversations with homeowners in storm-hit areas who are willing to schedule an inspection. That is what LeadsByStorm is built to deliver.
          </p>
        </div>

        {/* Right Column (Comparison Cards) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          
          {/* Vendor Card */}
          <div className="rounded-2xl border border-[#DDE6F2] bg-white p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-[#061A2F] uppercase tracking-wider border-b border-[#DDE6F2] pb-3">
              Typical Lead Vendors
            </h3>
            <ul className="space-y-2.5">
              {[
                "Shared with multiple contractors",
                "Lightly verified or unverified",
                "Often cold or recycled",
                "Expensive with no appointment guarantee",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-xs font-bold text-[#42526B]">
                  <svg className="h-4 w-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LeadsByStorm Card */}
          <div className="rounded-2xl border-2 border-[#145CFF] bg-[#F5F8FC] p-6 shadow-md space-y-4 relative overflow-hidden">
            <span className="absolute right-4 top-4 rounded bg-[#145CFF] px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white">
              Guaranteed
            </span>
            <h3 className="text-sm font-extrabold text-[#061A2F] uppercase tracking-wider border-b border-[#DDE6F2] pb-3">
              LeadsByStorm
            </h3>
            <ul className="space-y-2.5">
              {[
                "Homeowner interest confirmed",
                "Appointment scheduled",
                "Exclusive delivery",
                "No-show replacement included",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-xs font-bold text-[#061A2F]">
                  <svg className="h-4 w-4 text-[#11A36A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </SectionContainer>
  );
}

function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="bg-[#F5F8FC] pt-20 pb-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">HOW IT WORKS</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          We Find the Storm Opportunity. You Inspect the Roof.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#42526B] sm:text-lg">
          Our team handles targeting, homeowner outreach, qualification, confirmation, and scheduling so your crew can focus on inspections and signed jobs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            num: "01",
            title: "Target Active Storm Areas",
            desc: "We monitor recent hail and wind activity to identify neighborhoods where homeowners are more likely to need a roof damage assessment.",
          },
          {
            num: "02",
            title: "Confirm the Homeowner",
            desc: "We contact homeowners, verify interest, and confirm they are open to having a contractor inspect for possible storm damage.",
          },
          {
            num: "03",
            title: "Schedule the Inspection",
            desc: "Once confirmed, the appointment is sent directly to your calendar with the homeowner’s details and scheduled inspection time.",
          },
        ].map((card) => (
          <article key={card.num} className="bg-white rounded-2xl border border-[#DDE6F2] p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-[#145CFF] border border-blue-100">
              {card.num}
            </div>
            <h3 className="text-lg font-extrabold text-[#061A2F]">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#42526B]">{card.desc}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

function GuaranteeSection() {
  return (
    <SectionContainer className="bg-[#F5F8FC] text-[#061A2F] pt-16 pb-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="space-y-6 lg:col-span-7 text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl leading-tight">
            Guaranteed Inspection Appointments. No-Show Protection.
          </h2>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            You are not buying a cold lead list. You are getting scheduled roof inspection opportunities with homeowners who have already confirmed interest after recent storm activity.
          </p>
        </div>

        <div className="lg:col-span-5 bg-white border border-[#DDE6F2] rounded-2xl p-6 sm:p-8 space-y-5 shadow-md">
          {[
            "Homeowner interest confirmed before delivery",
            "Roof inspection added to your calendar",
            "Exclusive contractor assignment",
            "No-show appointments replaced",
          ].map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <svg className="h-5 w-5 text-[#11A36A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base font-bold text-[#42526B]">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}


function TerritoryCtaSection() {
  return (
    <SectionContainer className="bg-[#F5F8FC] pt-8 pb-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        
        {/* Left Column: Copy Content */}
        <div className="space-y-6 lg:col-span-7 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">
            TERRITORY AVAILABILITY
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl leading-tight">
            Your Service Area May Still Be Open.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#42526B] sm:text-lg">
            <p>
              We limit contractor access in each active market to protect appointment quality and prevent oversaturation.
            </p>
            <p>
              If your territory is still available, you can claim access before appointment capacity fills.
            </p>
          </div>

          <div className="pt-2">
            <ButtonLink href="https://calendly.com/leadsbystorm-support/30min">
              Check My Specific Market
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Visual Storm Radar Map */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
          {/* Subtle background glow */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#145CFF]/10 to-[#145CFF]/5 blur-xl pointer-events-none" />
          
          {/* Image Container */}
          <a
            href="https://maps.leadsbystorm.com/storm-map/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block rounded-2xl border border-[#DDE6F2] bg-white p-2 shadow-xl overflow-hidden aspect-[4/3] cursor-pointer hover:border-[#145CFF]/30 transition-colors group"
          >
            <img
              src="/storm_map.png"
              alt="Active Storm Damage Territory Map Dashboard"
              className="w-full h-full object-cover rounded-xl transition duration-300 md:group-hover:scale-[1.01]"
            />
            {/* Absolute overlay elements for premium dashboard look */}
            <div className="absolute top-4 left-4 bg-[#061A2F]/90 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1 text-[8px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Active Radar: 1.75&quot; Hail Zone
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-[#DDE6F2] rounded-lg px-2.5 py-1 text-[8px] font-extrabold text-[#42526B] shadow-md">
              Territory: <span className="text-[#145CFF]">Orlando East (Claimed)</span>
            </div>
          </a>
        </div>

      </div>
    </SectionContainer>
  );
}



function FinalCtaSection() {
  return (
    <SectionContainer noPadding className="bg-[#081421] text-white py-16 relative border-b border-white/[0.05]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-left">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            SEE THE STORM INTELLIGENCE PLATFORM IN ACTION
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Explore the demo and see how roofing contractors can go from storm radar to specific homeowner opportunities. Use the map, select your target area, and view the property, contact, and roof data available inside the platform.
          </p>
        </div>

        <div className="pt-2">
          <a
            href="https://maps.leadsbystorm.com/storm-map/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-extrabold bg-[#145CFF] text-white shadow-lg shadow-blue-500/10 border-0 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 cursor-pointer"
          >
            Launch the Demo
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#061A2F] px-6 py-8 sm:px-8 lg:px-12 text-slate-400">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-xs sm:text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LeadsByStorm. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/terms" className="text-slate-300 hover:text-white transition-colors font-bold">Terms &amp; Conditions</a>
          <span className="text-slate-700">|</span>
          <a href="/privacy" className="text-slate-300 hover:text-white transition-colors font-bold">Privacy Policy</a>
          <span className="text-slate-700">|</span>
          <p className="text-slate-500">Targeted storm-damage roofing appointments.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LeadsByStormLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#42526B]">
      <Header />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <GuaranteeSection />
      <TerritoryCtaSection />
      <PurchaseOptions />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}