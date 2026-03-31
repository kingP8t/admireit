import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIEthicsContent } from "./AIEthicsContent";

export const metadata: Metadata = {
  title:
    "The Ethics of AI in Business: What You Need to Know in 2026",
  description:
    "Navigate the ethical challenges of AI deployment in your organisation. Learn about bias, transparency, data privacy, accountability, and how to build responsible AI systems that customers and regulators trust.",
  openGraph: {
    title: "The Ethics of AI in Business: What You Need to Know in 2026",
    description:
      "Bias, transparency, privacy, accountability — navigating the ethical challenges of AI deployment. A practical guide for business leaders in 2026.",
    type: "article",
    publishedTime: "2026-02-20T08:00:00Z",
    authors: ["AdmireTech"],
  },
  alternates: {
    canonical: "https://www.admireit.co/blog/ai-ethics-business",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Ethics of AI in Business: What You Need to Know in 2026",
  description:
    "Navigate the ethical challenges of AI deployment in your organisation. Learn about bias, transparency, data privacy, accountability, and responsible AI frameworks.",
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
  datePublished: "2026-02-20T08:00:00Z",
  dateModified: "2026-02-20T08:00:00Z",
  mainEntityOfPage:
    "https://www.admireit.co/blog/ai-ethics-business",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main ethical concerns with AI in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five main ethical concerns are algorithmic bias where AI systems discriminate against certain groups, lack of transparency in how AI makes decisions, data privacy risks from collecting and processing personal information, unclear accountability when AI causes harm, and workforce displacement as automation replaces certain roles. Each concern requires proactive governance rather than reactive fixes.",
      },
    },
    {
      "@type": "Question",
      name: "How do you prevent bias in AI systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preventing AI bias requires a multi-layered approach. Start by auditing training data for demographic imbalances and historical prejudices. Use diverse teams during model development to catch blind spots. Implement fairness metrics and test across different population segments before deployment. Run regular post-deployment audits to catch drift. No AI system is perfectly unbiased, but these practices significantly reduce the risk of harmful discrimination.",
      },
    },
    {
      "@type": "Question",
      name: "What AI regulations should businesses be aware of in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The EU AI Act is now fully enforced, classifying AI systems by risk level and imposing strict requirements on high-risk applications. The UK has sector-specific AI regulation through existing regulators. The US has a patchwork of state-level laws plus federal guidelines. Nigeria and Kenya are developing AI governance frameworks. Businesses operating across borders must comply with the strictest applicable regulation, making a strong internal governance framework essential.",
      },
    },
    {
      "@type": "Question",
      name: "How do you make AI decisions transparent and explainable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI transparency starts with choosing interpretable models where possible and using explainability tools like SHAP and LIME for complex models. Provide clear documentation of what data the AI uses, how it makes decisions, and what its known limitations are. For customer-facing AI, offer plain-language explanations of decisions and give users the ability to request human review. Internal audit trails should log every AI decision for compliance review.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an AI ethics framework for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, any business deploying AI should have an ethics framework, regardless of size. It does not need to be a 100-page document. A practical framework covers five areas: principles defining your ethical boundaries, a risk assessment process for new AI projects, bias testing protocols, data privacy safeguards, and an accountability structure defining who is responsible when things go wrong. Starting with a lightweight framework and iterating is far better than having none at all.",
      },
    },
  ],
};

export default function AIEthicsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Blog", url: "https://www.admireit.co/blog" }, { name: "The Ethics of AI in Business: What You Need to Know in 2026", url: "https://www.admireit.co/blog/ai-ethics-business" }]} />
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
      <AIEthicsContent />
    </>
  );
}
