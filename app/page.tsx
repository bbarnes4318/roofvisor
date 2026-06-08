import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadsByStorm | Guaranteed Storm Damage Appointments",
  description:
    "LeadsByStorm provides targeted roofing lead generation and confirmed storm damage inspection appointments for roofing contractors.",
};

type Feature = {
  title: string;
  description: string;
};

const LOGO_SRC = "/logo.png";
const CONTACT_EMAIL = "sales@leadsbystorm.com";

const features: Feature[] = [
  {
    title: "Pre-Qualified Homeowners",
    description:
      "We find the exact neighborhoods hit by recent storms and connect with homeowners actively seeking roof inspections.",
  },
  {
    title: "100% Confirmed Appointments",
    description:
      "We don't just hand you a list of names. LeadsByStorm sets and confirms the appointments for your sales team.",
  },
  {
    title: "The No-Show Guarantee",
    description:
      "Your time is valuable. If a homeowner no-shows, we replace the appointment for free. Guaranteed.",
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
      : "border border-slate-200 bg-white text-slate-800 hover:border-slate-350 hover:bg-slate-50 hover:-translate-y-[1px]";

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
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
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

      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
        theme === "dark" ? "text-white" : "text-blue-950"
      }`}>
        {title}
      </h2>

      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${
          theme === "dark" ? "text-slate-300" : "text-slate-600"
        }`}>{description}</p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" aria-label="LeadsByStorm home" className="flex items-center">
          <div className="bg-[#0b1329] px-3.5 py-1.5 rounded-xl flex items-center justify-center shadow-md">
            <img
              src={LOGO_SRC}
              alt="LeadsByStorm Logo"
              className="h-8 w-auto max-w-[200px] object-contain sm:h-10 sm:max-w-[260px]"
            />
          </div>
        </a>

        <ButtonLink href="#calendar">Book a Call</ButtonLink>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0">
      {/* Decorative gradient blur background */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/15 via-blue-500/10 to-orange-400/5 blur-2xl pointer-events-none" />

      {/* Main Dashboard Frame (Vibrant Dark) */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              LeadsByStorm Dispatch Console
            </span>
          </div>
          <div className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-400">
            v3.2 // LIVE_MARKETS
          </div>
        </div>

        {/* Dashboard Grid Content */}
        <div className="p-5 space-y-4">
          
          {/* Radar Monitoring Window */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            
            {/* Header info inside widget */}
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Target Zone Monitor
                </p>
                <p className="text-sm font-black text-white">Active Storm Zone</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold text-orange-400">
                <svg className="h-3 w-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                HAIL VERIFIED
              </div>
            </div>

            {/* Weather Radar Graphic (SVG) */}
            <div className="relative h-44 w-full overflow-hidden rounded-lg bg-[#0d1527] border border-slate-850">
              
              {/* Radar Sweeper Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Radar Arcs */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/40 w-16 h-16" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/40 w-32 h-32" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/40 w-48 h-48" />
              
              {/* Radar Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 border-t border-slate-850" />
              <div className="absolute inset-y-0 left-1/2 border-l border-slate-850" />

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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-450 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="mt-0.5 rounded bg-slate-950/90 px-1 py-0.5 text-[8px] font-bold text-slate-300 border border-slate-800">
                  Zone B: 28 Appts
                </span>
              </div>

              {/* Bottom bar inside radar */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg border border-white/5 bg-slate-950/80 p-2.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  <p className="text-[11px] font-bold text-white">
                    42 homeowner appointments available
                  </p>
                </div>
                <span className="text-[9px] font-semibold text-slate-400">
                  Ready for assignment
                </span>
              </div>
            </div>
          </div>

          {/* Key Statistics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "Confirmed",
                value: "118",
                icon: (
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
                  <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                subtext: "Direct B2B rate",
                valueColorClass: "text-white",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-900/30 p-3 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between gap-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide truncate">{stat.label}</p>
                  {stat.icon}
                </div>
                <p className={`mt-1 text-lg font-black ${stat.valueColorClass}`}>{stat.value}</p>
                <p className="text-[9px] text-slate-500 leading-none mt-0.5">{stat.subtext}</p>
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
    <SectionContainer className="overflow-hidden bg-[#f8fafc] text-blue-950 pb-20 pt-10 sm:pt-14 relative border-b border-slate-150">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50/70 px-4 py-1.5 text-xs font-extrabold text-blue-600 tracking-wide uppercase">
            Storm damage roofing appointments
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-blue-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Exclusively Confirmed Storm Damage Inspections. Delivered Straight to Your Calendar.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-650 sm:text-lg">
            LeadsByStorm.com maps severe weather events, pre-qualifies high-intent homeowners seeking inspections, and books confirmed slots directly on your calendar. You show up, perform the assessment, and close the contract. No shared leads, no waste.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <ButtonLink href="#calendar">Book a Strategy Call</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-8">
            {[
              ["Exclusive", "Appointments"],
              ["Confirmed", "Before delivery"],
              ["Guaranteed", "No-show replacement"],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="text-base font-extrabold text-blue-950 sm:text-lg">{value}</p>
                <p className="mt-0.5 text-xs text-slate-500 font-medium leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </SectionContainer>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <article className="group rounded-2xl border border-slate-300 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-400">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-sm font-black text-orange-600">
        0{index + 1}
      </div>

      <h3 className="text-xl font-extrabold text-blue-950">{feature.title}</h3>

      <p className="mt-3 leading-relaxed text-slate-650 text-sm sm:text-base">{feature.description}</p>
    </article>
  );
}

function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="bg-[#f8fafc] border-t border-slate-200">
      <SectionHeading
        eyebrow="How It Works"
        title="A cleaner way to fill your roofing sales calendar."
        description="LeadsByStorm is built for contractors who want real inspection opportunities, not bloated spreadsheets, recycled leads, or low-intent form fills."
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
      <div className="bg-[#f8fafc] border border-slate-300 rounded-[2.5rem] px-6 sm:px-10 py-16 sm:py-20 max-w-7xl mx-auto shadow-xl shadow-slate-100/50">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Pricing & ROI
            </p>

            <h2 className="text-3xl font-black tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Unbeatable Market Value
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-655 sm:text-lg">
              High-intent roofing appointments typically sell on the market for{" "}
              <strong className="font-extrabold text-blue-950">$350 to $450</strong>.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-655 sm:text-lg">
              We sell our exclusive appointments at just{" "}
              <strong className="font-extrabold text-emerald-600">$250</strong>. Plus,
              we offer flexible volume pricing to ensure it perfectly fits your
              budget.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                    Current Market Alert
                  </p>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed font-medium">
                    Note: In several cities, we currently have more homeowner
                    appointments available than contractors to fulfill them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                label: "Typical Market Price",
                value: "$350–$450",
                description: "What high-intent roofing appointments often sell for.",
                highlight: false,
                isGreenValue: false,
              },
              {
                label: "LeadsByStorm Price",
                value: "$250",
                description: "Exclusive storm damage appointments at a stronger margin.",
                highlight: true,
                isGreenValue: true,
              },
              {
                label: "No-Show Protection",
                value: "Free Replace",
                description: "If the homeowner no-shows, we replace the appointment.",
                highlight: false,
                isGreenValue: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 transition-all duration-200 ${
                  item.highlight
                    ? "border-2 border-blue-600 bg-blue-50/45 shadow-md shadow-blue-100 relative"
                    : "border border-slate-300 bg-white hover:border-slate-400 transition"
                }`}
              >
                {item.highlight && (
                  <span className="absolute right-4 top-4 rounded bg-blue-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
                    Best Value
                  </span>
                )}
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                <p className={`mt-2 text-3xl font-black ${item.isGreenValue ? "text-emerald-600" : "text-blue-950"}`}>
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-655">
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
    <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-xl">
      <div className="mb-6 border-b border-slate-150 pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Booking Console
        </p>
        <h3 className="mt-2 text-xl font-black text-blue-950 leading-tight">
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
                <div className="font-bold text-slate-750">{day}</div>
                <div className="rounded bg-blue-50 py-1 font-bold text-blue-900 border border-blue-100">{8 + idx}</div>
                <div className="rounded border border-slate-300 bg-white py-1 text-slate-700">9:00 AM</div>
                <div className="rounded border border-slate-300 bg-white py-1 text-slate-700">11:30 AM</div>
                <div className="rounded border border-slate-300 bg-white py-1 text-slate-700">2:00 PM</div>
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

          <p className="text-base font-black text-white">
            Embed Scheduling Widget Here
          </p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-350">
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
    <div className="rounded-2xl border border-slate-300 bg-white p-8 flex flex-col justify-between shadow-xl">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-650">
          Prefer Email?
        </p>

        <h3 className="mt-3 text-2xl font-black text-blue-950">
          Send your availability.
        </h3>

        <p className="mt-4 leading-relaxed text-slate-650 text-sm sm:text-base">
          Prefer to email? Click below to send us your availability directly, and we will get back to you immediately.
        </p>
      </div>

      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
        className="mt-8 inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition hover:border-slate-450 hover:bg-slate-100 active:scale-[0.98] transform"
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
          eyebrow="Book a Call"
          title="Ready to scale your roofing business? Let's talk."
          description="Tell us your target markets, volume needs, and current sales capacity. We'll walk you through available appointments and pricing."
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