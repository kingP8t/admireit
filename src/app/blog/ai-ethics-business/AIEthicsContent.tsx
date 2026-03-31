"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  Scale,
  Eye,
  ShieldCheck,
  Users,
  AlertTriangle,
  CheckCircle,
  Brain,
  Bot,
  Zap,
  FileText,
  XCircle,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const ethicalChallenges = [
  {
    number: "01",
    icon: Scale,
    title: "Algorithmic Bias",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description:
      "AI systems learn from historical data \u2014 and history is full of bias. A hiring tool trained on past decisions may discriminate against certain demographics. A lending model may unfairly reject applicants from specific postcodes. Bias is not always intentional, but its impact on real people is always real.",
    action:
      "Audit training data for imbalances, test outputs across demographic groups, and run regular post-deployment fairness checks.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Transparency & Explainability",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    description:
      "When an AI denies a loan, rejects a job application, or flags a transaction as fraud, the affected person deserves to know why. Black-box models that cannot explain their reasoning erode trust and create legal risk, especially under regulations like the EU AI Act.",
    action:
      "Use interpretable models where possible, implement explainability tools (SHAP, LIME), and provide plain-language decision summaries to users.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Data Privacy & Consent",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    description:
      "AI is hungry for data. The more data you feed it, the better it performs \u2014 but collecting, storing, and processing personal data comes with significant ethical and legal obligations. Users must understand what data is collected, how it is used, and retain meaningful control over it.",
    action:
      "Minimise data collection, anonymise where possible, implement GDPR/NDPA-compliant consent flows, and never repurpose data without explicit permission.",
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Accountability & Liability",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    description:
      "When an AI system makes a harmful decision, who is responsible? The developer? The deploying company? The data provider? Without clear accountability structures, harm goes unaddressed and trust collapses. Every AI deployment needs a human in the chain of responsibility.",
    action:
      "Define ownership at every stage \u2014 development, deployment, monitoring. Create escalation paths and ensure a human can override any AI decision.",
  },
  {
    number: "05",
    icon: Users,
    title: "Workforce Impact",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    description:
      "AI automation inevitably changes job roles. Ethical deployment means being honest about which tasks will be automated, investing in reskilling, and involving employees in the transition. Companies that treat AI as a tool to eliminate headcount \u2014 rather than augment capability \u2014 face backlash, attrition, and reputational damage.",
    action:
      "Communicate transparently, invest in upskilling programmes, redeploy affected staff to higher-value work, and involve teams in AI adoption decisions.",
  },
];

const frameworkSteps = [
  {
    step: "1",
    title: "Define Your Principles",
    description: "Establish clear ethical boundaries: fairness, transparency, privacy, safety, and accountability. Make them specific to your industry.",
  },
  {
    step: "2",
    title: "Assess Risk Before Building",
    description: "For every AI project, evaluate potential harm across affected groups. High-risk applications demand stricter controls and human oversight.",
  },
  {
    step: "3",
    title: "Test for Bias Continuously",
    description: "Bias testing is not a one-time event. Run fairness audits during development, before launch, and at regular intervals post-deployment.",
  },
  {
    step: "4",
    title: "Build Transparency In",
    description: "Document data sources, model logic, known limitations, and decision pathways. Make this accessible to stakeholders and auditors.",
  },
  {
    step: "5",
    title: "Assign Clear Accountability",
    description: "Every AI system needs a named owner responsible for its behaviour. Create escalation paths and human override mechanisms.",
  },
  {
    step: "6",
    title: "Review and Iterate",
    description: "Ethics is not a checkbox \u2014 it is a practice. Schedule quarterly reviews, incorporate user feedback, and update your framework as regulations evolve.",
  },
];

const regulations = [
  { region: "EU", name: "EU AI Act", status: "Fully enforced", detail: "Risk-based classification. Strict rules for high-risk AI." },
  { region: "UK", name: "Sector-specific regulation", status: "Active", detail: "Existing regulators (FCA, ICO, Ofcom) govern AI in their domains." },
  { region: "US", name: "Federal + state patchwork", status: "Evolving", detail: "Executive orders, NIST framework, state-level laws." },
  { region: "Nigeria", name: "NDPC + AI framework", status: "Developing", detail: "Data protection act in force; AI governance emerging." },
  { region: "Kenya", name: "Data Protection Act", status: "Active", detail: "DPA 2019 governs data use; AI-specific guidance pending." },
];

const faqs = [
  {
    q: "What are the main ethical concerns with AI in business?",
    a: "The five core concerns are algorithmic bias (discrimination against groups), lack of transparency (opaque decision-making), data privacy risks (personal data misuse), unclear accountability (no one owns the harm), and workforce displacement (automation replacing roles). Each requires proactive governance, not reactive fixes.",
  },
  {
    q: "How do you prevent bias in AI systems?",
    a: "Use a multi-layered approach: audit training data for demographic imbalances, involve diverse teams during development, implement fairness metrics, test across population segments before launch, and run regular post-deployment audits. No system is perfectly unbiased, but these practices dramatically reduce harmful discrimination.",
  },
  {
    q: "What AI regulations should businesses be aware of in 2026?",
    a: "The EU AI Act is fully enforced with risk-based classification. The UK uses sector-specific regulation through existing bodies (FCA, ICO). The US has state-level laws plus federal guidelines. Nigeria and Kenya are developing AI governance frameworks. Businesses operating cross-border should comply with the strictest applicable regulation.",
  },
  {
    q: "How do you make AI decisions transparent and explainable?",
    a: "Choose interpretable models when possible, use explainability tools (SHAP, LIME) for complex ones, document data sources and logic, provide plain-language decision explanations to users, offer human review options, and maintain audit trails for compliance.",
  },
  {
    q: "Do I need an AI ethics framework for my business?",
    a: "Yes \u2014 any business deploying AI should have one, regardless of size. A practical framework covers: principles (ethical boundaries), risk assessment (for new projects), bias testing protocols, data privacy safeguards, and accountability structures. Start lightweight and iterate \u2014 far better than having nothing.",
  },
];

export function AIEthicsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Back link */}
      <div className="container-wide mx-auto px-6 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <motion.header
        {...fade()}
        className="container-wide mx-auto px-6 pt-8 pb-12 max-w-4xl"
      >
        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
            <Tag size={12} />
            AI Ethics
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            20 February 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            6 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          The Ethics of AI in Business: What You Need to Know
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img src="/images/team/peter-king.webp" alt="Peter King" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">CEO &amp; CTO, AdmireTech · Published 20 February 2026</p>
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
          AI is powerful. But power without principles is dangerous. As businesses
          race to deploy AI, the organisations that get ethics right will build
          lasting trust &mdash; and avoid costly regulatory missteps.
        </p>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Intro */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why AI Ethics Matters More Than Ever
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Artificial intelligence is making decisions that affect people&apos;s
            lives every day &mdash; who gets a loan, which CV reaches a hiring
            manager, what content appears in a feed, whether a medical scan is
            flagged for review. The speed and scale at which AI operates means
            that a single biased model can harm thousands before anyone notices.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Regulation is catching up fast. The EU AI Act is now fully enforced,
            the UK is applying sector-specific AI rules, and markets across Africa
            and Asia are developing their own frameworks. Businesses that treat
            ethics as an afterthought are exposing themselves to fines, lawsuits,
            and irreparable brand damage.
          </p>
        </motion.section>

        {/* 5 Ethical Challenges */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            5 Ethical Challenges Every Business Must Address
          </h2>
          <div className="space-y-4">
            {ethicalChallenges.map((challenge) => (
              <motion.div
                key={challenge.number}
                {...fade()}
                className="bg-card border border-white/5 rounded-xl p-6"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${challenge.bg} flex items-center justify-center shrink-0`}
                  >
                    <challenge.icon size={20} className={challenge.color} />
                  </div>
                  <div>
                    <span className={`text-xs font-bold ${challenge.color} tracking-wider`}>
                      CHALLENGE {challenge.number}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {challenge.title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {challenge.description}
                </p>
                <div className="flex items-start gap-2 bg-white/[0.03] rounded-lg p-3">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-text-secondary text-xs leading-relaxed">
                    <span className="text-white font-medium">What to do: </span>
                    {challenge.action}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Framework */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <FileText size={22} className="inline mr-2 text-accent" />
            Building Your AI Ethics Framework
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            You do not need a 100-page policy. A practical, living framework
            beats a perfect document that no one reads. Here are six steps to
            get started:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frameworkSteps.map((step) => (
              <div
                key={step.step}
                className="bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <h3 className="text-white font-semibold text-sm">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Regulatory Landscape */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Brain size={22} className="inline mr-2 text-accent" />
            The Regulatory Landscape in 2026
          </h2>
          <div className="bg-card border border-white/5 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[80px_1fr_100px_1fr] sm:grid-cols-[80px_1fr_120px_1fr] bg-white/[0.04] text-xs text-text-secondary font-medium p-3 border-b border-white/5">
              <span>Region</span>
              <span>Framework</span>
              <span>Status</span>
              <span>Key Detail</span>
            </div>
            {regulations.map((reg, idx) => (
              <div
                key={reg.region}
                className={`grid grid-cols-[80px_1fr_100px_1fr] sm:grid-cols-[80px_1fr_120px_1fr] p-3 text-sm border-b border-white/5 last:border-0 ${
                  idx % 2 === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <span className="text-white font-medium text-xs">{reg.region}</span>
                <span className="text-text-secondary text-xs">{reg.name}</span>
                <span className="text-xs">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      reg.status === "Fully enforced"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : reg.status === "Active"
                        ? "bg-blue-400/10 text-blue-400"
                        : reg.status === "Evolving"
                        ? "bg-amber-400/10 text-amber-400"
                        : "bg-purple-400/10 text-purple-400"
                    }`}
                  >
                    {reg.status}
                  </span>
                </span>
                <span className="text-text-secondary text-xs">{reg.detail}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The Cost of Getting It Wrong */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            <XCircle size={22} className="inline mr-2 text-red-400" />
            The Cost of Getting It Wrong
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Ethical AI failures are not hypothetical. Biased recruitment tools,
            discriminatory lending algorithms, and opaque content moderation
            systems have all made headlines &mdash; leading to regulatory fines,
            class-action lawsuits, and devastating brand damage. Under the EU
            AI Act alone, penalties can reach up to 35 million euros or 7% of
            global annual turnover.
          </p>
          <p className="text-text-secondary leading-relaxed">
            But the cost is not just financial. Customer trust, once lost, is
            extraordinarily difficult to rebuild. Employees who feel surveilled
            or replaced by poorly communicated AI disengage. Partners and
            investors increasingly demand evidence of responsible AI
            governance. Ethics is not a constraint on innovation &mdash; it is
            a prerequisite for sustainable growth.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Deploy AI Responsibly &mdash; We Can Help
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Our AI consulting team helps businesses build ethical AI systems from
            day one &mdash; bias audits, governance frameworks, and compliant
            deployments. Book a free strategy call.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your AI Ethics Review
            <Calendar size={18} />
          </CalBookingButton>
        </motion.div>
      </article>

      {/* FAQ Section */}
      <section className="container-wide mx-auto px-6 max-w-4xl pb-20">
        <motion.h2
          {...fade()}
          className="text-2xl sm:text-3xl font-bold text-white mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.05)}
              className="bg-card border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-text-secondary shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === i ? "auto" : 0,
                  opacity: openFaq === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Related Services */}
        <motion.div {...fade()} className="mt-12 pt-8 border-t border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4">Explore Our AI Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/ai-consulting"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Brain size={16} />
              AI Consulting Service
            </Link>
            <Link
              href="/services/ai-chatbots"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Bot size={16} />
              AI Chatbot Service
            </Link>
            <Link
              href="/blog/ai-transforming-african-tech-ecosystem"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Zap size={16} />
              AI &amp; the African Tech Ecosystem
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
