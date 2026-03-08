import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AdmireIT's AI services: chatbots, automation, custom development, consulting, data analytics, and AI security.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
