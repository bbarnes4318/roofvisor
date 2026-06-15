import React from "react";

export default function ProductOptions() {
  return (
    <section id="products" className="bg-[#070b13] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">SYSTEM CATALOG</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Choose Your Acquisition Mode
          </h2>
          <p className="mt-4 text-base text-slate-400">
            From raw storm data export to guaranteed in-person roofing appointments booked directly to your calendar. Select the tier that matches your operations.
          </p>
        </div>

        {/* Product Card Grid */}
        <div className="grid gap-8 lg:grid-cols-4 items-stretch text-left">
          
          {/* PRODUCT 1: Storm Intelligence Lead Lists */}
          <div className="relative rounded-2xl border border-white/5 bg-[#0e1422] p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                  Bulk Data
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Storm Intelligence Lead Lists</h3>
                <p className="text-xs text-slate-400 mt-1">Bulk lead files from storm-affected neighborhoods.</p>
              </div>
              <div className="border-t border-b border-white/5 py-3">
                <span className="block text-2xl font-black text-white">$1.89 <span className="text-xs font-normal text-slate-400">/ lead</span></span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase block mt-1">1,000 lead minimum</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {[
                  "Storm-affected property addresses",
                  "Homeowner/contact info when available",
                  "Phone/email append when available",
                  "Home/property details",
                  "Roof/property indicators where available",
                  "Storm proximity & event context",
                  "CSV/export-ready format",
                  "Source/confidence indicators",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-3">
              <div className="text-[11px] text-slate-400 italic">
                <strong>Best for:</strong> Contractors with their own calling, texting, mail, or door-knocking team.
              </div>
              <a 
                href="mailto:support@leadsbystorm.com?subject=Order%20Storm%20Lead%20List" 
                className="block w-full text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 text-xs font-extrabold text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Order Storm Lead List
              </a>
              <span className="text-[9px] text-slate-500 block leading-tight text-center">
                Minimum purchase: 1,000 leads. Data availability varies by area and source coverage.
              </span>
            </div>
          </div>

          {/* PRODUCT 2: Verified Property Intelligence Unlocks */}
          <div className="relative rounded-2xl border border-white/5 bg-[#0e1422] p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#60A5FA]">
                  Pay-As-You-Go
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Property Intelligence Unlocks</h3>
                <p className="text-xs text-slate-400 mt-1">Click a property on the map and unlock the homeowner, contact, and home profile.</p>
              </div>
              <div className="border-t border-b border-white/5 py-3">
                <span className="block text-2xl font-black text-white">Credit Unlocks</span>
                <span className="text-[10px] text-[#60A5FA] font-bold uppercase block mt-1">20 credits / full unlock</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {[
                  "Verified property address",
                  "Owner name when available",
                  "Phone numbers & emails",
                  "Mailing address details",
                  "Owner-occupied status",
                  "Year built & square footage",
                  "Estimated home value",
                  "Roof type/material/age",
                  "Permit/roof history where available",
                  "Storm severity/proximity score",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-3">
              <div className="text-[11px] text-slate-400 italic">
                <strong>Best for:</strong> Contractors who want to hand-pick high-value homes from the live storm map.
              </div>
              <a 
                href="mailto:support@leadsbystorm.com?subject=Open%20Map%20and%20Unlock%20Leads" 
                className="block w-full text-center rounded-xl bg-[#145CFF]/10 hover:bg-[#145CFF]/25 border border-[#145CFF]/30 py-2.5 text-xs font-extrabold text-[#60A5FA] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Open Map & Unlock Leads
              </a>
              <span className="text-[9px] text-slate-500 block leading-tight text-center">
                Contact and property data availability varies by provider/source coverage. Exact results are not guaranteed.
              </span>
            </div>
          </div>

          {/* PRODUCT 3: Guaranteed In-Person Roof Inspection Appointments (Emphasized) */}
          <div className="relative rounded-2xl border-2 border-[#145CFF] bg-[#0c1325] p-6 flex flex-col justify-between shadow-2xl shadow-[#145CFF]/15 transition-all duration-300">
            <span className="absolute right-4 top-4 rounded bg-[#145CFF] px-2.5 py-0.5 text-[8.5px] font-extrabold uppercase tracking-wide text-white">
              Most Valuable
            </span>
            <div className="space-y-4">
              <div className="h-2" />
              <div>
                <h3 className="text-xl font-extrabold text-white">Guaranteed Inspection Appointments</h3>
                <p className="text-xs text-slate-300 mt-1">We identify storm-hit homes, contact homeowners, qualify interest, and book confirmed inspection appointments.</p>
              </div>
              <div className="border-t border-b border-white/10 py-3">
                <span className="block text-2xl font-black text-white">From $250 <span className="text-xs font-normal text-slate-400">/ appointment</span></span>
                <span className="text-[10px] text-[#11A36A] font-extrabold uppercase block mt-1">100% No-Show Protection</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {[
                  "Homeowner contacted",
                  "Storm context explained",
                  "Appointment scheduled",
                  "Appointment confirmed before delivery",
                  "No-show replacement policy",
                  "Service area targeting",
                  "Daily/weekly appointment delivery",
                  "Optional exclusive territory windows",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#11A36A]" />
                    <span className="font-semibold text-slate-100">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded bg-[#11A36A]/10 border border-[#11A36A]/30 p-2 text-center">
                <span className="text-[9px] font-extrabold text-[#11A36A] uppercase tracking-wider block">
                  Guaranteed appointment replacement for no-shows, subject to program rules.
                </span>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="text-[11px] text-slate-300 italic">
                <strong>Best for:</strong> Roofing contractors who want booked inspections instead of raw data.
              </div>
              <a 
                href="mailto:support@leadsbystorm.com?subject=Get%20Guaranteed%20Appointments" 
                className="block w-full text-center rounded-xl bg-[#145CFF] hover:bg-[#2F7DFF] py-3 text-xs font-extrabold text-white uppercase tracking-wider transition-all shadow-md shadow-blue-500/25 cursor-pointer"
              >
                Get Guaranteed Appointments
              </a>
              <span className="text-[9px] text-slate-500 block leading-tight text-center">
                Appointments are for roof inspection opportunities only. We do not guarantee damage, claim approval, insurance coverage, or job close rate.
              </span>
            </div>
          </div>

          {/* PRODUCT 4: Managed Storm Campaign */}
          <div className="relative rounded-2xl border border-white/5 bg-[#0e1422] p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                  Done-For-You
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Managed Storm Campaign</h3>
                <p className="text-xs text-slate-400 mt-1">A complete storm-response pipeline for companies that want speed, exclusivity, and scale.</p>
              </div>
              <div className="border-t border-b border-white/5 py-3">
                <span className="block text-2xl font-black text-white">Custom Pricing</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase block mt-1">Based on market & volume</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {[
                  "Storm monitoring & selection",
                  "Market-level route analysis",
                  "Lead list generation",
                  "Contact data enrichment",
                  "Appointment setting",
                  "Follow-up routing & CRM sync",
                  "Strict territory controls",
                  "Weekly performance reporting",
                  "Volume pricing brackets",
                  "Optional market exclusivity",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145CFF]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-3">
              <div className="text-[11px] text-slate-400 italic">
                <strong>Best for:</strong> Roofing companies expanding into storm-hit markets or needing a full outsourced acquisition team.
              </div>
              <a 
                href="mailto:support@leadsbystorm.com?subject=Build%20My%20Storm%20Campaign" 
                className="block w-full text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 text-xs font-extrabold text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Build My Storm Campaign
              </a>
              <span className="text-[9px] text-slate-500 block leading-tight text-center">
                Subject to market availability and onboarding approval. Custom campaign terms apply.
              </span>
            </div>
          </div>

        </div>

        {/* Mandatory Legal Disclaimer */}
        <div className="mt-12 text-center max-w-4xl mx-auto rounded-xl border border-white/5 bg-[#090e18] p-4 text-[10px] sm:text-xs text-slate-500 leading-normal">
          <strong>Compliance Notice:</strong> Storm, property, contact, and roof intelligence availability varies by location, provider coverage, and data source. Appointment guarantees apply to qualified program terms and do not guarantee roof damage, insurance approval, or closed jobs.
        </div>

      </div>
    </section>
  );
}
