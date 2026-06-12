import React from "react";

export default function StormProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Detect Storm Activity",
      badge: "Live radar + storm reports",
      desc: "Live radar, storm reports, hail/wind events, and warning polygons reveal active opportunity zones.",
    },
    {
      num: "02",
      title: "Identify Affected Neighborhoods",
      badge: "Neighborhood-level targeting",
      desc: "Zoom into storm-hit areas and prioritize neighborhoods based on severity, report density, and proximity.",
    },
    {
      num: "03",
      title: "Lock Verified Properties",
      badge: "Verified property address",
      desc: "Click homes on the map to capture verified addresses and create lead targets.",
    },
    {
      num: "04",
      title: "Unlock Lead Intelligence",
      badge: "Credit-based lead intelligence",
      desc: "Purchase homeowner contact details, property facts, and home/roof indicators with credits.",
    },
    {
      num: "05",
      title: "Book Appointments",
      badge: "Direct CRM route",
      desc: "Use the data yourself or let us convert the opportunity into guaranteed in-person roof inspection appointments.",
    },
  ];

  return (
    <section className="bg-[#090e18] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">PRODUCT ENGINE</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            From Storm Path to Scheduled Inspection
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A complete end-to-end homeowner acquisition flow designed to help roofing contractors deploy quickly after major weather events.
          </p>
        </div>

        {/* Process Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 text-left">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-2xl border border-white/5 bg-[#0e1422] hover:border-[#145CFF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step number and label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#145CFF]/50">{step.num}</span>
                  <span className="rounded bg-[#145CFF]/10 border border-[#145CFF]/30 px-2 py-0.5 text-[8.5px] font-bold text-[#60A5FA]">
                    {step.badge}
                  </span>
                </div>
                
                <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Decorative bottom line on hover */}
              <div className="h-1 w-0 bg-[#145CFF] mt-4 rounded-full transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
