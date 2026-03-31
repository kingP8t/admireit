import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIConsultingContent } from "./AIConsultingContent";

export const metadata: Metadata = {
  title:
    "AI Consulting — From AI Strategy to Production in 90 Days",
  description:
    "Stop guessing where AI fits in your business. AdmireTech delivers AI readiness assessments, implementation roadmaps, vendor evaluation, and change management — so you adopt AI with confidence, not hype. Book a free consultation.",
  alternates: { canonical: "https://www.admireit.co/services/ai-consulting" },
  openGraph: {
    title:
      "AI Consulting — From AI Strategy to Production in 90 Days | AdmireTech",
    description:
      "AI readiness assessments, strategy roadmaps, vendor evaluation, and change management. Adopt AI with confidence, not hype. Free 30-min consultation.",
  },
};

export default function AIConsultingServicePage() {
  return (
    <>
      <ServiceJsonLd name="AI Consulting" description="AI readiness assessments, implementation roadmaps, vendor evaluation, and change management." />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Services", url: "https://www.admireit.co/services" }, { name: "AI Consulting", url: "https://www.admireit.co/services/ai-consulting" }]} />
      <AIConsultingContent />
    </>
  );
}
