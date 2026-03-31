import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIChatbotsCSBlogContent } from "./AIChatbotsCSBlogContent";

export const metadata: Metadata = {
  title:
    "How AI Chatbots Are Revolutionising Customer Support in 2026",
  description:
    "Discover how AI chatbots are transforming customer support with instant responses, 60% cost reduction, and 24/7 availability. Learn why businesses across London, Lagos & Pune are adopting AI-powered support in 2026.",
  openGraph: {
    title:
      "How AI Chatbots Are Revolutionising Customer Support in 2026",
    description:
      "AI chatbots are transforming customer support — instant responses, 60% cost reduction, 24/7 availability. Here's how leading businesses are adopting them in 2026.",
    type: "article",
    publishedTime: "2026-03-15T08:00:00Z",
    authors: ["AdmireTech"],
  },
  alternates: {
    canonical: "https://www.admireit.co/blog/ai-chatbots-customer-support",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AI Chatbots Are Revolutionising Customer Support in 2026",
  description:
    "Discover how AI chatbots are transforming customer support with instant responses, 60% cost reduction, and 24/7 availability.",
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
  datePublished: "2026-03-15T08:00:00Z",
  dateModified: "2026-03-15T08:00:00Z",
  mainEntityOfPage:
    "https://www.admireit.co/blog/ai-chatbots-customer-support",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an AI chatbot cost for customer support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI chatbot costs vary based on complexity. Basic rule-based bots start from a few hundred pounds per month, while custom AI-powered solutions with NLP, integrations, and analytics typically range from 2,000 to 10,000 pounds for initial build plus a monthly maintenance fee. Most businesses see ROI within 3 to 6 months through reduced support costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI chatbots handle complex customer queries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern AI chatbots powered by large language models can handle nuanced, multi-turn conversations with high accuracy. They understand context, sentiment, and intent. For truly complex or sensitive issues, smart chatbots seamlessly hand off to human agents with full conversation history, ensuring customers never have to repeat themselves.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to deploy an AI chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic AI chatbot can be deployed in 2 to 4 weeks. A fully custom solution with CRM integrations, multi-channel deployment, analytics dashboards, and trained on your specific knowledge base typically takes 6 to 12 weeks. At AdmireTech, we follow a phased rollout approach so you start seeing value from week one.",
      },
    },
    {
      "@type": "Question",
      name: "Will an AI chatbot replace my customer support team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI chatbots are designed to augment your team, not replace them. They handle repetitive tier-1 queries like order status, FAQs, and password resets, freeing your human agents to focus on complex issues that require empathy, judgement, and creative problem-solving. Most companies see agent satisfaction increase after chatbot deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What channels can AI chatbots be deployed on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI chatbots can be deployed across multiple channels including your website, WhatsApp, Facebook Messenger, Instagram DMs, Slack, Microsoft Teams, SMS, and mobile apps. The best approach is an omnichannel strategy where conversations sync seamlessly across all platforms, giving customers a consistent experience.",
      },
    },
  ],
};

export default function AIChatbotsCSBlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Blog", url: "https://www.admireit.co/blog" }, { name: "How AI Chatbots Are Revolutionising Customer Support in 2026", url: "https://www.admireit.co/blog/ai-chatbots-customer-support" }]} />
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
      <AIChatbotsCSBlogContent />
    </>
  );
}
