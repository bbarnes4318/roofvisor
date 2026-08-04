import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VelocityRE.pro",
  description:
    "Review the Privacy Policy for VelocityRE.pro, detailing how we collect, protect, and use real estate professional and homeowner data.",
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

export default function PrivacyPage() {
  const sections = [
    { id: "collection", label: "1. Information We Collect" },
    { id: "usage", label: "2. How We Use Information" },
    { id: "sharing", label: "3. Information Sharing" },
    { id: "security", label: "4. Data Security" },
    { id: "retention", label: "5. Data Retention" },
    { id: "rights", label: "6. Your Rights & Choices" },
    { id: "cookies", label: "7. Cookies & Tracking" },
    { id: "children", label: "8. Children's Privacy" },
    { id: "changes", label: "9. Policy Changes" },
    { id: "contact", label: "10. Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0F172A] font-sans antialiased">
      <Header />
      
      {/* Title Hero Block */}
      <section className="bg-[#FAFAFA] border-b border-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-left space-y-3">
          <p className="text-xs font-black uppercase tracking-widest text-[#059669]">LEGAL CENTER</p>
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Privacy Policy
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
                VelocityRE.pro (&quot;VelocityRE,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our website visitors, subscribing real estate professionals and agents (&quot;Agents&quot;), and property owners showing seller signals (&quot;Homeowners&quot;). This Privacy Policy explains how we collect, use, protect, and share personal information in connection with our off-market listing intelligence, map prospecting, and opportunity management services.
              </p>
              <p>
                By accessing our website or using our services, you consent to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 1 */}
            <article id="collection" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                1. Information We Collect
              </h2>
              <p>
                We collect information to identify off-market seller opportunities, scrub data, and deliver market intelligence. The types of personal information we collect include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Real Estate Professional Information:</strong> Agent name, brokerage name, email address, phone number, physical address, protected market zip codes, payment details, and real estate licensing details.
                </li>
                <li>
                  <strong>Homeowner &amp; Property Information:</strong> Property address, owner name, contact phone numbers (including DNC status flags), email addresses, tax records, home facts, property equity estimates, and disposition indicators.
                </li>
                <li>
                  <strong>Automatically Collected Information:</strong> IP address, device type, browser settings, operating system, and interaction data on our opportunity map app and desktop portal collected via server logs and session cookies.
                </li>
              </ul>
            </article>

            {/* Section 2 */}
            <article id="usage" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information for commercial purposes related to real estate seller opportunity intelligence and prospecting, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To scrub public property records and audit 250+ data points for seller signals.
                </li>
                <li>
                  To deliver exclusive seller opportunities, custom phone scripts, and DNC email templates directly to participating Agents.
                </li>
                <li>
                  To invoice and process service fees for pilot program subscriptions and ongoing territory access.
                </li>
                <li>
                  To communicate market availability alerts, service updates, and support notifications.
                </li>
                <li>
                  To optimize our map engine performance and mobile app functionality.
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article id="sharing" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We protect your privacy and do not sell or trade your personal information to unrelated third parties. We share information only under these conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>With Participating Agents:</strong> We share enriched property and contact details exclusively with the licensed Agent holding the active territory reservation for that zip code.
                </li>
                <li>
                  <strong>With Service Providers:</strong> We share information with trusted third-party vendors assisting our operations, such as payment processors (Stripe), email dispatch platforms, mapping APIs, and database infrastructure. These providers are obligated to use information only to perform services for us.
                </li>
                <li>
                  <strong>For Legal Compliance:</strong> We may disclose information if required by law, subpoena, or regulation, or to protect the safety, rights, or property of VelocityRE.pro, our users, or the public.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="security" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                4. Data Security
              </h2>
              <p>
                We implement technical and organizational security measures to protect Agent and Homeowner information. This includes Secure Sockets Layer (SSL) encryption for web traffic, encrypted storage, and PCI-compliant payment processing.
              </p>
            </article>

            {/* Section 5 */}
            <article id="retention" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                5. Data Retention
              </h2>
              <p>
                We retain Agent and Homeowner information for as long as necessary to fulfill service agreements, maintain active territory mappings, comply with tax/legal obligations, and enforce program contracts.
              </p>
            </article>

            {/* Section 6 */}
            <article id="rights" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                6. Your Rights &amp; Choices
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Opt-Out:</strong> You can opt out of marketing communications at any time by following the unsubscribe link or replying STOP to text alerts.
                </li>
                <li>
                  <strong>Access &amp; Updates:</strong> You may request to review or correct your personal contact information by emailing support.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request data deletion subject to legal, tax, or contract retention requirements.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article id="cookies" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                7. Cookies &amp; Tracking
              </h2>
              <p>
                We use session cookies and analytical cookies to verify account login states, remember map preferences, and improve performance.
              </p>
            </article>

            {/* Section 8 */}
            <article id="children" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are strictly intended for commercial B2B real estate professionals and adult property owners. We do not knowingly collect information from anyone under the age of 18.
              </p>
            </article>

            {/* Section 9 */}
            <article id="changes" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to update this policy at any time. Revised versions will be posted on this page with an updated &quot;Last Updated&quot; date.
              </p>
            </article>

            {/* Section 10 */}
            <article id="contact" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                10. Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or VelocityRE.pro data practices, please contact our team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#059669] hover:bg-[#047857] text-white px-5 py-3 text-sm font-black transition shadow-sm"
                >
                  Email Privacy Officer
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 px-5 py-3 text-sm font-black transition"
                >
                  Return to Home Page
                </a>
              </div>
            </article>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
