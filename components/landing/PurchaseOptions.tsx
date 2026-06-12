import React from "react";

export default function PurchaseOptions() {
  const MAP_URL = "https://sms.leadzer.io/storm-map";

  return (
    <section id="products" className="bg-[#070b13] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#145CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Copywriting, CTA, and 5-Step Process Strip */}
          <div className="space-y-8 lg:col-span-5 text-left relative z-20">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#145CFF]/30 bg-[#145CFF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active Targeting Console
              </span>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
                Choose How You Want to Turn Storms Into Roofing Opportunities
              </h2>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Start with a detailed storm report, add homeowner contact information, or let us convert storm-hit properties into guaranteed in-person inspection appointments.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-[#145CFF] text-white px-8 py-4 text-base font-extrabold shadow-lg shadow-blue-500/20 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
              >
                Open Live Storm Map
              </a>
              <span className="block mt-2.5 text-[11px] text-slate-500 font-semibold italic text-left">
                * Click into the live storm map to start targeting storm-hit properties.
              </span>
            </div>

            {/* 5-Step Process Strip */}
            <div className="border-t border-white/5 pt-8 space-y-4.5">
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

          {/* RIGHT SIDE: Interactive 3D Mockup / Preview Stack */}
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

            {/* 3D Container viewport (desktop only) */}
            <div className="relative w-full min-h-[640px] md:min-h-[750px] lg:min-h-[700px] xl:min-h-[780px] [perspective:1500px]">
              
              {/* FOUNDATION LAYER: Clickable Radar Map Screenshot */}
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 block rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 opacity-35 bg-[#06080e] [transform:rotateY(-16deg)_rotateX(12deg)_skewY(-3deg)] hover:opacity-55 hover:border-[#145CFF]/40 group"
              >
                <img 
                  src="/storm_map.png" 
                  alt="Live Storm Map Radar Preview" 
                  className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[1.5px]">
                  <span className="bg-[#145CFF] text-white text-xs font-black px-4.5 py-2.5 rounded-xl uppercase tracking-wider shadow-lg flex items-center gap-2">
                    Enter Storm Map
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>

              {/* OVERLAPPING FOREGROUND 3D diagonal product preview stack */}
              <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
                <div className="grid grid-cols-1 gap-6 md:block md:relative md:w-full md:h-full">

                  {/* CARD 1: Detailed Storm Report */}
                  <div className="bg-[#0c1220]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl md:absolute md:top-[2%] md:left-[2%] md:w-[280px] z-10 transition-all duration-500 md:[transform:rotateY(-16deg)_rotateX(12deg)_skewY(-3deg)_translateZ(20px)] md:hover:[transform:rotateY(-5deg)_rotateX(5deg)_skewY(0deg)_translateY(-8px)_translateZ(60px)] md:hover:z-50 md:hover:border-[#145CFF]/30">
                    <div className="space-y-4">
                      
                      {/* Mini interface visualization */}
                      <div className="bg-[#06090f] border border-white/5 rounded-lg p-3 space-y-2 text-[10px]">
                        <div className="flex justify-between items-center text-slate-500 font-extrabold uppercase text-[7.5px]">
                          <span>Storm Report Card</span>
                          <span className="text-[#145CFF]">Active Corridor</span>
                        </div>
                        <div>
                          <span className="text-[7.5px] text-slate-500 block uppercase font-bold">Location</span>
                          <span className="font-extrabold text-white text-[11px]">Clinton, MO</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 py-1 border-t border-b border-white/5 text-slate-300 font-bold">
                          <div>
                            <span className="text-[6.5px] text-slate-500 block">Hail Max</span>
                            <span className="text-white text-[9.5px]">1.25&quot;</span>
                          </div>
                          <div>
                            <span className="text-[6.5px] text-slate-500 block">Wind Max</span>
                            <span className="text-white text-[9.5px]">52 mph</span>
                          </div>
                          <div>
                            <span className="text-[6.5px] text-slate-500 block">Hits</span>
                            <span className="text-white text-[9.5px]">190</span>
                          </div>
                        </div>
                        <div className="text-slate-400 text-[8px] italic leading-tight">
                          Contact Details: Available with Homeowner Contact Information
                        </div>
                      </div>

                      <div className="space-y-1 text-left">
                        <h3 className="text-sm font-extrabold text-white">Detailed Storm Report</h3>
                        <p className="text-[10px] text-slate-400 leading-normal">
                          See where the storm hit, which properties were affected, and why the area matters.
                        </p>
                      </div>

                      <ul className="space-y-1.5 text-[9.5px] text-slate-300 border-t border-white/5 pt-3">
                        {[
                          "Storm event summary",
                          "Radar / hail / wind context",
                          "Affected area overview",
                          "Storm severity indicators",
                          "Report count & proximity signals",
                          "Neighborhood targeting context",
                          "Map-ready storm intelligence",
                        ].map((point, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF] shrink-0" />
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a 
                        href={MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 py-2 text-[10px] font-extrabold text-white uppercase tracking-wider transition-colors pointer-events-auto"
                      >
                        View Storm Intelligence
                      </a>

                    </div>
                  </div>

                  {/* CARD 2: Detailed Storm Report + Homeowner Contact Information */}
                  <div className="bg-[#0c1220]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl md:absolute md:top-[34%] md:left-[10%] md:w-[360px] z-20 transition-all duration-500 md:[transform:rotateY(-16deg)_rotateX(12deg)_skewY(-3deg)_translateZ(40px)] md:hover:[transform:rotateY(-5deg)_rotateX(5deg)_skewY(0deg)_translateY(-8px)_translateZ(80px)] md:hover:z-50 md:hover:border-emerald-500/30">
                    <div className="space-y-4">
                      
                      {/* Split interface visualization */}
                      <div className="grid grid-cols-2 gap-2 text-[9.5px] relative">
                        
                        <span className="absolute top-[-15px] right-0 bg-emerald-500 text-slate-950 font-black px-1.5 py-0.25 rounded-[3px] text-[7.5px] uppercase tracking-wider">
                          Illustrative Preview
                        </span>

                        <div className="bg-[#06090f] border border-white/5 rounded-lg p-2.5 space-y-1">
                          <span className="text-[7px] text-[#60A5FA] font-extrabold uppercase block tracking-wider">Storm Report</span>
                          <div className="text-slate-300 space-y-0.5">
                            <div className="truncate text-white font-bold">Barberton, OH</div>
                            <div>Hail size: 1.75&quot;</div>
                            <div>Roof Risk: High</div>
                            <div className="text-[#00e676] font-bold">Active Zone</div>
                          </div>
                        </div>

                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-2.5 space-y-1">
                          <span className="text-[7.5px] text-emerald-400 font-extrabold uppercase block tracking-wider">Contact Info</span>
                          <div className="text-slate-300 space-y-0.5">
                            <div className="text-white font-bold">J*** D****</div>
                            <div>(***) ***-4821</div>
                            <div className="truncate">j***@g****.com</div>
                            <div className="text-emerald-400 font-bold">Verified Owner</div>
                          </div>
                        </div>

                      </div>

                      <div className="space-y-1 text-left">
                        <h3 className="text-sm font-extrabold text-white">Report + Contact Information</h3>
                        <p className="text-[10px] text-slate-400 leading-normal">
                          Receive the storm intelligence plus the homeowner details needed for outreach.
                        </p>
                      </div>

                      <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[9.5px] text-slate-300 border-t border-white/5 pt-3">
                        {[
                          "Detailed storm report",
                          "Affected property address",
                          "Homeowner name",
                          "Phone numbers",
                          "Email addresses",
                          "Mailing address details",
                          "Property details",
                          "Roof/home indicators",
                          "Confidence indicators",
                        ].map((point, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a 
                        href={MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 py-2 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider transition-colors pointer-events-auto"
                      >
                        Get Contact Information
                      </a>

                    </div>
                  </div>

                  {/* CARD 3: Guaranteed In-Person Inspection Appointments (Most Highlighted) */}
                  <div className="bg-[#0c1325] border-2 border-[#145CFF] rounded-2xl p-5.5 shadow-2xl md:absolute md:top-[12%] md:right-[2%] md:w-[330px] z-40 transition-all duration-500 md:[transform:rotateY(-16deg)_rotateX(12deg)_skewY(-3deg)_translateZ(80px)] md:hover:[transform:rotateY(-2deg)_rotateX(3deg)_skewY(0deg)_translateY(-10px)_translateZ(120px)] md:hover:z-50 md:hover:shadow-[#145CFF]/30">
                    
                    <span className="absolute right-4 -top-3 rounded-full bg-[#145CFF] px-2.5 py-0.5 text-[7.5px] font-black uppercase tracking-widest text-white border border-[#0c1325] shadow-lg">
                      Highest Value
                    </span>

                    <div className="space-y-4">
                      
                      {/* Active Calendar slot mockup */}
                      <div className="bg-[#06090f] border border-white/10 rounded-lg p-3 space-y-2 text-[9.5px]">
                        <div className="flex justify-between items-center border-b border-white/5 pb-1.5 text-[7.5px] text-slate-500 uppercase font-black">
                          <span>Confirmed Booking</span>
                          <span className="text-[#00e676] bg-[#00e676]/10 px-1 py-0.25 rounded border border-[#00e676]/20">Confirmed</span>
                        </div>
                        
                        <div className="text-left space-y-1">
                          <div className="text-white font-extrabold">Marcus K.</div>
                          <div className="text-slate-400">(***) ***-4821  ·  m***@g****.com</div>
                          <div className="text-[#60A5FA] font-bold">Thursday, June 18 @ 4:00 PM</div>
                          <div className="text-slate-300 truncate">1420 Pine Creek Dr, Orlando FL</div>
                        </div>

                        <div className="flex gap-2 justify-end text-[7.5px] font-extrabold pt-1">
                          <button className="bg-white/5 border border-white/10 text-white rounded px-2 py-0.75 cursor-default">
                            Directions
                          </button>
                          <button className="bg-[#145CFF] text-white rounded px-2 py-0.75 cursor-default shadow-md shadow-blue-500/10">
                            Send to CRM
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1 text-left">
                        <h3 className="text-sm font-extrabold text-white">Guaranteed Appointments</h3>
                        <p className="text-[10px] text-slate-300 leading-normal">
                          We turn storm-affected property intelligence into confirmed roof inspection opportunities.
                        </p>
                        <p className="text-[10.5px] font-bold text-white leading-snug border-l-2 border-[#145CFF] pl-2 py-0.5 mt-1.5">
                          Raw data is optional. Booked inspections are the outcome.
                        </p>
                      </div>

                      <ul className="space-y-1.5 text-[9.5px] text-slate-200 border-t border-white/10 pt-3">
                        {[
                          "Storm-hit property targeting",
                          "Homeowner outreach & qualification",
                          "Confirmed date/time slot schedule",
                          "Route-ready appointment details",
                          "Eligible no-show replacement",
                        ].map((point, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-[#00e676] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-semibold text-slate-100 truncate">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[8.5px] text-slate-500 leading-normal italic text-left pt-1">
                        Appointments are inspection opportunities only. We do not guarantee roof damage, insurance approval, claim outcome, or closed jobs.
                      </div>

                      <a 
                        href={MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center rounded-lg bg-[#145CFF] hover:bg-[#2F7DFF] py-2.5 text-[10px] font-extrabold text-white uppercase tracking-wider transition-all shadow-md shadow-blue-500/15 pointer-events-auto animate-pulse"
                      >
                        Request Appointments
                      </a>

                    </div>
                  </div>

                  {/* CARD 4: Managed Storm Campaign */}
                  <div className="bg-[#0c1220]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl md:absolute md:bottom-[2%] md:right-[16%] md:w-[280px] z-10 transition-all duration-500 md:[transform:rotateY(-16deg)_rotateX(12deg)_skewY(-3deg)_translateZ(30px)] md:hover:[transform:rotateY(-5deg)_rotateX(5deg)_skewY(0deg)_translateY(-8px)_translateZ(70px)] md:hover:z-50 md:hover:border-[#145CFF]/30">
                    <div className="space-y-4">
                      
                      {/* Campaign preview graphic */}
                      <div className="bg-[#06090f] border border-white/5 rounded-lg p-2.5 space-y-1.5 text-[9.5px]">
                        <div className="flex justify-between items-center text-[7.5px] text-slate-500 font-extrabold uppercase">
                          <span>Outsource Campaign</span>
                          <span className="text-[#60A5FA]">Active</span>
                        </div>
                        <div className="text-slate-300">
                          <div>Territory: <span className="text-white font-bold">Orlando East</span></div>
                          <div>Outreach Channels: <span className="text-white font-bold">Voice, SMS, Mail</span></div>
                        </div>
                      </div>

                      <div className="space-y-1 text-left">
                        <h3 className="text-sm font-extrabold text-white">Managed Storm Campaign</h3>
                        <p className="text-[10px] text-slate-400 leading-normal">
                          A done-for-you storm response campaign for contractors that want speed and scale.
                        </p>
                      </div>

                      <ul className="space-y-1.5 text-[9.5px] text-slate-300 border-t border-white/5 pt-3">
                        {[
                          "Storm monitoring & market select",
                          "Target market property selection",
                          "Homeowner contact data & enrichment",
                          "Outbound outreach operations",
                          "Appointment generation & sync",
                          "Full campaign reporting",
                          "Strict territory controls",
                        ].map((point, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#145CFF] shrink-0" />
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a 
                        href={MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 py-2 text-[10px] font-extrabold text-white uppercase tracking-wider transition-colors pointer-events-auto"
                      >
                        Build My Campaign
                      </a>

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Global Compliance & Disclaimer notice */}
        <div className="mt-16 text-center max-w-4xl mx-auto rounded-xl border border-white/5 bg-[#090e18]/80 p-4 text-[11px] sm:text-xs text-slate-500 leading-normal relative z-20">
          <strong>Important Notice:</strong> Sample previews are illustrative. Storm, property, contact, and roof data availability varies by location, provider coverage, and source. Appointment guarantees apply to qualified program terms and eligible no-shows only.
        </div>

      </div>
    </section>
  );
}
