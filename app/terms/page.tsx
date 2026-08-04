import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | VelocityRE.pro",
  description:
    "Review the Terms and Conditions for VelocityRE.pro seller opportunity intelligence, protected territory programs, and listing guarantees.",
};

const CONTACT_EMAIL = "support@leadsbystorm.com";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" aria-label="VelocityRE.pro home" className="text-left cursor-pointer">
          <span className="block text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            VelocityRE<span className="text-[#059669]">.pro</span>
          </span>
        </a>

        <a 
          href={`mailto:${CONTACT_EMAIL}?subject=VelocityRE.pro%20Inquiry`} 
          className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-black sm:text-sm bg-[#059669] hover:bg-[#047857] text-white transition shadow-sm"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-6 py-8 sm:px-8 lg:px-12 text-slate-400">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-xs sm:text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 VelocityRE.pro. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/" className="hover:text-white transition font-bold">Home</a>
          <span className="text-slate-700">|</span>
          <a href="/terms" className="hover:text-white transition font-bold">Terms &amp; Conditions</a>
          <span className="text-slate-700">|</span>
          <a href="/privacy" className="hover:text-white transition font-bold">Privacy Policy</a>
          <span className="text-slate-700">|</span>
          <p className="text-slate-500">Predictive seller opportunities &amp; protected-market prospecting.</p>
        </div>
      </div>
    </footer>
  );
}

export default function TermsPage() {
  const sections = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "services", label: "2. Description of Services" },
    { id: "exclusivity", label: "3. Territory Exclusivity" },
    { id: "guarantee", label: "4. Written Listing Guarantee & Remedies" },
    { id: "pricing", label: "5. Pricing, Pilot Fees & Billing" },
    { id: "agent-obligations", label: "6. Real Estate Agent Obligations" },
    { id: "disclaimers", label: "7. Disclaimers & Limits of Liability" },
    { id: "indemnification", label: "8. Indemnification" },
    { id: "termination", label: "9. Term & Termination" },
    { id: "governing-law", label: "10. Governing Law" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0F172A] font-sans antialiased">
      <Header />
      
      {/* Title Hero Block */}
      <section className="bg-[#FAFAFA] border-b border-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-left space-y-3">
          <p className="text-xs font-black uppercase tracking-widest text-[#059669]">LEGAL CENTER</p>
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            Last Updated: August 4, 2026
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-2.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs font-bold text-slate-600 hover:text-[#059669] transition-colors leading-relaxed block text-left"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Text Column */}
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-slate-600 text-left">
            
            <div className="prose max-w-none space-y-4">
              <p className="font-semibold text-slate-900">
                Please read these B2B Terms and Conditions carefully. By enrolling in a pilot program, purchasing data services, or reserving territory from VelocityRE.pro (a LeadsByStorm company, referred to herein as &quot;VelocityRE.pro,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), the real estate agent, team, or business entity subscribing to these services (referred to herein as &quot;Agent,&quot; &quot;you,&quot; or &quot;your&quot;) agrees to be legally bound by these terms.
              </p>
              <p>
                These Terms and Conditions constitute a legally binding agreement between VelocityRE.pro and the Agent. If you do not agree to these terms, you must not subscribe to our services or claim protected market territories.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 1 */}
            <article id="acceptance" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our platform, submitting a territory verification request, enrolling in a pilot package, or entering into an agreement with VelocityRE.pro, you agree to comply with and be bound by these Terms and Conditions.
              </p>
            </article>

            {/* Section 2 */}
            <article id="services" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                2. Description of Services
              </h2>
              <p>
                VelocityRE.pro provides off-market property scrubbing, seller opportunity intelligence, contact data enrichment, AI conversational scripts, DNC email rescue templates, interactive map access, and appointment scheduling services for licensed real estate professionals.
              </p>
              <p>
                Our services facilitate data intelligence and prospecting opportunities. We do not act as a real estate brokerage, nor do we directly negotiate property sales contracts between homeowners and buyers.
              </p>
            </article>

            {/* Section 3 */}
            <article id="exclusivity" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                3. Territory Exclusivity &amp; Protected Markets
              </h2>
              <p>
                We limit the number of active pilot agents in each target market to prevent oversaturation and protect opportunity quality:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Protected Assignment:</strong> Opportunities generated in your approved zip code(s) will be assigned to your account and will not be sold to competing agents in your protected market window.
                </li>
                <li>
                  <strong>Capacity Standards:</strong> Participating Agents must maintain outreach activity and follow-up standards as detailed in program documentation.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="guarantee" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                4. Written Listing Guarantee &amp; Remedies
              </h2>
              <p>
                Program guarantees are subject to written terms, covered periods, and required outreach activity:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>One Listing Guarantee:</strong> Under specific pilot program terms, participating Agents who complete required prospect outreach qualify for the written one-listing guarantee remedy as defined in their program agreement.
                </li>
                <li>
                  <strong>Disclaimers:</strong> The guarantee is for one listing—not a specific earnings or commission promise. Individual homeowner sales outcomes depend on local market conditions and agent execution.
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article id="pricing" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                5. Pricing, Pilot Fees &amp; Billing Terms
              </h2>
              <p>
                Pilot program pricing ranges from $279 to $479 per month based on target market volume and package tier. Charges process automatically according to your selected payment schedule via our merchant payment portal.
              </p>
            </article>

            {/* Section 6 */}
            <article id="agent-obligations" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                6. Real Estate Agent Obligations
              </h2>
              <p>
                Agents warrant and agree that they maintain active real estate licensing in good standing, comply with state/local real estate commission rules, adhere to Do-Not-Call (DNC) regulations, and conduct outreach professionally and ethically.
              </p>
            </article>

            {/* Section 7 */}
            <article id="disclaimers" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                7. Disclaimers &amp; Limits of Liability
              </h2>
              <p>
                VelocityRE.pro provides opportunity data on an &quot;as-is&quot; basis. Under no circumstances shall VelocityRE.pro be liable for indirect, incidental, or consequential damages. Maximum aggregate liability is limited to fees paid by the Agent in the thirty (30) days preceding a claim.
              </p>
            </article>

            {/* Section 8 */}
            <article id="indemnification" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                8. Indemnification
              </h2>
              <p>
                Agent agrees to indemnify and hold harmless VelocityRE.pro from any claims, losses, or legal fees arising from Agent&apos;s real estate transactions, homeowner communications, or licensing non-compliance.
              </p>
            </article>

            {/* Section 9 */}
            <article id="termination" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                9. Term &amp; Termination
              </h2>
              <p>
                Either party may terminate active subscription services by providing written notice in accordance with program terms. Upon termination, territory protection is released.
              </p>
            </article>

            {/* Section 10 */}
            <article id="governing-law" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                10. Governing Law
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Florida.
              </p>
            </article>

            <hr className="border-slate-200" />

            {/* Help / Contact Section */}
            <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 sm:p-8 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Questions About Our Terms?
              </h3>
              <p className="text-sm">
                If you have questions regarding these terms, territory protection, or pilot program guarantees, please contact our team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#059669] hover:bg-[#047857] text-white px-5 py-3 text-sm font-black transition shadow-sm"
                >
                  Email Support Team
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 px-5 py-3 text-sm font-black transition"
                >
                  Return to Home Page
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
