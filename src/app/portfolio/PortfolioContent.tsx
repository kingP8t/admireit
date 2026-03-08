"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";

const caseStudies = [
  {
    title: "AI-Powered Customer Support for FinTech Startup",
    client: "PayFlow",
    description: "Reduced response time by 80% with a custom AI chatbot handling 15,000+ queries monthly.",
    technologies: ["GPT-4", "Next.js", "Python", "AWS"],
    slug: "payflow-ai-support",
  },
  {
    title: "Automated Document Processing for Legal Firm",
    client: "Carter & Associates",
    description: "Built an intelligent document processing pipeline that saves 120 hours per week.",
    technologies: ["OCR", "NLP", "React", "Node.js"],
    slug: "carter-document-automation",
  },
  {
    title: "Predictive Analytics Dashboard for E-commerce",
    client: "ShopSmart",
    description: "Developed a real-time analytics dashboard with demand forecasting, increasing revenue by 35%.",
    technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
    slug: "shopsmart-analytics",
  },
  {
    title: "AI Recruitment Platform for HR Agency",
    client: "TalentBridge",
    description: "Created an AI-powered recruitment tool that screens candidates 10x faster with better accuracy.",
    technologies: ["NLP", "React", "FastAPI", "MongoDB"],
    slug: "talentbridge-recruitment",
  },
  {
    title: "Voice AI Assistant for Healthcare Provider",
    client: "MedConnect",
    description: "Deployed a voice AI system handling appointment scheduling and patient triage for 50+ clinics.",
    technologies: ["Speech AI", "Twilio", "Node.js", "GCP"],
    slug: "medconnect-voice-ai",
  },
  {
    title: "Supply Chain Optimisation with Machine Learning",
    client: "LogiCorp",
    description: "Reduced logistics costs by 22% with ML-driven route optimisation and demand prediction.",
    technologies: ["ML", "Python", "Kubernetes", "Azure"],
    slug: "logicorp-supply-chain",
  },
];

export function PortfolioContent() {
  const t = useTranslations("portfolio");

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Placeholder image */}
                  <div className="w-full h-48 rounded-lg bg-background-secondary mb-4" />
                  <p className="text-accent text-xs font-medium mb-1">
                    {study.client}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background-secondary rounded text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-warm transition-colors group"
                  >
                    {t("viewCase")}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
