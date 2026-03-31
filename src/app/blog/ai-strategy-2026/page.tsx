import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIStrategyContent } from "./AIStrategyContent";

export const metadata: Metadata = {
  title:
    "Why Every Business Needs an AI Strategy in 2026",
  description:
    "From startups to enterprises, an AI strategy is no longer optional. Learn how to build a practical AI roadmap that aligns with your business goals, avoids common pitfalls, and delivers measurable ROI in 2026.",
  openGraph: {
    title: "Why Every Business Needs an AI Strategy in 2026",
    description:
      "AI strategy is no longer optional. Here's how startups and enterprises alike can build a practical roadmap that delivers measurable ROI.",
    type: "article",
    publishedTime: "2026-03-05T08:00:00Z",
    authors: ["AdmireTech"],
  },
  alternates: {
    canonical: "https://www.admireit.co/blog/ai-strategy-2026",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Every Business Needs an AI Strategy in 2026",
  description:
    "From startups to enterprises, an AI strategy is no longer optional. Learn how to build a practical AI roadmap that delivers measurable ROI.",
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
  datePublished: "2026-03-05T08:00:00Z",
  dateModified: "2026-03-05T08:00:00Z",
  mainEntityOfPage:
    "https://www.admireit.co/blog/ai-strategy-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI strategy and why do I need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI strategy is a structured plan that defines how your business will adopt, deploy, and scale artificial intelligence to achieve specific goals. You need one because ad-hoc AI adoption leads to wasted budgets, tool sprawl, and projects that never move past the proof-of-concept stage. A clear strategy aligns AI investments with business outcomes, prioritises high-impact use cases, and creates a roadmap for building the data infrastructure, talent, and governance needed to succeed.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to develop an AI strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI strategy development costs vary widely. A focused strategy workshop with an experienced consultancy typically ranges from 5,000 to 25,000 pounds and delivers a prioritised roadmap within 2 to 4 weeks. A comprehensive enterprise AI strategy covering multiple business units, data architecture, talent planning, and governance can range from 25,000 to 100,000 pounds over 2 to 3 months. The investment pays for itself by preventing costly missteps and focusing resources on the highest-ROI use cases.",
      },
    },
    {
      "@type": "Question",
      name: "What should an AI strategy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A practical AI strategy should include a clear vision statement tying AI to business goals, an audit of current data and technology readiness, a prioritised list of AI use cases ranked by impact and feasibility, a data infrastructure plan, a talent and skills assessment, a governance and ethics framework, a phased implementation roadmap with milestones, and defined success metrics and KPIs for measuring ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Can small businesses benefit from an AI strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Small businesses often benefit the most because they can move faster than enterprises and AI levels the playing field. A small e-commerce brand can use AI chatbots for customer support, a local logistics company can optimise routes with AI, and a professional services firm can automate document processing. The key is starting with one high-impact use case rather than trying to transform everything at once. Cloud-based AI tools have also made entry costs much lower than they were even two years ago.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest mistakes businesses make with AI adoption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five most common mistakes are starting with technology instead of business problems, underestimating data quality and infrastructure needs, skipping the strategy phase and jumping straight to pilots, failing to get executive buy-in and cross-functional alignment, and treating AI as a one-off project rather than an ongoing capability. Each of these leads to wasted investment and disillusionment. A solid AI strategy addresses all five before a single line of code is written.",
      },
    },
  ],
};

export default function AIStrategyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Blog", url: "https://www.admireit.co/blog" }, { name: "Why Every Business Needs an AI Strategy in 2026", url: "https://www.admireit.co/blog/ai-strategy-2026" }]} />
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
      <AIStrategyContent />
    </>
  );
}
