import React from "react";

export default function PurchaseOptions() {
  const MAP_URL = "https://sms.leadzer.io/storm-map";
  const RADAR_IMAGE = "/landing/storm-map-teaser/radar-map-overview.png";

  return (
    <section id="products" className="bg-[#070b13] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#145CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* TWO-COLUMN GRID */}
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-12 items-center text-left">
          
          {/* LEFT COLUMN: Copywriting, CTA buttons, microcopy, and compact workflow row */}
          <div className="lg:col-span-5 space-y-6 relative z-20">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#60A5FA] block">
                LIVE STORM TARGETING
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[38px] lg:leading-[1.15]">
                See the Storm. Find the Homes. Book the Inspections.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Click into the live storm map, review detailed storm reports, access homeowner contact information, and request in-person roof inspection appointments.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white px-7 py-3.5 text-sm font-extrabold shadow-lg shadow-blue-500/20 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                Open Live Storm Map
              </a>
              <a 
                href="#calendar"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent text-slate-300 hover:text-white hover:bg-white/5 px-7 py-3.5 text-sm font-extrabold hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                Request Inspection Appointments
              </a>
            </div>

            {/* Microcopy under buttons */}
            <p className="text-[11.5px] text-[#60A5FA] font-bold tracking-wide mt-2">
              Start targeting storm-hit properties from the live map.
            </p>

            {/* Compact Workflow Row */}
            <div className="border-t border-white/5 pt-6">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">Workflow</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-bold flex flex-wrap gap-x-2 gap-y-1 items-center">
                <span>Open Live Map</span>
                <span className="text-slate-600">→</span>
                <span>Review Storm Report</span>
                <span className="text-slate-600">→</span>
                <span>Access Contact Info</span>
                <span className="text-slate-600">→</span>
                <span>Request Appointment</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Staggered Stack of Exactly 3 Diagonal Panels */}
          <div className="lg:col-span-7 w-full relative z-10">
            
            {/* Visual Floating Labels */}
            <div className="absolute top-[-30px] left-4 bg-slate-900/90 border border-white/10 px-2.5 py-1 rounded text-[8px] font-extrabold text-[#60A5FA] uppercase tracking-wider z-50 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF] animate-pulse" />
              Live Storm Map
            </div>
            <div className="absolute bottom-[35%] right-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded text-[8px] font-extrabold text-emerald-400 uppercase tracking-wider z-50 flex items-center gap-1.5 shadow-md">
              Property-Level Targeting
            </div>
            <div className="absolute bottom-[-20px] left-10 bg-slate-900/90 border border-white/10 px-2.5 py-1 rounded text-[8px] font-extrabold text-slate-300 uppercase tracking-wider z-50 flex items-center gap-1.5 shadow-md">
              Click Into The Map
            </div>

            {/* Desktop diagonal view container (height bounded) */}
            <div className="relative w-full min-h-[500px] md:min-h-[520px] lg:min-h-[500px] xl:min-h-[530px] [perspective:1000px] py-4">
              <div className="grid grid-cols-1 gap-6 md:block md:relative md:w-full md:h-full">

                {/* PANEL 1: Live Storm Map (Upper-Left) */}
                <div className="group bg-[#0c1220]/95 border border-white/10 rounded-2xl p-4.5 shadow-xl text-left transition-all duration-500 md:absolute md:top-0 md:left-0 md:w-[310px] md:h-[200px] z-10 md:[transform:rotate(-3deg)] md:hover:[transform:rotate(0deg)_translateY(-6px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-[#145CFF]/15">
                  <div className="space-y-3.5">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center text-[8.5px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2">
                      <span>Radar + Storm Reports</span>
                      <span className="text-[#145CFF]">Panel 01</span>
                    </div>

                    {/* Visual Mockup - Map Screenshot */}
                    <a 
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-xl border border-white/5 h-[100px] bg-[#06090f] overflow-hidden cursor-pointer"
                    >
                      <img 
                        src={RADAR_IMAGE} 
                        alt="Radar map overview" 
                        className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 transition duration-300"
                      />
                      <div className="absolute top-1.5 left-1.5 bg-[#ef4444]/20 border border-[#ef4444]/30 px-1 py-0.25 rounded text-[6px] font-black text-[#f87171] uppercase tracking-wider">
                        LIVE RADAR
                      </div>
                    </a>

                    {/* Caption */}
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Track storm-hit areas and identify where roofing opportunities are forming.
                    </p>

                  </div>
                </div>

                {/* PANEL 2: Storm Report + Homeowner Contact Information (Center-Right, Slightly Lower) */}
                <div className="group bg-[#0c1220]/95 border border-white/10 rounded-2xl p-4.5 shadow-xl text-left transition-all duration-500 md:absolute md:top-[100px] md:right-[2%] md:w-[330px] md:h-[210px] z-20 md:[transform:rotate(2deg)] md:hover:[transform:rotate(0deg)_translateY(-6px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-emerald-500/15">
                  <div className="space-y-3.5">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center text-[8.5px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2">
                      <span>Storm + Contact Intelligence</span>
                      <span className="text-emerald-400">Panel 02</span>
                    </div>

                    {/* Custom Split Visual Card */}
                    <div className="rounded-xl border border-white/5 p-2 bg-[#06090f] h-[110px] flex items-center justify-between text-[7px] sm:text-[8px] relative">
                      <span className="absolute top-1.5 right-1.5 bg-slate-800 border border-slate-700/50 text-slate-400 font-extrabold px-1 py-0.25 rounded text-[6px] uppercase tracking-wider">
                        Illustrative Preview
                      </span>
                      
                      {/* Left: Storm Report */}
                      <div className="flex-1 space-y-1 border-r border-white/5 pr-1.5">
                        <span className="text-[7.5px] text-[#60A5FA] font-extrabold uppercase tracking-wider block">Storm Report</span>
                        <div className="space-y-0.5 text-slate-400 leading-tight">
                          <div>Hail Area: <strong className="text-white font-bold block text-[8px]">Dearborn, MI</strong></div>
                          <div>Report Count: <strong className="text-white font-bold">48</strong></div>
                          <div>Max Magnitude: <strong className="text-white font-bold">1.75 in</strong></div>
                          <div>Storm Score: <strong className="text-white font-bold text-emerald-400">190</strong></div>
                        </div>
                      </div>

                      {/* Right: Masked Contact Info */}
                      <div className="flex-1 space-y-1 pl-1.5">
                        <span className="text-[7.5px] text-emerald-400 font-extrabold uppercase tracking-wider block">Contact Info</span>
                        <div className="space-y-0.5 text-slate-400 leading-tight">
                          <div className="truncate">Owner: <strong className="text-white font-bold block text-[8px]">J*** D****</strong></div>
                          <div>Mobile: <strong className="text-white font-bold block">(***) ***-4821</strong></div>
                          <div className="truncate">Email: <strong className="text-white font-bold block text-[8.5px]">j***@g****.com</strong></div>
                          <div className="text-[6.5px] text-emerald-400 font-extrabold uppercase mt-0.5">Available</div>
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Review the storm event, affected property, and homeowner outreach details in one view.
                    </p>

                  </div>
                </div>

                {/* PANEL 3: Rooftop Inspection Appointment (Lower-Left/Center) */}
                <div className="group bg-[#0c1325]/98 border-2 border-[#145CFF] rounded-2xl p-4.5 shadow-xl text-left transition-all duration-500 md:absolute md:top-[230px] md:left-[8%] md:w-[320px] md:h-[210px] z-30 md:[transform:rotate(-2deg)] md:hover:[transform:rotate(0deg)_translateY(-6px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-[#145CFF]/30">
                  <div className="space-y-3.5">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center text-[8.5px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2">
                      <span>Confirmed Appointment</span>
                      <span className="text-white bg-[#145CFF] px-1.5 py-0.25 rounded text-[7px] font-black tracking-wider uppercase">Highest Value</span>
                    </div>

                    {/* Custom Calendar Card Mockup */}
                    <div className="rounded-xl border border-white/10 p-2 bg-[#06090f] h-[110px] flex flex-col justify-center text-[7.5px] space-y-1">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1">
                        <span className="text-white font-extrabold text-[8.5px] block">Confirmed Roof Inspection</span>
                        <span className="text-[#00e676] bg-[#00e676]/10 px-1 py-0.25 rounded text-[7px] font-black tracking-wide uppercase border border-[#00e676]/20">Confirmed</span>
                      </div>
                      
                      <div className="space-y-0.5 text-slate-400 leading-snug">
                        <div>Homeowner: <strong className="text-white font-extrabold">Marcus K.</strong></div>
                        <div>Phone: <strong className="text-white font-bold">(***) ***-4821</strong></div>
                        <div>Status: <span className="text-[#00e676] font-bold">Confirmed</span>  ·  <span className="text-[#60A5FA] font-bold">Thu @ 4:00 PM</span></div>
                      </div>

                      <div className="flex gap-1.5 justify-end text-[7px] font-extrabold pt-0.5">
                        <span className="bg-white/5 border border-white/10 text-white rounded px-1.5 py-0.5">Directions</span>
                        <span className="bg-[#145CFF] text-white rounded px-1.5 py-0.5">Send to CRM</span>
                      </div>
                    </div>

                    {/* Caption */}
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Turn storm-hit property intelligence into scheduled inspection opportunities.
                    </p>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
