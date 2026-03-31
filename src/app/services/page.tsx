import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Services — Chatbots, Automation & Custom Development",
  description:
    "Explore AdmireTech's AI services: chatbots, automation, custom development, consulting, data analytics, and AI security.",
  alternates: {
    canonical: "https://www.admireit.co/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Services", url: "https://www.admireit.co/services" },
        ]}
      />
      <ServicesContent />
    </>
  );
}
