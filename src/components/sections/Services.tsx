"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bot, Zap, Code, Brain, LineChart, Shield } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Custom AI-powered chatbots that handle customer support, lead generation, and internal workflows 24/7.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description:
      "Streamline operations with intelligent automation that reduces manual work and boosts efficiency.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Full-stack web and mobile applications built with modern technologies and AI integration.",
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description:
      "Strategic guidance on AI adoption, from feasibility studies to full implementation roadmaps.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with custom dashboards and predictive analytics.",
  },
  {
    icon: Shield,
    title: "AI Security",
    description:
      "Protect your AI systems with robust security measures, auditing, and compliance frameworks.",
  },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-wide mx-auto">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
