import type { Metadata } from "next";
import { PortfolioContent } from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore AdmireIT's portfolio of AI projects and case studies showcasing real impact for businesses worldwide.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
