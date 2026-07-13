import type { Metadata } from "next";
import { CrmAiAgentContent } from "./CrmAiAgentContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "CRM AI Agent for Motor Insurance — Case Study",
  description:
    "How AdmireTech's CRM AI agent cut admin work, sped up quotes, and improved renewals for a Nigerian motor insurer.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio/crm-ai-agent-motor-insurance",
  },
};

export default function CrmAiAgentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          {
            name: "CRM AI Agent for a Nigerian Motor Insurer",
            url: "https://www.admireit.co/portfolio/crm-ai-agent-motor-insurance",
          },
        ]}
      />
      <CrmAiAgentContent />
    </>
  );
}
