import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | LeadsByStorm",
  description:
    "Review the B2B Terms and Conditions for LeadsByStorm roofing appointment setting and territory reservation services.",
};

const LOGO_SRC = "/logo.png";
const CONTACT_EMAIL = "support@leadsbystorm.com";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE6F2] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <a href="/" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </a>

        <a 
          href={`mailto:${CONTACT_EMAIL}?subject=LeadsByStorm%20Inquiry`} 
          className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-extrabold sm:text-sm bg-[#145CFF] text-white hover:bg-[#2F7DFF] transition-all transform active:scale-[0.98]"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#DDE6F2] bg-slate-50 px-6 py-8 sm:px-8 lg:px-12 text-[#42526B]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-xs sm:text-sm text-[#42526B] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LeadsByStorm. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/" className="hover:text-[#145CFF] transition-colors font-bold">Home</a>
          <span className="text-slate-300">|</span>
          <a href="/terms" className="hover:text-[#145CFF] transition-colors font-bold">Terms &amp; Conditions</a>
          <span className="text-slate-300">|</span>
          <a href="/privacy" className="hover:text-[#145CFF] transition-colors font-bold">Privacy Policy</a>
          <span className="text-slate-300">|</span>
          <p>Targeted storm-damage roofing appointments.</p>
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
    { id: "appointments", label: "4. Appointment Policy & Guarantees" },
    { id: "pricing", label: "5. Pricing, Fees & Billing" },
    { id: "contractor-obligations", label: "6. Contractor Obligations" },
    { id: "disclaimers", label: "7. Disclaimers & Limits of Liability" },
    { id: "indemnification", label: "8. Indemnification" },
    { id: "termination", label: "9. Term & Termination" },
    { id: "governing-law", label: "10. Governing Law" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#42526B] font-sans antialiased">
      <Header />
      
      {/* Title Hero Block */}
      <section className="bg-[#F5F8FC] border-b border-[#DDE6F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-left space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">LEGAL CENTER</p>
          <h1 className="text-3xl font-extrabold text-[#061A2F] sm:text-4xl lg:text-5xl leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#42526B] font-semibold">
            Last Updated: June 9, 2026
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#061A2F] border-b border-[#DDE6F2] pb-2">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-2.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs font-bold text-[#42526B] hover:text-[#145CFF] transition-colors leading-relaxed block"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Text Column */}
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#42526B] text-left">
            
            <div className="prose max-w-none text-[#42526B] space-y-4">
              <p className="font-semibold text-[#061A2F]">
                Please read these B2B Terms and Conditions carefully. By purchasing appointments or reserving territory from LeadsByStorm (referred to herein as &quot;LeadsByStorm,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), the contractor or business entity subscribing to these services (referred to herein as &quot;Contractor,&quot; &quot;you,&quot; or &quot;your&quot;) agrees to be legally bound by these terms.
              </p>
              <p>
                These Terms and Conditions constitute a legally binding agreement between LeadsByStorm and the Contractor. If you do not agree to these terms, you must not subscribe to our services, purchase appointments, or claim active territories.
              </p>
            </div>

            <hr className="border-[#DDE6F2]" />

            {/* Section 1 */}
            <article id="acceptance" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our platform, booking a territory call, purchasing lead or appointment lists, or entering into an agreement with LeadsByStorm, you agree to comply with and be bound by these Terms and Conditions. These terms govern all transactions, services, and communications between you and LeadsByStorm.
              </p>
            </article>

            {/* Section 2 */}
            <article id="services" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                2. Description of Services
              </h2>
              <p>
                LeadsByStorm provides storm monitoring, homeowner outreach, qualification, and appointment scheduling services for roofing contractors. We identify properties in recent hail and wind storm-hit corridors, verify the property owner&apos;s interest in a damage assessment, and book inspection appointments directly onto the Contractor&apos;s digital calendar. 
              </p>
              <p>
                Our services are limited to facilitating contact between interested homeowners and qualified roofing contractors. We do not provide physical roof inspections, adjust insurance claims, or execute construction contracts.
              </p>
            </article>

            {/* Section 3 */}
            <article id="exclusivity" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                3. Territory Exclusivity &amp; Availability
              </h2>
              <p>
                We limit the number of active contractors in each storm market to prevent oversaturation and protect lead quality. When a Contractor claims a territory:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Exclusive Assignment:</strong> Appointments generated in the defined zip codes or metropolitan area will be delivered exclusively to that Contractor and will not be shared or resold to other contractors during the active service period.
                </li>
                <li>
                  <strong>Capacity Limits:</strong> The Contractor must maintain calendar availability to service the booked volume. If a Contractor fails to service assigned appointments within a reasonable window, LeadsByStorm reserves the right to release or reassign unclaimed portions of the territory.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="appointments" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                4. Appointment Policy &amp; No-Show Guarantees
              </h2>
              <p>
                We stand behind the quality of our appointments with the following guarantees:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Verification:</strong> Every appointment is confirmed directly with the homeowner. We verify their status as the property owner, interest in a storm damage assessment, and their scheduled date/time.
                </li>
                <li>
                  <strong>No-Show Protection:</strong> If the homeowner is not present for the scheduled inspection or refuses the inspection upon arrival, you must document the occurrence. LeadsByStorm will review and replace the unfulfilled appointment at no additional cost.
                </li>
                <li>
                  <strong>Replacement Window:</strong> Claims for no-show replacements must be submitted via email to <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#145CFF] font-bold hover:underline">{CONTACT_EMAIL}</a> within forty-eight (48) hours of the scheduled appointment time.
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article id="pricing" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                5. Pricing, Fees &amp; Billing Terms
              </h2>
              <p>
                All services are subject to the pricing structure agreed upon during your territory onboarding call:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Standard Rates:</strong> Appointments are billed at a rate of $250 to $350 per appointment, depending on volume commitments and specific market conditions.
                </li>
                <li>
                  <strong>Automatic Invoicing:</strong> Payment is processed automatically using the credit card or ACH details on file. Charges occur upon delivery of the calendar confirmation.
                </li>
                <li>
                  <strong>Refund Policy:</strong> All appointment fees are non-refundable. Legitimate no-show claims are resolved solely through the delivery of replacement appointments as outlined in Section 4.
                </li>
              </ul>
            </article>

            {/* Section 6 */}
            <article id="contractor-obligations" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                6. Contractor Obligations &amp; Professional Standards
              </h2>
              <p>
                To maintain the integrity of the LeadsByStorm contractor network, you represent, warrant, and agree that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Licensing &amp; Insurance:</strong> You hold and will maintain all required local, state, and federal licenses, general liability insurance, and worker&apos;s compensation insurance necessary to inspect roofs and perform construction services in your territory.
                </li>
                <li>
                  <strong>Ethical Behavior:</strong> You will treat all homeowners with professionalism, honesty, and respect. You will comply with all local storm soliciting laws, local building codes, and insurance regulations.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article id="disclaimers" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                7. Disclaimers &amp; Limits of Liability
              </h2>
              <p>
                LeadsByStorm provides appointments on an &quot;as-is&quot; basis. We represent that we follow strict validation steps, but we cannot control homeowner decisions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>No Sales Guarantees:</strong> LeadsByStorm makes no guarantees regarding the percentage of scheduled appointments that will sign construction contracts, result in successful insurance claims, or generate revenue.
                </li>
                <li>
                  <strong>Limitation of Liability:</strong> Under no circumstances shall LeadsByStorm be liable to the Contractor for any indirect, incidental, special, punitive, or consequential damages, including but not limited to loss of business, profits, or revenue, arising from the service. Our total liability for any claim shall not exceed the fees paid by the Contractor in the thirty (30) days preceding the claim.
                </li>
              </ul>
            </article>

            {/* Section 8 */}
            <article id="indemnification" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                8. Indemnification
              </h2>
              <p>
                The Contractor agrees to defend, indemnify, and hold harmless LeadsByStorm, its officers, employees, and agents, from and against any claims, losses, liability, damages, or costs (including attorney fees) arising from:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Any property damage or personal injury occurring during or as a result of an inspection or construction work performed by the Contractor.
                </li>
                <li>
                  Any breach of licensing, code violations, or direct consumer disputes between the Contractor and a homeowner introduced by our service.
                </li>
              </ul>
            </article>

            {/* Section 9 */}
            <article id="termination" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                9. Term &amp; Termination
              </h2>
              <p>
                Either party may terminate the service agreement by providing seven (7) days written notice via email. Upon termination, any outstanding payments for delivered appointments shall remain due. LeadsByStorm will immediately release the Contractor&apos;s territory reservation, allowing other contractors to subscribe.
              </p>
            </article>

            {/* Section 10 */}
            <article id="governing-law" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                10. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the State of Florida, without regard to conflicts of law principles. Any legal action or dispute arising out of or relating to these terms shall be settled through binding arbitration in Orange County, Florida, in accordance with the rules of the American Arbitration Association.
              </p>
            </article>

            <hr className="border-[#DDE6F2]" />

            {/* Help / Contact Section */}
            <div className="rounded-2xl border border-[#DDE6F2] bg-[#F5F8FC] p-6 sm:p-8 space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-[#061A2F]">
                Questions About Our Terms?
              </h3>
              <p className="text-sm">
                If you have any questions or require clarification regarding these terms, territory exclusivity, or appointment replacement policies, please contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white hover:bg-[#2F7DFF] px-5 py-3 text-sm font-extrabold transition transform active:scale-[0.98] shadow-md shadow-blue-500/10"
                >
                  Email Support Team
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#DDE6F2] bg-white text-[#42526B] hover:text-[#061A2F] hover:bg-[#F5F8FC] px-5 py-3 text-sm font-extrabold transition"
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
