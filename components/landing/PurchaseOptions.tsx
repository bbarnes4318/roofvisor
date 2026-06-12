import React from "react";

export default function PurchaseOptions() {
  const MAP_URL = "https://sms.leadzer.io/storm-map";

  // Pre-configured paths for organized public assets
  const IMAGES = {
    radarOverview: "/landing/storm-map-teaser/radar-map-overview.png",
    stormReport: "/landing/storm-map-teaser/storm-report-preview.png",
    propertyAddress: "/landing/storm-map-teaser/property-address-preview.png",
    appointment: "/landing/storm-map-teaser/appointment-preview.png",
  };

  return (
    <section id="products" className="bg-[#070b13] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#145CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1200px]">
        
        {/* TOP CINEMATIC SPLIT HERO */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center mb-20">
          
          {/* LEFT COLUMN: Copywriting, CTA, and 5-Step Process Timeline */}
          <div className="space-y-8 lg:col-span-5 text-left relative z-20">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#145CFF]/30 bg-[#145CFF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active Radar Feed
              </span>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
                Click Into the Map. Find the Storm-Hit Homes.
              </h2>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Review detailed storm reports, identify affected properties, access homeowner contact information, and request guaranteed in-person inspection appointments.
              </p>
            </div>

            {/* CTAs and microcopy */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white px-8 py-4 text-base font-extrabold shadow-lg shadow-blue-500/20 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
                >
                  Open Live Storm Map
                </a>
                <a 
                  href="#calendar"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent text-slate-300 hover:text-white hover:bg-white/5 px-8 py-4 text-base font-extrabold hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
                >
                  Request Inspection Appointments
                </a>
              </div>
              <span className="block text-[11px] text-[#60A5FA] font-bold tracking-wide text-left animate-pulse">
                👉 Click into the live map to start targeting storm-hit properties.
              </span>
            </div>

            {/* 5-Step Process timeline */}
            <div className="border-t border-white/5 pt-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]">Targeting Workflow</h4>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Detect Storm-Hit Area", desc: "Monitor weather radar data for recent wind & hail tracks." },
                  { step: "2", title: "Review Detailed Storm Report", desc: "Evaluate localized reports, damage scores, and historical data." },
                  { step: "3", title: "Identify Affected Properties", desc: "Overlay parcels to identify single-family homes in impact paths." },
                  { step: "4", title: "Access Homeowner Contact Information", desc: "Retrieve verified deed-owner details, active phone lists, and emails." },
                  { step: "5", title: "Request Inspection Appointments", desc: "Confirm homeowner interest and calendar inspection schedules." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 text-xs">
                    <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-md bg-[#145CFF]/10 text-[10px] font-black text-[#60A5FA] border border-[#145CFF]/20">
                      {item.step}
                    </span>
                    <div className="space-y-0.5">
                      <strong className="text-white font-extrabold block">{item.title}</strong>
                      <span className="text-slate-400 font-medium text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Large Map Screenshot Stage & Overlapping 3D Diagonal Cards */}
          <div className="lg:col-span-7 w-full relative z-10">
            
            {/* Visual Floating Labels */}
            <div className="absolute top-[-30px] left-4 bg-slate-900/90 border border-white/10 px-2.5 py-1 rounded text-[8px] font-extrabold text-[#60A5FA] uppercase tracking-wider z-50 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF] animate-pulse" />
              Live Storm Map
            </div>
            <div className="absolute bottom-[35%] right-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded text-[8px] font-extrabold text-emerald-400 uppercase tracking-wider z-50 flex items-center gap-1.5 shadow-md">
              Property-Level Targeting
            </div>
            <div className="absolute top-[40%] left-[-40px] hidden xl:flex bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded text-[8px] font-extrabold text-violet-400 uppercase tracking-wider z-50 items-center gap-1.5 shadow-md">
              Inspection Appointment Ready
            </div>
            <div className="absolute bottom-[-20px] left-10 bg-slate-900/90 border border-white/10 px-2.5 py-1 rounded text-[8px] font-extrabold text-slate-300 uppercase tracking-wider z-50 flex items-center gap-1.5 shadow-md animate-bounce">
              👆 Click Into The Map
            </div>

            {/* 3D Container Viewport (desktop only) */}
            <div className="relative w-full min-h-[640px] md:min-h-[750px] lg:min-h-[700px] xl:min-h-[780px] [perspective:1500px]">
              
              {/* STAGE LAYER: Huge Radar Map Screenshot */}
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 block rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 opacity-40 bg-[#06080e] [transform:rotateY(-14deg)_rotateX(10deg)_skewY(-3deg)] hover:opacity-60 hover:border-[#145CFF]/40 group"
              >
                <img 
                  src={IMAGES.radarOverview} 
                  alt="Live Storm Map Radar Stage" 
                  className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[1.5px]">
                  <span className="bg-[#145CFF] text-white text-xs font-black px-5 py-3 rounded-xl uppercase tracking-wider shadow-lg flex items-center gap-2">
                    Enter Storm Map
                    <svg className="w-3.5 h-3.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>

              {/* FOREGROUND OVERLAYS: Diagonal Real Screenshot Cards */}
              <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
                <div className="grid grid-cols-1 gap-8 md:block md:relative md:w-full md:h-full">

                  {/* Card 1: Detailed Storm Report */}
                  <div className="bg-[#0c1220]/95 border border-white/10 rounded-2xl p-2.5 shadow-2xl md:absolute md:top-[2%] md:left-[2%] md:w-[300px] z-10 transition-all duration-500 md:[transform:rotateY(-14deg)_rotateX(10deg)_skewY(-3deg)_translateZ(20px)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_skewY(0deg)_translateY(-12px)_translateZ(65px)] md:hover:z-50 md:hover:border-[#145CFF]/30">
                    <div className="relative rounded-xl border border-white/5 bg-[#06090f] overflow-hidden shadow-inner font-sans">
                      {/* Window OS Header Bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-[#0f1115]/85 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span>Storm Report preview</span>
                      </div>
                      
                      {/* Actual Screenshot */}
                      <img 
                        src={IMAGES.stormReport} 
                        alt="Detailed Storm Report Screenshot" 
                        className="w-full h-auto object-cover filter brightness-[0.9] contrast-[1.05]"
                      />
                    </div>
                  </div>

                  {/* Card 2: Property Target / Address */}
                  <div className="bg-[#0c1220]/95 border border-white/10 rounded-2xl p-2.5 shadow-2xl md:absolute md:top-[28%] md:left-[14%] md:w-[320px] z-20 transition-all duration-500 md:[transform:rotateY(-14deg)_rotateX(10deg)_skewY(-3deg)_translateZ(40px)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_skewY(0deg)_translateY(-12px)_translateZ(85px)] md:hover:z-50 md:hover:border-emerald-500/30">
                    <div className="relative rounded-xl border border-white/5 bg-[#06090f] overflow-hidden shadow-inner font-sans">
                      {/* Window OS Header Bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-[#0f1115]/85 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span>Property Target preview</span>
                      </div>
                      
                      {/* Actual Screenshot */}
                      <img 
                        src={IMAGES.propertyAddress} 
                        alt="Property Address Target Screenshot" 
                        className="w-full h-auto object-cover filter brightness-[0.9] contrast-[1.05]"
                      />
                    </div>
                  </div>

                  {/* Card 3: Guaranteed In-Person Inspection Appointments (Emphasized) */}
                  <div className="bg-[#0c1325]/98 border-2 border-[#145CFF] rounded-2xl p-3 shadow-2xl md:absolute md:top-[12%] md:right-[2%] md:w-[340px] z-30 transition-all duration-500 md:[transform:rotateY(-14deg)_rotateX(10deg)_skewY(-3deg)_translateZ(80px)] md:hover:[transform:rotateY(-2deg)_rotateX(3deg)_skewY(0deg)_translateY(-12px)_translateZ(130px)] md:hover:z-50 md:hover:shadow-[#145CFF]/30">
                    
                    <span className="absolute right-4 -top-3 rounded-full bg-[#145CFF] px-2.5 py-0.5 text-[7.5px] font-black uppercase tracking-widest text-white border border-[#0c1325] shadow-lg">
                      Highest Value
                    </span>

                    <div className="relative rounded-xl border border-white/10 bg-[#06090f] overflow-hidden shadow-inner font-sans">
                      {/* Window OS Header Bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-[#0f1115]/85 text-[8px] font-bold text-[#60A5FA] uppercase tracking-widest">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span>Appointments preview</span>
                      </div>
                      
                      {/* Actual Screenshot */}
                      <img 
                        src={IMAGES.appointment} 
                        alt="Guaranteed Appointments Booking Screenshot" 
                        className="w-full h-auto object-cover filter brightness-[0.9] contrast-[1.05]"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM OFFER DETAIL CARDS */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch text-left mt-24 relative z-20">
          
          {/* OFFER 1: Detailed Storm Report */}
          <div className="rounded-2xl border border-white/5 bg-[#0e1422]/90 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <div className="space-y-4">
              <div>
                <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                  Storm Report
                </span>
                <h3 className="text-lg font-extrabold text-white mt-3.5">Detailed Storm Report</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  See where the storm hit, review hail and wind indicators, and understand which neighborhoods and properties are worth targeting.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                {[
                  "Radar / hail / wind context",
                  "Storm event summary",
                  "Affected area overview",
                  "Report count & proximity signals",
                  "Property targeting context",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF] mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-3">
              <span className="text-[9.5px] text-slate-400 block border-l border-white/20 pl-2 leading-tight">
                Contact Details: Available with Homeowner Contact Information
              </span>
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 text-xs font-extrabold text-white uppercase tracking-wider transition-colors"
              >
                View Storm Intelligence
              </a>
            </div>
          </div>

          {/* OFFER 2: Detailed Storm Report + Homeowner Contact Information */}
          <div className="rounded-2xl border border-white/5 bg-[#0e1422]/90 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-emerald-400">
                  Property + Contact
                </span>
                <span className="text-[8px] bg-slate-800 text-slate-400 font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wide border border-slate-700/50">
                  Illustrative Preview
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white mt-3.5">Report + Contact Info</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Receive the storm intelligence plus the homeowner details needed for outreach.
                </p>
              </div>

              {/* Masked Sample Data visual block */}
              <div className="bg-[#05080f] rounded-lg p-3 border border-white/5 space-y-1.5 text-[10px] text-left">
                <div className="text-slate-400">Owner: <strong className="text-white font-extrabold">J*** D****</strong></div>
                <div className="text-slate-400">Mobile: <strong className="text-white font-extrabold">(***) ***-4821</strong></div>
                <div className="text-slate-400 truncate">Email: <strong className="text-white font-extrabold">j***@g****.com</strong></div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                {[
                  "Storm-affected property address",
                  "Homeowner name when available",
                  "Phone numbers & emails when available",
                  "Mailing address & property details",
                  "Roof/home indicators & permits",
                  "Contact confidence & source indicators",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 py-2.5 text-xs font-extrabold text-emerald-400 uppercase tracking-wider transition-colors"
              >
                Get Homeowner Contact Information
              </a>
            </div>
          </div>

          {/* OFFER 3: Guaranteed In-Person Inspection Appointments (Emphasized) */}
          <div className="relative rounded-2xl border-2 border-[#145CFF] bg-[#0c1325]/90 p-6 flex flex-col justify-between shadow-2xl shadow-[#145CFF]/15 transition-all duration-300">
            
            <span className="absolute right-4 -top-3 rounded-full bg-[#145CFF] px-2.5 py-0.5 text-[7.5px] font-black uppercase tracking-widest text-white border border-[#0c1325] shadow-lg">
              Highest Value
            </span>

            <div className="space-y-4">
              <div>
                <span className="rounded-full bg-[#145CFF]/25 border border-[#145CFF]/30 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#93C5FD]">
                  Inspection-Ready
                </span>
                <h3 className="text-lg font-extrabold text-white mt-3.5">Guaranteed Appointments</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  We turn storm-affected property intelligence into confirmed roof inspection opportunities.
                </p>
                <p className="text-xs font-bold text-white leading-normal border-l-2 border-[#145CFF] pl-2 py-0.5 mt-3">
                  Raw data is optional. Booked inspections are the outcome.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-200 border-t border-white/10 pt-4">
                {[
                  "Storm-hit property targeting",
                  "Homeowner outreach & qual",
                  "Inspection appointment scheduled",
                  "Appointment confirmed before delivery",
                  "Eligible no-show replacement",
                  "Route-ready appointment details",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-[#00e676] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold text-slate-200">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-3">
              <span className="text-[8.5px] text-slate-500 leading-normal italic block text-left">
                Appointments are inspection opportunities only. We do not guarantee roof damage, insurance approval, claim outcome, or closed jobs.
              </span>
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-[#145CFF] hover:bg-[#2F7DFF] py-2.5 text-xs font-extrabold text-white uppercase tracking-wider transition-all shadow-md shadow-blue-500/15"
              >
                Request Inspection Appointments
              </a>
            </div>
          </div>

        </div>

        {/* Global Compliance & Disclaimer notice */}
        <div className="mt-16 text-center max-w-4xl mx-auto rounded-xl border border-white/5 bg-[#090e18]/80 p-4 text-[11px] sm:text-xs text-slate-500 leading-normal relative z-20">
          <strong>Compliance Disclaimer:</strong> Sample previews are illustrative. Storm, property, contact, and roof data availability varies by location, provider coverage, and source. Appointment guarantees apply to qualified program terms and eligible no-shows only. We do not guarantee roof damage, insurance approval, claim outcome, or closed jobs.
        </div>

      </div>
    </section>
  );
}
