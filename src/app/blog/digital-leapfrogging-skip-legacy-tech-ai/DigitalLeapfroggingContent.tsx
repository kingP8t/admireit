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
  Globe,
  Smartphone,
  Landmark,
  Stethoscope,
  Sprout,
  GraduationCap,
  Zap,
  TrendingUp,
  Users,
  Bot,
  ShieldAlert,
  ArrowRight,
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
    q: "What is digital leapfrogging in technology?",
    a: "Digital leapfrogging is when a country or business skips an intermediate stage of technology and adopts a more advanced solution directly. The most famous example is sub-Saharan Africa skipping landline telephones and going straight to mobile phones. In the AI era, this means businesses can bypass legacy enterprise software and adopt AI-native tools from day one.",
  },
  {
    q: "Why can developing economies adopt AI faster than developed ones?",
    a: "Developed economies carry enormous technical debt \u2014 decades of legacy systems, entrenched vendor contracts, and organisational resistance to change. Developing economies often lack this baggage, making them more agile. A business in Lagos or Pune starting fresh today can build on AI-native infrastructure without the cost of migrating away from outdated systems.",
  },
  {
    q: "What are real examples of digital leapfrogging?",
    a: "Three landmark examples: (1) M-Pesa in Kenya, where mobile money leapfrogged traditional banking infrastructure; (2) India\u2019s UPI payment system, which bypassed card-based payments entirely; and (3) African healthtech startups using AI diagnostics in regions that never had widespread specialist clinics. Each case shows that the absence of legacy infrastructure can be a strategic advantage.",
  },
  {
    q: "How can small businesses skip legacy tech and go straight to AI?",
    a: "Small businesses should identify their highest-cost manual processes \u2014 typically customer support, invoicing, inventory, or lead qualification \u2014 and deploy AI-native tools for those workflows first. Instead of buying traditional CRM or ERP software, they can adopt AI-powered alternatives that learn and automate from the start.",
  },
  {
    q: "What industries benefit most from digital leapfrogging to AI?",
    a: "Financial services, healthcare, agriculture, and education see the largest gains. AI-native neobanks serve the unbanked without branch networks. AI diagnostics reach areas without specialist doctors. AI-powered precision farming works via smartphones. AI tutoring scales where qualified teachers are scarce.",
  },
  {
    q: "What are the risks of leapfrogging to AI in emerging markets?",
    a: "The primary risks are data infrastructure gaps, skills shortages, and regulatory uncertainty. AI systems require reliable data pipelines, which may not exist in all regions. Businesses mitigate these risks by partnering with AI agencies that understand local constraints and by starting with narrowly scoped, high-impact use cases.",
  },
  {
    q: "What is the difference between digital transformation and digital leapfrogging?",
    a: "Digital transformation is the process of modernising existing systems \u2014 replacing legacy software, retraining staff, migrating data. Digital leapfrogging skips this entirely by adopting the most advanced available technology from scratch. Transformation is expensive and slow; leapfrogging is faster and cheaper, but requires willingness to build without the safety net of established processes.",
  },
  {
    q: "How does digital leapfrogging apply to African tech startups?",
    a: "African tech startups are uniquely positioned because they build for markets where legacy systems never took hold. A fintech startup in Nigeria does not need to integrate with decades-old core banking software \u2014 it can build AI-native from inception. This is why Africa\u2019s startup ecosystem is producing globally competitive AI companies in payments, logistics, and healthtech.",
  },
];

const stats = [
  { value: "60\u201380%", label: "Enterprise IT budgets spent maintaining legacy systems" },
  { value: "1.75B", label: "Registered mobile money accounts worldwide" },
  { value: "14B+", label: "India UPI transactions in a single month" },
  { value: "70\u201390%", label: "Cost reduction with AI-native vs legacy systems" },
];

const leapfrogExamples = [
  {
    legacy: "Landline telephones",
    leapfrog: "Mobile phones",
    region: "Sub-Saharan Africa",
    impact: "840M+ mobile subscriptions",
  },
  {
    legacy: "Card payment infrastructure",
    leapfrog: "UPI digital payments",
    region: "India",
    impact: "14B+ transactions/month",
  },
  {
    legacy: "Branch banking networks",
    leapfrog: "M-Pesa mobile money",
    region: "Kenya / East Africa",
    impact: "50M+ active users",
  },
  {
    legacy: "Traditional call centres",
    leapfrog: "AI-powered customer support",
    region: "Nigeria / South Asia",
    impact: "70\u201390% cost reduction",
  },
  {
    legacy: "Specialist medical clinics",
    leapfrog: "AI diagnostic tools",
    region: "Rural Africa & India",
    impact: "Millions screened remotely",
  },
];

const industries = [
  {
    icon: Landmark,
    name: "Financial Services",
    desc: "AI-native neobanks and lending platforms serve the unbanked without branch networks. Fraud detection, credit scoring, and identity verification powered by machine learning \u2014 not legacy core banking software.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "AI diagnostics reach communities that never had specialist doctors. Triage chatbots serve rural clinics. Computer vision detects diseases from smartphone images at a fraction of traditional costs.",
  },
  {
    icon: Sprout,
    name: "Agriculture",
    desc: "AI-powered crop disease detection, weather prediction, and irrigation optimisation work via smartphones. Smallholder farmers access precision agriculture without expensive sensor infrastructure.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "AI tutoring systems personalise learning at scale where qualified teachers are scarce. Natural language processing enables instruction in local languages without translation overhead.",
  },
];

export function DigitalLeapfroggingContent() {
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
            Digital Leapfrogging
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full font-medium">
            <Globe size={12} />
            Emerging Markets
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            1 April 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            9 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Digital Leapfrogging: Skipping Legacy Tech and Going Straight to AI
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img
            src="/images/team/tokunbo-ajayi.webp"
            alt="Tokunbo Ajayi, Head of AI Engineering at AdmireTech"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">Tokunbo Ajayi</p>
            <p className="text-xs text-gray-400">
              Head of AI Engineering &middot; AdmireTech &middot; Published 1
              April 2026
            </p>
          </div>
        </div>

        {/* Quick Answer Box — optimised for AI Overviews */}
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-6 mt-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Quick Answer
          </p>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            <strong className="text-white">Digital leapfrogging</strong> is the
            process of skipping an intermediate technology stage and adopting a
            more advanced solution directly. Businesses in Africa, South Asia,
            and other emerging markets can bypass decades of legacy enterprise
            software and adopt AI-native tools from day one &mdash; saving
            60&ndash;80% of the IT budget that developed-economy competitors
            spend just maintaining outdated systems. The absence of legacy
            infrastructure is not a disadvantage. It is a strategic advantage.
          </p>
        </div>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            In most conversations about AI adoption, the assumption is that
            developed economies lead and everyone else follows. Silicon Valley
            builds it. London finances it. And eventually, emerging markets get a
            watered-down version a decade later.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            That assumption is wrong. And it is about to cost a lot of Western
            businesses their competitive edge.
          </p>
          <p className="text-text-secondary leading-relaxed">
            I have spent the past eight years building AI systems across three
            continents &mdash; in London boardrooms, Pune engineering labs, and
            Lagos startup offices. And the pattern I keep seeing is this:{" "}
            <strong className="text-white">
              the businesses with the least legacy baggage are adopting AI the
              fastest
            </strong>
            . Not because they have bigger budgets. Because they have fewer
            anchors.
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

        {/* Section 1: What Is Digital Leapfrogging? */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is Digital Leapfrogging?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            <strong className="text-white">
              Digital leapfrogging is when a country or business skips an
              intermediate stage of technology and adopts a more advanced
              solution directly.
            </strong>{" "}
            The concept is not new. Sub-Saharan Africa famously skipped landline
            telephones entirely and went straight to mobile. India bypassed
            card-based payment infrastructure and built UPI, a real-time digital
            payment system that now processes over 14 billion transactions in a
            single month.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            What is new is the scale of the opportunity. In the AI era,
            leapfrogging does not mean jumping from one piece of hardware to
            another. It means skipping entire categories of enterprise
            software &mdash; CRM, ERP, legacy databases, manual workflows
            &mdash; and building on AI-native tools from inception.
          </p>
          <p className="text-text-secondary leading-relaxed">
            For businesses in emerging markets, this is not a theoretical
            exercise. It is happening right now. And for those paying attention
            in London, Pune, and Lagos, it represents one of the largest
            business opportunities of the decade.
          </p>
        </motion.section>

        {/* Section 2: The Legacy Tech Trap */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Legacy Tech Trap: Why Developed Economies Struggle
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Here is a number that should alarm every CTO in the developed world:{" "}
            <strong className="text-white">
              large enterprises spend an estimated 60&ndash;80% of their IT
              budgets maintaining legacy systems
            </strong>
            . Not building new capabilities. Not innovating. Just keeping the
            lights on.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Legacy systems create what I call the &ldquo;migration tax&rdquo;
            &mdash; the enormous cost of moving from old technology to new. A
            bank that built its core platform in 2005 cannot simply plug in an
            AI module. It needs to untangle two decades of spaghetti
            integrations, retrain staff, migrate data, and manage the political
            resistance that comes with any large-scale change.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Meanwhile, a fintech startup in Lagos or Pune starting today has
            none of that baggage. It can build its entire stack on AI-native
            infrastructure from day one. No migration. No legacy vendor
            lock-in. No migration tax.{" "}
            <strong className="text-white">
              Businesses in emerging markets can adopt AI-native tools at a
              fraction of the cost that developed-economy competitors pay to
              migrate away from legacy systems.
            </strong>
          </p>
        </motion.section>

        {/* Section 3: Why Emerging Markets Have the Advantage */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Emerging Markets Have the Advantage
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The conventional wisdom says that richer countries adopt technology
            faster. The data tells a different story. India leads globally with
            73% AI adoption enthusiasm. Nigeria has seen 600% year-on-year
            growth in AI tool usage. The number of AI-skilled professionals in
            Nigeria grew by over 200% between 2020 and 2024.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Three structural advantages drive this:
          </p>
          <div className="space-y-4 mb-4">
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <Smartphone
                size={20}
                className="text-accent shrink-0 mt-0.5"
              />
              <div>
                <p className="text-white font-medium mb-1">
                  1. No legacy debt
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  When there is no existing system to replace, adoption is pure
                  greenfield development. The cost is building, not migrating.
                  That changes the economics entirely. Read more about{" "}
                  <Link
                    href="/blog/ai-in-developing-countries-africa-south-asia"
                    className="text-accent hover:text-accent-warm transition-colors"
                  >
                    AI adoption across Africa and South Asia
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <Users size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">
                  2. Young, mobile-first populations
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Africa has the world&rsquo;s youngest population. India has
                  the largest. Both are mobile-first, digitally literate, and
                  culturally comfortable with rapid technology adoption. The user
                  base is ready.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <TrendingUp
                size={20}
                className="text-accent shrink-0 mt-0.5"
              />
              <div>
                <p className="text-white font-medium mb-1">
                  3. Necessity drives innovation
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  When resources are scarce, you build what works, not what looks
                  impressive on a slide deck. Emerging-market AI solutions tend
                  to be leaner, more practical, and more cost-effective than
                  their Western equivalents. See{" "}
                  <Link
                    href="/blog/ai-transforming-african-tech-ecosystem"
                    className="text-accent hover:text-accent-warm transition-colors"
                  >
                    how AI is transforming Africa&rsquo;s tech ecosystem
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Real-World Examples — Comparison Table */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Real-World Examples of Digital Leapfrogging
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong className="text-white">
              The three most successful examples of digital leapfrogging are
              mobile money in East Africa, UPI payments in India, and AI-powered
              diagnostics in underserved healthcare markets.
            </strong>{" "}
            Each proves that the absence of legacy infrastructure is not a
            disadvantage &mdash; it is a launchpad.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Legacy Approach
                  </th>
                  <th className="text-left py-3 px-4 text-accent font-semibold">
                    Leapfrog Solution
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Region
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {leapfrogExamples.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4 text-text-secondary line-through decoration-red-400/40">
                      {row.legacy}
                    </td>
                    <td className="py-3 px-4 text-accent font-medium">
                      {row.leapfrog}
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {row.region}
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-medium">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-text-secondary leading-relaxed">
            Notice the pattern: in every case, the leapfrog solution did not
            just match the legacy approach. It surpassed it. M-Pesa does not
            just replicate branch banking &mdash; it serves 50 million users who
            never had a bank account. UPI does not just copy Visa &mdash; it
            processes more transactions than all card networks combined in
            India.
          </p>
        </motion.section>

        {/* Section 5: How Businesses Can Leapfrog to AI Today */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Businesses Can Leapfrog to AI Today
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong className="text-white">
              Small businesses should leapfrog to AI by targeting their
              highest-cost manual process first, rather than attempting full
              digital transformation.
            </strong>{" "}
            Here is a practical five-step framework:
          </p>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Audit your pain points",
                desc: "Identify the three processes that consume the most time or money. Common candidates: customer enquiries, invoice processing, inventory tracking, and lead qualification.",
              },
              {
                step: 2,
                title: "Skip the legacy layer",
                desc: "Do not buy traditional software first. If you need CRM, go straight to an AI-native one. If you need customer support, deploy an AI chatbot before hiring a call centre.",
              },
              {
                step: 3,
                title: "Start with an MVP",
                desc: "Build a minimum viable AI solution for your top pain point. Test it with real users. Iterate weekly. This approach costs a fraction of a full enterprise rollout.",
                link: {
                  href: "/blog/mvp-to-scale-nigerian-startups-ai-automation",
                  text: "scaling Nigerian startups with AI automation",
                },
              },
              {
                step: 4,
                title: "Measure ruthlessly",
                desc: "Track cost savings, time saved, and customer satisfaction from week one. AI leapfrogging works when you can prove ROI fast.",
              },
              {
                step: 5,
                title: "Scale what works",
                desc: "Once one process is running on AI, apply the same playbook to the next. Each subsequent leapfrog is faster because your team has learned the pattern.",
                link: {
                  href: "/blog/ai-strategy-lean-budget-startups-emerging-markets",
                  text: "building an AI strategy on a lean budget",
                },
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                    {item.link && (
                      <>
                        {" "}
                        Learn more about{" "}
                        <Link
                          href={item.link.href}
                          className="text-accent hover:text-accent-warm transition-colors"
                        >
                          {item.link.text}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 6: Industries Ripe for AI Leapfrogging */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Industries Ripe for AI Leapfrogging
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Not every industry is equally positioned. The biggest gains come
            where legacy infrastructure is weakest and unmet demand is highest.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ind.icon size={20} className="text-accent" />
                  <h3 className="text-white font-semibold">{ind.name}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 7: Risks and Mitigation */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Risks and How to Mitigate Them
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Leapfrogging is not risk-free. Pretending otherwise would be
            dishonest. Here are the real challenges and how to address them:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <ShieldAlert
                size={20}
                className="text-amber-400 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-white font-medium mb-1">
                  Data infrastructure gaps
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  AI requires reliable data pipelines. In many emerging markets,
                  these do not exist yet.{" "}
                  <strong className="text-white">Mitigation:</strong> Start with
                  AI applications that work on small, curated datasets. Chatbots
                  and document processing need less data infrastructure than
                  full-scale ML pipelines.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <Users
                size={20}
                className="text-amber-400 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-white font-medium mb-1">Skills shortages</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  AI engineering talent is scarce globally and acutely so in some
                  regions.{" "}
                  <strong className="text-white">Mitigation:</strong> Partner
                  with agencies that have distributed teams across talent hubs.
                  The number of AI professionals in Nigeria alone grew over 200%
                  between 2020 and 2024 &mdash; the gap is closing fast.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <Globe
                size={20}
                className="text-amber-400 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-white font-medium mb-1">
                  Regulatory uncertainty
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  AI regulation varies wildly by jurisdiction and is evolving
                  fast.{" "}
                  <strong className="text-white">Mitigation:</strong> Build with
                  transparency and explainability from day one. Use AI ethically
                  now, and regulation will work in your favour when it arrives.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 8: The Role of AI Agencies */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Role of AI Agencies in Enabling Leapfrog Strategies
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most businesses &mdash; especially small and mid-size ones &mdash;
            do not have the in-house expertise to build AI systems from scratch.
            That is where a specialist AI agency becomes critical. Not a
            generalist IT consultancy that has bolted &ldquo;AI&rdquo; onto its
            website. A team that has actually built and shipped AI-native
            products in the markets you operate in.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            At AdmireTech, we work across London, Pune, and Lagos precisely
            because{" "}
            <Link
              href="/blog/ai-automation-small-business"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              AI automation for small businesses
            </Link>{" "}
            is not one-size-fits-all. A chatbot built for a UK insurance firm
            has different requirements than one built for a Nigerian microfinance
            bank. The AI is similar; the context, constraints, and customer
            expectations are not.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The right partner accelerates your leapfrog by months, handles the
            technical complexity, and ensures you do not burn your budget on
            experiments that do not convert to production value.
          </p>
        </motion.section>

        {/* Section 9: What This Means for London, Pune, and Lagos */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What This Means for London, Pune, and Lagos
          </h2>
          <div className="space-y-4">
            <div className="bg-card border border-white/5 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">🇬🇧</span> London
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                London businesses sitting on legacy systems have a choice: spend
                years on digital transformation, or partner with teams that
                understand AI-native architecture and can rebuild critical
                workflows in weeks. The competitive pressure from AI-first
                startups globally makes this urgent, not optional.
              </p>
            </div>
            <div className="bg-card border border-white/5 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">🇮🇳</span> Pune
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                India already proved the leapfrog model with UPI. Now the same
                energy is flowing into AI. Pune&rsquo;s engineering talent pool
                and startup ecosystem make it a natural hub for building AI
                solutions that serve both domestic and global markets.
              </p>
            </div>
            <div className="bg-card border border-white/5 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">🇳🇬</span> Lagos
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Lagos is where leapfrogging is most visible and most necessary.
                Nigeria&rsquo;s 600% AI growth rate is not a fluke &mdash;
                it reflects real businesses solving real problems without waiting
                for legacy infrastructure that was never going to arrive. The
                next wave of African unicorns will be AI-native.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Window Is Open. It Will Not Stay Open Forever.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Digital leapfrogging is not a permanent advantage. As AI tools
            mature and become ubiquitous, the window for early adopters to build
            insurmountable leads will narrow. The businesses that move now
            &mdash; whether in Lagos, Pune, or London &mdash; will set the
            standard. The ones that wait will spend years and millions catching
            up.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The question is not whether your market is ready for AI. It is
            whether you are ready to build without the crutch of legacy
            technology. If the answer is yes, you are already ahead.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          {...fade()}
          className="mb-16 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 text-center"
        >
          <Rocket size={32} className="text-accent mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Ready to Leapfrog?
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            Whether you are starting from scratch or rethinking a legacy system,
            we can help you build AI-native &mdash; fast. Book a free
            consultation.
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
        <motion.div
          {...fade()}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="flex items-start gap-4">
            <img
              src="/images/team/tokunbo-ajayi.webp"
              alt="Tokunbo Ajayi, Head of AI Engineering at AdmireTech"
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <h3 className="text-white font-semibold mb-1">
                About the Author
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-medium">Tokunbo Ajayi</span>{" "}
                is Head of AI Engineering at{" "}
                <Link
                  href="/about"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  AdmireTech
                </Link>
                , where he leads the design and delivery of AI-native systems
                across financial services, healthcare, and logistics. Based in
                Lagos with experience spanning London and Pune, Tokunbo
                specialises in helping businesses skip legacy technology and
                build AI-first solutions that deliver measurable results from
                day one.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Services */}
        <motion.div {...fade()} className="mt-8 pt-8 border-t border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Services & Reading
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/ai-consulting"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Users size={16} />
              AI Consulting
            </Link>
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
              href="/blog/ai-in-developing-countries-africa-south-asia"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <TrendingUp size={16} />
              AI in Developing Countries
            </Link>
            <Link
              href="/blog/ai-transforming-african-tech-ecosystem"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Globe size={16} />
              AI in African Tech
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
