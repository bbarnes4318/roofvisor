import React from "react";

export default function PurchaseOptions() {
  const MAP_URL = "https://sms.leadzer.io/storm-map";

  return (
    <section id="products" className="bg-[#081421] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.05] text-slate-200 overflow-hidden relative">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#145CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1140px]">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20 space-y-4 text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
            STORM INTELLIGENCE PLATFORM
          </h2>
          <h3 className="text-xl font-bold tracking-tight text-[#60A5FA] sm:text-2xl">
            Generate Your Own Storm Leads
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Use the Storm Intelligence System to identify storm-affected homeowners, view property-level storm data, and create targeted roofing opportunities.
          </p>
        </div>

        {/* ALTERNATING STAGGERED WALKTHROUGH */}
        <div className="space-y-24 md:space-y-36 relative">

          {/* STEP 1: map.webp (Image Left, Content Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Image (Left) */}
            <div className="md:col-span-7 relative group">
              <div className="bg-[#0E1B2D] border border-white/[0.08] rounded-[20px] p-3.5 shadow-2xl transition-all duration-500 md:[transform:rotate(-2.5deg)] md:group-hover:[transform:rotate(0deg)] md:group-hover:scale-[1.01]">
                <a 
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-[14px] overflow-hidden bg-[#06090f] border border-white/5 cursor-pointer"
                >
                  <img 
                    src="/map.webp" 
                    alt="Live Storm Radar Map" 
                    className="w-full h-[200px] sm:h-[300px] md:h-[320px] lg:h-[350px] object-cover filter brightness-[0.9] group-hover:brightness-100 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#145CFF] text-white px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider shadow-md">
                    Live Radar
                  </div>
                </a>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="text-[#60A5FA] font-extrabold text-[11px] uppercase tracking-widest">
                STEP 01 — STORM RADAR
              </div>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Live Storm Tracking With Damage Target Markers
              </h3>
              <p className="text-sm text-slate-350 leading-relaxed">
                Track active and recent storm activity, including severe hail, high-velocity wind, tornado activity, and other major weather events. Clear circular target markers highlight the residential zones most likely impacted, giving you an immediate visual of where storm damage may be concentrated.
              </p>
              <div className="bg-[#10243A] border border-white/[0.08] p-4 rounded-2xl text-xs text-[#60A5FA] leading-normal font-medium space-y-2">
                <p className="font-bold uppercase tracking-wider text-[10px] text-[#60A5FA]">Location Filter</p>
                <p className="text-slate-300">
                  Select your target State and County, then set a custom mile radius around the area you want to analyze. This creates a focused storm map view before moving into property-level homeowner data.
                </p>
              </div>
            </div>

          </div>

          {/* STEP 2: contact.webp (Image Right, Content Left) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Content (Left) - Order 2 on mobile, 1 on desktop */}
            <div className="md:col-span-5 space-y-4 text-left order-2 md:order-1">
              <div className="text-emerald-400 font-extrabold text-[11px] uppercase tracking-widest">
                STEP 02 — TARGET AREA FOCUS
              </div>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Zoom Into the Exact County and Radius
              </h3>
              <p className="text-sm text-slate-350 leading-relaxed">
                Once you choose a county and mile radius, the map automatically zooms into your selected territory. The viewport centers on the area you want to target and displays the storm path, impact zones, and boundary overlays with greater precision.
              </p>
              <div className="bg-[#10243A] border border-white/[0.08] p-4 rounded-2xl text-xs text-emerald-400 leading-normal font-medium">
                <p className="text-slate-300">
                  This focused view helps narrow broad storm activity down to the neighborhoods most likely to contain roof damage, so your team can focus on the areas with the strongest opportunity.
                </p>
              </div>
            </div>

            {/* Image (Right) - Order 1 on mobile, 2 on desktop */}
            <div className="md:col-span-7 relative group order-1 md:order-2">
              <div className="bg-[#0E1B2D] border border-white/[0.08] rounded-[20px] p-3.5 shadow-2xl transition-all duration-500 md:[transform:rotate(2deg) translateY(-8px) translateX(10px)] md:group-hover:[transform:rotate(0deg) translate(0)] md:group-hover:scale-[1.01]">
                <a 
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-[14px] overflow-hidden bg-[#06090f] border border-white/5 cursor-pointer"
                >
                  <img 
                    src="/zoom.png" 
                    alt="County Target Zoom" 
                    className="w-full h-[200px] sm:h-[300px] md:h-[320px] lg:h-[350px] object-cover filter brightness-[0.9] group-hover:brightness-100 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider shadow-md">
                    Radius Focus
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* STEP 3: zoom.webp (Image Left, Content Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Image (Left) */}
            <div className="md:col-span-7 relative group">
              <div className="bg-[#0E1B2D] border border-white/[0.08] rounded-[20px] p-3.5 shadow-2xl transition-all duration-500 md:[transform:rotate(-1.5deg)] md:group-hover:[transform:rotate(0deg)] md:group-hover:scale-[1.01]">
                <a 
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-[14px] overflow-hidden bg-[#06090f] border border-white/5 cursor-pointer"
                >
                  <img 
                    src="/contact.webp" 
                    alt="Homeowner Contact Lead Data" 
                    className="w-full h-[200px] sm:h-[300px] md:h-[320px] lg:h-[350px] object-cover filter brightness-[0.9] group-hover:brightness-100 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#60A5FA] text-black px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider shadow-md">
                    Homeowner Data
                  </div>
                </a>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="md:col-span-5 space-y-4 text-left relative">
              
              {/* Arrow Indicator pointing toward the report inside zoom.webp */}
              <div className="hidden lg:block absolute left-[-60px] top-[30%] text-[#60A5FA] pointer-events-none">
                <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                  <path d="M50 8 Q 25 10 10 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M6 22 L 10 32 L 20 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#60A5FA] block -mt-1 -ml-4">
                  Report Data
                </span>
              </div>

              <div className="text-[#60A5FA] font-extrabold text-[11px] uppercase tracking-widest">
                STEP 03 — LEAD EXTRACTION
              </div>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Extract Homeowner Addresses & Contact Info
              </h3>
              <p className="text-sm text-slate-350 leading-relaxed">
                Directly retrieve detailed property intelligence for any affected homes inside the storm area. Access exact homeowner street addresses, names, verified mobile numbers, and email contact records.
              </p>
              <div className="bg-[#10243A] border border-white/[0.08] p-4 rounded-2xl text-xs text-[#60A5FA] leading-normal font-medium">
                <p className="text-slate-300">
                  Select any target property on the map to review the storm event metrics, download contact lists, or instantly sync homeowner data directly to your CRM.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
