import type { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIProductManagementContent } from "./AIProductManagementContent";

export const metadata: Metadata = {
  title:
    "AI Product Management From South Africa: 5 Hard Lessons From 15+ Projects | AdmireTech",
  description:
    "A Technical Product Manager at AdmireTech shares 5 unfiltered lessons from managing 15+ AI chatbot and automation projects across London, Pune, and Lagos — all from Johannesburg.",
  openGraph: {
    title:
      "AI Product Management From South Africa: 5 Hard Lessons From 15+ Projects",
    description:
      "A Technical Product Manager shares unfiltered lessons from shipping AI projects across three continents — without leaving Johannesburg.",
    type: "article",
    publishedTime: "2026-05-06T08:00:00Z",
    authors: ["Kgomotso Senanya"],
  },
  alternates: {
    canonical:
      "https://www.admireit.co/blog/ai-product-management-lessons",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Product Management From South Africa: 5 Hard Lessons From 15+ Projects",
  description:
    "A Technical Product Manager at AdmireTech shares 5 unfiltered lessons from managing 15+ AI chatbot and automation projects across London, Pune, and Lagos.",
  author: {
    "@type": "Person",
    name: "Kgomotso Senanya",
    jobTitle: "Technical Product Manager",
    worksFor: {
      "@type": "Organization",
      name: "AdmireTech",
      url: "https://www.admireit.co",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "AdmireTech",
    url: "https://www.admireit.co",
  },
  datePublished: "2026-05-06T08:00:00Z",
  dateModified: "2026-05-06T08:00:00Z",
  mainEntityOfPage:
    "https://www.admireit.co/blog/ai-product-management-lessons",
  keywords: [
    "AI product management",
    "technical product manager AI",
    "managing AI projects",
    "AI chatbot project management",
    "remote AI project management",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an AI Technical Product Manager actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Technical Product Manager bridges the gap between business problems and technical AI solutions. They define requirements, manage stakeholders, run discovery, oversee delivery, and ensure AI systems behave as intended — without writing the code themselves. In AI projects specifically, they also manage uncertainty, set realistic expectations around model behaviour, and build monitoring and feedback loops post-launch.",
      },
    },
    {
      "@type": "Question",
      name: "What technical skills does an AI product manager need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need enough technical depth to have meaningful conversations with engineers: reading API responses, understanding the difference between fine-tuning and RAG (retrieval-augmented generation), reading pull requests for compliance or privacy concerns, and grasping prompt engineering fundamentals. You don't need to be an ML engineer, but surface-level high-level understanding isn't enough to do the job well.",
      },
    },
    {
      "@type": "Question",
      name: "How do you manage AI projects across different time zones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Identify the overlap window between all time zones — often just 1–2 hours — and protect it fiercely for live collaboration. For everything else, invest heavily in async communication: detailed PRDs, written decision logs, and clear ticket descriptions. Remote AI project management works best when documentation is a first-class deliverable, not an afterthought.",
      },
    },
    {
      "@type": "Question",
      name: "Why do AI projects fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common causes include: poor data quality feeding the model, misaligned stakeholder expectations about what AI can and cannot do, insufficient post-launch monitoring, scope creep from chasing technical perfection over shipping, and lack of a human-in-the-loop checkpoint for edge cases. Discovery phase failures — where the real business problem isn't properly identified — are also a leading culprit.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI product management different from traditional product management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI product management involves managing uncertainty in a way traditional PM does not. AI systems can hallucinate, drift over time, and behave unpredictably in edge cases. This means AI PMs must build feedback loops and monitoring into every project from the start. Expectation management with non-technical stakeholders is also a significantly larger and more continuous part of the role.",
      },
    },
  ],
};

export default function AIProductManagementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Blog", url: "https://www.admireit.co/blog" },
          {
            name: "AI Product Management From South Africa",
            url: "https://www.admireit.co/blog/ai-product-management-lessons",
          },
        ]}
      />
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
      <AIProductManagementContent />
    </>
  );
}
