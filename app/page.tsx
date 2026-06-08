import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LeadsByStorm | Confirmed Storm-Damage Roof Inspection Appointments",
  description:
    "We identify homeowners in recent hail and wind zones, confirm their interest, and book inspection appointments directly on your calendar.",
};

const LOGO_SRC = "/logo.png";
const CONTACT_EMAIL = "sales@leadsbystorm.com";

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
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0f1115]">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            LeadsByStorm Contractor Portal
          </div>
          <div className="w-12" /> {/* empty space for alignment balancer */}
        </div>

        {/* Dashboard Panels Layout */}
        <div className="flex h-[380px]">
          
          {/* Sidebar Panel (Left) */}
          <div className="w-[170px] border-r border-white/5 bg-[#0f1115] p-3 flex flex-col gap-3 shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#145CFF] to-[#3B82F6]" />
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-white">
                LEADSBYSTORM
              </span>
            </div>

            {/* View Filters Pills */}
            <div className="flex bg-[#1b1e24] p-0.5 rounded border border-white/5 text-[9px] font-bold">
              <span className="flex-1 text-center py-1 rounded bg-[#145CFF] text-white shadow-sm">
                Booked
              </span>
              <span className="flex-1 text-center py-1 text-slate-500">
                Active
              </span>
            </div>

            {/* Conversation Threads / Appointments */}
            <div className="flex flex-col gap-1.5 overflow-hidden text-left">
              {/* Marcus K (Active) */}
              <div className="p-2 rounded bg-white/5 border border-white/5 flex flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-white truncate max-w-[85px] flex items-center gap-1">
                    Marcus K.
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse shadow-[0_0_6px_#00e676]" />
                  </span>
                  <span className="text-[8px] text-slate-500">4:00 PM</span>
                </div>
                <p className="text-[9px] text-slate-400 truncate">
                  Orlando, FL
                </p>
              </div>

              {/* Sarah L */}
              <div className="p-2 rounded hover:bg-white/5 transition-colors flex flex-col gap-0.5 opacity-60">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-300 truncate">Sarah L.</span>
                  <span className="text-[8px] text-slate-500">1:30 PM</span>
                </div>
                <p className="text-[9px] text-slate-500 truncate">
                  Winter Park, FL
                </p>
              </div>

              {/* David R */}
              <div className="p-2 rounded hover:bg-white/5 transition-colors flex flex-col gap-0.5 opacity-60">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-300 truncate">David R.</span>
                  <span className="text-[8px] text-slate-500">Fri 10 AM</span>
                </div>
                <p className="text-[9px] text-slate-500 truncate">
                  Kissimmee, FL
                </p>
              </div>
            </div>
          </div>

          {/* Active Appointment Details Panel (Right) */}
          <div className="flex-1 bg-[#13161b] flex flex-col h-full overflow-hidden">
            {/* Header info */}
            <div className="px-4 py-2.5 bg-[#0f1115] border-b border-white/5 flex items-center justify-between">
              <div className="text-left">
                <h4 className="text-[11px] font-extrabold text-white">Marcus K.</h4>
                <p className="text-[8px] text-slate-500">1420 Pine Creek Dr, Orlando</p>
              </div>
              <span className="text-[7px] font-extrabold uppercase tracking-wide bg-emerald-500/10 text-[#00e676] border border-emerald-500/20 px-1.5 py-0.5 rounded">
                Confirmed
              </span>
            </div>

            {/* Lead Details Grid */}
            <div className="p-3 bg-[#171a21] border-b border-white/5 grid grid-cols-2 gap-2 text-left">
              <div>
                <span className="text-[7px] text-slate-500 uppercase tracking-wider block font-bold">Appt Time</span>
                <span className="text-[9px] text-white font-extrabold">Thursday, June 11 @ 4:00 PM</span>
              </div>
              <div>
                <span className="text-[7px] text-slate-500 uppercase tracking-wider block font-bold">Storm Loss Date</span>
                <span className="text-[9px] text-white font-extrabold font-mono">May 24 (1.75&quot; Hail)</span>
              </div>
            </div>

            {/* Message Feed / Verification SMS */}
            <div className="flex-1 p-3 overflow-hidden flex flex-col gap-2 justify-end">
              <div className="text-center pb-1 border-b border-white/5">
                <span className="text-[7px] text-slate-500 uppercase tracking-widest font-extrabold">Verification SMS History</span>
              </div>
              {/* Outbound 1 */}
              <div className="max-w-[85%] self-end flex flex-col gap-0.5 text-right">
                <div className="bg-[#1f242d] border border-white/5 text-[9px] leading-relaxed text-slate-300 p-2 rounded-lg rounded-tr-none text-left">
                  Hi Marcus, we found hail damage near Pine Creek Dr. Can we inspect your roof for insurance?
                </div>
                <span className="text-[6px] text-slate-500">Jun 8, 10:38 AM</span>
              </div>

              {/* Inbound 1 */}
              <div className="max-w-[85%] self-start flex flex-col gap-0.5 text-left">
                <div className="bg-gradient-to-tr from-[#145CFF] to-[#3B82F6] text-white text-[9px] leading-relaxed p-2 rounded-lg rounded-tl-none">
                  Sure, is Thursday at 4pm okay? I&apos;ll be home.
                </div>
                <span className="text-[6px] text-slate-500">Jun 8, 10:42 AM</span>
              </div>

              {/* Outbound 2 */}
              <div className="max-w-[85%] self-end flex flex-col gap-0.5 text-right">
                <div className="bg-[#1f242d] border border-white/5 text-[9px] leading-relaxed text-slate-300 p-2 rounded-lg rounded-tr-none text-left">
                  Excellent. Thursday at 4:00 PM is booked. See you then!
                </div>
                <span className="text-[6px] text-slate-500">Jun 8, 10:44 AM</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-2 bg-[#0f1115] border-t border-white/5 flex gap-2 justify-end">
              <div className="flex-1 text-left flex items-center">
                <span className="text-[7px] font-bold text-slate-400">Phone: (407) 555-0192</span>
              </div>
              <button className="bg-white/5 hover:bg-white/10 text-white text-[8px] font-extrabold px-2 py-1 rounded border border-white/10 transition">
                Map View
              </button>
              <button className="bg-[#145CFF] hover:bg-[#2F7DFF] text-white text-[8px] font-extrabold px-2 py-1 rounded transition">
                Sync to CRM
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Status bar */}
        <div className="px-4 py-2 border-t border-white/5 bg-[#0f1115] flex items-center justify-between text-[8px] text-slate-500">
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
    <SectionContainer noPadding className="overflow-hidden bg-[#F5F8FC] bg-[radial-gradient(#dde6f2_1px,transparent_1px)] bg-[size:24px_24px] text-[#061A2F] pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16 border-b border-[#DDE6F2] relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        
        {/* Left Column (Desktop Layout) */}
        <div className="space-y-4 sm:space-y-5 lg:col-span-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#145CFF]">
            FOR ROOFING CONTRACTORS IN ACTIVE STORM MARKETS
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#061A2F] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Exclusive Storm-Damage Roof Inspection Appointments
          </h1>

          {/* Mobile/Tablet Mockup Placement (hidden on lg and above) */}
          <div className="block lg:hidden my-3">
            <HeroVisual />
          </div>

          <p className="text-base leading-relaxed text-[#42526B] sm:text-lg max-w-xl">
            When hail and wind storms hit, homeowners want to know if their roof was damaged. We identify those homeowners, confirm their interest, and schedule inspection appointments directly on your calendar.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row pt-1">
            <ButtonLink href="#calendar">Book a 10-Minute Territory Call</ButtonLink>
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
              Email Us Your Availability
            </ButtonLink>
          </div>

          {/* Hero proof points under CTA */}
          <div className="border-t border-[#DDE6F2] pt-4 space-y-3">
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-bold text-[#42526B] sm:grid-cols-4">
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
            Confirmed Appointments. Protected Delivery.
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
    <SectionContainer className="bg-[#F5F8FC] py-20 border-b border-[#DDE6F2]">
      <div className="text-left max-w-3xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">TERRITORY AVAILABILITY</p>
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
    </SectionContainer>
  );
}

function CalendarSection() {
  return (
    <SectionContainer id="calendar" className="bg-white py-20 border-b border-[#DDE6F2]">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        
        {/* Left Column: Calendar Embed */}
        <div className="rounded-2xl border border-[#DDE6F2] bg-white p-6 shadow-xl space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">Booking Console</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#061A2F] leading-tight">
              Schedule Your Territory Call
            </h3>
            <p className="mt-2 text-sm text-[#42526B]">
              Pick a time that works for you. We will review your service area, current storm activity, appointment volume, pricing, and territory availability.
            </p>
          </div>

          {/* Calendly Embed Container with Fallback/Loading State */}
          <div className="relative overflow-hidden rounded-xl border border-[#DDE6F2] bg-[#F5F8FC] min-h-[700px] w-full">
            {/* Loading / Fallback Background Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 z-0">
              <svg className="animate-spin h-8 w-8 text-[#145CFF] mb-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p className="text-sm font-bold text-[#061A2F]">Loading schedule...</p>
              <p className="mt-1 text-xs text-[#42526B] max-w-xs">
                If the calendar does not load, show a clear fallback button:
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
              className="calendly-inline-widget w-full h-[700px] relative z-10" 
              data-url="https://calendly.com/leadsbystorm-support/30min?text_color=0b1329&primary_color=2563eb"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>

        {/* Right Column: Email Card & QR Code & Checklist */}
        <div className="flex flex-col gap-6">
          
          {/* Email Card */}
          <div className="rounded-2xl border border-[#DDE6F2] bg-white p-6 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">
                Prefer Email?
              </p>
              <h3 className="text-lg font-extrabold text-[#061A2F]">
                Send your availability.
              </h3>
              <p className="text-xs leading-relaxed text-[#42526B]">
                Send us your availability and the market you serve. We will reply or call you back with current appointment options.
              </p>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=LeadsByStorm%20Discovery%20Call%20Availability&body=Hi%20LeadsByStorm%2C%0A%0AI'm%20a%20roofing%20contractor%20interested%20in%20exclusive%20storm%25%20appointments.%0A%0AMy%20Service%20Area%2FMarket%3A%20%0AMy%20Preferred%20Call%20Time%20Availability%3A%20%0A%0AThanks!`}
              className="inline-flex items-center justify-center rounded-xl bg-[#F5F8FC] border border-[#DDE6F2] px-6 py-3.5 text-sm font-extrabold text-[#42526B] hover:text-[#061A2F] hover:border-[#145CFF] hover:bg-slate-50 transition active:scale-[0.98] transform"
            >
              Email LeadsByStorm
            </a>

            {/* Checklist */}
            <div className="border-t border-[#DDE6F2] pt-4 space-y-2">
              <p className="text-[10px] font-bold text-[#061A2F] uppercase tracking-wider">Information to include:</p>
              {[
                "Tell us your service area",
                "Tell us your preferred call time",
                "Ask about current appointment volume",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-semibold text-[#42526B]">
                  <svg className="h-4 w-4 text-[#145CFF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code Booking Card */}
          <div className="rounded-2xl border border-[#DDE6F2] bg-white p-5 flex flex-col items-center shadow-lg text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#145CFF]">
              Scan to Book on Mobile
            </p>
            <div className="my-3 p-2 rounded-xl border border-[#DDE6F2] bg-[#F5F8FC] flex items-center justify-center">
              <img
                src="/qrcode.png"
                alt="Booking Calendar QR Code"
                className="h-24 w-24 object-contain"
              />
            </div>
            <a
              href="https://calendly.com/leadsbystorm-support/30min?text_color=0b1329&primary_color=2563eb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-[#145CFF] hover:underline"
            >
              calendly.com/leadsbystorm-support/30min
            </a>
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