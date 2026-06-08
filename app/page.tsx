import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LeadsByStorm | Guaranteed Storm Damage Appointments",
  description:
    "LeadsByStorm provides exclusive, pre-qualified storm damage inspection appointments for roofing contractors.",
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
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100 select-none cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "bg-[#145CFF] text-white shadow-lg shadow-blue-500/10 hover:bg-[#2F7DFF] hover:-translate-y-[1px]"
      : variant === "secondary-dark"
      ? "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:-translate-y-[1px]"
      : "border border-[#DDE5F0] bg-white text-[#41516A] hover:text-[#061A2F] hover:border-[#2F7DFF] hover:bg-slate-50 hover:-translate-y-[1px]";

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
    <section id={id} className={`${noPadding ? "px-4 sm:px-6 lg:px-8" : "px-4 py-16 sm:px-6 lg:px-8"} ${className}`}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
        theme === "dark" ? "text-white" : "text-[#061A2F]"
      }`}>
        {title}
      </h2>

      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${
          theme === "dark" ? "text-slate-300" : "text-[#41516A]"
        }`}>{description}</p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE5F0] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-8 w-auto object-contain sm:h-9"
          />
        </a>

        <ButtonLink href="#calendar" className="px-5 py-2 text-xs font-extrabold sm:text-sm">
          Book a Call
        </ButtonLink>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-md lg:max-w-full mx-auto">
      {/* Subtle blue shadow glow behind card */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#145CFF]/10 to-[#2F7DFF]/5 blur-xl pointer-events-none" />

      {/* Main Operations Card */}
      <div className="relative rounded-2xl border border-[#DDE5F0] bg-white p-5 sm:p-6 shadow-xl space-y-6">
        
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-[#DDE5F0] pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#145CFF]" />
            <span className="text-[11px] font-extrabold tracking-wider text-[#061A2F] uppercase">
              Appointment Pipeline
            </span>
          </div>
          <span className="rounded-full bg-[#F6F8FC] px-2.5 py-1 text-[9px] font-bold text-[#145CFF] border border-[#DDE5F0] uppercase tracking-wide">
            Live Stream
          </span>
        </div>

        {/* Pipeline Steps Container */}
        <div className="space-y-4">
          
          {/* Step 1: Active Storm Market */}
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-[#145CFF]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="h-8 w-0.5 bg-[#DDE5F0]" />
            </div>
            <div className="flex-1 bg-[#F6F8FC] rounded-xl border border-[#DDE5F0] p-3">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-[#2F7DFF] uppercase tracking-wider">01 // Active Storm Market</span>
                <span className="text-[8px] font-bold bg-[#E8F1FF] text-[#145CFF] px-1.5 py-0.5 rounded uppercase">Verified</span>
              </div>
              <h4 className="text-xs font-bold text-[#061A2F] mt-1">Dallas-Fort Worth Corridor</h4>
              <p className="text-[10px] text-[#41516A] mt-0.5">Verified NWS weather radar wind & hail swath activity</p>
            </div>
          </div>

          {/* Step 2: Homeowner Identified */}
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-[#145CFF]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="h-8 w-0.5 bg-[#DDE5F0]" />
            </div>
            <div className="flex-1 bg-[#F6F8FC] rounded-xl border border-[#DDE5F0] p-3">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-[#2F7DFF] uppercase tracking-wider">02 // Homeowner Identified</span>
                <span className="text-[8px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded uppercase">Owner Match</span>
              </div>
              <h4 className="text-xs font-bold text-[#061A2F] mt-1">McKinney Storm Corridor Neighborhood</h4>
              <p className="text-[10px] text-[#41516A] mt-0.5">Single-family property owners verified with damage interest</p>
            </div>
          </div>

          {/* Step 3: Appointment Confirmed */}
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-[#145CFF]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="h-8 w-0.5 bg-[#DDE5F0]" />
            </div>
            <div className="flex-1 bg-[#F6F8FC] rounded-xl border border-[#DDE5F0] p-3">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-[#2F7DFF] uppercase tracking-wider">03 // Appointment Confirmed</span>
                <span className="text-[8px] font-bold bg-[#E8F1FF] text-[#145CFF] px-1.5 py-0.5 rounded uppercase">Pre-Screened</span>
              </div>
              <h4 className="text-xs font-bold text-[#061A2F] mt-1">Confirmed Face-to-Face Booking</h4>
              <p className="text-[10px] text-[#41516A] mt-0.5">Homeowner scheduled to meet for roof inspection</p>
            </div>
          </div>

          {/* Step 4: Sent to Contractor Calendar */}
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#145CFF] text-white border border-[#145CFF]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="flex-1 bg-[#E8F1FF]/60 rounded-xl border border-[#145CFF]/30 p-3">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-[#145CFF] uppercase tracking-wider">04 // Sent to Calendar</span>
                <span className="text-[8px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded uppercase">Exclusive Sync</span>
              </div>
              <h4 className="text-xs font-bold text-[#061A2F] mt-1">Synced Directly to Your Schedule</h4>
              <p className="text-[10px] text-[#41516A] mt-0.5">Dispatched to your Google Calendar or CRM in real-time</p>
            </div>
          </div>

        </div>

        {/* Guarantee Badge Banner */}
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-100 p-3 mt-2">
          <div className="flex items-center gap-2">
            <svg className="h-4.5 w-4.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-bold text-[#061A2F]">Territory Guarantee</span>
          </div>
          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded uppercase tracking-wide">
            No-show? Replaced.
          </span>
        </div>

      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <SectionContainer noPadding className="overflow-hidden bg-[#F6F8FC] text-[#061A2F] py-10 sm:py-12 lg:py-16 relative border-b border-[#DDE5F0]">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
        
        {/* Left Column / Text Block */}
        <div className="space-y-5 lg:col-span-7 lg:space-y-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#145CFF]">
            FOR ROOFING CONTRACTORS IN ACTIVE STORM MARKETS
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Confirmed Storm-Damage Roof Inspection Appointments, Booked for You.
          </h1>

          {/* Mobile/Tablet Mockup Placement (hidden on lg and above) */}
          <div className="block lg:hidden my-4">
            <HeroVisual />
          </div>

          <p className="text-sm leading-relaxed text-[#41516A] sm:text-base max-w-xl">
            We identify homeowners in recent hail and wind zones, confirm their interest in a roof damage assessment, and book the appointment directly on your calendar. No shared lists. No cold leads. No-show appointments are replaced.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <ButtonLink href="#calendar">Book a 10-Minute Territory Call</ButtonLink>
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
              Email Us Your Availability
            </ButtonLink>
          </div>

          {/* Hero proof points under CTA */}
          <div className="border-t border-[#DDE5F0] pt-5 space-y-3">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-bold text-[#41516A] sm:grid-cols-4">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Exclusive appointments
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Confirmed homeowners
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No-show replacement
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Volume pricing available
              </span>
            </div>
            
            <p className="text-[11px] font-bold text-[#2F7DFF] flex items-center gap-1.5">
              <svg className="h-4 w-4 animate-pulse text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Some markets currently have more appointments than available contractors.
            </p>
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

function TrustStrip() {
  return (
    <SectionContainer noPadding className="bg-white border-b border-[#DDE5F0] py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Confirmed Appointments",
            desc: "Every appointment is verified before it reaches your calendar.",
          },
          {
            title: "Exclusive Delivery",
            desc: "We connect each appointment to one contractor, not a shared list.",
          },
          {
            title: "Storm-Market Targeting",
            desc: "We focus on homeowners in recent hail and wind-damage areas.",
          },
          {
            title: "No-Show Protection",
            desc: "If the homeowner does not show, we replace the appointment.",
          },
        ].map((item) => (
          <div key={item.title} className="space-y-1">
            <h3 className="text-sm font-extrabold text-[#061A2F] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#145CFF]" />
              {item.title}
            </h3>
            <p className="text-xs text-[#41516A] leading-relaxed pl-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="bg-[#F6F8FC] border-b border-[#DDE5F0] py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">HOW IT WORKS</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          We find the storm opportunity. You inspect the roof.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#41516A] leading-relaxed">
          Our team handles targeting, homeowner outreach, qualification, confirmation, and scheduling so your crew can focus on inspections and signed jobs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            num: "01",
            title: "Target Active Storm Areas",
            desc: "We monitor recent hail and wind activity to identify neighborhoods where homeowners are most likely to need a roof damage assessment.",
          },
          {
            num: "02",
            title: "Confirm the Homeowner",
            desc: "We contact homeowners, verify property ownership and interest, and confirm that they want a contractor to inspect for possible storm damage.",
          },
          {
            num: "03",
            title: "Book the Appointment",
            desc: "Confirmed appointments are sent directly to your calendar. If a homeowner no-shows, we replace the appointment at no additional cost.",
          },
        ].map((card) => (
          <article key={card.num} className="bg-white rounded-2xl border border-[#DDE5F0] p-8 shadow-md hover:shadow-xl transition-all duration-350">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-[#145CFF] border border-blue-100">
              {card.num}
            </div>
            <h3 className="text-lg font-extrabold text-[#061A2F]">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#41516A]">{card.desc}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

function GuaranteeSection() {
  return (
    <SectionContainer className="bg-[#061A2F] text-white py-16 sm:py-20 border-b border-[#061A2F]">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Appointments Are Confirmed — And Protected.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-350">
            You are not buying a spreadsheet of names. You are buying scheduled inspection opportunities with homeowners who have already confirmed interest. If an appointment no-shows, we replace it.
          </p>
          <div>
            <ButtonLink href="#calendar" className="bg-[#145CFF] text-white hover:bg-[#2F7DFF] border-0">
              Check My Territory
            </ButtonLink>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
          {[
            "Homeowner interest confirmed before delivery",
            "Appointment details sent to your calendar",
            "No-show appointments replaced",
            "One contractor per territory when available",
          ].map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <svg className="h-5 w-5 text-[#2F7DFF] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-bold text-slate-100">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function PricingSection() {
  return (
    <SectionContainer className="bg-white py-16 sm:py-20 border-b border-[#DDE5F0]">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">PRICING & ROI</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
            Stop Paying Premium Prices for Shared or Unverified Leads.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#41516A]">
            Many storm-damage lead vendors charge <strong className="text-[#061A2F] font-extrabold">$400–$500</strong> for shared, recycled, or lightly verified opportunities. LeadsByStorm delivers exclusive, confirmed inspection appointments starting at <strong className="text-[#061A2F] font-extrabold">$250</strong> per appointment, with volume pricing available for qualified territories.
          </p>
          <p className="text-xs font-bold text-[#2F7DFF] italic">
            * Final pricing depends on market, appointment volume, and territory availability.
          </p>
        </div>

        {/* Pricing Cards Column */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            {
              title: "Typical Market Price",
              value: "$400–$500",
              desc: "Often shared, resold, or lightly verified.",
              highlight: false,
              valueColor: "text-[#061A2F]",
            },
            {
              title: "LeadsByStorm Appointment Rate",
              value: "$250–$350",
              desc: "Exclusive, confirmed storm-damage appointments. Volume pricing available.",
              highlight: true,
              valueColor: "text-[#145CFF]",
            },
            {
              title: "No-Show Protection",
              value: "Replacement Included",
              desc: "If the homeowner no-shows, we replace the appointment.",
              highlight: false,
              valueColor: "text-emerald-600",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 transition-all duration-200 border ${
                card.highlight
                  ? "border-[#145CFF] bg-blue-50/20 shadow-md shadow-blue-150 relative"
                  : "border-[#DDE5F0] bg-white hover:border-[#2F7DFF] hover:shadow-lg"
              }`}
            >
              {card.highlight && (
                <span className="absolute right-4 top-4 rounded bg-[#145CFF] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
                  Best Value
                </span>
              )}
              <p className="text-xs font-bold text-[#41516A] uppercase tracking-wider">{card.title}</p>
              <p className={`mt-2 text-2xl sm:text-3xl font-extrabold ${card.valueColor}`}>
                {card.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#41516A]">
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
    <SectionContainer className="bg-[#F6F8FC] py-16 border-b border-[#DDE5F0]">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF]">TERRITORY AVAILABILITY</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#061A2F] sm:text-4xl">
          Claim Your Storm Territory Before It Fills.
        </h2>
        <p className="text-sm leading-relaxed text-[#41516A] max-w-2xl mx-auto">
          We work with a limited number of roofing contractors in each active market to protect appointment quality and prevent over-saturation. Book a quick call to see if we have appointments available in your area.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row justify-center pt-2">
          <ButtonLink href="#calendar">Book a 10-Minute Territory Call</ButtonLink>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
            Email Us Your Availability
          </ButtonLink>
        </div>

        <p className="text-[11px] font-bold text-[#2F7DFF] flex items-center justify-center gap-1.5">
          <svg className="h-4 w-4 animate-pulse text-[#145CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          In some cities, appointment volume is currently higher than contractor availability.
        </p>
      </div>
    </SectionContainer>
  );
}

function CalendarSection() {
  return (
    <SectionContainer id="calendar" className="bg-white py-16 sm:py-20 border-b border-[#DDE5F0]">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        
        {/* Left Column: Calendar Embed */}
        <div className="rounded-2xl border border-[#DDE5F0] bg-white p-6 shadow-xl space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">Booking Console</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#061A2F] leading-tight">
              Schedule Your Territory Call
            </h3>
            <p className="mt-2 text-xs text-[#41516A]">
              Pick a time that works for you. We will review your market, current storm activity, appointment volume, pricing, and territory availability.
            </p>
          </div>

          {/* Calendly Embed Container with Fallback/Loading State */}
          <div className="relative overflow-hidden rounded-xl border border-[#DDE5F0] bg-[#F6F8FC] min-h-[700px] w-full">
            {/* Loading / Fallback Background Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 z-0">
              <svg className="animate-spin h-8 w-8 text-[#145CFF] mb-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p className="text-sm font-bold text-[#061A2F]">Loading Scheduler...</p>
              <p className="mt-1 text-xs text-[#41516A] max-w-xs">
                If the calendar does not display, click below to open it directly.
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
          
          {/* QR Code Booking Card */}
          <div className="rounded-2xl border border-[#DDE5F0] bg-white p-6 flex flex-col items-center shadow-xl text-center">
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">
                Book on Mobile
              </p>
              <h3 className="mt-3 text-base font-extrabold text-[#061A2F]">
                Scan to Schedule Instantly
              </h3>
              <p className="mt-1 text-xs text-[#41516A] leading-relaxed max-w-[200px] mx-auto">
                Scan this QR code with your phone camera to schedule directly on mobile.
              </p>
            </div>
            
            <div className="my-5 p-3 rounded-xl border border-[#DDE5F0] bg-[#F6F8FC] shadow-inner flex items-center justify-center">
              <img
                src="/qrcode.png"
                alt="Booking Calendar QR Code"
                className="h-32 w-32 object-contain"
              />
            </div>

            <a
              href="https://calendly.com/leadsbystorm-support/30min?text_color=0b1329&primary_color=2563eb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-extrabold text-[#145CFF] hover:underline break-all"
            >
              calendly.com/leadsbystorm-support/30min
            </a>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl border border-[#DDE5F0] bg-white p-6 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">
                Prefer Email?
              </p>
              <h3 className="text-lg font-extrabold text-[#061A2F]">
                Send your availability.
              </h3>
              <p className="text-xs leading-relaxed text-[#41516A]">
                Send us your availability and the market you serve. We will reply or call you back with current appointment options.
              </p>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=LeadsByStorm%20Discovery%20Call%20Availability&body=Hi%20LeadsByStorm%2C%0A%0AI'm%20a%20roofing%20contractor%20interested%20in%20exclusive%20storm%20appointments.%0A%0AMy%20Service%20Area%2FMarket%3A%20%0AMy%20Preferred%20Call%20Time%20Availability%3A%20%0A%0AThanks!`}
              className="inline-flex items-center justify-center rounded-xl bg-[#F6F8FC] border border-[#DDE5F0] px-6 py-3 text-sm font-extrabold text-[#41516A] hover:text-[#061A2F] hover:border-[#145CFF] hover:bg-slate-50 transition active:scale-[0.98] transform"
            >
              Email LeadsByStorm
            </a>

            {/* Checklist */}
            <div className="border-t border-[#DDE5F0] pt-4 space-y-2">
              <p className="text-[10px] font-bold text-[#061A2F] uppercase tracking-wider">Before you email:</p>
              {[
                "Tell us your service area",
                "Tell us your preferred call time",
                "Ask about current appointment volume",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-semibold text-[#41516A]">
                  <svg className="h-3.5 w-3.5 text-[#145CFF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}

function FinalCtaSection() {
  return (
    <SectionContainer noPadding className="bg-[#061A2F] text-white py-12 relative border-b border-[#061A2F]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-2 max-w-xl text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready for Confirmed Storm-Damage Appointments?
          </h2>
          <p className="text-xs sm:text-sm text-slate-350 leading-relaxed">
            Book a quick call and we will show you current appointment availability in your market.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink href="#calendar" className="bg-[#145CFF] text-white hover:bg-[#2F7DFF] border-0 text-xs py-2.5 px-5">
            Book a 10-Minute Territory Call
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary-dark" className="text-xs py-2.5 px-5">
            Email Us Your Availability
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#DDE5F0] bg-slate-50 px-6 py-8 sm:px-8 lg:px-12 text-slate-500">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-xs sm:text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LeadsByStorm. All rights reserved.</p>
        <p>Targeted storm-damage roofing appointments.</p>
      </div>
    </footer>
  );
}

export default function LeadsByStormLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#41516A]">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <Header />
      <HeroSection />
      <TrustStrip />
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