import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { OutcomeBasedContent } from "./OutcomeBasedContent";

export const metadata: Metadata = {
  title:
    "Outcome-Based Development — Pay for What Gets Built",
  description:
    "No hourly billing. No vague retainers. AdmireTech charges per delivered feature using story points — so our incentives are perfectly aligned with yours. 7-day risk-free trial.",
  alternates: { canonical: "https://www.admireit.co/services/outcome-based-development" },
  openGraph: {
    title: "Outcome-Based Development — Pay for What Gets Built | AdmireTech",
    description:
      "No hourly billing. No vague retainers. Pay per delivered feature with full cost clarity from Day 1. 7-day risk-free trial.",
  },
};

export default function OutcomeBasedDevPage() {
  return (
    <>
      <ServiceJsonLd name="Outcome-Based Development" description="Pay-per-feature development model with aligned incentives and measurable outcomes." />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.admireit.co" }, { name: "Services", url: "https://www.admireit.co/services" }, { name: "Outcome-Based Development", url: "https://www.admireit.co/services/outcome-based-development" }]} />
      <OutcomeBasedContent />
    </>
  );
}
