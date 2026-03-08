import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AdmireIT — our mission, story, and the talented team building the future of AI-driven businesses.",
};

export default function AboutPage() {
  return <AboutContent />;
}
