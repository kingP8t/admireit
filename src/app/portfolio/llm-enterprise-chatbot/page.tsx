import type { Metadata } from "next";
import { ChatbotCaseStudyContent } from "./ChatbotCaseStudyContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Advanced LLM-Powered Enterprise Chatbot",
  description:
    "How AdmireTech built a production-grade LLM chatbot using RAG architecture for a leading cloud solutions company — reducing IT support tickets by 60% with instant, accurate query resolution.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/llm-enterprise-chatbot",
  },
};

export default function ChatbotCaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          { name: "LLM Enterprise Chatbot", url: "https://www.admireit.co/portfolio/llm-enterprise-chatbot" },
        ]}
      />
      <ChatbotCaseStudyContent />
    </>
  );
}
