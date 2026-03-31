"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Monitor,
  Clock,
  CheckCircle,
  ChevronDown,
  Zap,
  Sun,
  Globe,
  BarChart3,
  Users,
  Cpu,
  Target,
  Satellite,
  Activity,
  PieChart,
  Sprout,
  Leaf,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: MapPin, label: "Madagascar \u00B7 Mali \u00B7 Pan-African" },
  { icon: Monitor, label: "Energy \u00B7 AI \u00B7 Infrastructure" },
  { icon: Clock, label: "Ongoing Engagement" },
  { icon: CheckCircle, label: "180+ Sites Live" },
];

const stats = [
  { value: "180+", label: "Mini-grids managed" },
  { value: "30K+", label: "Connections served" },
  { value: "99%+", label: "Uptime maintained" },
  { value: "900t", label: "CO\u2082 avoided / year" },
];

const challenges = [
  {
    icon: Activity,
    title: "No Unified Visibility",
    description:
      "Demand, losses, and outage data were scattered across tools with no real-time, cross-portfolio view.",
  },
  {
    icon: Satellite,
    title: "Manual Site Selection",
    description:
      "Satellite and survey data for new village identification was analysed manually \u2014 slow and inconsistent.",
  },
  {
    icon: BarChart3,
    title: "Demand Forecasting Gaps",
    description:
      "Limited ability to forecast energy demand growth or size solar plants efficiently for future load.",
  },
  {
    icon: Users,
    title: "Fragmented Customer Tools",
    description:
      "Sales, prepaid recharges, and local engagement ran on disconnected systems with no shared intelligence.",
  },
];

const solutions = [
  {
    num: "01",
    title: "Unified Cloud Data Platform",
    description:
      "Consolidated data from smart meters, solar inverters, mobile money platforms, CRM systems, and field surveys into a single cloud warehouse. Standardised historical data from 180+ sites and 30,000+ connections to enable consistent cross-country performance metrics.",
    tag: "Data Engineering",
  },
  {
    num: "02",
    title: "AI-Powered Site Identification",
    description:
      "Deployed ML models on satellite imagery and geospatial layers \u2014 population density, road access, proximity to existing grids \u2014 to score village suitability and project demand. Integrated 20,000 previously analysed sites so models could learn from past decisions and outcomes.",
    tag: "Machine Learning",
  },
  {
    num: "03",
    title: "Predictive Operations & Asset Optimisation",
    description:
      "Built anomaly detection on production and consumption curves to flag irregular losses, potential meter tampering, or early equipment failure. Developed load-forecasting models using weather data, historical usage, and seasonality to right-size new solar plants and plan upgrades.",
    tag: "AI Automation",
  },
  {
    num: "04",
    title: "Customer Segmentation & Tariff Optimisation",
    description:
      "Segmented customers by consumption profiles, load size, and payment history \u2014 distinguishing households, small shops, and productive users like mills and cold rooms. Simulated tariff and coupon structures to balance revenue stability with energy affordability.",
    tag: "Advanced Analytics",
  },
  {
    num: "05",
    title: "AI-Supported Demand Stimulation",
    description:
      "Built scoring models to identify entrepreneurs most likely to benefit from appliance financing and business support. Linked operational data with impact indicators \u2014 new businesses, women entrepreneurs, job creation, CO\u2082 avoided \u2014 to quantify the socio-economic value of each village.",
    tag: "Impact Analytics",
  },
];

const phases = [
  {
    num: 1,
    title: "Discovery & Alignment",
    desc: "Deep-dive workshops with operations, data, and impact teams covering mini-grid design, 20-year village licences, and local sales processes. Mapped every digital tool in use.",
  },
  {
    num: 2,
    title: "Data Foundation & Quick Wins",
    desc: "Rapid consolidation of high-value sources (smart meters, mobile payments) to deliver early dashboards on site performance, losses, and payment behaviour. Anomaly alerts rolled out within weeks.",
  },
  {
    num: 3,
    title: "Model Development & Pilot",
    desc: "Piloted AI models in a representative subset of villages in Madagascar and Mali, covering different load profiles and socio-economic contexts. Co-designed operational playbooks.",
  },
  {
    num: 4,
    title: "Scale-Up & Continuous Improvement",
    desc: "Progressive deployment across 180+ sites with live financial and impact KPIs. Continuous model retraining as the client expanded to new villages and markets.",
  },
];

const opsResults = [
  {
    metric: "99%+ availability",
    desc: "sustained across all mini-grids despite growing portfolio size, supported by AI-driven monitoring",
  },
  {
    metric: "Scalable model proven",
    desc: "180+ electrified villages and over one million people benefiting from access to electricity",
  },
  {
    metric: "Faster, smarter expansion",
    desc: "site-scoring models helped prioritise village roll-out and focus capital on highest-impact locations",
  },
];

const communityResults = [
  {
    metric: "30,000+ direct connections",
    desc: "and hundreds of thousands of indirect beneficiaries with access to clean electricity",
  },
  {
    metric: "5,200+ businesses connected",
    desc: "including 1,500+ women entrepreneurs supported through productive-use programmes",
  },
  {
    metric: "~900 tonnes CO\u2082 avoided annually",
    desc: "by replacing diesel alternatives with renewable mini-grids",
  },
];

const techStack = [
  "Machine Learning",
  "Satellite Image Analysis",
  "Geospatial Data",
  "Cloud Data Warehouse",
  "Anomaly Detection",
  "Load Forecasting",
  "Customer Segmentation",
  "Predictive Maintenance",
  "Revenue Simulation",
  "Impact Analytics",
  "Real-time Dashboards",
  "Mobile Money Integration",
  "Smart Meter Analytics",
];

const faqs = [
  {
    q: "How can AI improve rural energy operations in Africa?",
    a: "AI improves rural energy operations by unifying data from smart meters, solar inverters, and mobile money platforms into a single view. Machine learning models predict equipment failures before they happen, optimise energy load forecasting, and score new village sites for expansion. This enables operators to maintain 99%+ uptime across hundreds of distributed sites with smaller teams.",
  },
  {
    q: "What is predictive maintenance for solar mini-grids?",
    a: "Predictive maintenance for solar mini-grids uses AI anomaly detection on production and consumption data to flag irregular losses, potential meter tampering, or early equipment failure before they cause outages. This shifts maintenance from reactive to proactive, reducing downtime and extending asset life across distributed sites.",
  },
  {
    q: "How does AI help with mini-grid site selection?",
    a: "AI analyses satellite imagery combined with geospatial data layers including population density, road access, proximity to existing grids, and socio-economic indicators to score village suitability and project energy demand. This replaces manual survey analysis, making expansion faster, more consistent, and data-driven.",
  },
  {
    q: "Can AI help scale clean energy across multiple African countries?",
    a: "Yes. A unified AI platform standardises data and performance metrics across countries with different infrastructure, regulatory environments, and customer profiles. This enables operators to manage hundreds of sites from a central platform while adapting models to local conditions in each market.",
  },
];

/* ── Animation helper ──────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

const solutionIcons = [Cpu, Satellite, Zap, PieChart, Sprout];

/* ── Component ──────────────────────────────────────── */

export function RuralEnergyCaseStudyContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-warm/5 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <motion.div {...fade()}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          {/* Meta chips */}
          <motion.div
            {...fade(0.05)}
            className="flex flex-wrap gap-3 mb-6"
          >
            {metaChips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 text-xs font-medium text-foreground-muted bg-surface border border-border px-3 py-1.5 rounded-full"
              >
                <c.icon className="w-3.5 h-3.5 text-accent" />
                {c.label}
              </span>
            ))}
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mb-6 leading-tight"
          >
            AI-Driven Operations for a{" "}
            <span className="text-accent">Pan-African Rural Energy Provider</span>
          </motion.h1>

          <motion.p
            {...fade(0.15)}
            className="text-lg text-foreground-muted max-w-2xl leading-relaxed"
          >
            How we built an end-to-end AI platform that unified data from 180+
            solar mini-grids, automated site selection, predicted equipment
            failures, and powered data-driven growth across sub-Saharan Africa.
          </motion.p>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fade(i * 0.05)}
                className="bg-surface p-8 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold font-mono text-accent mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-foreground-muted">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGE ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div {...fade()}>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
              {/* The Challenge */}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
              Scaling Clean Energy Across a Continent
            </h2>
          </motion.div>

          <motion.div {...fade(0.05)} className="max-w-3xl mb-8 space-y-4">
            <p className="text-foreground-muted leading-relaxed">
              Our client operates solar-powered mini-grids that deliver 24/7
              electricity to off-grid communities across Madagascar and Mali,
              with expansion plans into Nigeria and the DRC. Each site serves
              300&ndash;400 households and small businesses through prepaid,
              mobile-money energy coupons and smart meters ranging from 100 W
              to 16 kW.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              As the portfolio grew past 180 sites, the existing toolset could
              no longer keep pace. Critical decisions &mdash; where to build
              next, how to prevent outages, which tariffs to offer &mdash; were
              being made with fragmented data and manual analysis.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {challenges.map((c, i) => (
              <motion.div key={c.title} {...fade(i * 0.08)}>
                <Card className="p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-foreground-muted">
                    {c.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION ═══ */}
      <section className="section-padding bg-surface/50">
        <div className="container-wide">
          <motion.div {...fade()}>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
              {/* Our Solution */}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              An End-to-End AI Operating Platform
            </h2>
            <p className="text-foreground-muted max-w-3xl mb-10 leading-relaxed">
              Working with the client&apos;s operations, engineering, and impact
              teams, we designed and delivered a five-layer AI solution stack
              &mdash; from a unified data foundation through to
              demand-stimulation models for community impact.
            </p>
          </motion.div>

          <div className="space-y-4">
            {solutions.map((sol, i) => {
              const Icon = solutionIcons[i];
              return (
                <motion.div key={sol.num} {...fade(i * 0.08)}>
                  <Card className="p-8">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-accent font-mono text-sm font-bold">
                            {sol.num}
                          </span>
                          <h3 className="text-white font-bold text-lg">
                            {sol.title}
                          </h3>
                        </div>
                        <p className="text-foreground-muted leading-relaxed mb-3">
                          {sol.description}
                        </p>
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-md">
                          {sol.tag}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ APPROACH ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div {...fade()}>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
              {/* Implementation Approach */}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
              From Discovery to Scale in Four Phases
            </h2>
          </motion.div>

          <div className="relative pl-8 border-l-2 border-accent/30 space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                {...fade(i * 0.1)}
                className="relative"
              >
                <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-accent border-[3px] border-background" />
                <h3 className="text-white font-bold mb-2">
                  Phase {phase.num} &mdash; {phase.title}
                </h3>
                <p className="text-foreground-muted max-w-xl leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ═══ */}
      <section className="section-padding bg-surface/50">
        <div className="container-wide">
          <motion.div {...fade()}>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
              {/* Results & Impact */}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
              Measurable Outcomes at Scale
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Operational */}
            <motion.div {...fade()}>
              <Card className="p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <h3 className="text-white font-bold uppercase text-sm tracking-wider">
                    Operational &amp; Financial Performance
                  </h3>
                </div>
                <div className="space-y-5">
                  {opsResults.map((r) => (
                    <div key={r.metric} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-green-500/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <p className="text-sm text-foreground-muted">
                        <strong className="text-white">{r.metric}</strong>{" "}
                        {r.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Community */}
            <motion.div {...fade(0.1)}>
              <Card className="p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-accent" />
                  <h3 className="text-white font-bold uppercase text-sm tracking-wider">
                    Customer &amp; Community Outcomes
                  </h3>
                </div>
                <div className="space-y-5">
                  {communityResults.map((r) => (
                    <div key={r.metric} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-green-500/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <p className="text-sm text-foreground-muted">
                        <strong className="text-white">{r.metric}</strong>{" "}
                        {r.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div {...fade()}>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
              {/* Technologies & Capabilities */}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
              What We Brought to the Table
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-surface border border-border px-4 py-2 rounded-lg text-sm text-foreground-muted hover:border-accent hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ RELATED SERVICES ═══ */}
      <section className="section-padding bg-surface/50">
        <div className="container-wide">
          <motion.div {...fade()}>
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
              {/* Related Services */}
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-8 tracking-tight">
              How We Can Help Your Business
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div {...fade()}>
              <Link href="/services/ai-automation" className="block group">
                <Card className="p-6 h-full group-hover:border-accent/30 transition-colors">
                  <Zap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-white font-bold mb-2">AI Automation</h3>
                  <p className="text-sm text-foreground-muted">
                    Automate operations, monitoring, and workflows to scale
                    without scaling headcount.
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm mt-3">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Card>
              </Link>
            </motion.div>
            <motion.div {...fade(0.1)}>
              <Link href="/services/ai-consulting" className="block group">
                <Card className="p-6 h-full group-hover:border-accent/30 transition-colors">
                  <Target className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-white font-bold mb-2">AI Consulting</h3>
                  <p className="text-sm text-foreground-muted">
                    Strategic guidance on where AI will deliver the highest ROI
                    for your specific operation.
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm mt-3">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Card>
              </Link>
            </motion.div>
            <motion.div {...fade(0.2)}>
              <Link href="/services/custom-development" className="block group">
                <Card className="p-6 h-full group-hover:border-accent/30 transition-colors">
                  <Cpu className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-white font-bold mb-2">
                    Custom AI Development
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    Bespoke AI platforms, data pipelines, and ML models built
                    for your domain.
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm mt-3">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.05)}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-foreground-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            {...fade()}
            className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-surface to-accent/5 border border-accent/15 rounded-3xl p-12 md:p-16 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Sun className="w-12 h-12 text-accent mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Facing Similar Challenges?
              </h2>
              <p className="text-foreground-muted max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you&apos;re managing distributed infrastructure, scaling
                across markets, or sitting on untapped data &mdash; our{" "}
                <Link
                  href="/services/ai-consulting"
                  className="text-accent hover:underline"
                >
                  AI consulting
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/custom-development"
                  className="text-accent hover:underline"
                >
                  development
                </Link>{" "}
                team can help you turn complexity into a competitive advantage.
              </p>
              <CalBookingButton
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-full transition-colors text-lg"
                eventSlug="admireit-discovery-call"
              >
                <Leaf className="w-5 h-5" />
                Book a Free Consultation
              </CalBookingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ MORE CASE STUDIES ═══ */}
      <section className="section-padding bg-surface/50">
        <div className="container-wide">
          <motion.div {...fade()}>
            <h2 className="text-xl font-bold text-white mb-6">
              More Case Studies
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/portfolio/mfb-ai-transformation"
                className="block group"
              >
                <Card
                  
                  className="p-5 h-full group-hover:border-accent/30 transition-colors"
                >
                  <p className="text-xs text-accent mb-1">Fintech &middot; Nigeria</p>
                  <p className="text-white font-medium">
                    AI-Driven Transformation for a Nigerian Microfinance Bank
                  </p>
                </Card>
              </Link>
              <Link
                href="/portfolio/llm-enterprise-chatbot"
                className="block group"
              >
                <Card
                  
                  className="p-5 h-full group-hover:border-accent/30 transition-colors"
                >
                  <p className="text-xs text-accent mb-1">Enterprise AI</p>
                  <p className="text-white font-medium">
                    Enterprise LLM Chatbot for Customer Operations
                  </p>
                </Card>
              </Link>
              <Link
                href="/portfolio/warehouse-management-pwa"
                className="block group"
              >
                <Card
                  
                  className="p-5 h-full group-hover:border-accent/30 transition-colors"
                >
                  <p className="text-xs text-accent mb-1">Logistics &middot; Operations</p>
                  <p className="text-white font-medium">
                    AI-Powered Warehouse Management PWA
                  </p>
                </Card>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
