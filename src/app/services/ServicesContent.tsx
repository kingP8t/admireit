"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bot, Zap, Code, Brain, Target, Users, Check, ArrowRight, Globe, Clock, Award, TrendingUp, Search, Wrench, Rocket, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We audit your workflows, data, and tech stack to identify the highest-impact AI opportunities. No assumptions — just evidence.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    description: "We design a practical roadmap with clear milestones, KPIs, and an architecture blueprint tailored to your business goals.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Build",
    description: "Our engineers ship production-grade AI solutions in agile sprints. You see working software every two weeks — not slide decks.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Deploy",
    description: "We launch with confidence — phased rollouts, monitoring, and failover plans ensure zero disruption to your operations.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Optimise",
    description: "Post-launch, we continuously measure performance, retrain models, and iterate. AI gets better with use — and so do your results.",
    icon: BarChart3,
  },
];

const differentiators = [
  {
    icon: Award,
    title: "10+ Years of Delivery Experience",
    description: "Our leadership team has shipped AI and software products across fintech, healthcare, e-commerce, and enterprise SaaS — we have seen what works and what fails.",
  },
  {
    icon: Users,
    title: "13-Person Global Team",
    description: "Senior engineers, ML specialists, and project managers across three time zones. You get a dedicated team, not a solo freelancer juggling five clients.",
  },
  {
    icon: Target,
    title: "Outcome-Based Pricing",
    description: "We tie our fees to your results. Pay for measurable business impact — reduced costs, increased revenue, faster operations — not hours logged on a timesheet.",
  },
  {
    icon: Globe,
    title: "Offices in London, Pune & Lagos",
    description: "With teams across the UK, India, and Nigeria, we provide near-24/7 coverage. Your project moves forward while you sleep — and we understand local markets firsthand.",
  },
  {
    icon: Clock,
    title: "Rapid Time to Value",
    description: "Most clients see their first AI solution in production within 4 to 8 weeks. We prioritise quick wins that prove ROI before scaling to larger initiatives.",
  },
  {
    icon: TrendingUp,
    title: "Full-Stack AI Capability",
    description: "From LLM-powered chatbots and document automation to predictive analytics and custom ML models — we cover the entire AI spectrum so you never need to cobble together multiple vendors.",
  },
];

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Custom AI-powered chatbots that handle customer support, lead generation, and internal workflows around the clock.",
    features: ["Natural language understanding", "Multi-channel deployment", "Analytics dashboard", "Human handoff"],
    slug: "ai-chatbots",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Streamline operations with intelligent automation that reduces manual work and boosts efficiency across your organisation.",
    features: ["Workflow automation", "Document processing", "Email automation", "Custom integrations"],
    slug: "ai-automation",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Full-stack web and mobile applications built with modern technologies and deep AI integration.",
    features: ["Web applications", "Mobile apps", "API development", "AI/ML integration"],
    slug: "custom-development",
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance on AI adoption, from feasibility studies to full implementation roadmaps.",
    features: ["AI readiness assessment", "Strategy roadmap", "Vendor evaluation", "Change management"],
    slug: "ai-consulting",
  },
  {
    icon: Target,
    title: "Outcome Based Development",
    description: "We tie our delivery to your business results. Pay for outcomes, not hours — aligned incentives that guarantee measurable impact.",
    features: ["Results-linked delivery", "KPI-driven milestones", "Risk-shared pricing", "Measurable ROI"],
    slug: "outcome-based-development",
  },
  {
    icon: Users,
    title: "Hire Fractional AI & ML Developers",
    description: "Access top-tier AI and ML engineers on a fractional basis \u2014 scale your team without the overhead of full-time hires.",
    features: ["On-demand AI engineers", "Flexible engagement models", "Seamless team integration", "Domain-specific expertise"],
    slug: "fractional-ai-developers",
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
            <p className="mt-4 text-text-secondary leading-relaxed">
              Whether you need an AI chatbot that handles thousands of customer conversations, workflow automation that saves your team 20+ hours per week, or a full-stack application with deep AI integration — we deliver production-grade solutions that drive measurable ROI. Our teams in London, Pune, and Lagos work across time zones to ship faster, and our outcome-based model means you only pay for what gets built.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              AdmireTech was founded on a simple principle: AI should solve real problems, not create impressive demos that never make it to production. Every service we offer is designed around this philosophy — from initial discovery through deployment and ongoing optimisation. We work with businesses of all sizes, from 10-person startups launching their first chatbot to 500-person enterprises rolling out company-wide AI transformation programmes. Our multidisciplinary team includes machine learning engineers, full-stack developers, AI strategists, and project managers who have collectively shipped over 50 production AI systems across fintech, healthcare, e-commerce, logistics, and enterprise SaaS.
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
                      {service.slug && (
                        <Link
                          href={`/services/${service.slug}`}
                          className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-warm transition-colors group"
                        >
                          Learn more
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AdmireTech */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AdmireTech
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Dozens of agencies claim to &ldquo;do AI.&rdquo; Most build demos that never ship. AdmireTech is different — we are practitioners who have deployed production AI systems for startups, SMEs, and enterprises across three continents. Here is what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <diff.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-card/50">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every engagement follows a proven five-phase methodology designed to minimise risk and maximise speed to value. We move fast — but never recklessly. Each phase has clear deliverables, so you always know exactly where your project stands and what comes next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-white/5 rounded-xl p-6 h-full hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-xs font-bold tracking-wider">{step.step}</span>
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <step.icon size={18} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-text-secondary text-sm leading-relaxed max-w-3xl"
          >
            Whether you engage us for a focused four-week sprint or a twelve-month transformation programme, this framework ensures consistent quality, transparent communication, and measurable outcomes at every stage. We believe the best AI projects are the ones that ship — and keep getting better after launch.
          </motion.p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
