"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  Bot,
  Rocket,
  Users,
  Globe,
  CheckCircle,
  Zap,
  TrendingUp,
  Target,
  MessageSquare,
  Shield,
  Truck,
  CreditCard,
  BarChart3,
  Layers,
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
    q: "How are Nigerian startups using AI to compete globally?",
    a: "Nigerian startups are using AI automation to handle customer support through chatbots, automate financial operations like fraud detection and KYC verification, streamline logistics with intelligent routing, and personalise user experiences at scale. This allows them to operate with smaller teams while serving customers across Africa, Europe, and North America \u2014 competing directly with well-funded Western companies.",
  },
  {
    q: "How much does it cost to build an MVP in Nigeria?",
    a: "A solid MVP in Nigeria typically costs between $3,000 and $15,000 depending on complexity. A simple AI chatbot MVP can be built for $2,000 to $5,000, while a more complex fintech or logistics platform with AI features might cost $10,000 to $20,000. These costs are significantly lower than building the same product in the US or UK, where similar MVPs often start at $50,000.",
  },
  {
    q: "What AI automation tools are Nigerian startups using?",
    a: "Nigerian startups commonly use WhatsApp Business API with AI chatbots for customer support, Zapier and Make.com for workflow automation, Python-based machine learning for fraud detection and credit scoring, and large language models for content generation and customer interactions. Many also use custom-built AI agents trained on local market data.",
  },
  {
    q: "Can a Nigerian startup scale globally with AI?",
    a: "Absolutely. Several Nigerian startups have already proven this \u2014 companies like Flutterwave, Paystack, and Andela built products in Lagos that now serve customers worldwide. AI automation accelerates this by allowing startups to handle global customer volumes without proportionally growing their teams.",
  },
  {
    q: "What is the biggest mistake Nigerian startups make when scaling with AI?",
    a: "The biggest mistake is trying to automate everything at once instead of focusing on the one process that creates the most bottleneck. Successful startups pick their most painful, repetitive problem \u2014 usually customer support or manual data processing \u2014 automate that first, prove it works, then expand.",
  },
];

const scalingStages = [
  {
    icon: Rocket,
    stage: "MVP Stage",
    budget: "$3K \u2013 $10K",
    focus: "Prove the idea works",
    aiUse: "Basic chatbot, automated onboarding, simple workflow automation",
    team: "2\u20134 people",
  },
  {
    icon: TrendingUp,
    stage: "Growth Stage",
    budget: "$10K \u2013 $50K",
    focus: "Scale what works",
    aiUse: "Smart customer support, fraud detection, predictive analytics, personalisation",
    team: "8\u201315 people",
  },
  {
    icon: Globe,
    stage: "Global Stage",
    budget: "$50K+",
    focus: "Compete internationally",
    aiUse: "Full AI operations, multilingual support, automated compliance, AI-driven product features",
    team: "20+ people",
  },
];

const nigerianSuccess = [
  {
    icon: CreditCard,
    sector: "Fintech \u2014 Lagos",
    problem: "Manual KYC verification taking 48 hours per customer. Losing signups to competitors who onboarded faster.",
    aiSolution: "AI-powered document verification and facial matching that completes KYC in under 3 minutes.",
    results: ["98% reduction in onboarding time", "Customer acquisition up 340%", "Fraud detection rate improved by 60%"],
  },
  {
    icon: Truck,
    sector: "Logistics \u2014 Lagos & Ibadan",
    problem: "Drivers choosing their own routes, burning fuel, arriving late. No visibility into delivery status.",
    aiSolution: "AI route optimisation engine that factors in Lagos traffic patterns, fuel costs, and delivery windows.",
    results: ["32% reduction in fuel costs", "On-time delivery improved from 61% to 89%", "Scaled from 50 to 300 daily deliveries"],
  },
  {
    icon: MessageSquare,
    sector: "E-commerce \u2014 Lagos & Abuja",
    problem: "Two-person team answering 400+ daily WhatsApp messages. Orders missed, customers frustrated, founders exhausted.",
    aiSolution: "WhatsApp AI chatbot handling product queries, order tracking, and payment confirmation in English and Pidgin.",
    results: ["72% of messages handled automatically", "Average response time dropped to 25 seconds", "Monthly revenue up 28%"],
  },
];

const automationOpportunities = [
  {
    icon: MessageSquare,
    area: "Customer Support",
    description: "AI chatbots on WhatsApp and web handling FAQs, order tracking, and basic troubleshooting round the clock.",
    link: "/services/ai-chatbots",
    linkText: "Our AI Chatbot Service",
  },
  {
    icon: Shield,
    area: "Fraud & Compliance",
    description: "Machine learning models detecting suspicious transactions, verifying identities, and flagging risks in real time.",
    link: "/services/ai-automation",
    linkText: "Our AI Automation Service",
  },
  {
    icon: BarChart3,
    area: "Data & Analytics",
    description: "Predictive models forecasting demand, customer churn, and revenue trends from your existing business data.",
    link: "/services/ai-consulting",
    linkText: "Our AI Consulting Service",
  },
  {
    icon: Zap,
    area: "Operations & Workflow",
    description: "Automating invoicing, follow-ups, reporting, inventory management, and the dozens of repetitive tasks that eat your day.",
    link: "/services/ai-automation",
    linkText: "Our AI Automation Service",
  },
];

export function MVPToScaleContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="bg-black text-gray-300 min-h-screen">
      {/* Hero */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                AI Adoption &amp; Strategy
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                December 2025
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                12 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              From MVP to Scale: How Tech Startups in Nigeria Are Using AI
              Automation to Compete Globally
            </h1>

            {/* Author byline */}
            <div className="flex items-center gap-3 mb-10">
              <Image
                src="/images/team/peter-king.webp"
                alt="Peter King, CEO and CTO of AdmireTech"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-white font-medium">Peter King</p>
                <p className="text-xs text-gray-500">
                  CEO &amp; CTO, AdmireTech &middot; 15 December 2025
                </p>
              </div>
            </div>

            {/* Quick Answer */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8">
              <p className="text-accent font-semibold text-sm mb-2 flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Quick Answer
              </p>
              <p className="text-gray-200 leading-relaxed">
                Nigerian tech startups are using AI automation to leapfrog
                traditional scaling barriers and compete with global companies.
                By automating customer support, fraud detection, logistics, and
                operations from the MVP stage, Lagos-based startups are serving
                millions of customers with teams a fraction of the size their
                Western competitors need. The secret is not massive funding
                &mdash; it is building AI-first from day one, focusing on one
                painful problem, and scaling what works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding pt-0">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()} className="prose-custom">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I have a confession. The first startup I built in Lagos failed
              spectacularly. Not because the idea was bad &mdash; it was decent.
              Not because the market was not there &mdash; it was. It failed
              because I tried to scale before the foundation was ready. I hired
              too fast, spent too much on things that did not matter, and
              ignored the boring operational stuff that actually keeps a
              business alive.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              That was fifteen years ago. Since then, I have watched Lagos
              transform from a city where &ldquo;tech startup&rdquo; sounded
              like a foreign concept to one of the most exciting technology
              ecosystems on the planet. And the startups that are winning
              today? They are not just building good products. They are
              building smart systems that do the heavy lifting for them.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              That is what this article is about. How Nigerian startups are
              using AI automation to go from a scrappy MVP to a company that
              competes globally &mdash; without needing Silicon Valley money
              or Silicon Valley headcount.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Lagos Moment */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lagos Is Having Its Moment &mdash; And AI Is the Accelerator
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Let me give you some context if you are not familiar with what
              is happening in Nigerian tech right now.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nigeria is home to five of Africa&apos;s nine tech unicorns.
              Flutterwave, Paystack, Opay, Interswitch, Andela &mdash; all
              built in Lagos. The city&apos;s tech district in Yaba has gone
              from a handful of co-working spaces to a proper ecosystem with
              accelerators, venture capital firms, and thousands of developers
              building real products.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              But here is what most people outside Africa miss: the next wave
              is not just fintech. It is AI-powered everything. Logistics,
              healthcare, agriculture, e-commerce, education &mdash; Nigerian
              founders are applying AI automation across every sector. And
              they are doing it with a fraction of the resources their Western
              competitors have.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nigeria recorded 600% year-on-year growth in AI tool adoption.
              77% of Nigerian online adults say they are excited about AI. That
              is not just enthusiasm &mdash; it is a market ready to build and
              buy AI-powered products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why AI-First Wins */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why &ldquo;AI-First&rdquo; Beats &ldquo;AI-Later&rdquo; Every
              Time
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I have seen this pattern play out dozens of times. A startup
              builds a product, gets traction, grows, and then tries to bolt
              AI onto their existing systems. It is messy, expensive, and
              usually disappointing. The startups that are truly winning are
              the ones that build AI into the product from the very first
              version.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div {...fade()} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                You do not have legacy systems to untangle
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This is the biggest advantage Nigerian startups have over
                established Western companies. No twenty-year-old databases. No
                ancient ERP systems. No IT department that takes six months to
                approve a change. When you are building from scratch, you can
                make AI the core of your product instead of an afterthought.
                A Lagos fintech can build AI-powered fraud detection into their
                payment system from day one. A big European bank would need a
                two-year transformation programme to do the same thing.
              </p>
            </motion.div>

            <motion.div {...fade(0.1)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Small teams can do big things
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When you automate the repetitive work from the start, you do
                not need to hire as many people as you grow. I know a logistics
                startup in Lagos that handles 300 daily deliveries with a team
                of twelve. Their competitor in London doing the same volume has
                forty-five staff. The difference? AI handles route planning,
                customer updates, driver assignments, and invoicing
                automatically. The humans focus on the stuff that actually needs
                a human brain.
              </p>
            </motion.div>

            <motion.div {...fade(0.2)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                You can serve global customers from Lagos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI does not sleep, does not need a visa, and does not care about
                time zones. A startup with an AI chatbot can serve customers in
                London, New York, and Johannesburg simultaneously &mdash; in
                their local languages &mdash; without hiring support teams in
                each city. That is how Nigerian startups are competing globally
                with teams based entirely in Lagos and Abuja.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Real Stories: Nigerian Startups Scaling With AI
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              These are real examples from startups we have worked with or
              followed closely. Names have been changed where needed, but the
              numbers and outcomes are genuine.
            </p>
          </motion.div>

          <div className="space-y-6">
            {nigerianSuccess.map((story, i) => (
              <motion.div
                key={story.sector}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <story.icon className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold text-white">
                    {story.sector}
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  <p className="text-gray-400">
                    <span className="text-white font-medium">The problem: </span>
                    {story.problem}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">The AI solution: </span>
                    {story.aiSolution}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {story.results.map((result) => (
                    <span
                      key={result}
                      className="flex items-center gap-1.5 text-sm text-accent bg-accent/10 px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      {result}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Scaling Roadmap */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The MVP-to-Scale Roadmap: What AI to Use at Each Stage
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              One of the biggest mistakes I see is startups trying to build
              enterprise-grade AI systems when they are still validating their
              idea. You do not need a recommendation engine when you have fifty
              users. You do not need predictive analytics when you are still
              figuring out product-market fit. Here is how to think about AI
              at each stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {scalingStages.map((stage, i) => (
              <motion.div
                key={stage.stage}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <stage.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stage.stage}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {stage.budget}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-white font-medium">Focus: </span>
                  {stage.focus}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-white font-medium">AI use: </span>
                  {stage.aiUse}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Team: </span>
                  {stage.team}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade()} className="prose-custom">
            <p className="text-gray-300 leading-relaxed">
              The key insight is this: at every stage, AI should be solving a
              specific problem, not just existing because it sounds impressive
              on a pitch deck. The MVP stage is about proving your idea works.
              The growth stage is about doing more with less. The global stage
              is about competing with companies ten times your size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where to Automate */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Four Areas Where AI Automation Makes the Biggest Difference
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              After working with startups across Lagos, Pune, and London, I
              have found that AI automation delivers the most value in four
              areas. If you are deciding where to start, pick from this list.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationOpportunities.map((opp, i) => (
              <motion.div
                key={opp.area}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <opp.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {opp.area}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{opp.description}</p>
                <Link
                  href={opp.link}
                  className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                >
                  {opp.linkText} &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Honest Challenges */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Honest Challenges &mdash; And How to Navigate Them
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I would be doing you a disservice if I painted this as easy. It
              is not. Building and scaling a tech startup in Nigeria comes with
              real obstacles that founders in San Francisco never have to think
              about.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Infrastructure is unpredictable
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Power cuts, internet outages, and server latency are part of
              daily life. The workaround? Build cloud-first. Host on AWS or
              Google Cloud with servers in Cape Town or Mumbai. Use WhatsApp as
              your primary customer channel because it works even on slow
              connections. Design your product for low-bandwidth environments
              first, then add bells and whistles later.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Talent is hot and moves fast
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Good Nigerian developers are in demand globally. Remote work
              means a developer in Lagos can earn a London salary without
              leaving home. As a startup, you cannot always compete on
              pay. Compete on mission, equity, and the chance to build
              something meaningful. And use AI to reduce your dependency on
              large teams in the first place.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Funding is getting better, but it is not equal
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              African startups raised $2.5 billion in venture capital in 2024.
              That sounds like a lot until you compare it to the $170 billion
              raised in the US the same year. But here is the flip side:
              because you have less money, you learn to be more efficient.
              AI automation is not a nice-to-have in this context &mdash; it
              is how you survive. Every task you automate is a salary you do
              not have to pay.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Regulation is evolving
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Nigeria&apos;s data protection law (NDPA) and financial
              regulations are still maturing. This is actually an opportunity
              for startups that build compliance into their AI systems from
              day one. While competitors scramble to adapt later, you are
              already ahead. Work with a technology partner who understands
              both the tech and the regulatory landscape &mdash; it saves
              headaches down the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Five Rules */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Five Rules for Scaling Your Nigerian Startup With AI
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              These are lessons I have learnt the hard way &mdash; from my own
              mistakes and from watching dozens of founders navigate the
              journey from MVP to scale.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div {...fade()} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Prove it locally before going global
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I know it is tempting to talk about &ldquo;serving the
                  African market&rdquo; from day one. Do not. Pick one city.
                  Pick one customer type. Nail it. A product that works
                  brilliantly in Lagos will travel. A product that tries to
                  work everywhere usually works nowhere.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.1)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Automate the boring stuff first
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Do not start with the fancy AI features. Start with the
                  tedious, repetitive tasks that eat up your team&apos;s time.
                  Invoice generation. Customer follow-ups. Data entry. Order
                  confirmations. These are not exciting, but automating them
                  frees your team to focus on growth.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.2)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pick a tech partner, not just a developer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  There is a massive difference between hiring a developer who
                  writes code and working with a partner who understands your
                  market, your constraints, and your growth ambitions. At{" "}
                  <Link
                    href="/services/custom-development"
                    className="text-accent hover:underline"
                  >
                    AdmireTech
                  </Link>
                  , we work on an{" "}
                  <Link
                    href="/services/outcome-based-development"
                    className="text-accent hover:underline"
                  >
                    outcome-based model
                  </Link>{" "}
                  because we believe your tech partner should have skin in the
                  game.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.3)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Measure relentlessly
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every AI feature you build should have a number attached to
                  it. How many support tickets did the chatbot handle? How much
                  time did the automation save? What is the impact on revenue?
                  If you cannot answer these questions, you are just playing
                  with technology instead of building a business.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.4)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do not wait for perfect &mdash; ship and learn
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The founder in Yaba who ships a decent product this week
                  will always beat the founder in Lekki who is still perfecting
                  their pitch deck. Your MVP does not need to be perfect. It
                  needs to be useful. Get it into customers&apos; hands, listen
                  to their feedback, and improve as you go. That is how every
                  successful Nigerian startup has done it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Final Thoughts: The Future Is Being Built in Lagos
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I have built businesses on three continents. I have seen tech
              ecosystems in London, Bangalore, and San Francisco. And I am
              telling you &mdash; what is happening in Lagos right now is
              special.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The energy is different. The hunger is different. There is a
              generation of founders who grew up watching the world build
              technology and are now saying, &ldquo;Our turn.&rdquo; And
              AI is giving them the tools to compete at a level that would
              have been unthinkable five years ago.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              You do not need a hundred million dollars to build a global
              company. You need a real problem, a smart solution, and the
              discipline to automate everything that does not need a human
              brain.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The next African unicorn is probably being built right now in a
              co-working space in Yaba, by a founder who read an article like
              this one and decided to stop planning and start building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div
            {...fade()}
            className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <Rocket className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Start Your MVP Project?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              AdmireTech helps Nigerian founders and startups across Africa go
              from idea to AI-powered product &mdash; fast and on budget. We
              build with you, not just for you.
            </p>
            <CalBookingButton
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-3 rounded-full transition-colors"
              eventSlug="admireit-discovery-call"
            >
              <Target className="w-5 h-5" />
              Start Your MVP Project With Us
            </CalBookingButton>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-xl font-bold text-white mb-6">
              Related Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/ai-in-developing-countries-africa-south-asia"
                className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
              >
                <p className="text-sm text-accent mb-1">
                  AI Adoption &amp; Strategy
                </p>
                <p className="text-white font-medium">
                  Why Africa and South Asia Are the Next Frontiers for
                  AI-Powered Businesses
                </p>
              </Link>
              <Link
                href="/blog/ai-chatbots-solving-customer-support-gap"
                className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
              >
                <p className="text-sm text-accent mb-1">
                  AI Adoption &amp; Strategy
                </p>
                <p className="text-white font-medium">
                  How AI Chatbots Are Solving the Customer Support Gap in
                  Developing Markets
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.05)}
                className="border border-white/10 rounded-xl overflow-hidden"
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
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div
            {...fade()}
            className="flex flex-col md:flex-row items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <Image
              src="/images/team/peter-king.webp"
              alt="Peter King, CEO and CTO of AdmireTech"
              width={80}
              height={80}
              className="rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                About the Author
              </p>
              <p className="text-gray-300 leading-relaxed">
                Peter King is a British-African serial entrepreneur with over
                two decades of experience building technology businesses across
                the UK, West Africa, and India. He is a founding partner at
                AdmireTech, an AI-powered digital agency with offices in London,
                Pune, and Lagos that helps businesses launch intelligent
                solutions that drive real growth.
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="/about"
                  className="text-sm text-accent hover:underline"
                >
                  About AdmireTech
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-accent hover:underline"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
