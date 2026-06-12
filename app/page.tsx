import type { Metadata } from "next";
import Script from "next/script";
import StormAcquisitionHero from "../components/landing/StormAcquisitionHero";
import StormProcessTimeline from "../components/landing/StormProcessTimeline";
import ProductOptions from "../components/landing/ProductOptions";
import RadarTeaserPanel from "../components/landing/RadarTeaserPanel";
import AppointmentOfferSection from "../components/landing/AppointmentOfferSection";
import ComparisonSection from "../components/landing/ComparisonSection";

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

// Removed old inline sections: PricingSection, TerritoryCtaSection

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
        <div className="rounded-2xl border border-[#DDE6F2] border-t-8 border-t-[#145CFF] bg-white p-2 sm:p-4 shadow-2xl shadow-blue-500/10 overflow-hidden relative">
          
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
            Stop Guessing Where the Storm Work Is
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Use live storm intelligence, property-level targeting, homeowner contact data, and appointment generation to move faster after every major weather event.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <ButtonLink href="#calendar" className="bg-[#145CFF] text-white hover:bg-[#2F7DFF] border-0">
            Open Live Storm Map
          </ButtonLink>
          <ButtonLink href="#calendar" className="bg-[#145CFF] text-white hover:bg-[#2F7DFF] border-0">
            Get Guaranteed Appointments
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
        <div className="flex gap-4">
          <a href="/terms" className="hover:text-[#145CFF] transition-colors font-bold">Terms &amp; Conditions</a>
          <span className="text-slate-300">|</span>
          <a href="/privacy" className="hover:text-[#145CFF] transition-colors font-bold">Privacy Policy</a>
          <span className="text-slate-300">|</span>
          <p>Targeted storm-damage roofing appointments.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LeadsByStormLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#42526B]">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <Header />
      <StormAcquisitionHero />
      <StormProcessTimeline />
      <ProductOptions />
      <RadarTeaserPanel />
      <AppointmentOfferSection />
      <GuaranteeSection />
      <ComparisonSection />
      <CalendarSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}