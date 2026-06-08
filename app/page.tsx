import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadsByStorm | Guaranteed Storm Damage Appointments",
  description:
    "LeadsByStorm provides exclusive, pre-qualified storm damage inspection appointments for roofing contractors.",
};

type Feature = {
  title: string;
  description: string;
};

const LOGO_SRC = "/logo.png";
const CONTACT_EMAIL = "sales@leadsbystorm.com";

const features: Feature[] = [
  {
    title: "Radar-Verified Targeting",
    description:
      "We monitor live weather radar and hail swath maps to identify hard-hit residential areas, focusing our outreach only where storm damage is highly probable.",
  },
  {
    title: "Double-Screened Qualification",
    description:
      "Our dedicated team contacts each homeowner to verify storm damage concern, confirm property ownership, and secure their commitment to a set inspection time.",
  },
  {
    title: "Seamless Calendar Sync",
    description:
      "Confirmed appointments are booked directly into your Google Calendar or CRM. If a homeowner is a no-show, we replace the booking at zero cost.",
  },
];

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-dark";
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-extrabold transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-200/50 select-none cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/35 hover:-translate-y-[1px]"
      : variant === "secondary-dark"
      ? "border border-slate-700 bg-slate-900/50 text-slate-200 hover:border-slate-500 hover:bg-slate-800/60 hover:text-white hover:-translate-y-[1px]"
      : "border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-350 hover:bg-slate-50 hover:-translate-y-[1px]";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
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
      <div className="mx-auto max-w-7xl">{children}</div>
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
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
        theme === "dark" ? "text-white" : "text-blue-950"
      }`}>
        {title}
      </h2>

      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${
          theme === "dark" ? "text-slate-400" : "text-slate-600"
        }`}>{description}</p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-8 w-auto max-w-[180px] object-contain sm:h-9 sm:max-w-[220px]"
          />
        </a>

        <ButtonLink href="#calendar">Book a Call</ButtonLink>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto lg:mx-0">
      {/* Decorative gradient blue/indigo blur background */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/10 via-indigo-500/5 to-transparent blur-2xl pointer-events-none" />

      {/* Main Dashboard Frame (Vibrant Dark) */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              LeadsByStorm Dispatch Console
            </span>
          </div>
          <div className="rounded bg-slate-800 px-2 py-0.5 text-[9px] font-bold text-slate-400">
            v3.2 // LIVE_MARKETS
          </div>
        </div>

        {/* Dashboard Grid Content */}
        <div className="p-4 space-y-3">
          
          {/* Radar Monitoring Window */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-3">
            
            {/* Header info inside widget */}
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                  Target Zone Monitor
                </p>
                <p className="text-xs font-extrabold text-white">Active Storm Zone</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-2 py-0.5 text-[9px] font-bold text-orange-400">
                <svg className="h-2.5 w-2.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                HAIL VERIFIED
              </div>
            </div>

            {/* Weather Radar Graphic (SVG) */}
            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-[#0d1527] border border-slate-800">
              
              {/* Radar Sweeper Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Radar Arcs */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/40 w-16 h-16" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/40 w-32 h-32" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/40 w-48 h-48" />
              
              {/* Radar Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 border-t border-slate-800" />
              <div className="absolute inset-y-0 left-1/2 border-l border-slate-800" />

              {/* Storm Front Contour (translucent colored overlay) */}
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Active Hail Damage Footprint */}
                <path
                  d="M20,30 Q45,25 60,40 T90,55 Q80,80 50,75 T15,50 Z"
                  fill="url(#stormGradient)"
                  className="animate-pulse"
                />
                <defs>
                  <radialGradient id="stormGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.65" />
                    <stop offset="45%" stopColor="#f97316" stopOpacity="0.5" />
                    <stop offset="75%" stopColor="#eab308" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Radar Sweep Line */}
                <line x1="50" y1="50" x2="100" y2="10" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.5" className="origin-[50px_50px] animate-[spin_10s_linear_infinite]" />
              </svg>

              {/* Appointment pins */}
              <div className="absolute top-[35%] left-[28%] flex flex-col items-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="mt-0.5 rounded bg-slate-950/90 px-1 py-0.5 text-[8px] font-bold text-slate-300 border border-slate-800">
                  Zone A: 14 Appts
                </span>
              </div>

              <div className="absolute bottom-[25%] right-[22%] flex flex-col items-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="mt-0.5 rounded bg-slate-950/90 px-1 py-0.5 text-[8px] font-bold text-slate-300 border border-slate-800">
                  Zone B: 28 Appts
                </span>
              </div>

              {/* Bottom bar inside radar */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg border border-white/5 bg-slate-950/80 p-2 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <p className="text-[10px] font-bold text-white">
                    42 homeowner appointments available
                  </p>
                </div>
                <span className="text-[8px] font-semibold text-slate-400">
                  Ready for assignment
                </span>
              </div>
            </div>
          </div>

          {/* Key Statistics Grid */}
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                label: "Confirmed",
                value: "118",
                icon: (
                  <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                subtext: "Delivered to date",
                valueColorClass: "text-emerald-400",
              },
              {
                label: "No-Show Replaced",
                value: "100%",
                icon: (
                  <svg className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                subtext: "Free replacement",
                valueColorClass: "text-white",
              },
              {
                label: "Avg. Price",
                value: "$250",
                icon: (
                  <svg className="h-3.5 w-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                subtext: "Direct B2B rate",
                valueColorClass: "text-white",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-900/30 p-2.5 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between gap-1">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide truncate">{stat.label}</p>
                  {stat.icon}
                </div>
                <p className={`mt-0.5 text-base font-extrabold ${stat.valueColorClass}`}>{stat.value}</p>
                <p className="text-[8px] text-slate-500 leading-none mt-0.5">{stat.subtext}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <SectionContainer noPadding className="overflow-hidden bg-[#f8fafc] text-blue-950 py-8 sm:py-10 lg:py-16 relative border-b border-slate-200">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
        
        {/* Left Column / Text Block */}
        <div className="space-y-5 lg:col-span-7 lg:space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Storm-Damage Appointment Setting
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Storm Appointments. Guaranteed.
          </h1>

          {/* Mobile/Tablet Mockup Placement (hidden on lg and above) */}
          <div className="block lg:hidden my-4">
            <HeroVisual />
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base max-w-xl">
            We track severe weather corridors, pre-qualify property owners, and book exclusive damage inspection slots directly into your calendar. No door-knocking, no shared lead lists, and zero risk.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#calendar">Secure Your Territory</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See Our Process
            </ButtonLink>
          </div>

          {/* Desktop trust row (hidden on mobile/tablet) */}
          <div className="hidden lg:flex items-center gap-6 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              100% Exclusive
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Live Calendar Sync
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No-Show Protection
            </span>
          </div>

          {/* Mobile trust indicators */}
          <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 text-[10px] font-bold text-slate-500 text-center lg:hidden">
            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <p className="text-blue-950">100% Exclusive</p>
              <p className="text-[8px] text-slate-400 font-medium mt-0.5">Never Shared</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <p className="text-blue-950">Live Sync</p>
              <p className="text-[8px] text-slate-400 font-medium mt-0.5">Direct CRM</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <p className="text-blue-950">Risk-Free</p>
              <p className="text-[8px] text-slate-400 font-medium mt-0.5">Free Replace</p>
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

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-sm font-extrabold text-orange-600">
        0{index + 1}
      </div>

      <h3 className="text-xl font-extrabold text-blue-950">{feature.title}</h3>

      <p className="mt-3 leading-relaxed text-slate-600 text-sm sm:text-base">{feature.description}</p>
    </article>
  );
}

function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="bg-[#f8fafc] border-t border-slate-200">
      <SectionHeading
        eyebrow="OUR PROCESS"
        title="We do the grinding. You do the inspecting."
        description="LeadsByStorm replaces cold door-knocking and low-intent shared lists with exclusive, double-confirmed inspection appointments booked directly to your schedule."
        theme="light"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}

function PricingSection() {
  return (
    <SectionContainer className="bg-white py-16 sm:py-20">
      <div className="bg-[#f8fafc] border border-slate-200 rounded-[2.5rem] px-6 sm:px-10 py-16 sm:py-20 max-w-7xl mx-auto shadow-xl shadow-slate-100/50">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              PRICING & ROI
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Built for Positive ROI.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Standard lead brokers sell unverified, shared lists for <strong className="font-extrabold text-blue-950">$400 to $500</strong> per lead—leaving you to compete with multiple other contractors just to get a call back.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We do things differently. LeadsByStorm delivers 100% exclusive, pre-qualified appointments. Our best price is <strong className="font-extrabold text-emerald-600">$250</strong> per appointment for high-volume contractors covering wide territories, with standard local campaigns priced up to <strong className="font-extrabold text-blue-950">$350</strong>.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                    TERRITORY LOCK NOTICE
                  </p>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed font-medium">
                    We partner with only one contractor per storm territory. Lock in your market before your competitors do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                label: "Typical Lead Broker",
                value: "$400–$500",
                description: "Usually shared leads, cold lists, or unverified contact info sold to multiple contractors.",
                highlight: false,
                isGreenValue: false,
              },
              {
                label: "LeadsByStorm Rate",
                value: "$250–$350",
                description: "100% exclusive storm-damage appointments. Starts at $250 for high-volume territory contracts.",
                highlight: true,
                isGreenValue: true,
              },
              {
                label: "No-Show Protection",
                value: "100% Risk-Free",
                description: "If the homeowner is a no-show, we replace the appointment at zero cost.",
                highlight: false,
                isGreenValue: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 transition-all duration-200 ${
                  item.highlight
                    ? "border-2 border-blue-600 bg-blue-50/45 shadow-md shadow-blue-100 relative"
                    : "border border-slate-200 bg-white hover:border-slate-300 transition"
                }`}
              >
                {item.highlight && (
                  <span className="absolute right-4 top-4 rounded bg-blue-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
                    Best Value
                  </span>
                )}
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                <p className={`mt-2 text-3xl font-extrabold ${item.isGreenValue ? "text-emerald-600" : "text-blue-950"}`}>
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

function CalendarPlaceholder() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
      <div className="mb-6 border-b border-slate-200 pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Booking Console
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-blue-950 leading-tight">
          Choose a time on our calendar below for a quick phone call.
        </h3>
      </div>

      {/* Calendar Widget Area */}
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
        
        {/* Real-looking calendar grid mockup */}
        <div className="opacity-45 select-none pointer-events-none">
          {/* Header Row: Month / Timezone */}
          <div className="mb-4 flex items-center justify-between text-xs font-bold text-slate-500">
            <span>June 2026</span>
            <span>Eastern Time (US & Canada)</span>
          </div>
          
          {/* Grid of Days */}
          <div className="grid grid-cols-5 gap-2 text-center text-[10px] sm:text-xs">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, idx) => (
              <div key={day} className="space-y-2">
                <div className="font-bold text-slate-700">{day}</div>
                <div className="rounded bg-blue-50 py-1 font-bold text-blue-900 border border-blue-100">{8 + idx}</div>
                <div className="rounded border border-slate-200 bg-white py-1 text-slate-700">9:00 AM</div>
                <div className="rounded border border-slate-200 bg-white py-1 text-slate-700">11:30 AM</div>
                <div className="rounded border border-slate-200 bg-white py-1 text-slate-700">2:00 PM</div>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay highlighting the embed placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 p-6 text-center backdrop-blur-[2px]">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/35">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <p className="text-base font-extrabold text-white">
            Embed Scheduling Widget Here
          </p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-400">
            Replace this container with your Calendly, Cal.com, HubSpot, or GoHighLevel inline iframe.
          </p>
          
          {/* Placeholder developer hint */}
          <div className="mt-4 rounded border border-slate-800 bg-slate-900/55 px-3 py-1.5 text-[10px] font-mono text-slate-300">
            &lt;iframe src=&quot;YOUR_CALENDLY_URL&quot; ... /&gt;
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailContactCard() {
  const subject = encodeURIComponent("LeadsByStorm Strategy Call Availability");
  const body = encodeURIComponent(
    "Hi LeadsByStorm,\n\nI am interested in storm damage appointments. Here is my availability:\n\n"
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xl">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-650">
          Contact Us Directly
        </p>

        <h3 className="mt-3 text-2xl font-extrabold text-blue-950">
          Send your availability.
        </h3>

        <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
          Have questions or need custom volume pricing? Send us an email and our territory director will contact you within 15 minutes.
        </p>
      </div>

      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
        className="mt-8 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-100 active:scale-[0.98] transform"
      >
        Email LeadsByStorm
      </a>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <SectionContainer id="calendar" className="bg-[#f8fafc] border-t border-slate-200">
      <div className="mb-12">
        <SectionHeading
          eyebrow="TERRITORY LOCK"
          title="Claim Your Storm Territory Today"
          description="We work with exactly one roofing contractor per territory to prevent lead dilution. Book a 10-minute call to check active storm corridors and view our current appointment inventory in your market."
          theme="light"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <CalendarPlaceholder />
        <EmailContactCard />
      </div>
    </SectionContainer>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 lg:px-12 text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} leadsbystorm.com. All rights reserved.</p>
        <p>Targeted storm-damage roofing appointments.</p>
      </div>
    </footer>
  );
}

export default function LeadsByStormLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}