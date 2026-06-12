import React from "react";

export default function StormMapTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#070b13] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      {/* Dynamic Background Grid and Radar Grid Lines */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Coordinate Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
        
        {/* Radar Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#145CFF]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#145CFF]/10 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#145CFF]/20" />
        
        {/* Radar Scan Line Sweep */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] origin-center rotate-45 bg-[conic-gradient(from_0deg,transparent_50%,rgba(20,92,255,0.08)_100%)] rounded-full animate-[spin_12s_linear_infinite]" />
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_560px] items-center">
          
          {/* Left Column: Copy, bullets, CTA */}
          <div className="space-y-6 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#145CFF]/30 bg-[#145CFF]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#11A36A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#11A36A]"></span>
              </span>
              StormTarget Live Intelligence
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Turn Storm Activity Into Roof Inspection Opportunities
            </h2>
            
            <p className="text-base text-slate-400 sm:text-lg leading-relaxed">
              Track active storm systems, identify impacted neighborhoods, zoom into affected homes, and lock verified property targets for follow-up.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                { title: "Live Radar & Storm Reports", desc: "Monitor path-of-destruction corridors with localized weather data." },
                { title: "Neighborhood-Level Hail Mapping", desc: "Pinpoint exact roof surfaces impacted by high-magnitude hail." },
                { title: "Verified Target Addresses", desc: "Identify single-family homes with precise street address mapping." },
                { title: "Credit-Based Contact Intelligence", desc: "Unlock homeowner details, phone numbers, and structural data only when needed." },
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#60A5FA] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-white text-sm sm:text-base font-bold block">{bullet.title}</strong>
                    <span className="text-xs sm:text-sm text-slate-400 leading-normal">{bullet.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 shrink-0">
              <a 
                href="#calendar" 
                className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white px-6 py-3.5 text-base font-extrabold shadow-lg shadow-blue-500/10 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                Open Live Storm Map
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent text-slate-300 hover:text-white hover:bg-white/5 px-6 py-3.5 text-base font-extrabold hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                See How It Works
              </a>
            </div>
            
            <p className="text-[10px] text-slate-500 italic pt-2">
              * Contact and property data availability varies by source and coverage. LeadsByStorm does not guarantee 100% data availability for all target routes.
            </p>
          </div>

          {/* Right Column: Layered product preview mockup */}
          <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl border border-white/10 bg-[#090b11] overflow-hidden shadow-2xl shadow-black/50 select-none group">
            
            {/* Dynamic CSS Radar Map Background */}
            <div className="absolute inset-0 bg-[#06080e] overflow-hidden">
              {/* Fake Street Grids */}
              <svg className="absolute inset-0 w-full h-full opacity-15 stroke-slate-500" strokeWidth="0.5" fill="none">
                {/* Horizontal streets */}
                <path d="M 0,50 L 600,60 M 0,140 L 600,120 M 0,220 L 600,240 M 0,320 L 600,310 M 0,380 L 600,400" />
                {/* Vertical streets */}
                <path d="M 60,0 L 80,450 M 180,0 L 170,450 M 320,0 L 330,450 M 440,0 L 420,450 M 520,0 L 540,450" />
                {/* Diagonal secondary roads */}
                <path d="M 0,0 L 600,400 M 0,400 L 600,100" strokeWidth="0.25" />
              </svg>

              {/* Storm Radar Cells (Colored translucent overlay paths) */}
              <div className="absolute top-[10%] left-[20%] w-[220px] h-[180px] bg-gradient-to-br from-green-500/25 via-emerald-600/20 to-transparent blur-md rounded-full pointer-events-none" />
              <div className="absolute top-[18%] left-[28%] w-[130px] h-[110px] bg-gradient-to-br from-yellow-500/30 via-amber-600/20 to-transparent blur-sm rounded-full pointer-events-none" />
              <div className="absolute top-[22%] left-[32%] w-[60px] h-[50px] bg-red-600/40 blur-[3px] rounded-full pointer-events-none" />

              {/* Grid Radar Target Pins */}
              <div className="absolute top-[25%] left-[35%] w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              <div className="absolute top-[45%] left-[55%] w-2.5 h-2.5 rounded-full bg-[#145CFF] shadow-[0_0_8px_#145CFF]" />
              <div className="absolute top-[70%] left-[25%] w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              <div className="absolute top-[60%] left-[75%] w-2 h-2 rounded-full bg-slate-500" />
            </div>

            {/* Layer 1: Floating "Hail Area" Card (Top Left) */}
            <div className="absolute top-4 left-4 w-[240px] rounded-xl border border-white/10 bg-[#0c1220]/90 backdrop-blur-md p-3 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#145CFF] shadow-[0_0_6px_#145CFF]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">Hail Area</span>
                </div>
                <span className="rounded bg-[#1e293b] px-1.5 py-0.5 text-[9px] font-extrabold text-slate-200">
                  Score: 190
                </span>
              </div>
              
              <div className="text-left space-y-2">
                <div>
                  <span className="text-[8px] text-slate-500 uppercase block font-bold">Area / Location</span>
                  <span className="text-xs font-extrabold text-white">Dearborn</span>
                  <span className="text-[9px] text-slate-400 block font-semibold leading-none">Wayne County, MI</span>
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 py-1 border-t border-b border-white/5">
                  <div>
                    <span className="text-[8px] text-slate-500 block font-bold leading-none">HIGHEST MAG.</span>
                    <span className="text-[10px] font-extrabold text-white">1.25 in</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-slate-500 block font-bold leading-none">RADIUS</span>
                    <span className="text-[10px] font-extrabold text-white">10 mi</span>
                  </div>
                </div>

                <button className="w-full rounded-md bg-[#1e293b] hover:bg-slate-800 py-1 text-[9px] font-extrabold text-[#60A5FA] uppercase tracking-wider transition-colors">
                  Zoom To Area
                </button>
              </div>
            </div>

            {/* Layer 2: Floating "Verified Address" Card (Top Right / Middle) */}
            <div className="absolute top-[15%] right-4 w-[270px] rounded-xl border border-white/10 bg-[#0c1220]/95 backdrop-blur-md p-3.5 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-300">Lead Target Info</span>
                </div>
                <span className="rounded-full bg-[#11A36A]/10 border border-[#11A36A]/30 px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-[#11A36A]">
                  Verified
                </span>
              </div>

              <div className="text-left space-y-2.5">
                <div className="bg-[#070b13] border border-white/5 rounded-lg p-2">
                  <span className="text-[8px] text-slate-500 uppercase block font-bold leading-none mb-1">Street Address</span>
                  <span className="text-[10px] font-extrabold text-white block leading-tight">
                    210 East Bodine Avenue
                  </span>
                  <span className="text-[9px] text-slate-400 block font-semibold leading-tight">
                    Clinton, Missouri 64735
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div className="bg-[#070b13] border border-white/5 rounded p-1.5">
                    <span className="text-[7px] text-slate-500 block font-bold uppercase">City / State</span>
                    <span className="font-extrabold text-slate-200">Clinton, MO</span>
                  </div>
                  <div className="bg-[#070b13] border border-white/5 rounded p-1.5">
                    <span className="text-[7px] text-slate-500 block font-bold uppercase">Postal Code</span>
                    <span className="font-extrabold text-slate-200">64735</span>
                  </div>
                </div>

                <button className="w-full rounded-lg bg-red-600 hover:bg-red-500 py-2 text-[9px] font-extrabold text-white uppercase tracking-wider transition-colors shadow-md shadow-red-600/15">
                  Lock Address for Lead Route
                </button>
              </div>
            </div>

            {/* Layer 3: Future Unlock Teaser Card (Bottom / Center) */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#145CFF]/30 bg-[#0b1226]/98 p-3 shadow-2xl transform transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#60A5FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-200">Lead Intelligence Unlock</span>
                </div>
                <span className="rounded bg-[#145CFF]/10 border border-[#145CFF]/30 px-2 py-0.5 text-[9px] font-extrabold text-[#60A5FA]">
                  🔑 20 credits
                </span>
              </div>

              {/* Masked Preview Data Rows */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-left text-[10px] pb-2 mb-2 border-b border-white/5">
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-bold uppercase text-[8px] w-12 shrink-0">Owner:</span>
                  <span className="font-extrabold text-white">J*** D****</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-bold uppercase text-[8px] w-12 shrink-0">Mobile:</span>
                  <span className="font-extrabold text-white">(***) ***-1289</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-slate-500 font-bold uppercase text-[8px] w-12 shrink-0">Email:</span>
                  <span className="font-extrabold text-white">j***@g****.com</span>
                </div>
                <div className="flex items-center gap-1 col-span-2">
                  <span className="text-slate-500 font-bold uppercase text-[8px] w-12 shrink-0">Home:</span>
                  <span className="font-semibold text-slate-300">2,140 sq ft · Built 1998</span>
                </div>
                <div className="flex items-center gap-1 col-span-2">
                  <span className="text-slate-500 font-bold uppercase text-[8px] w-12 shrink-0">Roof:</span>
                  <span className="font-semibold text-slate-300 text-[9px] truncate">Asphalt shingle · Est. 14–18 yrs old</span>
                </div>
              </div>

              <button className="w-full rounded-lg bg-[#145CFF] hover:bg-[#2F7DFF] py-2 text-[10px] font-extrabold text-white uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/20">
                Unlock Full Storm Lead
              </button>
            </div>

          </div>

        </div>

        {/* Optional Step Timeline */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                step: "01",
                title: "Live radar + storm reports",
                desc: "Detect localized weather anomalies and verified hail reports in real-time."
              },
              {
                step: "02",
                title: "Neighborhood-level targeting",
                desc: "Zoom in on streets and property blocks within the active storm damage zone."
              },
              {
                step: "03",
                title: "Verified property address",
                desc: "Ensure accurate target coordinates and property structural categorization."
              },
              {
                step: "04",
                title: "Credit-based lead intelligence",
                desc: "Unlock name, contact numbers, email, and roof age properties dynamically."
              }
            ].map((step, index) => (
              <div key={index} className="relative p-5 rounded-xl border border-white/5 bg-[#090b12] hover:border-[#145CFF]/30 transition-all duration-300">
                <div className="text-2xl font-extrabold text-[#145CFF] opacity-60 mb-2">{step.step}</div>
                <h4 className="text-sm sm:text-base font-extrabold text-white mb-1">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
