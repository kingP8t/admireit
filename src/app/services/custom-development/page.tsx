import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { CustomDevelopmentContent } from "./CustomDevelopmentContent";

export const metadata: Metadata = {
  title:
    "Custom Development — AI-Native Web & Mobile Apps Built to Scale",
  description:
    "Full-stack web and mobile applications with deep AI integration. From MVPs that ship in weeks to enterprise platforms handling millions of users. Modern tech stacks, production-grade code, and teams across London, Pune & Lagos.",
  alternates: { canonical: "https://www.admireit.co/services/custom-development" },
  openGraph: {
    title:
      "Custom Development — AI-Native Web & Mobile Apps Built to Scale | AdmireTech",
    description:
      "Full-stack web and mobile apps with deep AI integration. MVPs in weeks, enterprise platforms at scale. Book a free consultation.",
  },
};

export default function CustomDevelopmentServicePage() {
  return (
    <>
      <ServiceJsonLd name="Custom Development" description="Full-stack web and mobile applications with deep AI integration." />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Services", url: "https://www.admireit.co/services" }, { name: "Custom Development", url: "https://www.admireit.co/services/custom-development" }]} />
      <CustomDevelopmentContent />
    </>
  );
}
