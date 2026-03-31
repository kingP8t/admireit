import type { Metadata } from "next";
import { MFBCaseStudyContent } from "./MFBCaseStudyContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI-Driven Transformation for a Nigerian Microfinance Bank",
  description:
    "How AdmireTech partnered with a mid-sized MFB to redesign credit scoring, loan management, fraud detection, and customer service using production-grade AI.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/mfb-ai-transformation",
  },
};

export default function MFBCaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          { name: "MFB AI Transformation", url: "https://www.admireit.co/portfolio/mfb-ai-transformation" },
        ]}
      />
      <MFBCaseStudyContent />
    </>
  );
}
