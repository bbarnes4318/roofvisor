import React from "react";

export default function PurchaseOptions() {
  const MAP_URL = "https://sms.leadzer.io/storm-map";

  return (
    <section id="products" className="bg-[#070b13] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#145CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1200px] relative z-10 text-center">
        
        {/* TOP HEADER & COPY BLOCK */}
        <div className="max-w-4xl mx-auto space-y-5 mb-12">
          
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
            Click into the live storm map, review detailed storm reports, access homeowner contact information, and request in-person roof inspection appointments.
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

          <span className="block text-[11px] text-[#60A5FA] font-bold tracking-wide">
            Start targeting storm-hit properties from the live map.
          </span>

        </div>

        {/* PROCESS TIMELINE STRIP */}
        <div className="mx-auto max-w-3xl bg-slate-900/50 border border-white/5 rounded-2xl p-4 sm:p-5 mb-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-left text-xs">
            {[
              { step: "1", title: "Open Live Map", desc: "Access the targeting console" },
              { step: "2", title: "Review Storm Report", desc: "Check hail & wind severity" },
              { step: "3", title: "Access Contact Info", desc: "Retrieve verified cell/email lists" },
              { step: "4", title: "Request Appointment", desc: "Confirm dates on your calendar" },
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

              {/* Visual Panel Mockup (Custom CSS/SVG Radar Map) */}
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl border border-white/5 aspect-[4/3] bg-[#06090f] overflow-hidden shadow-inner cursor-pointer"
              >
                {/* SVG Dark Grid Map Backdrop */}
                <svg className="absolute inset-0 w-full h-full opacity-25 stroke-slate-700" strokeWidth="0.5" fill="none">
                  <path d="M 0,20 L 500,20 M 0,60 L 500,60 M 0,100 L 500,100 M 0,140 L 500,140 M 0,180 L 500,180 M 0,220 L 500,220" />
                  <path d="M 40,0 L 40,300 M 80,0 L 80,300 M 120,0 L 120,300 M 160,0 L 160,300 M 200,0 L 200,300 M 240,0 L 240,300 M 280,0 L 280,300" />
                </svg>

                {/* SVG Radar Precipitation Bands */}
                <svg className="absolute inset-0 w-full h-full opacity-60" fill="none">
                  <path d="M 50,220 Q 120,130 240,80" stroke="#10b981" strokeWidth="12" strokeLinecap="round" className="opacity-40" />
                  <path d="M 80,210 Q 140,140 220,100" stroke="#eab308" strokeWidth="6" strokeLinecap="round" className="opacity-60" />
                  <path d="M 110,200 Q 150,150 200,120" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" className="opacity-80 animate-pulse" />
                </svg>

                {/* Numbered Storm Markers & Pulsing Dots */}
                <div className="absolute top-[40%] left-[55%] flex items-center justify-center">
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#ef4444] opacity-40 animate-ping" />
                  <span className="relative flex h-4 w-4 rounded-full bg-[#ef4444] border-2 border-white items-center justify-center text-[7px] font-black text-white">1</span>
                </div>
                <div className="absolute top-[60%] left-[35%] flex items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#145CFF] opacity-35 animate-ping" />
                  <span className="relative flex h-3.5 w-3.5 rounded-full bg-[#145CFF] border-2 border-white items-center justify-center text-[6.5px] font-black text-white">2</span>
                </div>
                <div className="absolute top-[30%] left-[25%] flex items-center justify-center">
                  <span className="relative flex h-3 w-3 rounded-full bg-[#145CFF] border border-white" />
                </div>

                {/* Concentric grid labels */}
                <div className="absolute bottom-2.5 right-3 text-[7.5px] font-bold text-slate-500 uppercase tracking-widest">
                  Grid Zone 4A
                </div>

                <div className="absolute top-2.5 left-2.5 bg-[#ef4444]/15 border border-[#ef4444]/30 px-2 py-0.5 rounded text-[7px] font-black text-[#f87171] uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse" />
                  LIVE RADAR
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
              <h3 className="text-base font-extrabold text-white">Storm Report + Contact</h3>

              {/* Visual Panel Mockup */}
              <div className="rounded-xl border border-white/5 p-3.5 bg-[#06090f] shadow-inner gap-3 relative aspect-[4/3] flex items-center justify-between text-[8px] sm:text-[9.5px]">
                
                <span className="absolute top-2 right-2 bg-slate-800 border border-slate-700/50 text-slate-400 font-extrabold px-1.5 py-0.25 rounded text-[7px] uppercase tracking-wider">
                  Illustrative Preview
                </span>

                {/* Left Side: Storm Report */}
                <div className="flex-1 space-y-1.5 border-r border-white/5 pr-2">
                  <span className="text-[7.5px] text-[#60A5FA] font-extrabold uppercase tracking-wider block">Storm Report</span>
                  <div className="space-y-1 text-slate-400 leading-tight">
                    <div>Hail Area: <strong className="text-white font-bold block text-[9px]">Dearborn, MI</strong></div>
                    <div>Report Count: <strong className="text-white font-bold">48</strong></div>
                    <div>Max Magnitude: <strong className="text-white font-bold">1.75 in</strong></div>
                    <div>Target Radius: <strong className="text-white font-bold">10 mi</strong></div>
                    <div>Storm Score: <strong className="text-white font-bold text-emerald-400">190</strong></div>
                  </div>
                </div>

                {/* Right Side: Contact Info */}
                <div className="flex-1 space-y-1.5 pl-1.5">
                  <span className="text-[7.5px] text-emerald-400 font-extrabold uppercase tracking-wider block">Contact Info</span>
                  <div className="space-y-1 text-slate-400 leading-tight">
                    <div className="truncate">Owner: <strong className="text-white font-bold block text-[9.5px]">J*** D****</strong></div>
                    <div>Mobile: <strong className="text-white font-bold block">(***) ***-4821</strong></div>
                    <div className="truncate">Email: <strong className="text-white font-bold block">j***@g****.com</strong></div>
                    <div className="text-[7.5px] bg-emerald-500/10 text-emerald-400 px-1 py-0.25 rounded inline-block font-extrabold uppercase mt-1">Available</div>
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
              <div className="rounded-xl border border-white/10 p-3 bg-[#06090f] shadow-inner space-y-2.5 relative aspect-[4/3] flex flex-col justify-center text-[9px]">
                
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <span className="text-white font-extrabold text-[10px] tracking-wide block">Confirmed Roof Inspection</span>
                  <span className="text-[#00e676] bg-[#00e676]/10 px-1 py-0.25 rounded text-[7.5px] font-black tracking-wide uppercase border border-[#00e676]/20 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#00e676] animate-ping" />
                    Confirmed
                  </span>
                </div>

                <div className="space-y-1 text-slate-400 text-[9.5px]">
                  <div>Homeowner: <strong className="text-white font-extrabold">Marcus K.</strong></div>
                  <div>Phone: <strong className="text-white font-extrabold">(***) ***-4821</strong></div>
                  <div>Date/Time: <span className="text-[#60A5FA] font-bold">Thursday @ 4:00 PM</span></div>
                  <div className="truncate text-slate-400 text-[8.5px]">1420 Pine Creek Dr, Orlando FL</div>
                </div>

                <div className="flex gap-2 justify-end text-[7.5px] font-extrabold pt-1">
                  <button className="bg-white/5 border border-white/10 text-white rounded px-2.5 py-1 cursor-default">
                    Directions
                  </button>
                  <button className="bg-[#145CFF] text-white rounded px-2.5 py-1 cursor-default shadow-md shadow-blue-500/10">
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

      </div>
    </section>
  );
}
