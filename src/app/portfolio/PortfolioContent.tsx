"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { PortfolioCover } from "@/components/ui/PortfolioCover";
import { CTA } from "@/components/sections/CTA";

export interface SanityCaseStudyItem {
  title: string;
  slug: { current: string };
  client?: string;
  description?: string;
  technologies?: string[];
  coverImage?: string; // pre-resolved URL
}

const caseStudies = [
  {
    title: "AI-Driven Transformation for a Nigerian Microfinance Bank",
    client: "National MFB",
    description: "Redesigned credit scoring, loan management, fraud detection, and customer service using production-grade AI \u2014 cutting approval times from days to under 2 hours.",
    technologies: ["ML", "NLP", "Python", "WhatsApp API"],
    slug: "mfb-ai-transformation",
    featured: true,
  },
  {
    title: "EasyBuy VIP Loan — AI That Scales Digital Lending",
    client: "EasyBuy",
    description: "Built an AI-powered BNPL and device financing platform with instant credit decisions, automated collections, and fraud prevention — serving millions across Nigeria.",
    technologies: ["ML", "Python", "WhatsApp API", "Device Lock"],
    slug: "easybuy-vip-loan",
    featured: true,
  },
  {
    title: "Advanced LLM-Powered Enterprise Chatbot",
    client: "Cloud Solutions Provider",
    description: "Built a production-grade LLM chatbot with RAG architecture for a leading cloud solutions company \u2014 reducing IT support tickets by 60% with instant, accurate query resolution 24/7.",
    technologies: ["GPT-4o", "RAG", "LangChain", "FastAPI", "Azure"],
    slug: "llm-enterprise-chatbot",
    featured: true,
  },
  {
    title: "Real-Time Warehouse Management PWA for E-commerce",
    client: "Fashion E-commerce Retailer",
    description: "Built a custom real-time Progressive Web App that eliminated order chaos — cutting processing time by 37%, removing duplicate orders entirely, and reducing label printing from 4 minutes to 10 seconds.",
    technologies: ["React", "TypeScript", "Convex", "WooCommerce", "PWA"],
    slug: "warehouse-management-pwa",
    featured: true,
  },
  {
    title: "Fractional AI/ML Developer — Scaling Engineering & Launching 3 AI Products",
    client: "Series A SaaS Marketplace",
    description: "Deployed a senior Fractional AI/ML Developer who scaled an 8-person team to 35 engineers, shipped 3 production AI products, and prepared the company for Series B — all at 40% of full-time CTO cost.",
    technologies: ["Python", "OpenAI", "LangChain", "AWS", "Kubernetes"],
    slug: "fractional-ai-developer",
    featured: true,
  },
];

export function PortfolioContent({ sanityCaseStudies = [] }: { sanityCaseStudies?: SanityCaseStudyItem[] }) {
  const t = useTranslations("portfolio");

  // Filter out Sanity case studies that duplicate static slugs
  const staticSlugs = new Set(caseStudies.map((s) => s.slug));
  const newSanityCaseStudies = sanityCaseStudies.filter(
    (s) => !staticSlugs.has(s.slug.current)
  );

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
            <p className="mt-4 text-text-secondary leading-relaxed">
              From AI-powered credit scoring for microfinance banks to enterprise chatbots processing thousands of conversations daily, every project below delivered measurable business outcomes. We work with startups, scale-ups, and enterprises across fintech, e-commerce, logistics, and SaaS — building solutions that go live in weeks, not months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sanity CMS case studies (shown first) */}
            {newSanityCaseStudies.map((study, i) => (
              <motion.div
                key={study.slug.current}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {study.coverImage ? (
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={study.coverImage}
                        alt={`Case study: ${study.title}`}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <PortfolioCover slug={study.slug.current} className="w-full h-48 mb-4" alt={`Case study: ${study.title}`} />
                  )}
                  {study.client && (
                    <p className="text-accent text-xs font-medium mb-1">{study.client}</p>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  {study.description && (
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {study.description}
                    </p>
                  )}
                  {study.technologies && study.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-background-secondary rounded text-xs text-text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/portfolio/${study.slug.current}`}
                    className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-warm transition-colors group"
                  >
                    {t("viewCase")}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            ))}

            {/* Static case studies */}
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <PortfolioCover slug={study.slug} className="w-full h-48 mb-4" alt={`Case study: ${study.title}`} />
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
