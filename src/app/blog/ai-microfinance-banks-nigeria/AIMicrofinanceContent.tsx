"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  MapPin,
  Landmark,
  ShieldCheck,
  Bot,
  Banknote,
  FileCheck,
  LineChart,
  Users,
  Zap,
  Scale,
  Rocket,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const faqs = [
  {
    q: "How can AI help microfinance banks in Nigeria?",
    a: "AI helps Nigerian microfinance banks in five core areas: credit scoring for customers with no formal credit history, fraud and anti-money-laundering detection on mobile and agent transactions, 24/7 customer support through WhatsApp and voice chatbots, automated loan origination and KYC, and early-warning analytics that flag loans likely to default. Together these cut operating costs, widen the pool of bankable customers, and reduce portfolio risk.",
  },
  {
    q: "Can AI improve credit scoring for customers without a credit history?",
    a: "Yes. Instead of relying only on bureau data, AI credit models use alternative data — mobile money history, airtime top-ups, transaction patterns, BVN-linked records and repayment behaviour on prior microloans — to score thin-file and first-time borrowers. This lets a microfinance bank lend responsibly to customers the traditional system would reject, while keeping default rates in check.",
  },
  {
    q: "Is AI-based lending allowed under CBN regulations?",
    a: "Yes, provided you meet existing prudential and consumer-protection rules. AI does not remove your regulatory obligations. Lending decisions must remain explainable and fair, customer data must be handled under the Nigeria Data Protection Act (NDPA), and a human-in-the-loop should review edge cases and adverse decisions. The CBN expects sound risk management regardless of whether a model or an officer makes the recommendation.",
  },
  {
    q: "How much does it cost for a microfinance bank to adopt AI?",
    a: "It is cheaper than most boards expect. A WhatsApp AI support assistant or an automated KYC workflow typically costs between $3,000 and $15,000 to build with an emerging-market team, versus $50,000 or more with a Western agency. Many banks start with a single high-impact use case and expand once it pays for itself. With outcome-based pricing, spend can be tied to measurable results such as reduced support cost or lower default rates.",
  },
  {
    q: "Can AI reduce fraud and loan defaults in microfinance?",
    a: "Yes. AI models detect anomalous transactions, duplicate or synthetic identities, and collusion patterns in real time — flagging fraud before funds leave the bank. On the lending side, early-warning models identify borrowers whose behaviour signals rising default risk, so officers can intervene with restructuring or reminders weeks before a loan goes bad.",
  },
  {
    q: "Do small microfinance banks need AI, or is it only for large ones?",
    a: "Small and unit microfinance banks often benefit the most. Cloud-based AI tools and partnerships with specialist agencies mean a small bank can deploy the same class of automation that once required a dedicated data-science team. Starting with one narrow use case — usually customer support or KYC — delivers quick, measurable wins without a large upfront investment.",
  },
];

const stats = [
  { value: "880+", label: "Microfinance banks licensed by the CBN" },
  { value: "26%", label: "Nigerian adults still financially excluded (EFInA)" },
  { value: "60%+", label: "Support-cost reduction achievable with AI chatbots" },
  { value: "44.2%", label: "Nigeria AI market CAGR through 2030" },
];

const useCases = [
  {
    icon: Landmark,
    area: "Credit scoring",
    aiDoes: "Alternative-data models for thin-file borrowers",
    impact: "Lend to the unbanked without raising defaults",
  },
  {
    icon: ShieldCheck,
    area: "Fraud & AML",
    aiDoes: "Real-time anomaly and identity-fraud detection",
    impact: "Stop fraudulent payouts before they happen",
  },
  {
    icon: Bot,
    area: "Customer support",
    aiDoes: "WhatsApp & voice chatbots in local languages",
    impact: "60–80% of queries resolved without an agent",
  },
  {
    icon: Banknote,
    area: "Loan recovery",
    aiDoes: "Behaviour-based, automated repayment reminders",
    impact: "Lower non-performing loans, gentler collections",
  },
  {
    icon: FileCheck,
    area: "KYC & onboarding",
    aiDoes: "Document capture, BVN checks, form automation",
    impact: "Onboard customers in minutes, not days",
  },
  {
    icon: LineChart,
    area: "Risk analytics",
    aiDoes: "Early-warning models across the loan book",
    impact: "Intervene weeks before a loan defaults",
  },
];

const steps = [
  {
    title: "Pick one painful, high-volume process",
    desc: "Usually customer support or KYC onboarding. Choose the workflow that consumes the most staff hours or loses the most customers, not the most futuristic idea.",
  },
  {
    title: "Prove it on real data in 2–4 weeks",
    desc: "Build a narrow pilot — a WhatsApp support assistant trained on your FAQs, or an automated KYC check. Measure handle time, cost per query, or onboarding speed against today.",
  },
  {
    title: "Add a human-in-the-loop and guardrails",
    desc: "Keep officers reviewing adverse credit decisions and flagged fraud. Log every decision for explainability and your CBN and NDPA obligations.",
  },
  {
    title: "Measure, then scale to the next use case",
    desc: "Once the pilot pays for itself, expand — from support into KYC, from KYC into credit scoring and early-warning analytics, one proven step at a time.",
  },
];

export function AIMicrofinanceContent() {
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
            AI &amp; Fintech
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full font-medium">
            <MapPin size={12} />
            Nigeria
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            29 May 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            9 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          AI for Microfinance Banks in Nigeria: Use Cases, ROI &amp; Compliance
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <Image
            src="/images/team/abel-kayode.webp"
            alt="Abel Kayode, Business Development Manager at AdmireTech"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">Abel Kayode</p>
            <p className="text-xs text-gray-400">
              Business Development Manager &middot; AdmireTech &middot; Published
              29 May 2026
            </p>
          </div>
        </div>

        {/* Quick Answer Box */}
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-6 mt-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Quick Answer
          </p>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            Microfinance banks in Nigeria are sitting on the perfect conditions
            for AI: high transaction volumes, thin-file customers, heavy support
            loads and tight margins. The highest-impact use cases are{" "}
            <strong className="text-white">
              credit scoring with alternative data, real-time fraud detection,
              WhatsApp customer support, automated KYC and early-warning loan
              analytics
            </strong>
            . A first project usually costs $3,000&ndash;$15,000, pays back in
            months, and &mdash; done right &mdash; stays well within CBN and
            NDPA requirements through explainable models and a human-in-the-loop.
          </p>
        </div>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            Nigeria has one of the most vibrant microfinance sectors in Africa
            &mdash; hundreds of licensed banks serving traders, smallholder
            farmers, artisans and micro-enterprises that the commercial banks
            were never built to reach. But the economics are brutal: small loan
            sizes, high servicing costs, customers with no credit file, and a
            constant battle against fraud and default.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            This is exactly the kind of problem AI was made for. Not the
            sci-fi version &mdash; the practical kind that scores a first-time
            borrower in seconds, answers a customer on WhatsApp at midnight, and
            flags a fraudulent payout before the money leaves the bank.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Nigeria is already the world&rsquo;s heaviest user of AI chatbots,
            and its{" "}
            <Link
              href="/blog/ai-adoption-nigeria-opportunities-challenges"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              AI market is growing at 44.2% a year
            </Link>
            . For microfinance banks,{" "}
            <strong className="text-white">
              the question is no longer whether to adopt AI, but which use case
              to start with.
            </strong>
          </p>
        </motion.section>

        {/* Stats Callout */}
        <motion.div
          {...fade()}
          className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-white/5 rounded-xl p-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section: pressure */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Microfinance Banks Are Under Pressure
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Every microfinance bank in Nigeria feels the same squeeze. A loan
            officer can only assess so many applications a day. A call centre
            can only answer so many balance enquiries. And every naira spent
            chasing a late repayment eats into an already thin margin.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Meanwhile customers expect the same instant, mobile-first experience
            they get from the fintech apps on their phones. The banks that close
            that gap will win deposits and loyalty. The ones that do not will
            keep losing customers to faster competitors &mdash; and that is
            where automation changes the maths.
          </p>
        </motion.section>

        {/* Section: six use cases table */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Six Ways AI Is Transforming Microfinance Banks
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            AI is not a single product you buy once. It is a set of capabilities
            you deploy where they pay off. These are the six with the clearest
            return for a Nigerian microfinance bank:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Area
                  </th>
                  <th className="text-left py-3 px-4 text-accent font-semibold">
                    What AI Does
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Business Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((row) => (
                  <tr
                    key={row.area}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4 text-white font-medium whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        <row.icon size={16} className="text-accent" />
                        {row.area}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {row.aiDoes}
                    </td>
                    <td className="py-3 px-4 text-emerald-400">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section: credit scoring deep dive */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Credit Scoring for Customers With No Credit History
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The single biggest constraint on microfinance growth is risk: how do
            you lend to someone the credit bureaus have never heard of? The
            traditional answer is to lend cautiously and slowly. The AI answer
            is to score borrowers on{" "}
            <strong className="text-white">alternative data</strong> &mdash;
            mobile money flows, airtime top-up patterns, BVN-linked records,
            agent-banking activity and how they repaid previous microloans.
          </p>
          <p className="text-text-secondary leading-relaxed">
            A well-built model can approve a reliable borrower in seconds and
            decline a risky one just as fast, expanding the bank&rsquo;s
            addressable market without raising its default rate. The discipline
            that matters: keep the model explainable, monitor it for bias, and
            keep a loan officer in the loop on adverse decisions.
          </p>
        </motion.section>

        {/* Section: WhatsApp support */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            WhatsApp Support in the Languages Your Customers Speak
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            In Nigeria, WhatsApp is the default channel for commerce and
            conversation. An AI assistant on WhatsApp can handle balance
            enquiries, loan application status, repayment reminders and branch
            information &mdash; in English, Pidgin, Hausa, Yoruba or Igbo
            &mdash; around the clock, and hand off cleanly to a human agent when
            a query needs judgement.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Most banks find a well-trained assistant resolves 60&ndash;80% of
            routine queries on its own. We cover the practical build in{" "}
            <Link
              href="/blog/ai-chatbots-solving-customer-support-gap"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              how AI chatbots are solving the customer-support gap
            </Link>
            .
          </p>
        </motion.section>

        {/* Section: compliance */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Regulation &amp; Trust: Building AI the CBN Way
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            AI does not exempt a bank from its obligations &mdash; it raises the
            bar on doing them well. Three principles keep you on the right side
            of the regulator and your customers:
          </p>
          <div className="space-y-4 mb-2">
            <div className="flex items-start gap-3">
              <Scale size={20} className="text-accent mt-0.5 shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-white">Explainability.</strong> Every
                credit or fraud decision should be traceable to the factors that
                drove it. Black-box models that cannot justify a refusal are a
                compliance and reputational risk.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={20} className="text-accent mt-0.5 shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-white">Data protection.</strong>{" "}
                Customer data must be handled under the Nigeria Data Protection
                Act (NDPA) &mdash; consent, minimisation, and secure storage are
                not optional.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Users size={20} className="text-accent mt-0.5 shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-white">Human-in-the-loop.</strong> Keep
                officers reviewing edge cases, adverse decisions and flagged
                fraud. AI should support judgement, never quietly replace it.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section: cost & ROI */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What It Costs &mdash; and the ROI
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The cost of getting started is lower than most boards assume. A
            focused first project &mdash; a WhatsApp support assistant or an
            automated KYC workflow &mdash; typically lands between{" "}
            <strong className="text-white">$3,000 and $15,000</strong> when
            built with an emerging-market team, against $50,000 or more with a
            Western agency.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The returns show up quickly: lower cost per support query, faster
            onboarding, fewer fraudulent payouts and a measurable drop in
            non-performing loans. With{" "}
            <Link
              href="/services/outcome-based-development"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              outcome-based pricing
            </Link>
            , you can tie what you spend directly to those results &mdash; so
            the bank pays for impact, not effort.
          </p>
        </motion.section>

        {/* Section: 90-day plan */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Start in 90 Days
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            You do not need a transformation programme. You need one win that
            proves the model. Here is the sequence that works:
          </p>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex items-start gap-4 bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Closing */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Banks That Move First Will Set the Standard
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Financial inclusion in Nigeria is not a charity line &mdash; it is a
            commercial opportunity, and AI is what makes serving thin-margin
            customers profitable at scale. The microfinance banks that pilot one
            use case this quarter will have a working playbook while their
            competitors are still debating budgets. The technology is ready, the
            costs are low, and your customers are already on WhatsApp waiting.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          {...fade()}
          className="mb-16 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 text-center"
        >
          <Rocket size={32} className="text-accent mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Run a Microfinance AI Pilot With Us
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            Tell us your most painful process and we will scope a 90-day pilot
            with clear, measurable targets. We have shipped AI into financial
            services across Lagos and beyond. Book a free consultation.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free AI Consultation
            <ArrowRight size={18} />
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

        {/* Author Bio */}
        <motion.div {...fade()} className="mt-12 pt-8 border-t border-white/5">
          <div className="flex items-start gap-4">
            <Image
              src="/images/team/abel-kayode.webp"
              alt="Abel Kayode, Business Development Manager at AdmireTech"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <h3 className="text-white font-semibold mb-1">About the Author</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-medium">Abel Kayode</span> is
                Business Development Manager at{" "}
                <Link
                  href="/about"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  AdmireTech
                </Link>
                , where he works with banks and fintechs across Nigeria to turn
                AI from a buzzword into measurable business outcomes. He writes
                about where AI actually pays off in financial services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Services */}
        <motion.div {...fade()} className="mt-8 pt-8 border-t border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Services &amp; Reading
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/ai-automation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Zap size={16} />
              AI Automation
            </Link>
            <Link
              href="/services/ai-chatbots"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Bot size={16} />
              AI Chatbots
            </Link>
            <Link
              href="/services/ai-consulting"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Users size={16} />
              AI Consulting
            </Link>
            <Link
              href="/blog/ai-adoption-nigeria-opportunities-challenges"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <MapPin size={16} />
              AI Adoption in Nigeria
            </Link>
            <Link
              href="/blog/mvp-to-scale-nigerian-startups-ai-automation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Rocket size={16} />
              MVP to Scale in Nigeria
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
