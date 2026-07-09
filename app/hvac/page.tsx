import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadsByStorm HVAC | Guaranteed Homeowner Appointment Program",
  description:
    "Scheduled in-person HVAC repair and replacement appointments with homeowners. Pay for completed meetings, with no-show replacement according to program terms.",
};

const LOGO_SRC = "/logo-clean.png";
const CALENDLY_URL = "https://calendly.com/leadsbystorm-support/30min";

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
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 sm:py-4 sm:px-6 lg:px-8">
        <a href="/hvac" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </a>

        <ButtonLink href={CALENDLY_URL} className="px-5 py-2.5 text-xs font-extrabold sm:text-sm">
          Check Availability
        </ButtonLink>
      </nav>
    </header>
  );
}

function HvacHeroVisual() {
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
          <div className="w-12" />
        </div>

        {/* Dashboard Panels Layout */}
        <div className="flex h-[320px]">

          {/* Sidebar Panel - Calendar Agenda (Left) */}
          <div className="w-[170px] border-r border-white/5 bg-[#0f1115] p-2.5 flex flex-col gap-2 shrink-0">
            {/* Header */}
            <div className="pb-1.5 border-b border-white/5 mb-0.5 text-left">
              <span className="text-[7px] text-[#60A5FA] uppercase tracking-widest font-extrabold block">Calendar View</span>
              <span className="text-[11px] font-extrabold text-white">Thu, Jan 15</span>
            </div>

            {/* Daily Agenda Slots */}
            <div className="flex flex-col gap-2 overflow-hidden">
              {/* 9:00 AM */}
              <div className="flex gap-2 text-left">
                <div className="text-[8px] text-slate-500 w-10 pt-0.5 shrink-0 font-bold">9:00 AM</div>
                <div className="flex-1 bg-white/5 border border-white/5 rounded p-1 opacity-60">
                  <span className="text-[8.5px] font-bold text-slate-300 block truncate">Furnace Repair</span>
                  <span className="text-[7px] text-slate-500 block truncate">Dana R.</span>
                </div>
              </div>

              {/* 11:30 AM */}
              <div className="flex gap-2 text-left items-center">
                <div className="text-[8px] text-slate-500 w-10 shrink-0 font-bold">11:30 AM</div>
                <div className="flex-1 border-t border-dashed border-white/5 my-1" />
              </div>

              {/* 1:00 PM */}
              <div className="flex gap-2 text-left items-center">
                <div className="text-[8px] text-slate-500 w-10 shrink-0 font-bold">1:00 PM</div>
                <div className="flex-1 border-t border-dashed border-white/5 my-1" />
              </div>

              {/* 3:30 PM (Highlighted Active) */}
              <div className="flex gap-2 text-left">
                <div className="text-[8px] text-[#60A5FA] w-10 pt-0.5 shrink-0 font-extrabold">3:30 PM</div>
                <div className="flex-1 bg-[#145CFF]/10 border-l-2 border-[#145CFF] rounded-r p-1 shadow-[0_0_10px_rgba(20,92,255,0.1)]">
                  <span className="text-[8.5px] font-extrabold text-white block truncate">Alan P.</span>
                  <span className="text-[7px] text-[#93C5FD] font-bold block truncate">AC Replacement Est.</span>
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
                <h4 className="text-[10px] font-extrabold text-white">Appointment Details</h4>
              </div>
              <span className="text-[7px] font-extrabold uppercase tracking-wide bg-emerald-500/10 text-[#00e676] border border-emerald-500/20 px-1.5 py-0.5 rounded">
                Confirmed
              </span>
            </div>

            {/* Scrollable Appointment Content */}
            <div className="flex-1 p-2.5 overflow-y-auto space-y-2 text-left text-[9px] [scrollbar-width:none]">

              {/* Scheduled Time Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-0.5">
                <span className="text-[7px] text-[#60A5FA] uppercase tracking-wider font-extrabold">Scheduled Appointment</span>
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] text-white font-extrabold">Thursday, Jan 15 @ 3:30 PM</span>
                  <span className="text-[6.5px] bg-[#145CFF] text-white px-1 py-0.5 rounded font-extrabold">Calendar-Ready</span>
                </div>
              </div>

              {/* Service Type Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-0.5">
                <span className="text-[7px] text-slate-400 uppercase tracking-wider font-extrabold">Service Type</span>
                <div className="flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-slate-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-white font-bold leading-tight">AC Replacement Estimate — In-Person Visit</p>
                </div>
              </div>

              {/* Homeowner Need Details Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-[#00e676] uppercase tracking-wider font-extrabold">Homeowner Need Summary</span>
                <div className="grid grid-cols-2 gap-2 pb-0.5 border-b border-white/5">
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">System Age</span>
                    <span className="text-white font-bold">~14 years</span>
                  </div>
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">Reported Issue</span>
                    <span className="text-white font-bold">Not cooling</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">Homeowner Notes</span>
                    <p className="text-slate-300 leading-normal font-medium">AC not keeping up; considering repair vs. full replacement.</p>
                  </div>
                  <div>
                    <span className="text-[6.5px] text-slate-500 block font-bold">System Details</span>
                    <p className="text-slate-300 leading-normal font-medium">Central split system, single-story home (approx. 1,900 sq ft)</p>
                  </div>
                </div>
              </div>

              {/* Contact Notes Block */}
              <div className="bg-[#171a21] border border-white/5 rounded-lg p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-slate-400 uppercase tracking-wider font-extrabold">Homeowner &amp; Access Notes</span>
                <div className="flex justify-between text-[7.5px] text-slate-300 border-b border-white/5 pb-0.5">
                  <span>Name: <strong className="text-white font-bold">Alan P.</strong></span>
                  <span>Phone: <strong className="text-white font-bold">(555) 010-0148</strong></span>
                </div>
                <p className="text-slate-400 italic text-[7.5px] leading-normal">
                  Note: Homeowner confirmed attendance. Outdoor unit on North side of home.
                </p>
              </div>

            </div>

            {/* Action Bar */}
            <div className="p-1.5 bg-[#0f1115] border-t border-white/5 flex gap-2 justify-between items-center shrink-0">
              <span className="text-[6.5px] font-extrabold uppercase tracking-wide bg-emerald-500/10 text-[#00e676] border border-emerald-500/20 px-1.5 py-0.5 rounded">
                No-Show Replacement
              </span>
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
            <span>Completed Meeting · Replacement Issued</span>
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

        {/* Left Column */}
        <div className="space-y-3 lg:col-span-7 lg:pt-6">
          <p className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-[#145CFF]">
            RESIDENTIAL HVAC APPOINTMENT PROGRAM
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl lg:text-5xl lg:leading-[1.1] xl:text-[54px]">
            Stop Buying HVAC Leads. Start Walking Into Scheduled Homeowner Meetings.
          </h1>

          {/* Mobile/Tablet Mockup Placement */}
          <div className="block lg:hidden my-3">
            <HvacHeroVisual />
          </div>

          <p className="text-sm leading-relaxed text-[#42526B] sm:text-base max-w-lg">
            LeadsByStorm books in-person appointments with homeowners looking for heating or air conditioning repair and replacement help. You only pay for completed meetings — and if a homeowner no-shows, we replace the appointment according to program terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-0.5">
            <ButtonLink href={CALENDLY_URL}>
              Check Appointment Availability
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>

          <p className="text-xs font-semibold text-[#42526B] pt-1">
            Tell us your service area and we&apos;ll confirm whether HVAC appointments are available in your market.
          </p>

          {/* Hero trust bullets */}
          <div className="border-t border-[#DDE6F2] pt-3 space-y-2.5">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-bold text-[#42526B] sm:grid-cols-3 lg:grid-cols-5">
              {[
                "In-person appointments",
                "Repair & replacement",
                "Pay for completed meetings",
                "No-show replacement",
                "Limited market availability",
              ].map((point) => (
                <span key={point} className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-[#11A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column / Mockup Block */}
        <div className="hidden lg:block lg:col-span-5">
          <HvacHeroVisual />
        </div>

      </div>
    </SectionContainer>
  );
}

function ProblemSection() {
  return (
    <SectionContainer className="bg-white border-b border-[#DDE6F2] py-20">
      <div className="max-w-3xl mb-14 text-left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">
          THE PROBLEM WITH HVAC LEADS
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          HVAC Companies Don&apos;t Need More &ldquo;Leads.&rdquo; They Need More Real Sales Opportunities.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#42526B] sm:text-lg">
          Most HVAC marketing vendors sell activity — clicks, calls, form fills, shared leads, and maybe-interested homeowners. That leaves your team doing the expensive work.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Chasing homeowners who already heard from three other contractors",
          "Paying for leads that never become appointments",
          "Burning dispatcher time on bad numbers",
          "Sending comfort advisors into weak opportunities",
          "Fighting rising ad costs without a clear meeting guarantee",
          "Guessing which prospects are actually serious",
        ].map((point) => (
          <div key={point} className="rounded-2xl border border-[#DDE6F2] bg-[#F5F8FC] p-6 shadow-sm flex items-start gap-3">
            <svg className="h-5 w-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm font-bold text-[#42526B] leading-relaxed">{point}</span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-left text-lg font-extrabold text-[#061A2F]">
        Your team should not have to guess which leads are real.
      </p>
    </SectionContainer>
  );
}

function ComparisonSection() {
  const vendorRows = [
    "You pay whether the homeowner meets or not",
    "Often shared with multiple contractors",
    "Homeowner may never answer",
    "Your team handles all chasing and follow-up",
    "No guarantee the appointment happens",
    "Hard to connect spend to actual meetings",
  ];
  const lbsRows = [
    "You pay for completed homeowner meetings",
    "Built around scheduled in-person appointments",
    "Homeowner is looking for repair or replacement help",
    "No-show appointments are replaced",
    "Clear appointment status tracking",
    "Cleaner pipeline for your sales team",
  ];

  return (
    <SectionContainer className="bg-[#F5F8FC] border-b border-[#DDE6F2] py-20">
      <div className="max-w-3xl mb-14 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          Lead Vendors Sell Contact Info. LeadsByStorm Delivers Calendar Events.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">

        {/* Vendor Column */}
        <div className="rounded-2xl border border-[#DDE6F2] bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-sm font-extrabold text-[#061A2F] uppercase tracking-wider border-b border-[#DDE6F2] pb-3">
            Typical HVAC Lead Vendors
          </h3>
          <ul className="space-y-3">
            {vendorRows.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-bold text-[#42526B]">
                <svg className="h-5 w-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* LeadsByStorm Column */}
        <div className="rounded-2xl border-2 border-[#145CFF] bg-white p-6 sm:p-8 shadow-md space-y-4 relative overflow-hidden">
          <span className="absolute right-4 top-4 rounded bg-[#145CFF] px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white">
            Appointments
          </span>
          <h3 className="text-sm font-extrabold text-[#061A2F] uppercase tracking-wider border-b border-[#DDE6F2] pb-3">
            LeadsByStorm HVAC Appointments
          </h3>
          <ul className="space-y-3">
            {lbsRows.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-bold text-[#061A2F]">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </SectionContainer>
  );
}

function OfferSection() {
  const opportunities = [
    "AC replacement estimates",
    "Furnace replacement estimates",
    "Heat pump repair or replacement",
    "Heating and cooling system repair",
    "No-cool or no-heat situations",
    "Aging system evaluations",
    "Homeowners seeking in-person HVAC guidance",
  ];

  const cards = [
    {
      title: "Homeowner Intent Verified",
      copy: "We focus on homeowners who have expressed a need for HVAC repair, replacement, or system help — not random cold data.",
    },
    {
      title: "Appointment Scheduled",
      copy: "The homeowner is scheduled for an in-person meeting with your team, so your comfort advisor or technician has a real appointment to run.",
    },
    {
      title: "No-Show Replacement",
      copy: "If the homeowner no-shows, we replace the appointment according to program terms. You should not pay for a meeting that never happened.",
    },
    {
      title: "Pay for Meetings, Not Maybes",
      copy: "You are not buying clicks, impressions, shared lists, or raw phone numbers. You are buying completed homeowner meetings.",
    },
  ];

  return (
    <SectionContainer className="bg-white border-b border-[#DDE6F2] py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 mb-14 lg:items-center">
        <div className="space-y-5 lg:col-span-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl leading-tight">
            Scheduled HVAC Repair &amp; Replacement Appointments — Without the Lead-Chasing Chaos.
          </h2>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            LeadsByStorm helps residential HVAC companies get in front of homeowners who are actively looking for help with their heating or cooling system.
          </p>
        </div>

        <div className="lg:col-span-6 rounded-2xl border border-[#DDE6F2] bg-[#F5F8FC] p-6 sm:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-4">
            Appointment opportunities may include
          </p>
          <div className="grid gap-y-2.5 gap-x-6 sm:grid-cols-2">
            {opportunities.map((item) => (
              <span key={item} className="flex items-start gap-2.5 text-sm font-bold text-[#42526B]">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="bg-white rounded-2xl border border-[#DDE6F2] p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
              <svg className="h-5 w-5 text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-extrabold text-[#061A2F]">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#42526B]">{card.copy}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Market Check",
      desc: "You tell us your service area, appointment goals, and the types of HVAC jobs you want to prioritize.",
    },
    {
      num: "02",
      title: "Homeowner Qualification",
      desc: "We identify and qualify homeowners seeking heating or cooling repair, replacement, or system evaluation help.",
    },
    {
      num: "03",
      title: "Appointment Booking",
      desc: "Appointments are scheduled for an in-person visit with your company. Your team receives the appointment details and runs the meeting.",
    },
    {
      num: "04",
      title: "Completed Meeting or Replacement",
      desc: "You pay for completed homeowner meetings. If a homeowner no-shows, we issue a replacement according to program terms.",
    },
  ];

  return (
    <SectionContainer id="how-it-works" className="bg-[#F5F8FC] border-b border-[#DDE6F2] py-20">
      <div className="max-w-3xl mb-16 text-left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">HOW IT WORKS</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          A Simple Appointment Pipeline for HVAC Companies
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((card) => (
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
  const bullets = [
    "Applies to qualifying homeowner no-shows",
    "Replacement issued according to program terms",
    "Built to protect your appointment spend",
    "Clear status tracking for every appointment",
  ];

  return (
    <SectionContainer className="bg-white border-b border-[#DDE6F2] py-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="space-y-6 lg:col-span-7 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#11A36A]/30 bg-[#11A36A]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#11A36A]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Appointment Replacement Guarantee
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl leading-tight">
            No-Show? We Replace It.
          </h2>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            If the homeowner does not show for the scheduled appointment, you receive a replacement appointment according to program terms.
          </p>
          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg">
            HVAC companies should not have to absorb the risk of paying for appointments that never happen. The LeadsByStorm HVAC program is built around completed meetings, not empty calendar slots.
          </p>
          <p className="text-xs leading-relaxed text-[#42526B]/80">
            Appointment replacement is subject to program terms, qualification rules, territory availability, and appointment verification.
          </p>
        </div>

        <div className="lg:col-span-5 bg-[#F5F8FC] border border-[#DDE6F2] rounded-2xl p-6 sm:p-8 space-y-5 shadow-md">
          {bullets.map((bullet) => (
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

function MeetingMetricSection() {
  return (
    <SectionContainer className="bg-[#081421] text-white border-b border-white/[0.05] py-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="space-y-5 lg:col-span-7">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
            Your Best People Should Be Running Appointments — Not Chasing Bad Leads.
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            Every bad lead costs more than the lead price. It costs your dispatcher&apos;s time. It costs your comfort advisor&apos;s time. It creates schedule gaps. It frustrates your sales team. It makes marketing ROI harder to measure.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            The appointment model is built to reduce that waste. Instead of asking, &ldquo;How many leads did we buy?&rdquo; the better question is: &ldquo;How many homeowners did our team actually sit down with?&rdquo;
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-2xl">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#145CFF]/20 to-transparent blur-2xl pointer-events-none" />
            <div className="relative">
              <span className="text-[#60A5FA] text-5xl font-black leading-none">&ldquo;</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-2">
                The meeting is the metric.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

function FitSection() {
  const goodFit = [
    "Residential HVAC contractors",
    "Companies selling repair and replacement work",
    "Teams with comfort advisors or sales technicians",
    "Owners tired of shared lead vendors",
    "Companies that can respond quickly to booked appointments",
    "Contractors that want a cleaner pipeline instead of more raw leads",
  ];
  const notFit = [
    "Companies with no appointment capacity",
    "Companies looking for guaranteed closed sales",
    "Companies that cannot service homeowners quickly",
    "Companies outside available territories",
  ];

  return (
    <SectionContainer className="bg-[#F5F8FC] border-b border-[#DDE6F2] py-20">
      <div className="max-w-3xl mb-14 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          Built for Residential HVAC Companies That Can Handle More Appointments.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* Good fit */}
        <div className="rounded-2xl border-2 border-[#11A36A]/40 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <h3 className="text-sm font-extrabold text-[#061A2F] uppercase tracking-wider border-b border-[#DDE6F2] pb-3">
            Good Fit
          </h3>
          <ul className="space-y-3">
            {goodFit.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-bold text-[#061A2F]">
                <svg className="h-5 w-5 text-[#11A36A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not a fit */}
        <div className="rounded-2xl border border-[#DDE6F2] bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-sm font-extrabold text-[#061A2F] uppercase tracking-wider border-b border-[#DDE6F2] pb-3">
            Not a Fit
          </h3>
          <ul className="space-y-3">
            {notFit.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-bold text-[#42526B]">
                <svg className="h-5 w-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Are these leads or appointments?",
      a: "They are scheduled homeowner appointments. The goal is not to hand you a phone number and make your team chase it. The goal is to put your company in front of a homeowner for an in-person repair or replacement discussion.",
    },
    {
      q: "Do you guarantee closed HVAC jobs?",
      a: "No. LeadsByStorm does not guarantee sales, closed deals, revenue, approval, or replacement outcomes. The program is built around completed homeowner meetings, with replacement for qualifying no-shows according to program terms.",
    },
    {
      q: "What happens if the homeowner no-shows?",
      a: "If the homeowner no-shows, the appointment is replaced according to program terms.",
    },
    {
      q: "What kind of homeowners are these?",
      a: "Homeowners seeking help with heating or cooling repair, replacement, or system evaluation. We do not claim every homeowner is definitely buying a new system.",
    },
    {
      q: "Do I pay for leads that do not turn into meetings?",
      a: "No. The offer is built around completed homeowner meetings, not raw leads.",
    },
    {
      q: "Is appointment availability open in every city?",
      a: "No. Appointment availability depends on service area, capacity, and market coverage. That is why the first step is checking your market.",
    },
  ];

  return (
    <SectionContainer className="bg-white border-b border-[#DDE6F2] py-20">
      <div className="max-w-3xl mb-14 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          Questions HVAC Owners Usually Ask
        </h2>
      </div>

      <div className="max-w-3xl divide-y divide-[#DDE6F2] rounded-2xl border border-[#DDE6F2] bg-[#F5F8FC] px-6 sm:px-8">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[#061A2F]">
              {faq.q}
              <svg className="h-5 w-5 shrink-0 text-[#145CFF] transition-transform duration-200 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#42526B]">{faq.a}</p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}

function FinalCtaSection() {
  return (
    <SectionContainer noPadding className="bg-[#081421] text-white py-16 relative border-b border-white/[0.05]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-left">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
            See If HVAC Appointments Are Available in Your Market.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Tell us where you operate and what type of appointments you want. We&apos;ll confirm whether your market is currently open.
          </p>
        </div>

        <div className="pt-2">
          <ButtonLink href={CALENDLY_URL}>
            Check Appointment Availability
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#061A2F] px-6 py-10 sm:px-8 lg:px-12 text-slate-400">
      <div className="mx-auto max-w-[1200px] space-y-6">
        <div className="flex flex-col gap-4 text-xs sm:text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LeadsByStorm. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/terms" className="text-slate-300 hover:text-white transition-colors font-bold">Terms &amp; Conditions</a>
            <span className="text-slate-700">|</span>
            <a href="/privacy" className="text-slate-300 hover:text-white transition-colors font-bold">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors font-bold">Contact</a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <p className="text-slate-500">Targeted residential HVAC repair and replacement appointments.</p>
          </div>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-500 border-t border-white/[0.06] pt-6">
          Appointments, replacement eligibility, and billing are subject to program terms. This service does not guarantee closed sales, revenue, homeowner purchase decisions, financing approval, or specific job value.
        </p>
      </div>
    </footer>
  );
}

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#DDE6F2] bg-white/95 p-3 backdrop-blur-md shadow-[0_-4px_20px_rgba(6,26,47,0.08)] lg:hidden">
      <ButtonLink href={CALENDLY_URL} className="w-full">
        Check Appointment Availability
      </ButtonLink>
    </div>
  );
}

export default function HvacLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#42526B] pb-20 lg:pb-0">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <OfferSection />
      <HowItWorksSection />
      <GuaranteeSection />
      <MeetingMetricSection />
      <FitSection />
      <FAQSection />
      <FinalCtaSection />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
