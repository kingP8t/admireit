import type { Metadata } from "next";
import Script from "next/script";
import { AboutContent } from "./AboutContent";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About — Global AI Agency",
  description:
    "Founded in England in 2015, AdmireTech is a 13-strong global AI agency. Engineers, strategists, and designers across 7 countries building AI solutions that deliver measurable ROI.",
  openGraph: {
    title: "About — Global AI Agency | AdmireTech",
    description:
      "Founded in England in 2015, AdmireTech is a 13-strong global AI agency across 7 countries building AI solutions that deliver measurable ROI.",
    url: "https://www.admireit.co/about",
    type: "website",
  },
  alternates: {
    canonical: "https://www.admireit.co/about",
  },
};

const orgSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AdmireTech",
  url: "https://www.admireit.co",
  logo: "https://www.admireit.co/icon.svg",
  description:
    "AI-powered digital agency helping businesses transform with intelligent solutions across London, Pune, and Lagos.",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: "Peter King",
    jobTitle: "CEO / CTO / Founder",
  },
  email: "hello@admireit.co",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "167-169 Great Portland Street, 5th Floor",
      addressLocality: "London",
      postalCode: "W1W 5PF",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, Prabha vee Tech Park, Baner Rd",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411045",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "10 Hughes Ave, Yaba",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  ],
  taxID: "09582981",
  sameAs: ["https://www.linkedin.com/company/admireit"],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 13,
  },
});

export default function AboutPage() {
  return (
    <>
      <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
        {orgSchema}
      </Script>
      <LocalBusinessJsonLd />
      <AboutContent />
    </>
  );
}
