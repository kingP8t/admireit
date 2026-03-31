import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free AI Consultation",
  description:
    "Get in touch with AdmireTech. Tell us about your project and we'll get back to you within 24 hours.",
  alternates: {
    canonical: "https://www.admireit.co/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Contact", url: "https://www.admireit.co/contact" },
        ]}
      />
      <LocalBusinessJsonLd />
      <ContactContent />
    </>
  );
}
