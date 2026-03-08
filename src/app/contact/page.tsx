import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AdmireIT. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
