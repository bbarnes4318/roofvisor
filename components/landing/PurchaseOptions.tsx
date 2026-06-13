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

            {/* Desktop diagonal view container (height bounded) */}
            <div className="relative w-full md:h-[480px] lg:h-[480px] xl:h-[480px] [perspective:1000px] py-4">
              <div className="grid grid-cols-1 gap-6 md:block md:relative md:w-full md:h-full">

                {/* PANEL 1: Live Storm Map (Upper-Left) */}
                <div className="group bg-[#0c101d]/95 border border-slate-800/80 rounded-[18px] p-5 shadow-2xl text-left transition-all duration-500 w-full max-w-[340px] mx-auto md:max-w-none md:absolute md:top-0 md:left-0 md:w-[330px] md:h-[250px] z-10 md:[transform:rotate(-3deg)] md:hover:[transform:rotate(0deg)_translateY(-6px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-blue-500/10">
                  <div className="flex flex-col h-full justify-between">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#60A5FA]/80">
                        Radar + Storm Reports
                      </span>
                    </div>

                    {/* Visual Mockup - Map Screenshot */}
                    <a 
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-xl border border-white/5 h-[105px] bg-[#06090f] overflow-hidden cursor-pointer"
                    >
                      <img 
                        src={RADAR_IMAGE} 
                        alt="Radar map overview" 
                        className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 transition duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-[#ef4444]/20 border border-[#ef4444]/30 px-1.5 py-0.5 rounded text-[7px] font-black text-[#f87171] uppercase tracking-wider">
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
                <div className="group bg-[#0c101d]/95 border border-slate-800/80 rounded-[18px] p-5 shadow-2xl text-left transition-all duration-500 w-full max-w-[340px] mx-auto md:max-w-none md:absolute md:top-[115px] md:right-0 md:w-[330px] md:h-[250px] z-20 md:[transform:rotate(2deg)] md:hover:[transform:rotate(0deg)_translateY(-6px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-emerald-500/10">
                  <div className="flex flex-col h-full justify-between">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#60A5FA]/80">
                        Storm + Contact Intelligence
                      </span>
                    </div>

                    {/* Custom Split Visual Card */}
                    <div className="rounded-xl border border-white/5 p-3 bg-[#06090f] h-[105px] flex items-stretch text-[8px] relative">
                      
                      {/* Left: Storm Report */}
                      <div className="flex-1 flex flex-col justify-between border-r border-white/5 pr-2">
                        <div className="space-y-1 text-slate-400">
                          <span className="text-[7.5px] text-[#60A5FA] font-extrabold uppercase tracking-wider block">Storm Report</span>
                          <div className="leading-tight">Hail Area: <strong className="text-white font-bold block text-[8.5px]">Dearborn, MI</strong></div>
                          <div className="leading-tight">Report Count: <strong className="text-white font-bold">48</strong></div>
                          <div className="leading-tight">Max Magnitude: <strong className="text-white font-bold">1.75 in</strong></div>
                        </div>
                        <div className="text-[8.5px] font-bold text-[#60A5FA] leading-tight">
                          Storm Score: <strong className="text-emerald-400 font-extrabold">190</strong>
                        </div>
                      </div>

                      {/* Right: Masked Contact Info */}
                      <div className="flex-1 flex flex-col justify-between pl-2">
                        <div className="space-y-1 text-slate-400">
                          <span className="text-[7.5px] text-emerald-400 font-extrabold uppercase tracking-wider block">Contact Info</span>
                          <div className="leading-tight">Owner: <strong className="text-white font-bold block text-[8.5px]">J*** D****</strong></div>
                          <div className="leading-tight">Mobile: <strong className="text-white font-mono text-[7.5px] block">(***) ***-4821</strong></div>
                          <div className="truncate leading-tight">Email: <strong className="text-white text-[8px] block">j***@g****.com</strong></div>
                        </div>
                        <div className="text-[7.5px] text-emerald-400 font-extrabold uppercase text-right leading-tight">
                          Available with contact package
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
                <div className="group bg-[#0c101d]/95 border border-slate-800/80 rounded-[18px] p-5 shadow-2xl text-left transition-all duration-500 w-full max-w-[340px] mx-auto md:max-w-none md:absolute md:top-[230px] md:left-[30px] md:w-[330px] md:h-[250px] z-30 md:[transform:rotate(-2deg)] md:hover:[transform:rotate(0deg)_translateY(-6px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-blue-500/20">
                  <div className="flex flex-col h-full justify-between">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#60A5FA]/80">
                        Confirmed Appointment
                      </span>
                    </div>

                    {/* Custom Calendar Card Mockup */}
                    <div className="rounded-xl border border-white/10 p-3 bg-[#06090f] h-[105px] flex flex-col justify-between text-[8px]">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1">
                        <span className="text-white font-extrabold text-[8.5px]">Confirmed Roof Inspection</span>
                        <span className="text-[#00e676] bg-[#00e676]/10 px-1.5 py-0.5 rounded text-[7.5px] font-black tracking-wide uppercase border border-[#00e676]/20">Confirmed</span>
                      </div>
                      
                      <div className="space-y-1 text-slate-400">
                        <div className="flex justify-between"><span>Homeowner:</span> <strong className="text-white font-bold">Marcus K.</strong></div>
                        <div className="flex justify-between"><span>Phone:</span> <strong className="text-white font-mono text-[7.5px]">(***) ***-4821</strong></div>
                        <div className="flex justify-between"><span>Time:</span> <strong className="text-[#60A5FA] font-bold">Thu @ 4:00 PM</strong></div>
                        <div className="flex justify-between"><span>Status:</span> <strong className="text-[#00e676] font-bold">Confirmed</strong></div>
                      </div>

                      <div className="flex gap-1.5 justify-end text-[7.5px] font-extrabold pt-1 border-t border-white/5">
                        <button type="button" className="bg-white/5 border border-white/10 text-white rounded px-2 py-0.5 hover:bg-white/10 transition cursor-pointer">Directions</button>
                        <button type="button" className="bg-[#145CFF] text-white rounded px-2 py-0.5 hover:bg-[#2F7DFF] transition cursor-pointer">Send to CRM</button>
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
