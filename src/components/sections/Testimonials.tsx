"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    role: "CTO",
    quote:
      "AdmireIT transformed our customer support with an AI chatbot that handles 70% of queries automatically. Game-changer for our business.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    company: "InnovatePune",
    role: "Founder",
    quote:
      "Their AI automation saved us 200+ hours per month. The team is brilliant, responsive, and truly understands business needs.",
    rating: 5,
  },
  {
    name: "Oluwaseun Adeyemi",
    company: "LagosStartup Hub",
    role: "CEO",
    quote:
      "Working with AdmireIT felt like having a tech partner, not just a vendor. They delivered beyond our expectations.",
    rating: 5,
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-wide mx-auto">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="h-full flex flex-col" hover={false}>
                <Quote size={32} className="text-accent/30 mb-4" />
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-accent-warm fill-accent-warm"
                      />
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {item.name}
                  </p>
                  <p className="text-text-secondary text-xs">
                    {item.role}, {item.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
