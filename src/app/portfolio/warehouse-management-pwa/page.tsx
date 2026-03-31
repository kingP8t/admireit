import type { Metadata } from "next";
import { WarehousePWAContent } from "./WarehousePWAContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Real-Time Warehouse Management PWA",
  description:
    "How AdmireTech built a custom real-time Progressive Web App that eliminated order chaos for an e-commerce fashion retailer — cutting processing time by 37% and eliminating duplicate orders entirely.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/warehouse-management-pwa",
  },
};

export default function WarehousePWACaseStudyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          { name: "Warehouse Management PWA", url: "https://www.admireit.co/portfolio/warehouse-management-pwa" },
        ]}
      />
      <WarehousePWAContent />
    </>
  );
}
