import React from "react";

export default function AppointmentOfferSection() {
  return (
    <section className="bg-[#070b13] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-slate-200">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left: Outreach details, bullets */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#11A36A]/30 bg-[#11A36A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#11A36A]">
              🛠️ Done-For-You Appointment Setting
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prefer Appointments Instead of Data?
            </h2>

            <p className="text-base text-slate-400 sm:text-lg leading-relaxed">
              For roofing contractors who do not want to manage outreach, we can turn storm-hit property intelligence into scheduled in-person inspection appointments.
            </p>

            <div className="rounded-xl border border-[#11A36A]/20 bg-[#11A36A]/5 p-4 text-sm font-bold text-slate-100 flex items-center justify-between">
              <span>Positioning:</span>
              <span className="text-[#11A36A] uppercase tracking-wide">Raw leads are optional. Appointments are the outcome.</span>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-slate-300">
              {[
                "We identify the storm-hit neighborhoods",
                "We enrich target properties",
                "We contact homeowners",
                "We qualify interest",
                "We schedule inspection appointments",
                "We confirm before delivery",
                "We replace eligible no-shows",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <svg className="h-4 w-4 text-[#11A36A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a 
                href="mailto:support@leadsbystorm.com?subject=Request%20Appointment%20Campaign"
                className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white px-7 py-3.5 text-base font-extrabold shadow-lg shadow-blue-500/20 hover:bg-[#2F7DFF] hover:-translate-y-[1px] transition-all duration-200 transform active:scale-[0.98] cursor-pointer"
              >
                Request Appointment Campaign
              </a>
            </div>
          </div>

          {/* Right: Rich illustrative card container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3.2] rounded-2xl border border-white/10 bg-[#0e1422] p-5 sm:p-6 shadow-2xl mx-auto flex flex-col justify-between">
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] text-[#60A5FA] font-extrabold uppercase tracking-widest">Acoustic Call Dialing Feed</span>
                <span className="rounded bg-[#11A36A]/10 border border-[#11A36A]/30 px-2 py-0.5 text-[8px] font-extrabold text-[#11A36A]">
                  LIVE CONNECT
                </span>
              </div>

              {/* Dialing panel mock */}
              <div className="space-y-2 bg-[#06080d] border border-white/5 rounded-xl p-3">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>Target: <strong>Clinton, MO Hail zone</strong></span>
                  <span className="text-[#60A5FA]">Dialing...</span>
                </div>
                <div className="text-sm font-extrabold text-white">210 East Bodine Avenue</div>
                <div className="text-xs text-slate-400">Homeowner: <span className="text-slate-200">Joseph D. (Verified Owner)</span></div>
              </div>

              {/* Outreach conversation simulation */}
              <div className="space-y-3 pt-2 text-[11px] sm:text-xs">
                <div className="flex gap-2.5 items-start">
                  <span className="rounded bg-[#145CFF]/15 px-2 py-0.5 text-[9px] font-extrabold text-[#60A5FA] shrink-0">AGENT</span>
                  <p className="text-slate-300 leading-normal bg-white/5 p-2 rounded-lg">
                    &quot;Hi Joseph, we noticed your neighborhood was hit by last week&apos;s hail storm. We are scheduling free damage assessments with licensed local contractors. Would you like a qualified inspector to check your roof this Thursday?&quot;
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="rounded bg-[#11A36A]/15 px-2 py-0.5 text-[9px] font-extrabold text-[#11A36A] shrink-0">OWNER</span>
                  <p className="text-slate-300 leading-normal bg-white/5 p-2 rounded-lg">
                    &quot;Yes, a few neighbors are getting inspections. Thursday at 4:00 PM works for me.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom status */}
            <div className="border-t border-white/5 pt-3 mt-4 text-center">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide block">
                🔄 Automated Calendar Sync to Salesforce / JobNimbus Active
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
