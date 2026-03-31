import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how AdmireTech (Admire Tech Ltd) collects, uses, and protects your personal data. GDPR-compliant privacy practices for our AI agency services.",
  alternates: {
    canonical: "https://www.admireit.co/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Privacy Policy", url: "https://www.admireit.co/privacy" },
        ]}
      />
      <PrivacyContent />
    </>
  );
}

function PrivacyContent() {
  return (
    <main className="bg-black text-gray-300 min-h-screen">
      <section className="container-wide mx-auto section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Last updated: March 2026
          </p>

          <div className="space-y-10 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Who We Are
              </h2>
              <p>
                Admire Tech Ltd (&ldquo;AdmireTech&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a company registered
                in England and Wales under company number 09582981. Our
                registered office is at 167-169 Great Portland Street, 5th
                Floor, London W1W 5PF. We also operate offices in Pune, India
                and Lagos, Nigeria.
              </p>
              <p className="mt-2">
                For any data protection queries, please contact us at{" "}
                <a
                  href="mailto:hello@admireit.co"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  hello@admireit.co
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Data We Collect
              </h2>
              <p>We may collect the following categories of personal data:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>
                  <strong className="text-gray-300">Contact information:</strong>{" "}
                  name, email address, phone number, and company name when you
                  submit our contact form or book a consultation.
                </li>
                <li>
                  <strong className="text-gray-300">Technical data:</strong> IP
                  address, browser type, device information, and pages visited,
                  collected automatically when you browse our website.
                </li>
                <li>
                  <strong className="text-gray-300">Cookie data:</strong>{" "}
                  preferences, session identifiers, and analytics data collected
                  through cookies and similar technologies.
                </li>
                <li>
                  <strong className="text-gray-300">Communication data:</strong>{" "}
                  the content of messages you send us via email or contact forms.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. How We Use Your Data
              </h2>
              <p>We process personal data for the following purposes:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>Responding to enquiries and providing requested services.</li>
                <li>Sending project updates and relevant communications.</li>
                <li>
                  Improving our website, services, and user experience through
                  analytics.
                </li>
                <li>
                  Complying with legal obligations and protecting our legitimate
                  interests.
                </li>
              </ul>
              <p className="mt-2">
                Our legal bases for processing under the UK GDPR include your
                consent, performance of a contract, compliance with legal
                obligations, and our legitimate interests in operating and
                improving our business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Cookies
              </h2>
              <p>
                Our website uses cookies to enhance your browsing experience. When
                you first visit our site, a cookie consent banner will ask for
                your permission before placing non-essential cookies. You can
                change your preferences at any time through your browser settings.
              </p>
              <p className="mt-2">We use the following types of cookies:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>
                  <strong className="text-gray-300">Essential cookies:</strong>{" "}
                  required for the website to function properly, such as session
                  management.
                </li>
                <li>
                  <strong className="text-gray-300">Analytics cookies:</strong>{" "}
                  help us understand how visitors interact with our website so we
                  can improve it.
                </li>
                <li>
                  <strong className="text-gray-300">Preference cookies:</strong>{" "}
                  remember your settings and choices, including cookie consent
                  preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Third-Party Services
              </h2>
              <p>
                We may share data with trusted third-party service providers who
                assist us in operating our website and delivering our services.
                These may include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>Website hosting and infrastructure providers.</li>
                <li>Email delivery and communication platforms.</li>
                <li>Analytics services for website performance monitoring.</li>
                <li>Scheduling and booking tools for consultations.</li>
              </ul>
              <p className="mt-2">
                All third-party providers are bound by data processing agreements
                and are required to handle your data in accordance with applicable
                data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. International Data Transfers
              </h2>
              <p>
                As we operate across the United Kingdom, India, and Nigeria, your
                data may be transferred to and processed in countries outside the
                UK or European Economic Area. Where such transfers occur, we
                ensure appropriate safeguards are in place, including standard
                contractual clauses approved by the UK Information
                Commissioner&apos;s Office (ICO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to
                fulfil the purposes for which it was collected, or as required by
                law. Specifically:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>
                  Contact form submissions are retained for up to 24 months
                  unless a client relationship is established.
                </li>
                <li>
                  Client project data is retained for the duration of the
                  engagement plus 6 years for legal and accounting purposes.
                </li>
                <li>
                  Analytics data is anonymised or deleted after 26 months.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Your Rights Under UK GDPR
              </h2>
              <p>
                If you are located in the United Kingdom or European Economic
                Area, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>
                  <strong className="text-gray-300">Right of access:</strong>{" "}
                  request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong className="text-gray-300">Right to rectification:</strong>{" "}
                  request correction of inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-gray-300">Right to erasure:</strong>{" "}
                  request deletion of your personal data in certain
                  circumstances.
                </li>
                <li>
                  <strong className="text-gray-300">
                    Right to restrict processing:
                  </strong>{" "}
                  request that we limit how we use your data.
                </li>
                <li>
                  <strong className="text-gray-300">Right to data portability:</strong>{" "}
                  receive your data in a structured, machine-readable format.
                </li>
                <li>
                  <strong className="text-gray-300">Right to object:</strong>{" "}
                  object to processing based on legitimate interests or direct
                  marketing.
                </li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please email us at{" "}
                <a
                  href="mailto:hello@admireit.co"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  hello@admireit.co
                </a>
                . We will respond within 30 days. If you are unsatisfied with our
                response, you have the right to lodge a complaint with the UK
                Information Commissioner&apos;s Office (ICO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal data against unauthorised access,
                alteration, disclosure, or destruction. These measures include
                encryption in transit and at rest, access controls, and regular
                security reviews.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable law. We will post the
                updated policy on this page with a revised &ldquo;last
                updated&rdquo; date. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="mt-2 text-text-secondary">
                <p>Admire Tech Ltd</p>
                <p>167-169 Great Portland Street, 5th Floor</p>
                <p>London W1W 5PF, England</p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:hello@admireit.co"
                    className="text-accent hover:text-accent-warm transition-colors"
                  >
                    hello@admireit.co
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.admireit.co"
                    className="text-accent hover:text-accent-warm transition-colors"
                  >
                    www.admireit.co
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
