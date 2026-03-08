"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";

const teamMembers = [
  { name: "Alex Carter", role: "CEO & Founder", location: "London" },
  { name: "Priya Sharma", role: "CTO", location: "Pune" },
  { name: "Adewale Ogun", role: "Head of AI", location: "Lagos" },
  { name: "Emily Chen", role: "Lead Designer", location: "London" },
];

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Every solution we build is measured by the real-world impact it creates for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the cutting edge of AI research and bring the latest advances to practical applications.",
  },
  {
    icon: Users,
    title: "Global Perspective",
    description: "With teams across three continents, we bring diverse insights to every project.",
  },
];

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl text-text-secondary leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("mission")}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t("missionText")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("story")}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t("storyText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide mx-auto">
          <SectionHeader
            title={t("teamTitle")}
            subtitle={t("teamSubtitle")}
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-20 h-20 rounded-full bg-card mx-auto mb-4" />
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-accent text-sm">{member.role}</p>
                  <p className="text-text-secondary text-xs mt-1">
                    {member.location}
                  </p>
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
