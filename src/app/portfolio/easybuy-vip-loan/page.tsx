import type { Metadata } from "next";
import { EasyBuyContent } from "./EasyBuyContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "EasyBuy VIP Loan — AI That Scales Digital Lending for Mass Markets",
  description:
    "How AdmireTech built a BNPL and device financing platform powered by AI credit scoring, automated collections, and real-time fraud detection — serving millions across Nigeria.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/easybuy-vip-loan",
  },
};

export default function EasyBuyCaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          { name: "EasyBuy VIP Loan", url: "https://www.admireit.co/portfolio/easybuy-vip-loan" },
        ]}
      />
      <EasyBuyContent />
    </>
  );
}
