import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIChatbotsContent } from "./AIChatbotsContent";

export const metadata: Metadata = {
  title:
    "AI Chatbots That Convert, Support & Scale 24/7",
  description:
    "Custom AI chatbots that handle customer support, lead generation, and internal workflows around the clock. Reduce support costs by 60%, respond in under 3 seconds, and never miss a lead. Book a free consultation.",
  alternates: { canonical: "https://www.admireit.co/services/ai-chatbots" },
  openGraph: {
    title: "AI Chatbots That Convert, Support & Scale 24/7 | AdmireTech",
    description:
      "Custom AI chatbots that handle customer support, lead generation, and internal workflows 24/7. Reduce support costs by 60% and respond in under 3 seconds.",
  },
};

export default function AIChatbotsServicePage() {
  return (
    <>
      <ServiceJsonLd name="AI Chatbots" description="Custom AI chatbots that handle customer support, lead generation, and internal workflows around the clock." />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Services", url: "https://www.admireit.co/services" }, { name: "AI Chatbots", url: "https://www.admireit.co/services/ai-chatbots" }]} />
      <AIChatbotsContent />
    </>
  );
}
