import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { AIAutomationContent } from "./AIAutomationContent";

export const metadata: Metadata = {
  title:
    "AI Automation — Eliminate Manual Work, Scale Operations",
  description:
    "Stop your team from drowning in repetitive tasks. AdmireTech builds intelligent automation for workflows, document processing, email, and custom integrations — saving 20+ hours per employee per week. Book a free consultation.",
  alternates: { canonical: "https://www.admireit.co/services/ai-automation" },
  openGraph: {
    title:
      "AI Automation — Eliminate Manual Work, Scale Operations | AdmireTech",
    description:
      "Intelligent workflow automation, document processing, email automation, and custom integrations. Save 20+ hours per employee per week.",
  },
};

export default function AIAutomationServicePage() {
  return (
    <>
      <ServiceJsonLd name="AI Automation" description="Intelligent automation for workflows, document processing, email, and custom integrations." />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Services", url: "https://www.admireit.co/services" }, { name: "AI Automation", url: "https://www.admireit.co/services/ai-automation" }]} />
      <AIAutomationContent />
    </>
  );
}
