import React from "react";

export default function StormAcquisitionHero() {
  return (
    <section className="relative overflow-hidden bg-[#070b13] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      {/* Background visual accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#145CFF]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#145CFF]/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left: Text & CTA */}
          <div className="space-y-6 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#145CFF]/30 bg-[#145CFF]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              StormResponse Acquisition System
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Turn Storm Activity Into Roof Inspection Opportunities
            </h1>

            <p className="text-base text-slate-400 sm:text-lg lg:text-xl leading-relaxed">
              Track live storm systems, identify affected neighborhoods, unlock homeowner and property intelligence, or have us book guaranteed in-person inspection appointments for your roofing team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 shrink-0">
              <a 
                href="#calendar" 
                className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white px-7 py-4 text-base font-extrabold shadow-lg shadow-blue-500/20 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                Open Live Storm Map
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent text-slate-300 hover:text-white hover:bg-white/5 px-7 py-4 text-base font-extrabold hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                See Product Options
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 text-xs text-slate-400 font-bold uppercase tracking-wider">
              <div>
                <span className="block text-2xl font-extrabold text-white mb-0.5">Real-Time</span>
                Radar storm tracking
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white mb-0.5">Verified</span>
                Homeowner details
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white mb-0.5">Guaranteed</span>
                Inspection slots
              </div>
            </div>
          </div>

          {/* Right: Layered visual preview */}
          <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/3.2] rounded-2xl border border-white/10 bg-[#090b11] overflow-hidden shadow-2xl shadow-black/50 select-none mx-auto">
            {/* Live Map Graphic Base */}
            <div className="absolute inset-0 bg-[#06080e] overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-10 stroke-slate-500" strokeWidth="0.5" fill="none">
                <path d="M 0,40 L 500,50 M 0,120 L 500,100 M 0,200 L 500,210 M 0,300 L 500,285 M 0,370 L 500,380" />
                <path d="M 50,0 L 70,400 M 150,0 L 140,400 M 270,0 L 280,400 M 370,0 L 350,400 M 450,0 L 460,400" />
              </svg>

              {/* Storm cell layers */}
              <div className="absolute top-[15%] left-[20%] w-[180px] h-[150px] bg-gradient-to-br from-green-500/20 via-emerald-600/15 to-transparent blur-md rounded-full" />
              <div className="absolute top-[22%] left-[26%] w-[100px] h-[80px] bg-gradient-to-br from-yellow-500/25 via-amber-600/15 to-transparent blur-sm rounded-full" />
              <div className="absolute top-[26%] left-[30%] w-[45px] h-[35px] bg-red-600/35 blur-[3px] rounded-full" />
            </div>

            {/* Layer 1: "Live Radar" (Top Right) */}
            <div className="absolute top-3 right-3 rounded-lg border border-[#145CFF]/30 bg-[#145CFF]/15 backdrop-blur-md px-2.5 py-1 text-[8px] sm:text-[9px] font-extrabold text-[#60A5FA] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF] animate-pulse"></span>
              Live Radar Active
            </div>

            {/* Layer 2: "Hail Area Detected" (Top Left) */}
            <div className="absolute top-4 left-4 w-[190px] rounded-xl border border-white/5 bg-[#0c1220]/90 backdrop-blur-md p-2.5 shadow-lg">
              <div className="flex items-center gap-1 border-b border-white/5 pb-1 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                <span className="text-[7.5px] font-extrabold uppercase tracking-wider text-slate-400">Hail Area Detected</span>
              </div>
              <p className="text-[11px] font-extrabold text-white text-left">Dearborn, MI</p>
              <div className="flex gap-4 text-[8px] text-slate-400 mt-1">
                <span>Size: <strong>1.75 in</strong></span>
                <span>Proximity: <strong>Active</strong></span>
              </div>
            </div>

            {/* Layer 3: "Verified Address Locked" (Center / Right) */}
            <div className="absolute top-[35%] right-4 w-[210px] rounded-xl border border-white/5 bg-[#0c1220]/95 backdrop-blur-md p-2.5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-1 mb-1.5">
                <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider">Verified Address Locked</span>
                <span className="rounded bg-[#11A36A]/10 px-1 py-0.5 text-[7px] font-extrabold text-[#11A36A]">100% MATCH</span>
              </div>
              <p className="text-[9.5px] font-extrabold text-white text-left truncate">210 East Bodine Avenue</p>
              <p className="text-[8.5px] text-slate-400 text-left">Clinton, MO 64735</p>
            </div>

            {/* Layer 4: "Lead Intelligence Available" (Bottom Left) */}
            <div className="absolute bottom-[22%] left-4 w-[200px] rounded-xl border border-white/5 bg-[#0b1226]/98 p-2.5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-1 mb-1.5">
                <span className="text-[7.5px] font-extrabold text-[#60A5FA] uppercase tracking-wider">Lead Intelligence</span>
                <span className="text-[7px] text-[#11A36A] font-extrabold">AVAILABLE</span>
              </div>
              <div className="space-y-1 text-left text-[8.5px]">
                <div className="text-slate-300">Owner: <span className="font-bold text-white">J*** D****</span></div>
                <div className="text-slate-300">Mobile: <span className="font-bold text-white">(***) ***-1289</span></div>
              </div>
            </div>

            {/* Layer 5: "Appointment Route Ready" (Bottom Banner) */}
            <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-[#11A36A]/15 border border-[#11A36A]/30 p-2 text-center shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-center gap-1.5 text-[9px] font-extrabold text-[#11A36A] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11A36A]"></span>
                Appointment Route Ready · Exclusive Assignment
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
