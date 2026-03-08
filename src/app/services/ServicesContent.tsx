"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bot, Zap, Code, Brain, LineChart, Shield, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Custom AI-powered chatbots that handle customer support, lead generation, and internal workflows around the clock.",
    features: ["Natural language understanding", "Multi-channel deployment", "Analytics dashboard", "Human handoff"],
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Streamline operations with intelligent automation that reduces manual work and boosts efficiency across your organisation.",
    features: ["Workflow automation", "Document processing", "Email automation", "Custom integrations"],
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Full-stack web and mobile applications built with modern technologies and deep AI integration.",
    features: ["Web applications", "Mobile apps", "API development", "AI/ML integration"],
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance on AI adoption, from feasibility studies to full implementation roadmaps.",
    features: ["AI readiness assessment", "Strategy roadmap", "Vendor evaluation", "Change management"],
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with custom dashboards and predictive analytics solutions.",
    features: ["Custom dashboards", "Predictive models", "Data pipelines", "Business intelligence"],
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your AI systems with robust security measures, auditing, and compliance frameworks.",
    features: ["AI auditing", "Prompt security", "Compliance", "Risk assessment"],
  },
];

export function ServicesContent() {
  const t = useTranslations("services");

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <service.icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h2>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-text-secondary text-xs"
                          >
                            <Check size={14} className="text-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
