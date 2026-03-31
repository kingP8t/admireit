import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { RuralEnergyCaseStudyContent } from "./RuralEnergyCaseStudyContent";

export const metadata: Metadata = {
  title: "AI-Powered Rural Energy Operations — Pan-African Mini-Grid Case Study",
  description:
    "How AdmireTech delivered an end-to-end AI platform for a pan-African mini-grid operator, enabling predictive maintenance, smart site selection, and data-driven growth across 180+ villages.",
  openGraph: {
    title:
      "AI-Powered Rural Energy Operations — Pan-African Mini-Grid Case Study | AdmireTech",
    description:
      "How AdmireTech delivered an end-to-end AI platform for a pan-African mini-grid operator, enabling predictive maintenance, smart site selection, and data-driven growth across 180+ villages.",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.admireit.co/portfolio/rural-energy-ai-platform",
  },
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI-Driven Operations for a Pan-African Rural Energy Provider",
  description:
    "How AdmireTech delivered an end-to-end AI platform for a pan-African mini-grid operator, enabling predictive maintenance, smart site selection, and data-driven growth across 180+ villages.",
  author: {
    "@type": "Organization",
    name: "AdmireTech",
    url: "https://www.admireit.co",
  },
  publisher: {
    "@type": "Organization",
    name: "AdmireTech",
    url: "https://www.admireit.co",
  },
  mainEntityOfPage:
    "https://www.admireit.co/portfolio/rural-energy-ai-platform",
  keywords: [
    "AI energy operations",
    "mini-grid AI platform",
    "predictive maintenance energy",
    "rural electrification AI",
    "pan-African energy technology",
    "smart site selection",
    "AI for infrastructure",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI improve rural energy operations in Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI improves rural energy operations by unifying data from smart meters, solar inverters, and mobile money platforms into a single view. Machine learning models predict equipment failures before they happen, optimise energy load forecasting, and score new village sites for expansion. This enables operators to maintain 99%+ uptime across hundreds of distributed sites with smaller teams.",
      },
    },
    {
      "@type": "Question",
      name: "What is predictive maintenance for solar mini-grids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Predictive maintenance for solar mini-grids uses AI anomaly detection on production and consumption data to flag irregular losses, potential meter tampering, or early equipment failure before they cause outages. This shifts maintenance from reactive to proactive, reducing downtime and extending asset life across distributed sites.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI help with mini-grid site selection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI analyses satellite imagery combined with geospatial data layers including population density, road access, proximity to existing grids, and socio-economic indicators to score village suitability and project energy demand. This replaces manual survey analysis, making expansion faster, more consistent, and data-driven.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help scale clean energy across multiple African countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A unified AI platform standardises data and performance metrics across countries with different infrastructure, regulatory environments, and customer profiles. This enables operators to manage hundreds of sites from a central platform while adapting models to local conditions in each market.",
      },
    },
  ],
};

export default function RuralEnergyCaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          {
            name: "Rural Energy AI Platform",
            url: "https://www.admireit.co/portfolio/rural-energy-ai-platform",
          },
        ]}
      />
      <Script
        id="case-study-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(caseStudyJsonLd)}
      </Script>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqJsonLd)}
      </Script>
      <RuralEnergyCaseStudyContent />
    </>
  );
}
