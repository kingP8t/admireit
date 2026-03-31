import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { LandRegistryContent } from "./LandRegistryContent";

export const metadata: Metadata = {
  title:
    "AI-Powered Land Registry Modernisation for a Nigerian State Government",
  description:
    "How AdmireTech partnered with a Nigerian State Ministry of Lands to replace paper-based land records with an AI-enabled digital registry — cutting title search times by up to 80%, detecting fraud in real time, and unlocking land-based revenue.",
  openGraph: {
    title:
      "AI-Powered Land Registry Modernisation for a Nigerian State Government | AdmireTech",
    description:
      "How AdmireTech partnered with a Nigerian State Ministry of Lands to replace paper-based land records with an AI-enabled digital registry — cutting title search times by up to 80% and detecting fraud in real time.",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.admireit.co/portfolio/land-registry-ai-modernisation",
  },
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI-Powered Land Registry Modernisation for a Nigerian State Government",
  description:
    "How AdmireTech partnered with a Nigerian State Ministry of Lands to replace paper-based land records with an AI-enabled digital registry — cutting title search times by up to 80%, detecting fraud in real time, and unlocking land-based revenue.",
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
    "https://www.admireit.co/portfolio/land-registry-ai-modernisation",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to digitise a state land registry in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A phased approach typically takes 18 to 24 months to reach state-wide coverage. The first phase (diagnostic and roadmap) takes 3 to 4 months, a core platform pilot in high-priority areas takes another 6 to 8 months, and full scale-up with AI enrichment follows from month 12 onwards. Early wins like faster title searches and CTC processing are visible within the first 6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI really detect land fraud in Nigerian registries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI anomaly detection models can scan entire registries for red flags that manual checks miss — including multiple allocations on the same parcel, suspicious ownership chains, mismatches between survey coordinates and title documents, and patterns consistent with forged documents. These models improve over time as more data is digitised and more cases are resolved.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies are used to modernise a land registry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A modern land registry combines Geographic Information Systems (GIS) for spatial data, Optical Character Recognition (OCR) for digitising paper records, machine learning for title search and fraud detection, workflow automation for application processing, secure APIs for integration with tax and financial systems, and cloud infrastructure for reliability and scalability.",
      },
    },
    {
      "@type": "Question",
      name: "How does a digital land registry increase state government revenue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When properties are brought into a searchable digital system, the state gains visibility over ground rent, consent fees, and property taxes that were previously uncollectable because records were incomplete or inaccessible. Digital registries also enable better enforcement of payment compliance and reduce revenue leakage from unregistered or informally held properties.",
      },
    },
    {
      "@type": "Question",
      name: "Does AdmireTech work with government organisations on AI projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AdmireTech has experience partnering with public sector organisations on AI and digital transformation projects across Nigeria and other developing markets. Our approach combines technical delivery with change management and capacity building to ensure sustainable adoption. We work within existing institutional frameworks rather than trying to replace them.",
      },
    },
  ],
};

export default function LandRegistryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          {
            name: "Land Registry AI Modernisation",
            url: "https://www.admireit.co/portfolio/land-registry-ai-modernisation",
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
      <LandRegistryContent />
    </>
  );
}
