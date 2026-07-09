"use client";

import { useState } from "react";

export default function HvacRoiCalculator() {
  const [appointments, setAppointments] = useState(15);
  const [ticketValue, setTicketValue] = useState(8500);
  const [closeRate, setCloseRate] = useState(25);

  const COST_PER_APPOINTMENT = 350; // High intent completed meeting cost estimate

  // Calculations
  const closedJobs = Math.round(appointments * (closeRate / 100));
  const grossRevenue = closedJobs * ticketValue;
  const programCost = appointments * COST_PER_APPOINTMENT;
  const netProfit = Math.max(0, grossRevenue - programCost);
  const roiMultiplier = programCost > 0 ? (grossRevenue / programCost).toFixed(1) : "0.0";

  return (
    <div className="rounded-3xl border border-[#DDE6F2] bg-white p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="grid gap-10 lg:grid-cols-12 items-center">
        {/* Controls Column */}
        <div className="space-y-8 lg:col-span-7">
          <div className="text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#145CFF]/10 px-3 py-1 text-xs font-extrabold text-[#145CFF] uppercase tracking-wider">
              Interactive Tool
            </span>
            <h3 className="text-2xl font-extrabold text-[#061A2F]">
              Project Your HVAC Program ROI
            </h3>
            <p className="text-sm text-[#42526B] leading-relaxed">
              Adjust the sliders to see how shifting from cold lead chasing to completed homeowner meetings boosts your bottom line.
            </p>
          </div>

          <div className="space-y-6">
            {/* Slider 1: Appointments */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-extrabold text-[#061A2F]">
                  Monthly Completed Meetings
                </label>
                <span className="text-base font-extrabold text-[#145CFF] bg-[#145CFF]/10 px-2.5 py-0.5 rounded-lg">
                  {appointments} meetings
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={appointments}
                onChange={(e) => setAppointments(Number(e.target.value))}
                className="w-full h-2 bg-[#E6EDF8] rounded-lg appearance-none cursor-pointer accent-[#145CFF]"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 px-0.5">
                <span>5 Min</span>
                <span>25 Med</span>
                <span>50 Max</span>
              </div>
            </div>

            {/* Slider 2: Average Ticket */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-extrabold text-[#061A2F]">
                  Average Job Ticket Value
                </label>
                <span className="text-base font-extrabold text-[#145CFF] bg-[#145CFF]/10 px-2.5 py-0.5 rounded-lg">
                  ${ticketValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={ticketValue}
                onChange={(e) => setTicketValue(Number(e.target.value))}
                className="w-full h-2 bg-[#E6EDF8] rounded-lg appearance-none cursor-pointer accent-[#145CFF]"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 px-0.5">
                <span>$1,000</span>
                <span>$10,000</span>
                <span>$20,000</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-extrabold text-[#061A2F]">
                  Estimated Close Rate
                </label>
                <span className="text-base font-extrabold text-[#145CFF] bg-[#145CFF]/10 px-2.5 py-0.5 rounded-lg">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="70"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-[#E6EDF8] rounded-lg appearance-none cursor-pointer accent-[#145CFF]"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 px-0.5">
                <span>10% (Low)</span>
                <span>35% (Good)</span>
                <span>70% (High)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-[#F5F8FC] border border-[#DDE6F2] rounded-2xl p-6 space-y-6 text-left relative">
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold text-[#42526B] uppercase tracking-widest block border-b border-[#DDE6F2] pb-2">
              Projected Monthly Metrics
            </span>

            {/* Closed Jobs */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#42526B]">Closed Sales</span>
              <span className="text-lg font-extrabold text-[#061A2F]">{closedJobs} jobs</span>
            </div>

            {/* Program Cost */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#42526B]">Est. Appointment Spend</span>
              <span className="text-lg font-bold text-slate-600">${programCost.toLocaleString()}</span>
            </div>

            <div className="border-t border-[#DDE6F2] my-4 pt-4 space-y-5">
              {/* Gross Revenue */}
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-0.5">Gross Revenue</span>
                <span className="text-3xl font-black text-[#061A2F] tracking-tight">
                  ${grossRevenue.toLocaleString()}
                </span>
              </div>

              {/* Net Profit */}
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-0.5">Net Profit</span>
                <span className="text-3xl font-black text-[#11A36A] tracking-tight flex items-center gap-1.5">
                  ${netProfit.toLocaleString()}
                  {netProfit > 0 && (
                    <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-extrabold text-[#11A36A] border border-[#11A36A]/20">
                      +{roiMultiplier}x ROI
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#145CFF]/5 border border-[#145CFF]/15 rounded-xl p-3.5 text-xs text-[#061A2F] leading-normal font-bold">
            💡 <span className="text-[#145CFF]">Strategy Tip:</span> Completed meetings filter out non-serious leads, giving your comfort advisors a higher average ticket potential.
          </div>
        </div>
      </div>
    </div>
  );
}
