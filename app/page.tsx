import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LeadsByStorm | Confirmed Storm-Damage Roof Inspection Appointments",
  description:
    "We identify homeowners in recent hail and wind zones, confirm their interest, and book inspection appointments directly on your calendar.",
};

const LOGO_SRC = "/logo.png";
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
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
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
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <a href="#" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </a>

        <ButtonLink href="#calendar" className="px-5 py-2.5 text-xs font-extrabold sm:text-sm">
          Book a Call
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
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#145CFF]">
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

          <div className="flex flex-col gap-2 sm:flex-row pt-0.5">
            <ButtonLink href="#calendar">Book a 10-Minute Territory Call</ButtonLink>
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
              Email Us Your Availability
            </ButtonLink>
          </div>

          {/* Hero proof points under CTA */}
          <div className="border-t border-[#DDE6F2] pt-3 space-y-2.5">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-bold text-[#42526B] sm:grid-cols-4">
              <span className="flex items-center gap-2">
                <svg className="h-4.5 w-4.5 text-[#11A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Exclusive appointments
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4.5 w-4.5 text-[#11A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Confirmed homeowners
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4.5 w-4.5 text-[#11A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No-show replacement
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4.5 w-4.5 text-[#11A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
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
            Most Roofing Leads Are Shared, Cold, or Already Burned.
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
    <SectionContainer id="how-it-works" className="bg-[#F5F8FC] border-b border-[#DDE6F2] py-20">
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
            title: "Book the Appointment",
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
    <SectionContainer className="bg-[#061A2F] text-white py-20 border-b border-[#061A2F]">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
            Guaranteed Inspection Appointments. Risk-Free No-Show Protection.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            You are not buying a cold lead list. You are buying scheduled inspection opportunities with homeowners who have already confirmed interest. If a homeowner no-shows, we replace the appointment.
          </p>
          <div className="pt-2">
            <ButtonLink href="#calendar" className="bg-[#145CFF] text-white hover:bg-[#2F7DFF] border-0">
              Check My Territory
            </ButtonLink>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
          {[
            "Homeowner interest confirmed before delivery",
            "Appointment booked to your calendar",
            "Exclusive contractor assignment",
            "No-show appointments replaced",
          ].map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <svg className="h-5 w-5 text-[#2F7DFF] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base font-bold text-slate-100">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function PricingSection() {
  return (
    <SectionContainer className="bg-white py-20 border-b border-[#DDE6F2]">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:items-center">
        
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">PRICING & ROI</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
            Stop Paying Premium Prices for Shared or Unverified Leads.
          </h2>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            Many storm-damage lead vendors charge <strong className="text-[#061A2F] font-extrabold">$400–$500</strong> for shared, recycled, or lightly verified opportunities. LeadsByStorm delivers exclusive, confirmed inspection appointments starting at <strong className="text-[#061A2F] font-extrabold">$250</strong> per appointment, with volume pricing available for qualified territories.
          </p>
          <p className="text-xs font-bold text-[#2F7DFF] italic">
            * Final pricing depends on market, appointment volume, and territory availability.
          </p>
        </div>

        {/* Right Column (Pricing Cards) */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            {
              title: "Typical Market Price",
              value: "$400–$500",
              desc: "Often shared, resold, cold, or lightly verified.",
              highlight: false,
              valueColor: "text-[#061A2F]",
            },
            {
              title: "LeadsByStorm Appointment Rate",
              value: "$250–$350",
              desc: "Exclusive, confirmed storm-damage inspection appointments.",
              highlight: true,
              valueColor: "text-[#145CFF]",
            },
            {
              title: "No-Show Protection",
              value: "Replacement Included",
              desc: "If the homeowner no-shows, we replace the appointment.",
              highlight: false,
              valueColor: "text-[#11A36A]",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 transition-all duration-200 border ${
                card.highlight
                  ? "border-[#145CFF] bg-blue-50/20 shadow-md shadow-blue-150 relative"
                  : "border-[#DDE6F2] bg-white hover:border-[#145CFF] hover:shadow-lg"
              }`}
            >
              {card.highlight && (
                <span className="absolute right-4 top-4 rounded bg-[#145CFF] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
                  Best Value
                </span>
              )}
              <p className="text-xs font-bold text-[#42526B] uppercase tracking-wider">{card.title}</p>
              <p className={`mt-2 text-2xl sm:text-3xl font-extrabold ${card.valueColor}`}>
                {card.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#42526B]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}

function TerritoryCtaSection() {
  return (
    <SectionContainer className="bg-[#F5F8FC] py-16 sm:py-20 border-b border-[#DDE6F2]">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        
        {/* Left Column: Copy Content */}
        <div className="space-y-6 lg:col-span-7 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">
            TERRITORY AVAILABILITY
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
            Claim Your Storm Territory Before It Fills.
          </h2>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            We work with a limited number of roofing contractors in each active market to protect appointment quality and prevent oversaturation. Book a quick call to see if we have confirmed appointments available in your service area.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <ButtonLink href="#calendar">Book a 10-Minute Territory Call</ButtonLink>
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
              Email Us Your Availability
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Visual Storm Radar Map */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
          {/* Subtle background glow */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#145CFF]/10 to-[#145CFF]/5 blur-xl pointer-events-none" />
          
          {/* Image Container */}
          <div className="relative rounded-2xl border border-[#DDE6F2] bg-white p-2 shadow-xl overflow-hidden aspect-[4/3]">
            <img
              src="/storm_map.png"
              alt="Active Storm Damage Territory Map Dashboard"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Absolute overlay elements for premium dashboard look */}
            <div className="absolute top-4 left-4 bg-[#061A2F]/90 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1 text-[8px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Active Radar: 1.75&quot; Hail Zone
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-[#DDE6F2] rounded-lg px-2.5 py-1 text-[8px] font-extrabold text-[#42526B] shadow-md">
              Territory: <span className="text-[#145CFF]">Orlando East (Claimed)</span>
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}

function CalendarSection() {
  return (
    <SectionContainer id="calendar" className="bg-white py-16 sm:py-20 border-b border-[#DDE6F2]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Header Section */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">Booking Console</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
            Check Active Territory Availability
          </h2>
          <p className="text-sm sm:text-base text-[#42526B] max-w-2xl mx-auto">
            Pick a time below to review your service area, current storm activity, appointment volume, pricing, and territory availability with our team.
          </p>
        </div>

        {/* Calendar Card Wrapper */}
        <div className="rounded-2xl border border-[#DDE6F2] bg-white p-2 sm:p-4 shadow-xl overflow-hidden relative">
          
          {/* Calendly Embed Container with Fallback/Loading State */}
          <div className="relative overflow-hidden rounded-xl bg-[#F5F8FC] min-h-[660px] w-full">
            {/* Loading / Fallback Background Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 z-0">
              <svg className="animate-spin h-8 w-8 text-[#145CFF] mb-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p className="text-sm font-bold text-[#061A2F]">Loading schedule...</p>
              <p className="mt-1 text-xs text-[#42526B] max-w-xs mx-auto">
                If the calendar does not load, you can book directly using this link:
              </p>
              <a
                href="https://calendly.com/leadsbystorm-support/30min?text_color=0b1329&primary_color=2563eb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-[#145CFF] hover:bg-[#2F7DFF] px-4 py-2.5 rounded-xl transition shadow-md"
              >
                Open Scheduling Link
              </a>
            </div>

            {/* Live Widget Iframe Container */}
            <div 
              className="calendly-inline-widget w-full h-[660px] relative z-10" 
              data-url="https://calendly.com/leadsbystorm-support/30min?text_color=0b1329&primary_color=2563eb"
              style={{ minWidth: "320px", height: "660px" }}
            />
          </div>
        </div>

        {/* Footer/Alternative options in a single row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#42526B]">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=LeadsByStorm%20Discovery%20Call%20Availability&body=Hi%20LeadsByStorm%2C%0A%0AI'm%20a%20roofing%20contractor%20interested%20in%20exclusive%20storm%20appointments.%0A%0AMy%20Service%20Area%2FMarket%3A%20%0AMy%20Preferred%20Call%20Time%20Availability%3A%20%0A%0AThanks!`}
            className="inline-flex items-center gap-2 font-bold text-[#145CFF] hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
            </svg>
            Prefer Email? {CONTACT_EMAIL}
          </a>
          
          <span className="hidden sm:inline text-slate-300">|</span>

          <div className="flex items-center gap-2 font-bold justify-center">
            <svg className="w-4 h-4 text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            <span>Scan to Book on Mobile:</span>
            <img
              src="/qrcode.png"
              alt="QR Code"
              className="h-8 w-8 inline-block object-contain ml-1 border border-[#DDE6F2] rounded p-0.5 bg-white"
            />
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}

function FinalCtaSection() {
  return (
    <SectionContainer noPadding className="bg-[#061A2F] text-white py-16 relative border-b border-[#061A2F]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-left">
        <div className="space-y-3 max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready for Confirmed Storm-Damage Appointments?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Book a quick call and we will show you current appointment availability in your market.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <ButtonLink href="#calendar" className="bg-[#145CFF] text-white hover:bg-[#2F7DFF] border-0">
            Book a 10-Minute Territory Call
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary-dark">
            Email Us Your Availability
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#DDE6F2] bg-slate-50 px-6 py-8 sm:px-8 lg:px-12 text-[#42526B]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-xs sm:text-sm text-[#42526B] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LeadsByStorm. All rights reserved.</p>
        <p>Targeted storm-damage roofing appointments.</p>
      </div>
    </footer>
  );
}

export default function LeadsByStormLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#42526B]">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <Header />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <GuaranteeSection />
      <PricingSection />
      <TerritoryCtaSection />
      <CalendarSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}