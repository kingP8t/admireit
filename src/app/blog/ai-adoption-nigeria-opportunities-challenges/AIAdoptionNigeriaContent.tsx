"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  Globe,
  MapPin,
  TrendingUp,
  Bot,
  Zap,
  Users,
  Landmark,
  Sprout,
  Stethoscope,
  Truck,
  ShieldAlert,
  ArrowRight,
  Rocket,
  CircuitBoard,
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
    q: "Why does Nigeria lead the world in AI chatbot usage?",
    a: "Nigeria leads global AI chatbot usage at 88% because of a young, mobile-first population, widespread smartphone access, and a cultural openness to new technology. With no entrenched legacy systems to defend, Nigerian businesses and consumers have adopted generative AI tools faster than most developed economies.",
  },
  {
    q: "How big is the AI market in Nigeria?",
    a: "Nigeria\u2019s AI market is projected to reach $434.4 million in 2026 and grow at a compound annual rate of 44.2% through 2030. Growth is driven by fintech, agritech, healthtech, and government-backed digital transformation initiatives.",
  },
  {
    q: "What are the biggest challenges for AI adoption in Nigeria?",
    a: "The five biggest structural challenges are limited access to capital (79% of startups cite this as their primary barrier), unstable electricity and internet infrastructure, a shortage of senior AI engineering talent, weak data governance frameworks, and regulatory uncertainty.",
  },
  {
    q: "Which industries in Nigeria benefit most from AI?",
    a: "Financial services, customer support, agriculture, healthcare, and logistics see the largest AI impact today. Fintechs use AI for fraud detection and credit scoring, agritechs for crop yield prediction, and microfinance institutions for automated loan origination.",
  },
  {
    q: "How many AI startups are there in Nigeria?",
    a: "There are over 120 active AI startups in Nigeria as of 2026, concentrated mostly in Lagos with growing hubs in Abuja and Ibadan. The ecosystem spans fintech, healthtech, agritech, edtech, and enterprise SaaS.",
  },
  {
    q: "How should a Nigerian business start adopting AI?",
    a: "Start with one high-cost, high-volume process \u2014 typically customer support, lead qualification, or document processing. Deploy an AI-native tool, measure results in weeks, and expand from there. Avoid large upfront transformation projects.",
  },
  {
    q: "What does the Nigerian government do to support AI adoption?",
    a: "Nigeria has launched a National AI Strategy, the National Centre for AI and Robotics (NCAIR), and funding initiatives aimed at training AI talent and supporting AI research. Policy is still evolving, but AI is treated as a strategic national priority.",
  },
  {
    q: "Is AI in Nigeria only for large enterprises?",
    a: "No. Small and mid-sized businesses are the fastest adopters. Off-the-shelf AI tools and partnerships with specialist AI agencies mean a 10-person Nigerian business can deploy the same class of AI that required a dedicated data science team just three years ago.",
  },
];

const stats = [
  { value: "88%", label: "Nigerians using AI chatbots \u2014 highest globally" },
  { value: "$434.4M", label: "Projected Nigerian AI market size by 2026" },
  { value: "44.2%", label: "Compound annual growth rate through 2030" },
  { value: "120+", label: "Active AI startups across Nigeria" },
];

const industryImpact = [
  {
    icon: Landmark,
    sector: "Financial Services",
    useCase: "Fraud detection, credit scoring, automated KYC",
    example: "AI-driven microlending at scale for the unbanked",
  },
  {
    icon: Bot,
    sector: "Customer Support",
    useCase: "24/7 AI chatbots across WhatsApp, web, and voice",
    example: "60\u201380% cost reduction vs traditional call centres",
  },
  {
    icon: Sprout,
    sector: "Agriculture",
    useCase: "Crop disease detection, yield prediction, irrigation",
    example: "Smallholder farmers via SMS and smartphone apps",
  },
  {
    icon: Stethoscope,
    sector: "Healthcare",
    useCase: "Triage chatbots, diagnostic imaging, rural access",
    example: "Specialist-level screening in underserved regions",
  },
  {
    icon: Truck,
    sector: "Logistics",
    useCase: "Route optimisation, demand forecasting, last-mile AI",
    example: "Lagos-grade traffic solved by predictive dispatch",
  },
  {
    icon: CircuitBoard,
    sector: "Enterprise SaaS",
    useCase: "AI copilots, document automation, workflow agents",
    example: "10-person teams shipping enterprise-grade products",
  },
];

const challenges = [
  {
    icon: TrendingUp,
    title: "Access to capital",
    desc: "79% of Nigerian AI startups cite capital as the single biggest obstacle. Local VC depth is limited; international investors often apply Silicon Valley risk filters that do not map onto African market realities.",
  },
  {
    icon: Zap,
    title: "Power & connectivity",
    desc: "Unstable electricity and patchy broadband raise the real cost of running data-heavy AI workloads. Cloud-first architectures, edge inference, and offline-first design patterns are becoming the default answer.",
  },
  {
    icon: Users,
    title: "Senior talent gap",
    desc: "Junior AI talent is abundant and growing fast. What is scarce is engineers with 5+ years of shipped ML in production. Poaching by global firms makes retention harder for local startups.",
  },
  {
    icon: ShieldAlert,
    title: "Data governance",
    desc: "Many Nigerian businesses still lack clean, structured data. Without reliable pipelines, even the best AI model underperforms. Governance, privacy, and quality standards need to mature alongside adoption.",
  },
  {
    icon: Globe,
    title: "Regulatory uncertainty",
    desc: "Nigeria is moving on policy \u2014 a National AI Strategy, NCAIR, data protection reform \u2014 but rules are still evolving. Teams building today must design for transparency and explainability to stay ahead of the curve.",
  },
];

export function AIAdoptionNigeriaContent() {
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
            AI &amp; Africa
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full font-medium">
            <MapPin size={12} />
            Nigeria
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            14 April 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            10 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          AI Adoption in Nigeria: Opportunities, Challenges, and What&rsquo;s Next
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <Image
            src="/images/team/wasiu-quadri.webp"
            alt="Wasiu Quadri, Technical Project Manager at AdmireTech"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">Wasiu Quadri</p>
            <p className="text-xs text-gray-400">
              Technical Project Manager &middot; AdmireTech Lagos &middot;
              Published 14 April 2026
            </p>
          </div>
        </div>

        {/* Quick Answer Box */}
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-6 mt-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Quick Answer
          </p>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            Nigeria is not a follower in the AI story &mdash; it is a{" "}
            <strong className="text-white">front-runner</strong>. At{" "}
            <strong className="text-white">88%</strong>, Nigerians are the
            world&rsquo;s heaviest users of AI chatbots. The local AI market is
            projected to hit <strong className="text-white">$434.4M by 2026</strong>{" "}
            and grow at <strong className="text-white">44.2% CAGR</strong> through
            2030. Fintech, agritech, healthtech and customer support are already
            being reshaped by AI. The challenges are real &mdash; capital,
            power, talent, data, regulation &mdash; but none are
            insurmountable, and the window for first-mover advantage is open
            now.
          </p>
        </div>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            Walk into a Lagos bank today and you will be greeted, triaged and
            often resolved entirely by an AI chatbot before you ever speak to a
            human. Talk to a farmer in Oyo State and chances are they have
            asked a WhatsApp AI about planting cycles this season. Meet a
            founder in Yaba and her product probably has a generative AI
            copilot shipped in the last ninety days.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            This is not a forecast. This is Nigeria in 2026.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The headline numbers would surprise most Western observers. Nigeria
            now leads the world in generative AI chatbot usage. The domestic AI
            market is on track to nearly double again this year.{" "}
            <strong className="text-white">
              The question is no longer whether Nigeria will adopt AI. It is
              whether Nigerian businesses will shape it, or be shaped by it.
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

        {/* Section 1: Nigeria Leads Global AI Chatbot Usage */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Nigeria Leads the World in AI Chatbot Usage
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            In a global study of generative AI usage,{" "}
            <strong className="text-white">
              88% of Nigerian internet users reported using AI chatbots
            </strong>{" "}
            &mdash; the highest rate of any country surveyed. Higher than the
            United States. Higher than the UK. Higher than India.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            That statistic is not an anomaly. It is a signal. Nigeria has a
            median age of 18, the largest youth population in Africa, and a
            mobile-first internet culture where WhatsApp is the default
            operating system for commerce and conversation. When a new AI tool
            drops, it diffuses through Nigerian networks in days, not quarters.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This is also the clearest real-world example of{" "}
            <Link
              href="/blog/digital-leapfrogging-skip-legacy-tech-ai"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              digital leapfrogging
            </Link>
            : a country skipping entire categories of legacy software and
            adopting the most advanced available technology directly.
          </p>
        </motion.section>

        {/* Section 2: Where AI Is Already Making an Impact */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Where AI Is Already Making an Impact
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            AI in Nigeria is not confined to a tech bubble. It is showing up
            across the real economy, with measurable results in six sectors:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    Sector
                  </th>
                  <th className="text-left py-3 px-4 text-accent font-semibold">
                    AI Use Case
                  </th>
                  <th className="text-left py-3 px-4 text-white font-semibold">
                    On-the-Ground Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {industryImpact.map((row) => (
                  <tr
                    key={row.sector}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4 text-white font-medium whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        <row.icon size={16} className="text-accent" />
                        {row.sector}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text-secondary">
                      {row.useCase}
                    </td>
                    <td className="py-3 px-4 text-emerald-400">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-text-secondary leading-relaxed">
            The pattern across every sector is the same: AI does not replace
            the market, it unlocks segments the market could never profitably
            reach before. Microfinance for customers without credit history.
            Specialist screening for patients without specialists. Support at
            2am for users in languages no human agent speaks.{" "}
            <Link
              href="/blog/ai-chatbots-customer-support"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              AI chatbots for customer support
            </Link>{" "}
            have become the single most common first deployment.
          </p>
        </motion.section>

        {/* Section 3: The Startup Ecosystem */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Startup Ecosystem: Over 120 AI Companies and Counting
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            As of 2026,{" "}
            <strong className="text-white">
              there are over 120 active AI startups in Nigeria
            </strong>
            , concentrated in Lagos with fast-growing pockets in Abuja, Ibadan
            and Port Harcourt. They span fintech, agritech, healthtech, edtech,
            logistics, and a new wave of AI-native enterprise SaaS.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            What makes this ecosystem different from what I saw five years ago
            is the technical ambition. Teams are not wrapping OpenAI APIs and
            shipping thin clones. They are fine-tuning open models on
            Nigeria-specific data, building multilingual voice agents for
            Yoruba, Igbo, Hausa and Pidgin, and deploying agentic workflows in
            production for clients who measure ROI in weeks.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Global investors have noticed. International VCs are running
            dedicated Africa AI theses, and Nigerian teams increasingly raise
            on equal terms with London or Bengaluru peers.{" "}
            <Link
              href="/blog/ai-transforming-african-tech-ecosystem"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              The broader African tech ecosystem
            </Link>{" "}
            is being pulled upward by Lagos momentum.
          </p>
        </motion.section>

        {/* Section 4: Five Structural Challenges */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Five Structural Challenges to Solve
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            It would be dishonest to paint only the opportunity. The friction
            is real, and every operator in this market should plan for it
            deliberately.
          </p>

          <div className="space-y-4">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4"
              >
                <c.icon
                  size={20}
                  className="text-amber-400 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-white font-medium mb-1">{c.title}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Highlight box: AdmireTech Perspective */}
        <motion.div
          {...fade()}
          className="mb-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-accent-warm/5 to-transparent p-6 sm:p-8"
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            AdmireTech Perspective
          </p>
          <p className="text-white text-lg sm:text-xl font-semibold leading-snug mb-3">
            The Nigerian businesses winning with AI in 2026 are not the ones
            chasing the biggest model. They are the ones shipping the
            narrowest, sharpest use case first &mdash; and iterating weekly.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            From our Lagos team&rsquo;s work across microfinance, logistics and
            SaaS, the single strongest correlation with success is speed of
            iteration, not size of budget. Start small, ship fast, measure
            relentlessly.
          </p>
        </motion.div>

        {/* Section 5: What Comes Next */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Comes Next: The Next 24 Months
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Three shifts will define the Nigerian AI market between now and the
            end of 2027:
          </p>

          <div className="space-y-4 mb-4">
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm shrink-0">
                1
              </div>
              <div>
                <p className="text-white font-medium mb-1">
                  Vernacular AI goes mainstream
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Models fine-tuned on Yoruba, Igbo, Hausa and Nigerian Pidgin
                  will move from demo to default. Businesses that serve the
                  full Nigerian market will expect multilingual AI as a
                  baseline, not a premium.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <p className="text-white font-medium mb-1">
                  Agentic workflows replace point tools
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The next wave is not chatbots, it is agents that complete
                  multi-step tasks end-to-end &mdash; underwriting a loan,
                  dispatching a delivery, closing a ticket. Nigerian SaaS
                  players are already shipping this.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-white/5 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm shrink-0">
                3
              </div>
              <div>
                <p className="text-white font-medium mb-1">
                  AI policy gets real teeth
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Expect clearer data protection enforcement, sector-specific
                  AI guidance (starting with financial services), and
                  incentives for AI businesses that train and retain local
                  talent.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 6: How to Start */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Nigerian Businesses Should Start
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong className="text-white">
              The best first AI project is the one you can ship, measure and
              iterate in under six weeks.
            </strong>{" "}
            A practical starting framework:
          </p>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Pick one high-volume process",
                desc: "Customer support, lead qualification, invoice processing, document review. Anything your team does hundreds of times a week is a candidate.",
              },
              {
                step: 2,
                title: "Go AI-native, not AI-bolted-on",
                desc: "Do not patch AI onto a legacy system. Deploy an AI-native tool alongside the existing workflow and let it earn its place.",
                link: {
                  href: "/blog/ai-automation-small-business",
                  text: "AI automation for small businesses",
                },
              },
              {
                step: 3,
                title: "Measure in weeks, not quarters",
                desc: "Define one success metric before you build. Cost saved, time saved, CSAT, or conversion. Review weekly. Kill anything that is not moving the number.",
              },
              {
                step: 4,
                title: "Partner, do not hire, in year one",
                desc: "Senior AI engineers are scarce and expensive. Most early wins come faster by partnering with a specialist team, then hiring in-house once the playbook is proven.",
              },
              {
                step: 5,
                title: "Expand from one win, not ten experiments",
                desc: "Once one process is working, apply the same playbook to the next. Ten failed pilots teach less than one shipped workflow.",
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
                        Read more on{" "}
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

        {/* Conclusion */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Nigeria Is Not Catching Up. It Is Setting Pace.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            For a long time, the default narrative about African technology was
            that it was somewhere behind the global frontier, slowly closing
            the gap. The AI story flips that script. In usage, in ambition, in
            shipped product, Nigeria is on the frontier, and in several lanes
            it is ahead of the pack.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The businesses that internalise this &mdash; in Lagos, in Abuja,
            and wherever they serve Nigerian customers from &mdash; will spend
            the next 24 months building the defaults that the rest of the
            continent adopts afterwards. The opportunity is not theoretical. It
            is already being captured, weekly, by the teams that decided not to
            wait.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          {...fade()}
          className="mb-16 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 text-center"
        >
          <Rocket size={32} className="text-accent mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Building AI in Nigeria? Let&rsquo;s Talk.
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            Whether you are a Lagos founder shipping your first AI feature or
            an enterprise ready to scale, our team has shipped what you are
            trying to build. Book a free consultation.
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
            <Image
              src="/images/team/wasiu-quadri.webp"
              alt="Wasiu Quadri, Technical Project Manager at AdmireTech"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <h3 className="text-white font-semibold mb-1">
                About the Author
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-medium">Wasiu Quadri</span> is
                Technical Project Manager at{" "}
                <Link
                  href="/about"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  AdmireTech
                </Link>{" "}
                Lagos, where he leads AI delivery across financial services,
                logistics and enterprise SaaS clients. He writes about what
                actually works when shipping AI into Nigerian markets &mdash;
                and what does not.
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
              href="/blog/ai-transforming-african-tech-ecosystem"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Globe size={16} />
              AI in African Tech
            </Link>
            <Link
              href="/blog/digital-leapfrogging-skip-legacy-tech-ai"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Rocket size={16} />
              Digital Leapfrogging
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
