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
  Landmark,
  HeartPulse,
  Sprout,
  GraduationCap,
  Truck,
  MapPin,
  Lightbulb,
  Zap,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const transformations = [
  {
    number: "01",
    icon: Landmark,
    title: "Fintech & Financial Inclusion",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description:
      "AI-driven credit scoring is unlocking financial access for millions of unbanked Africans. Traditional banking models fail when customers lack formal credit histories, but machine learning models analyse alternative data \u2014 mobile money usage, utility payments, social signals \u2014 to assess creditworthiness accurately.",
    examples: [
      "AI fraud detection saving Nigerian banks millions annually",
      "Automated KYC reducing onboarding from days to minutes",
      "Predictive models enabling micro-lending at scale across East Africa",
    ],
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Healthtech & Diagnostics",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    description:
      "With doctor-to-patient ratios as low as 1:10,000 in parts of the continent, AI is bridging critical healthcare gaps. Computer vision models are diagnosing conditions from medical images with specialist-level accuracy, while AI-powered triage chatbots are directing patients to the right care faster.",
    examples: [
      "AI-assisted malaria detection from blood smear images",
      "Telemedicine platforms with AI symptom triage in local languages",
      "Predictive analytics for disease outbreak monitoring",
    ],
  },
  {
    number: "03",
    icon: Sprout,
    title: "AgriTech & Food Security",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    description:
      "Agriculture employs over 60% of Africa\u2019s workforce, making AI\u2019s impact here transformative at scale. Satellite imagery combined with machine learning enables precision farming \u2014 predicting crop yields, detecting disease early, and optimising irrigation for smallholder farmers who produce most of the continent\u2019s food.",
    examples: [
      "Drone-based crop monitoring with AI disease identification",
      "Weather prediction models tailored to African microclimates",
      "Market price forecasting helping farmers maximise revenue",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Logistics & Last-Mile Delivery",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    description:
      "Africa\u2019s informal address systems and complex urban layouts make logistics a unique challenge. AI-powered route optimisation, demand forecasting, and dynamic pricing are enabling logistics companies to crack the last-mile delivery problem \u2014 reducing costs by up to 30% while improving delivery reliability.",
    examples: [
      "AI route planning navigating unstructured urban roads in Lagos",
      "Demand prediction for inventory positioning across distribution hubs",
      "Automated dispatch systems matching drivers to deliveries in real-time",
    ],
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "EdTech & Skills Development",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    description:
      "With a median age of 19, Africa has the world\u2019s youngest population \u2014 and AI is helping educate them at scale. Adaptive learning platforms personalise content to each student\u2019s pace, while AI tutors provide one-on-one support in local languages that would be impossible with human teachers alone.",
    examples: [
      "Personalised learning paths adapting to student performance in real-time",
      "AI-powered content generation in Swahili, Yoruba, and Hausa",
      "Automated skills assessment connecting graduates to job opportunities",
    ],
  },
];

const hubs = [
  { city: "Lagos", country: "Nigeria", focus: "Fintech, AI Chatbots, SaaS" },
  { city: "Nairobi", country: "Kenya", focus: "Mobile Innovation, AgriTech" },
  { city: "Cape Town", country: "South Africa", focus: "Enterprise AI, Deep Tech" },
  { city: "Cairo", country: "Egypt", focus: "AI Research, Healthtech" },
  { city: "Accra", country: "Ghana", focus: "Payments, Data Analytics" },
  { city: "Kigali", country: "Rwanda", focus: "Smart Cities, Drone Tech" },
];

const stats = [
  { value: "$7B+", label: "African tech funding in 2025" },
  { value: "2,400+", label: "AI startups across the continent" },
  { value: "19", label: "Median age \u2014 youngest workforce globally" },
  { value: "60%", label: "Mobile money penetration in East Africa" },
];

const faqs = [
  {
    q: "How is AI being used in Africa right now?",
    a: "AI is deployed across Africa in fintech (credit scoring, fraud detection), healthtech (diagnostics, telemedicine triage), agriculture (crop monitoring, yield prediction), logistics (route optimisation, last-mile delivery), and edtech (personalised learning). Lagos, Nairobi, and Cape Town are emerging as major AI innovation hubs.",
  },
  {
    q: "Which African countries are leading in AI adoption?",
    a: "Nigeria, Kenya, South Africa, Egypt, and Ghana lead AI adoption. Lagos is the continent\u2019s largest tech hub with a thriving fintech ecosystem. Nairobi is known for mobile-first innovation. South Africa leads in enterprise AI, while Egypt and Ghana are rapidly growing their AI startup scenes.",
  },
  {
    q: "What are the biggest challenges for AI in Africa?",
    a: "Key challenges include limited quality training data, infrastructure gaps (internet, power), a shortage of specialised AI talent, regulatory uncertainty, and the need for models that understand local languages and contexts. These are being addressed through local data initiatives, cloud investment, and AI skills programmes.",
  },
  {
    q: "How can African businesses start using AI?",
    a: "Start with high-impact, low-complexity use cases: customer support chatbots, automated document processing, or predictive sales analytics. Partnering with an AI consultancy that understands local dynamics is the fastest path. Cloud-based AI services also eliminate heavy upfront infrastructure costs.",
  },
  {
    q: "Is AI creating or destroying jobs in Africa?",
    a: "AI is creating more jobs than it displaces in Africa. While routine tasks get automated, new roles emerge in data annotation, AI engineering, prompt engineering, and AI-augmented service. Africa\u2019s young, tech-savvy workforce is well positioned to capture a significant share of these new opportunities.",
  },
];

export function AIAfricanTechContent() {
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
            AI in Africa
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            10 March 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            6 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          5 Ways AI Is Transforming the African Tech Ecosystem
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img src="/images/team/peter-king.webp" alt="Peter King" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">CEO &amp; CTO, AdmireTech · Published 10 March 2026</p>
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
          Africa is not just adopting AI &mdash; it is building it. From Lagos to
          Nairobi, a new generation of founders is using artificial intelligence to
          solve uniquely African challenges at continental scale.
        </p>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The African AI Opportunity
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            While global headlines focus on Silicon Valley, Africa is quietly
            building one of the most exciting AI ecosystems on the planet. With a
            population of 1.4 billion, the world&apos;s youngest workforce, and
            leapfrog infrastructure like mobile money, the continent offers a
            unique proving ground for AI solutions that must work under real-world
            constraints &mdash; limited connectivity, multilingual users, and
            informal markets.
          </p>
          <p className="text-text-secondary leading-relaxed">
            These constraints breed innovation. The AI solutions emerging from
            Africa are not watered-down versions of Western products &mdash; they
            are purpose-built for environments that demand resilience, efficiency,
            and local relevance.
          </p>
        </motion.section>

        {/* Stats Strip */}
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

        {/* 5 Transformations */}
        {transformations.map((t) => (
          <motion.section key={t.number} {...fade()} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-11 h-11 rounded-xl ${t.bg} flex items-center justify-center shrink-0`}
              >
                <t.icon size={22} className={t.color} />
              </div>
              <div>
                <span className={`text-xs font-bold ${t.color} tracking-wider`}>
                  TRANSFORMATION {t.number}
                </span>
                <h2 className="text-2xl font-bold text-white">{t.title}</h2>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4">
              {t.description}
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              {t.examples.map((ex, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${t.bg.replace("/10", "")} mt-1.5 shrink-0`}
                  />
                  {ex}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}

        {/* Innovation Hubs */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Globe size={22} className="inline mr-2 text-accent" />
            Africa&apos;s Leading AI Innovation Hubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                className="bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-accent" />
                  <h3 className="text-white font-semibold text-sm">
                    {hub.city},{" "}
                    <span className="text-text-secondary font-normal">
                      {hub.country}
                    </span>
                  </h3>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {hub.focus}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What This Means */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            <Lightbulb size={22} className="inline mr-2 text-accent" />
            What This Means for Businesses
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Whether you are a startup in Lagos or an enterprise expanding into
            East Africa, AI is no longer optional &mdash; it is a competitive
            necessity. The businesses that move first will build data moats,
            capture market share, and establish themselves as category leaders.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The good news? You do not need a massive R&amp;D budget to start.
            Cloud-based AI services, pre-trained models, and experienced
            implementation partners like AdmireTech make it possible to go from
            idea to production in weeks, not years.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Building for Africa? Let&apos;s Talk AI.
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            We help businesses across London, Lagos, and Pune deploy AI solutions
            that work in real-world African markets. Book a free strategy call.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free AI Strategy Call
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
              href="/services/ai-automation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Zap size={16} />
              AI Automation Service
            </Link>
            <Link
              href="/services/custom-development"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Globe size={16} />
              Custom Development
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
