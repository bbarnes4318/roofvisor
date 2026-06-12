import React from "react";

export default function RadarTeaserPanel() {
  return (
    <section className="bg-[#090e18] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">TACTICAL MAP</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See the Market Before Your Competitors Do
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Real-time storm corridors mapped down to individual property blocks. Zoom into active zones, review localized report details, and claim high-value homeowner targets.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid gap-12 lg:grid-cols-[540px_1fr] items-center">
          
          {/* Left: UI Teaser Panel Mockups */}
          <div className="space-y-6">
            
            {/* Dashboard metrics preview */}
            <div className="rounded-2xl border border-white/5 bg-[#0e1422] p-5 sm:p-6 text-left space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#11A36A] animate-pulse"></span>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-300">Storm Zone Dashboard</h3>
                </div>
                <span className="rounded bg-[#145CFF]/10 px-2 py-0.5 text-[10px] font-bold text-[#60A5FA]">
                  Live Intelligence
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Severity Score</span>
                  <span className="text-lg font-black text-white">92 / 100</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Affected Area</span>
                  <span className="text-lg font-black text-white truncate">Wayne County, MI</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Highest Hail</span>
                  <span className="text-lg font-black text-red-500">1.25 in</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Target Radius</span>
                  <span className="text-lg font-black text-white">10 mi</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Leads Available</span>
                  <span className="text-lg font-black text-[#60A5FA]">1,842 Targets</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Appointment Capacity</span>
                  <span className="text-lg font-black text-[#11A36A]">35 Scheduled</span>
                </div>
              </div>
            </div>

            {/* Premium Locked Data Card */}
            <div className="rounded-2xl border border-[#145CFF]/30 bg-[#0c1226]/98 p-5 sm:p-6 text-left shadow-xl relative overflow-hidden">
              {/* Top border bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#145CFF]" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#60A5FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Locked Property Target</span>
                </div>
                <span className="rounded bg-[#145CFF]/10 border border-[#145CFF]/30 px-2.5 py-0.5 text-[9px] font-extrabold text-[#60A5FA]">
                  🔑 20 credits
                </span>
              </div>

              {/* Masked Preview Data Rows */}
              <div className="grid gap-2 text-xs sm:text-sm border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Owner:</span>
                  <span className="font-extrabold text-white">J*** D****</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Mobile:</span>
                  <span className="font-extrabold text-white">(***) ***-1289</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Email:</span>
                  <span className="font-extrabold text-white">j***@g****.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Home Facts:</span>
                  <span className="font-semibold text-slate-300">2,140 sq ft · Built 1998</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Roof Age:</span>
                  <span className="font-semibold text-slate-300 text-xs truncate">Asphalt shingle · Est. 14–18 yrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Est. Value:</span>
                  <span className="font-semibold text-slate-300">$342,000 est.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold uppercase text-[9px] w-24 shrink-0">Proximity:</span>
                  <span className="font-semibold text-red-400">0.4 mi from hail report</span>
                </div>
              </div>

              <button className="w-full rounded-xl bg-[#145CFF] hover:bg-[#2F7DFF] py-3 text-xs font-extrabold text-white uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/20">
                Unlock Full Storm Lead
              </button>
              
              <span className="text-[10px] text-slate-500 block leading-tight text-center mt-2">
                Data availability varies by source and coverage. Masked numbers are for illustration only.
              </span>
            </div>

          </div>

          {/* Right: Beautiful Map & Radar Screenshot Panel */}
          <div className="relative w-full aspect-[4/3.5] rounded-2xl border border-white/10 bg-[#090b11] overflow-hidden shadow-2xl shadow-black/50 select-none group">
            
            {/* dynamic grid canvas */}
            <div className="absolute inset-0 bg-[#05070c]">
              {/* Fake Neighborhood street grid drawing */}
              <svg className="absolute inset-0 w-full h-full opacity-25 stroke-slate-500" strokeWidth="0.75" fill="none">
                <path d="M 0,20 L 600,30 M 0,90 L 600,80 M 0,160 L 600,180 M 0,240 L 600,230 M 0,310 L 600,320 M 0,390 L 600,380" />
                <path d="M 40,0 L 50,450 M 120,0 L 110,450 M 220,0 L 230,450 M 340,0 L 320,450 M 430,0 L 440,450 M 510,0 L 530,450" />
                {/* diagonal primary highway */}
                <path d="M 0,100 L 600,300" strokeWidth="1.5" stroke="#1e293b" />
              </svg>

              {/* Storm warn polygons */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" fill="none">
                <polygon points="120,80 320,120 400,310 180,290" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1.5" />
                <polygon points="280,180 480,220 520,380 300,340" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="1" />
              </svg>

              {/* Storm cells glowing radar layers */}
              <div className="absolute top-[18%] left-[28%] w-[260px] h-[200px] bg-gradient-to-br from-green-500/20 via-emerald-600/15 to-transparent blur-lg rounded-full" />
              <div className="absolute top-[24%] left-[34%] w-[160px] h-[120px] bg-gradient-to-br from-yellow-500/25 via-amber-600/15 to-transparent blur-md rounded-full" />
              <div className="absolute top-[28%] left-[38%] w-[80px] h-[60px] bg-red-600/35 blur-sm rounded-full" />

              {/* Simulated Property Roof outlines (Satellite zoom markers) */}
              <div className="absolute top-[35%] left-[45%] w-8 h-8 border border-white/20 bg-white/5 rounded rotate-12 flex items-center justify-center">
                <span className="text-[7px] font-bold text-slate-400">#210</span>
              </div>
              <div className="absolute top-[38%] left-[53%] w-7 h-7 border border-white/20 bg-white/5 rounded -rotate-6 flex items-center justify-center">
                <span className="text-[7px] font-bold text-slate-400">#212</span>
              </div>
              <div className="absolute top-[32%] left-[37%] w-8 h-8 border border-white/20 bg-white/5 rounded rotate-45 flex items-center justify-center">
                <span className="text-[7px] font-bold text-slate-400">#208</span>
              </div>

              {/* Lock pin details popup mock */}
              <div className="absolute top-[48%] left-[40%] transform -translate-x-1/2 w-[240px] rounded-xl border border-white/10 bg-[#0c1220]/95 p-3 shadow-2xl">
                <div className="flex items-center gap-1 mb-1 border-b border-white/5 pb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
                  <span className="text-[8px] font-extrabold uppercase tracking-wider text-slate-300">Lock Property Address</span>
                </div>
                <div className="text-left">
                  <p className="text-[9.5px] font-extrabold text-white">210 East Bodine Avenue</p>
                  <p className="text-[8.5px] text-slate-400 mb-2">Clinton, MO · Est. Age: 26 yrs</p>
                  <button className="w-full rounded bg-red-600 hover:bg-red-500 py-1 text-[8px] font-extrabold text-white uppercase tracking-wider transition-colors">
                    Lock Target Route
                  </button>
                </div>
              </div>

              {/* concentric map navigation controls mock */}
              <div className="absolute right-4 top-4 flex flex-col gap-1.5">
                {["🗺️", "➕", "➖", "🔄"].map((control, idx) => (
                  <span key={idx} className="w-8 h-8 rounded-lg bg-[#0e1422]/90 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-300 hover:text-white cursor-pointer shadow-md">
                    {control}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
