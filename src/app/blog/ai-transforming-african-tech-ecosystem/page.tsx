import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIAfricanTechContent } from "./AIAfricanTechContent";

export const metadata: Metadata = {
  title:
    "5 Ways AI Is Transforming the African Tech Ecosystem in 2026",
  description:
    "From fintech to healthtech, AI is reshaping Africa's tech landscape. Discover 5 transformative trends driving innovation across Lagos, Nairobi, Cape Town, and beyond in 2026.",
  openGraph: {
    title: "5 Ways AI Is Transforming the African Tech Ecosystem in 2026",
    description:
      "From fintech to healthtech, AI is reshaping Africa's tech landscape. Here are 5 transformative trends driving innovation across the continent in 2026.",
    type: "article",
    publishedTime: "2026-03-10T08:00:00Z",
    authors: ["AdmireTech"],
  },
  alternates: {
    canonical:
      "https://www.admireit.co/blog/ai-transforming-african-tech-ecosystem",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "5 Ways AI Is Transforming the African Tech Ecosystem in 2026",
  description:
    "From fintech to healthtech, AI is reshaping Africa's tech landscape. Discover 5 transformative trends driving innovation across the continent.",
  author: {
    "@type": "Person",
    name: "Peter King",
    jobTitle: "CEO & CTO",
    url: "https://www.admireit.co/about",
  },
  publisher: {
    "@type": "Organization",
    name: "AdmireTech",
    url: "https://www.admireit.co",
  },
  datePublished: "2026-03-10T08:00:00Z",
  dateModified: "2026-03-10T08:00:00Z",
  mainEntityOfPage:
    "https://www.admireit.co/blog/ai-transforming-african-tech-ecosystem",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is AI being used in Africa right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is being deployed across Africa in fintech for credit scoring and fraud detection, in healthtech for diagnostics and telemedicine triage, in agriculture for crop monitoring and yield prediction, in logistics for route optimisation and last-mile delivery, and in edtech for personalised learning platforms. Cities like Lagos, Nairobi, and Cape Town are emerging as major AI innovation hubs.",
      },
    },
    {
      "@type": "Question",
      name: "Which African countries are leading in AI adoption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nigeria, Kenya, South Africa, Egypt, and Ghana are leading AI adoption in Africa. Nigeria's Lagos is the continent's largest tech hub with a thriving fintech ecosystem. Kenya's Nairobi is known for mobile-first innovation. South Africa leads in enterprise AI adoption, while Egypt and Ghana are rapidly growing their AI startup scenes.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest challenges for AI in Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key challenges include limited access to quality training data, infrastructure gaps such as inconsistent internet connectivity and power supply, a shortage of specialised AI talent, regulatory uncertainty in some markets, and the need for AI models that understand local languages and contexts. However, these challenges are being addressed through initiatives in local data collection, cloud infrastructure investment, and AI skills programmes.",
      },
    },
    {
      "@type": "Question",
      name: "How can African businesses start using AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "African businesses can start with high-impact, low-complexity AI use cases such as customer support chatbots, automated document processing, or predictive analytics for sales. Partnering with an AI consultancy that understands local market dynamics is often the fastest path. Cloud-based AI services have also made it possible to deploy solutions without heavy upfront infrastructure investment.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI creating or destroying jobs in Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is creating more jobs than it displaces in Africa. While some routine tasks are being automated, AI is generating new roles in data annotation, AI engineering, prompt engineering, and AI-augmented customer service. The World Economic Forum estimates that AI will create 97 million new roles globally by 2025, and Africa's young, tech-savvy workforce is well positioned to capture a significant share of these opportunities.",
      },
    },
  ],
};

export default function AIAfricanTechPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Blog", url: "https://www.admireit.co/blog" }, { name: "5 Ways AI Is Transforming the African Tech Ecosystem in 2026", url: "https://www.admireit.co/blog/ai-transforming-african-tech-ecosystem" }]} />
      <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqJsonLd)}
      </Script>
      <AIAfricanTechContent />
    </>
  );
}
