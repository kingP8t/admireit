import type { Metadata } from "next";
import { SavingsBudgetingContent } from "./SavingsBudgetingContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI-Driven Savings & Budgeting for a Nigerian Microfinance Institution",
  description:
    "How AdmireTech helped a Nigerian microfinance institution boost savings consistency with AI-driven transaction analysis, personalised nudges, and goal-based savings pots.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/ai-savings-budgeting-mfi",
  },
};

export default function SavingsBudgetingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          {
            name: "AI Savings & Budgeting for a Nigerian MFI",
            url: "https://www.admireit.co/portfolio/ai-savings-budgeting-mfi",
          },
        ]}
      />
      <SavingsBudgetingContent />
    </>
  );
}
