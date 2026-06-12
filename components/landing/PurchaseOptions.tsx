import React from "react";

export default function PurchaseOptions() {
  const MAP_URL = "https://sms.leadzer.io/storm-map";
  const RADAR_IMAGE = "/landing/storm-map-teaser/radar-map-overview.png";

  return (
    <section id="products" className="bg-[#070b13] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#145CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1200px] relative z-10 text-center">
        
        {/* TOP HEADER & COPY BLOCK */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          
          <span className="inline-flex items-center gap-2 rounded-full border border-[#145CFF]/30 bg-[#145CFF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Targeting Console
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] leading-tight">
            See the Storm. Find the Homes. Book the Inspections.
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Click into the live storm map, review detailed storm reports, access homeowner contact information, and request guaranteed in-person inspection appointments.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-[#145CFF] text-white px-8 py-4 text-base font-extrabold shadow-lg shadow-blue-500/20 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
            >
              Open Live Storm Map
            </a>
            <a 
              href="#calendar"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl border border-white/20 bg-transparent text-slate-300 hover:text-white hover:bg-white/5 px-8 py-4 text-base font-extrabold hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] select-none cursor-pointer"
            >
              Request Inspection Appointments
            </a>
          </div>

          <span className="block text-[11px] text-[#60A5FA] font-bold tracking-wide animate-pulse">
            👉 Click into the live map to start targeting storm-hit properties.
          </span>

        </div>

        {/* PROCESS TIMELINE STRIP */}
        <div className="mx-auto max-w-4xl bg-slate-900/50 border border-white/5 rounded-2xl p-4 sm:p-5 mb-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-left text-xs">
            {[
              { step: "1", title: "Open Live Storm Map", desc: "Access the targeting console" },
              { step: "2", title: "Review Storm Report", desc: "Check hail & wind severity" },
              { step: "3", title: "Access Homeowner Contact Information", desc: "Retrieve verified cell/email lists" },
              { step: "4", title: "Request Inspection Appointment", desc: "Confirm dates on your calendar" },
            ].map((item) => (
              <div key={item.step} className="space-y-1.5 border-l border-white/10 pl-3.5 first:border-l-0">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#145CFF]/15 text-[9px] font-black text-[#60A5FA] border border-[#145CFF]/20">
                  {item.step}
                </span>
                <div className="space-y-0.5">
                  <strong className="text-white font-extrabold block text-[11px]">{item.title}</strong>
                  <span className="text-slate-500 font-medium text-[10px] block leading-tight">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* THREE DIAGONAL PREVIEW PANELS */}
        <div className="grid gap-8 md:grid-cols-3 items-start md:[perspective:1000px] py-6 max-w-[1100px] mx-auto">
          
          {/* PANEL 1: Live Storm Map */}
          <div className="group bg-[#0c1220]/95 border border-white/10 rounded-2xl p-5 shadow-xl text-left transition-all duration-500 md:mt-8 md:[transform:rotateY(-4deg)_rotateX(3deg)_skewY(-1deg)_translateY(8px)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_skewY(0deg)_translateY(-8px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-[#145CFF]/15">
            <div className="space-y-4">
              
              {/* Header */}
              <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2.5">
                <span>Radar + Storm Reports</span>
                <span className="text-[#145CFF]">Panel 01</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-white">Live Storm Map</h3>

              {/* Visual Panel Mockup */}
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl border border-white/5 aspect-[4/3] bg-[#06090f] overflow-hidden shadow-inner cursor-pointer"
              >
                <img 
                  src={RADAR_IMAGE} 
                  alt="Live Storm Map Radar Preview" 
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <div className="absolute top-2 left-2 bg-[#145CFF]/15 border border-[#145CFF]/20 px-1.5 py-0.5 rounded text-[7px] font-black text-[#60A5FA] uppercase tracking-wider">
                  RADAR ACTIVE
                </div>
              </a>

              {/* Caption */}
              <p className="text-[11.5px] text-slate-400 leading-normal pt-1">
                Track storm-hit areas and identify where roofing opportunities are forming.
              </p>

            </div>
          </div>

          {/* PANEL 2: Detailed Storm Report + Homeowner Contact Information */}
          <div className="group bg-[#0c1220]/95 border border-white/10 rounded-2xl p-5 shadow-xl text-left transition-all duration-500 md:mt-0 md:[transform:rotateY(-4deg)_rotateX(3deg)_skewY(-1deg)_translateY(-8px)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_skewY(0deg)_translateY(-16px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-emerald-500/15">
            <div className="space-y-4">
              
              {/* Header */}
              <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-slate-500 border-b border-white/5 pb-2.5">
                <span>Storm + Contact Intelligence</span>
                <span className="text-emerald-400">Panel 02</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-white">Report + Contact Information</h3>

              {/* Visual Panel Mockup */}
              <div className="rounded-xl border border-white/5 p-3.5 bg-[#06090f] shadow-inner space-y-2.5 relative aspect-[4/3] flex flex-col justify-center text-[9px]">
                
                <span className="absolute top-2.5 right-2.5 bg-slate-800 border border-slate-700/50 text-slate-400 font-extrabold px-1.5 py-0.25 rounded text-[7px] uppercase tracking-wider">
                  Illustrative Preview
                </span>

                {/* Storm Metrics */}
                <div className="border-b border-white/5 pb-2">
                  <span className="text-[7px] text-[#60A5FA] font-extrabold uppercase tracking-wider block mb-0.5">Storm Report Summary</span>
                  <div className="flex justify-between items-center text-slate-300 font-bold">
                    <span>Hail Max: <strong className="text-white">1.75&quot;</strong></span>
                    <span>Proximity: <strong className="text-white">Active Corridor</strong></span>
                  </div>
                </div>

                {/* Contact details */}
                <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-lg p-2.5 space-y-1 text-slate-300">
                  <span className="text-[7.5px] text-emerald-400 font-extrabold uppercase tracking-wider block">Homeowner details</span>
                  <div className="text-white font-extrabold text-[10.5px]">Owner: J*** D****</div>
                  <div>Mobile: (***) ***-4821</div>
                  <div>Email: j***@g****.com</div>
                  <div className="text-[7px] text-slate-500 font-medium italic block mt-0.5">
                    Available with Homeowner Contact Information
                  </div>
                </div>

              </div>

              {/* Caption */}
              <p className="text-[11.5px] text-slate-400 leading-normal pt-1">
                Review the storm event, affected property, and homeowner outreach details in one view.
              </p>

            </div>
          </div>

          {/* PANEL 3: Rooftop Inspection Appointment */}
          <div className="group bg-[#0c1325]/98 border-2 border-[#145CFF] rounded-2xl p-5 shadow-xl text-left transition-all duration-500 md:mt-8 md:[transform:rotateY(-4deg)_rotateX(3deg)_skewY(-1deg)_translateY(8px)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_skewY(0deg)_translateY(-8px)] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-[#145CFF]/30">
            <div className="space-y-4">
              
              {/* Header */}
              <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2.5">
                <span>Confirmed Appointment</span>
                <span className="text-white bg-[#145CFF] px-2 py-0.5 rounded text-[7.5px] font-black tracking-widest uppercase">Highest Value</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-white">Rooftop Inspection Appointment</h3>

              {/* Visual Panel Mockup */}
              <div className="rounded-xl border border-white/10 p-3 bg-[#06090f] shadow-inner space-y-2 relative aspect-[4/3] flex flex-col justify-center text-[9px]">
                
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <span className="text-white font-extrabold text-[10px] tracking-wide block">Confirmed Roof Inspection</span>
                  <span className="text-[#00e676] bg-[#00e676]/10 px-1 py-0.25 rounded text-[7.5px] font-black tracking-wide uppercase border border-[#00e676]/20">Confirmed</span>
                </div>

                <div className="space-y-0.5 text-slate-300">
                  <div>Homeowner: <strong className="text-white font-extrabold">Marcus K.</strong></div>
                  <div>Phone: (***) ***-4821</div>
                  <div>Date/Time: <span className="text-[#60A5FA] font-bold">Thursday @ 4:00 PM</span></div>
                  <div className="truncate text-slate-400">1420 Pine Creek Dr, Orlando FL</div>
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

              {/* Caption */}
              <p className="text-[11.5px] text-slate-400 leading-normal pt-1">
                Turn storm-hit property intelligence into scheduled inspection opportunities.
              </p>

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
