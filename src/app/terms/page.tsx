import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for AdmireTech (Admire Tech Ltd). Read the terms governing the use of our AI agency services and website.",
  alternates: {
    canonical: "https://www.admireit.co/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          {
            name: "Terms of Service",
            url: "https://www.admireit.co/terms",
          },
        ]}
      />
      <TermsContent />
    </>
  );
}

function TermsContent() {
  return (
    <main className="bg-black text-gray-300 min-h-screen">
      <section className="container-wide mx-auto section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Last updated: March 2026
          </p>

          <div className="space-y-10 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website at{" "}
                <a
                  href="https://www.admireit.co"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  www.admireit.co
                </a>{" "}
                or engaging our services, you agree to be bound by these Terms of
                Service (&ldquo;Terms&rdquo;). If you do not agree with any part
                of these Terms, you must not use our website or services. These
                Terms constitute a legally binding agreement between you and
                Admire Tech Ltd (&ldquo;AdmireTech&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in
                England and Wales under company number 09582981.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Description of Services
              </h2>
              <p>
                AdmireTech provides AI consulting, custom AI and software
                development, AI automation, chatbot development, fractional AI
                developer services, and outcome-based development engagements. We
                operate from offices in London (United Kingdom), Pune (India), and
                Lagos (Nigeria), serving clients globally.
              </p>
              <p className="mt-2">
                Specific service deliverables, timelines, and fees are agreed upon
                in separate statements of work or project agreements between
                AdmireTech and the client. These Terms apply in addition to any
                such agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. Use of Our Website
              </h2>
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
                <li>
                  Use the website in any way that breaches any applicable local,
                  national, or international law or regulation.
                </li>
                <li>
                  Attempt to gain unauthorised access to our systems or
                  third-party systems connected to our website.
                </li>
                <li>
                  Introduce viruses, trojans, or other malicious material to our
                  website.
                </li>
                <li>
                  Reproduce, duplicate, or resell any part of our website without
                  express written permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, code, and design, is the property of
                Admire Tech Ltd or its licensors and is protected by copyright,
                trademark, and other intellectual property laws.
              </p>
              <p className="mt-2">
                For client engagements, intellectual property ownership and
                licensing terms are defined in the applicable project agreement or
                statement of work. Unless otherwise agreed in writing, we retain
                ownership of our proprietary tools, frameworks, and pre-existing
                intellectual property used in delivering services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential any proprietary or
                sensitive information shared during the course of an engagement.
                This obligation survives the termination of any agreement between
                the parties, except where disclosure is required by law or with
                the prior written consent of the disclosing party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, AdmireTech shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or business opportunities, arising out of or in connection
                with the use of our website or services.
              </p>
              <p className="mt-2">
                Our total liability for any claim arising under these Terms or in
                connection with our services shall not exceed the total fees paid
                by you to AdmireTech in the twelve (12) months preceding the
                event giving rise to the claim. Nothing in these Terms excludes or
                limits our liability for death or personal injury caused by
                negligence, fraud, or any other liability that cannot be excluded
                under English law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Warranties and Disclaimers
              </h2>
              <p>
                Our website is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis. We make no representations or warranties
                of any kind, express or implied, regarding the completeness,
                accuracy, reliability, or availability of the website or its
                content.
              </p>
              <p className="mt-2">
                For client projects, specific warranties and service levels are
                defined in the applicable project agreement. We warrant that
                services will be performed with reasonable skill and care in
                accordance with generally accepted industry standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to suspend or restrict access to our website
                at any time without notice if we reasonably believe you have
                breached these Terms. For client engagements, termination rights
                and procedures are governed by the applicable project agreement.
              </p>
              <p className="mt-2">
                Upon termination, all provisions of these Terms which by their
                nature should survive, including intellectual property,
                confidentiality, limitation of liability, and governing law, shall
                continue in effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of England and Wales. Any disputes arising out of or in
                connection with these Terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
              <p className="mt-2">
                Before initiating formal proceedings, both parties agree to
                attempt to resolve any dispute through good-faith negotiation. If
                a resolution cannot be reached within 30 days, either party may
                pursue mediation before resorting to litigation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms at any time by updating this page. The
                revised Terms will take effect from the date of publication. Your
                continued use of our website or services after changes are posted
                constitutes your acceptance of the revised Terms. We encourage you
                to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                11. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unlawful, void, or
                unenforceable, that provision shall be deemed severable and shall
                not affect the validity and enforceability of the remaining
                provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                12. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
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
