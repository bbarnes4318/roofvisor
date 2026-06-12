import React from "react";

export default function ComparisonSection() {
  const features = [
    {
      name: "Storm-Affected Address",
      leadList: "✅ Included",
      propertyUnlock: "✅ Included",
      guaranteedAppt: "✅ Included",
      managedCampaign: "✅ Included",
    },
    {
      name: "Contact Info & Phone/Email",
      leadList: "Bulk CSV (Append)",
      propertyUnlock: "Live credit unlock",
      guaranteedAppt: "Scheduled & verified",
      managedCampaign: "Full campaign enrichment",
    },
    {
      name: "Property & Home Details",
      leadList: "CSV Export",
      propertyUnlock: "Instant map lookup",
      guaranteedAppt: "Onboarding report",
      managedCampaign: "Integrated routing database",
    },
    {
      name: "Roof / Material Intelligence",
      leadList: "Where available",
      propertyUnlock: "Visual indicators",
      guaranteedAppt: "Inspection pre-check",
      managedCampaign: "Complete market analysis",
    },
    {
      name: "Map-Level Targeting",
      leadList: "❌ No",
      propertyUnlock: "✅ Live Map Select",
      guaranteedAppt: "❌ No",
      managedCampaign: "✅ Full territory controls",
    },
    {
      name: "Contractor Handles Outreach",
      leadList: "✅ Yes",
      propertyUnlock: "✅ Yes",
      guaranteedAppt: "❌ No (Done for you)",
      managedCampaign: "❌ No (Done for you)",
    },
    {
      name: "We Handle Outreach & Booking",
      leadList: "❌ No",
      propertyUnlock: "❌ No",
      guaranteedAppt: "✅ Yes",
      managedCampaign: "✅ Yes",
    },
    {
      name: "No-Show Appointment Guarantee",
      leadList: "❌ No",
      propertyUnlock: "❌ No",
      guaranteedAppt: "✅ Yes (Replacement)",
      managedCampaign: "✅ Yes (Replacement)",
    },
    {
      name: "Best For",
      leadList: "Calling & mail teams",
      propertyUnlock: "Hand-picking high value homes",
      guaranteedAppt: "Booked calendar scale",
      managedCampaign: "Expanding companies",
    },
  ];

  return (
    <section className="bg-[#090e18] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#145CFF] mb-3">SIDE-BY-SIDE</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Compare Acquisition Modes
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A comprehensive look at our data assets, outreach models, and outcomes to help you select the right strategy.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-[#0e1422]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#070b13]">
                <th className="p-4 sm:p-5 text-sm font-extrabold text-white">Acquisition Feature</th>
                <th className="p-4 sm:p-5 text-xs font-extrabold uppercase tracking-wider text-slate-400">Lead List</th>
                <th className="p-4 sm:p-5 text-xs font-extrabold uppercase tracking-wider text-[#60A5FA]">Property Unlock</th>
                <th className="p-4 sm:p-5 text-xs font-extrabold uppercase tracking-wider text-[#11A36A] bg-[#145CFF]/5">Guaranteed Appointment</th>
                <th className="p-4 sm:p-5 text-xs font-extrabold uppercase tracking-wider text-white">Managed Campaign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-sm font-bold text-white leading-normal">{feature.name}</td>
                  <td className="p-4 text-xs sm:text-sm text-slate-400">{feature.leadList}</td>
                  <td className="p-4 text-xs sm:text-sm text-slate-300">{feature.propertyUnlock}</td>
                  <td className="p-4 text-xs sm:text-sm text-slate-200 font-semibold bg-[#145CFF]/5">{feature.guaranteedAppt}</td>
                  <td className="p-4 text-xs sm:text-sm text-slate-200">{feature.managedCampaign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion/Card Layout */}
        <div className="grid gap-6 md:hidden">
          {[
            {
              title: "Bulk Lead List",
              tag: "Bulk Data",
              points: [
                { label: "Storm Addresses", val: "✅ Included" },
                { label: "Contact Info", val: "Bulk CSV (Append)" },
                { label: "Property Facts", val: "CSV Export" },
                { label: "Outreach", val: "Contractor handles" },
                { label: "Guarantee", val: "❌ None" },
                { label: "Best For", val: "Calling & mail teams" },
              ]
            },
            {
              title: "Property Unlock",
              tag: "Pay-As-You-Go",
              points: [
                { label: "Storm Addresses", val: "✅ Included" },
                { label: "Contact Info", val: "Live credit unlock" },
                { label: "Property Facts", val: "Instant map lookup" },
                { label: "Outreach", val: "Contractor handles" },
                { label: "Guarantee", val: "❌ None" },
                { label: "Best For", val: "Hand-picking high value homes" },
              ]
            },
            {
              title: "Guaranteed Appointment",
              tag: "Most Valuable",
              highlight: true,
              points: [
                { label: "Storm Addresses", val: "✅ Included" },
                { label: "Contact Info", val: "Scheduled & verified" },
                { label: "Property Facts", val: "Onboarding report" },
                { label: "Outreach", val: "We handle outreach" },
                { label: "Guarantee", val: "✅ Yes (Replacement)" },
                { label: "Best For", val: "Booked calendar scale" },
              ]
            },
            {
              title: "Managed Campaign",
              tag: "Done-For-You",
              points: [
                { label: "Storm Addresses", val: "✅ Included" },
                { label: "Contact Info", val: "Full enrichment" },
                { label: "Property Facts", val: "Routing database" },
                { label: "Outreach", val: "We handle outreach" },
                { label: "Guarantee", val: "✅ Yes (Replacement)" },
                { label: "Best For", val: "Expanding companies" },
              ]
            }
          ].map((mode, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border p-5 text-left ${mode.highlight ? "border-[#145CFF] bg-[#0c1325]" : "border-white/5 bg-[#0e1422]"}`}
            >
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                <h3 className="text-base font-extrabold text-white">{mode.title}</h3>
                <span className={`rounded px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide ${mode.highlight ? "bg-[#145CFF] text-white" : "bg-slate-800 text-slate-300"}`}>
                  {mode.tag}
                </span>
              </div>
              <ul className="space-y-2 text-xs">
                {mode.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex justify-between">
                    <span className="text-slate-500 font-bold uppercase text-[9px]">{pt.label}:</span>
                    <span className="text-slate-300 font-semibold">{pt.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
