import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadsByStorm",
  description:
    "Review the B2B Privacy Policy for LeadsByStorm, detailing how we collect, protect, and use contractor and homeowner data.",
};

const LOGO_SRC = "/logo-clean.png";
const CONTACT_EMAIL = "support@leadsbystorm.com";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE6F2] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 sm:py-4.5 sm:px-6 lg:px-8">
        <a href="/" aria-label="LeadsByStorm home" className="flex items-center">
          <img
            src={LOGO_SRC}
            alt="LeadsByStorm Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
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
    <main className="min-h-screen bg-white text-[#42526B] font-sans antialiased">
      <Header />
      
      {/* Title Hero Block */}
      <section className="bg-[#F5F8FC] border-b border-[#DDE6F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-left space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#145CFF]">LEGAL CENTER</p>
          <h1 className="text-3xl font-extrabold text-[#061A2F] sm:text-4xl lg:text-5xl leading-tight">
            Privacy Policy
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
                LeadsByStorm (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our website visitors, subscribing roofing contractors (&quot;Contractors&quot;), and homeowners interested in storm-damage roof assessments (&quot;Homeowners&quot;). This Privacy Policy explains how we collect, use, protect, and share personal information in connection with our appointment-setting and lead generation services.
              </p>
              <p>
                By accessing our website or using our services, you consent to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <hr className="border-[#DDE6F2]" />

            {/* Section 1 */}
            <article id="collection" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                1. Information We Collect
              </h2>
              <p>
                We collect information to provide, qualify, and deliver storm-damage inspection appointments. The types of personal information we collect include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Contractor Information:</strong> Business name, contact person name, email address, phone number, physical address, service areas/territories, payment details (credit card or ACH information), and licensing/insurance details.
                </li>
                <li>
                  <strong>Homeowner Information:</strong> Homeowner name, property address, contact phone number, email address, property details (roof type, age, storm loss date), and verified interest in having a roofing contractor perform a damage assessment.
                </li>
                <li>
                  <strong>Automatically Collected Information:</strong> IP address, device type, browser settings, operating system, and browsing behavior on our platform collected via server logs and tracking technologies.
                </li>
              </ul>
            </article>

            {/* Section 2 */}
            <article id="usage" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                2. How We Use Your Information
              </h2>
              <p>
                We use the collected information for standard commercial purposes related to B2B lead generation and appointment delivery, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To verify homeowners&apos; interest in damage assessments and schedule calendar appointments.
                </li>
                <li>
                  To deliver exclusive, confirmed inspection appointments directly to the assigned Contractor&apos;s calendar and CRM.
                </li>
                <li>
                  To invoice and process service fees for delivered appointments.
                </li>
                <li>
                  To communicate active territory alerts, service updates, and support messages.
                </li>
                <li>
                  To analyze platform usage and improve our qualification processes and overall marketing performance.
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article id="sharing" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We protect your privacy and do not sell, rent, or trade your personal information to unrelated third parties. We share information only under these conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>With Assigned Contractors:</strong> We share the verified Homeowner&apos;s contact information, property details, and scheduled inspection time exclusively with the single Contractor who holds the territory reservation.
                </li>
                <li>
                  <strong>With Service Providers:</strong> We share information with trusted third-party vendors who assist in our operations, such as payment processors (Stripe), email service providers, calendar integration tools, and SMS dispatch gateways (FracTEL/Leadzer). These providers are legally bound to use the information only to perform services for us.
                </li>
                <li>
                  <strong>For Legal Compliance:</strong> We may disclose information if required to do so by law, subpoena, or government regulation, or to protect the safety, rights, or property of LeadsByStorm, our users, or the public.
                </li>
              </ul>
            </article>

            {/* Section 4 */}
            <article id="security" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                4. Data Security
              </h2>
              <p>
                We implement robust security measures to protect Contractor and Homeowner information. This includes Secure Sockets Layer (SSL) encryption for all web traffic, firewall protection, and restricted access databases. Payment processing is handled securely in compliance with Payment Card Industry Data Security Standards (PCI-DSS) through our merchant gateway.
              </p>
              <p>
                While we make reasonable efforts to safeguard your personal data, no transmission of data over the internet or wireless network can be guaranteed 100% secure.
              </p>
            </article>

            {/* Section 5 */}
            <article id="retention" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                5. Data Retention
              </h2>
              <p>
                We retain Contractor and Homeowner information for as long as necessary to fulfill the service agreements, maintain active territory mappings, comply with our legal and tax obligations, resolve billing disputes, and enforce our contracts.
              </p>
            </article>

            {/* Section 6 */}
            <article id="rights" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                6. Your Rights &amp; Choices
              </h2>
              <p>
                Contractors and Homeowners have rights regarding their personal data, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Opt-Out:</strong> You can opt-out of marketing emails or automated SMS alerts at any time by clicking the &quot;unsubscribe&quot; link or replying &quot;STOP&quot; to text messages.
                </li>
                <li>
                  <strong>Access &amp; Updates:</strong> You may request to review, update, or correct your personal contact details on file by emailing our support team.
                </li>
                <li>
                  <strong>Data Deletion:</strong> You may request that we delete your personal information, subject to our need to retain records for tax, audit, legal compliance, or unresolved billing disputes.
                </li>
              </ul>
            </article>

            {/* Section 7 */}
            <article id="cookies" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                7. Cookies &amp; Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking pixels to verify session states, monitor platform traffic, and tailor B2B advertising campaigns. You can configure your web browser to reject cookies, though doing so may prevent certain interactive elements of our calendar scheduler from functioning correctly.
              </p>
            </article>

            {/* Section 8 */}
            <article id="children" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our lead generation and appointment booking services are strictly designed for commercial B2B operations and adult property owners. We do not knowingly collect or solicit personal information from anyone under the age of 18.
              </p>
            </article>

            {/* Section 9 */}
            <article id="changes" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to modify or update this Privacy Policy at any time. When changes are made, we will post the revised policy on this page and update the &quot;Last Updated&quot; date at the top. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </article>

            {/* Section 10 */}
            <article id="contact" className="scroll-mt-24 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#061A2F]">
                10. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact our privacy officer:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#145CFF] text-white hover:bg-[#2F7DFF] px-5 py-3 text-sm font-extrabold transition transform active:scale-[0.98] shadow-md shadow-blue-500/10"
                >
                  Email Privacy Officer
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#DDE6F2] bg-white text-[#42526B] hover:text-[#061A2F] hover:bg-[#F5F8FC] px-5 py-3 text-sm font-extrabold transition"
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
