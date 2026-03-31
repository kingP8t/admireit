import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { FractionalAIContent } from "./FractionalAIContent";

export const metadata: Metadata = {
  title:
    "Hire Fractional AI & ML Developers — On-Demand AI Talent",
  description:
    "Access top-tier AI and ML engineers without the overhead of full-time hires. Flexible engagement models, seamless team integration, and domain-specific expertise across LLMs, computer vision, NLP, and MLOps. Book a free consultation.",
  alternates: { canonical: "https://www.admireit.co/services/fractional-ai-developers" },
  openGraph: {
    title:
      "Hire Fractional AI & ML Developers — On-Demand AI Talent | AdmireTech",
    description:
      "Top-tier AI and ML engineers on a fractional basis. Flexible engagement, seamless integration, domain expertise. Scale your team without the overhead.",
  },
};

export default function FractionalAIDevelopersPage() {
  return (
    <>
      <ServiceJsonLd name="Fractional AI & ML Developers" description="On-demand AI and ML engineering talent without the overhead of full-time hires." />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Services", url: "https://www.admireit.co/services" }, { name: "Fractional AI Developers", url: "https://www.admireit.co/services/fractional-ai-developers" }]} />
      <FractionalAIContent />
    </>
  );
}
