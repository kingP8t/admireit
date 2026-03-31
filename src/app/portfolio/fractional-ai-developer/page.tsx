import type { Metadata } from "next";
import { FractionalAIContent } from "./FractionalAIContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Fractional AI/ML Developer — Scaling Engineering & Launching 3 AI Products",
  description:
    "How AdmireTech's Fractional AI/ML Developer helped a Series A SaaS startup scale from 8 to 35 engineers, define a complete AI strategy, and ship three production AI products in 12 months at 40% of a full-time hire cost.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/fractional-ai-developer",
  },
};

export default function FractionalAICaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          { name: "Fractional AI Developer", url: "https://www.admireit.co/portfolio/fractional-ai-developer" },
        ]}
      />
      <FractionalAIContent />
    </>
  );
}
