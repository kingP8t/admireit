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
  MessageSquare,
  Users,
  Zap,
  Globe,
  CheckCircle,
  Heart,
  ShoppingCart,
  Stethoscope,
  Building2,
  Smartphone,
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
    q: "How much does an AI chatbot cost for a small business?",
    a: "A basic AI chatbot for a small business typically costs between $2,000 and $8,000 when built with a development team in an emerging market like India or Nigeria. Free tools like Tidio or Crisp can get you started at zero cost, while enterprise-grade chatbots with custom training can range from $10,000 to $30,000.",
  },
  {
    q: "Can an AI chatbot handle customer queries in local languages?",
    a: "Yes. Modern AI chatbots can handle multiple languages including Pidgin English, Yoruba, Hindi, Swahili, and dozens of others. Large language models have been trained on multilingual data, and chatbots can be fine-tuned for local dialects and expressions to feel natural for your customers.",
  },
  {
    q: "What is the difference between a rule-based chatbot and an AI chatbot?",
    a: "A rule-based chatbot follows a fixed script \u2014 it can only answer questions it has been specifically programmed for. An AI chatbot uses language models to understand what the customer actually means, even if they phrase it differently every time. AI chatbots learn from conversations and handle a much wider range of queries without manual programming.",
  },
  {
    q: "How quickly can I set up an AI chatbot for my business?",
    a: "A basic chatbot using a platform like Tidio or Crisp can be set up in a single day. A custom AI chatbot built for your specific business needs typically takes two to four weeks from start to launch, including training the bot on your products, services, and common customer questions.",
  },
  {
    q: "Will an AI chatbot replace my customer support team?",
    a: "No. The best approach is to use AI chatbots to handle the repetitive, common questions that take up most of your team\u2019s time \u2014 things like order tracking, business hours, pricing, and FAQs. This frees your human team to focus on complex issues that need a personal touch. Most businesses find chatbots handle 50 to 70 percent of queries, while humans handle the rest.",
  },
];

const supportGaps = [
  {
    icon: Clock,
    title: "The Waiting Game",
    stat: "12+ hours",
    desc: "Average response time for small businesses without dedicated support teams",
  },
  {
    icon: Users,
    title: "The Cost Problem",
    stat: "$3,000\u2013$5,000/mo",
    desc: "Monthly cost of a small customer support team in most developing markets",
  },
  {
    icon: Globe,
    title: "The Language Barrier",
    stat: "2,000+ languages",
    desc: "Spoken across Africa and South Asia \u2014 most support tools only handle English",
  },
  {
    icon: Smartphone,
    title: "The Channel Gap",
    stat: "2 billion+",
    desc: "WhatsApp users globally \u2014 but most businesses still rely on email support",
  },
];

const realResults = [
  {
    icon: ShoppingCart,
    industry: "E-commerce \u2014 Lagos",
    problem: "Founder answering WhatsApp messages until midnight. Losing sales because customers gave up waiting.",
    solution: "AI chatbot handling product questions, order tracking, and delivery updates in English and Pidgin.",
    results: ["65% of messages handled automatically", "Response time dropped from 4 hours to 30 seconds", "22% increase in monthly sales"],
  },
  {
    icon: Stethoscope,
    industry: "Healthcare Clinic \u2014 Pune",
    problem: "Patients calling to book appointments, check results, and ask about services. Two receptionists overwhelmed.",
    solution: "WhatsApp chatbot for appointment booking, prescription refill reminders, and clinic hours.",
    results: ["80% of appointment bookings now automated", "Zero missed calls during peak hours", "Staff freed up to focus on in-person patients"],
  },
  {
    icon: Building2,
    industry: "Fintech \u2014 Nairobi",
    problem: "Mobile money app getting hundreds of daily queries about transaction status and fees. Support team could not keep up.",
    solution: "AI chatbot integrated with transaction database to give real-time balance and status updates.",
    results: ["70% reduction in support tickets", "Customer satisfaction score up 35%", "Support team reduced from 8 to 3 people"],
  },
];

export function AIChatbotsSupportGapContent() {
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
                July 2025
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                10 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              How AI Chatbots Are Solving the Customer Support Gap in Developing
              Markets
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
                  CEO &amp; CTO, AdmireTech &middot; 10 July 2025
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
                AI chatbots are closing the customer support gap for businesses
                in Africa and South Asia by providing instant, round-the-clock
                responses at a fraction of the cost of hiring a full support
                team. A small business can set up a chatbot that handles 50 to
                70 percent of customer queries automatically, responds in local
                languages, works on WhatsApp and web, and costs between $2,000
                and $8,000 to build. The result? Faster answers for customers,
                lower costs for founders, and more time to actually grow the
                business.
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
              I remember the exact moment it clicked for me. I was in a small
              office in Yaba, Lagos, watching a friend run her online clothing
              business. Her phone was buzzing every thirty seconds. WhatsApp
              messages from customers. The same questions, over and over.
              &ldquo;What colours do you have?&rdquo; &ldquo;Do you deliver to
              Port Harcourt?&rdquo; &ldquo;When is my order coming?&rdquo;
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              She was brilliant at what she did &mdash; sourcing beautiful
              fabrics, building a loyal customer base, growing month over month.
              But she was drowning in messages. And every unanswered message was
              a customer who might not come back.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              That is the customer support gap. Not some fancy business school
              term. Just the painful reality that millions of businesses across
              Africa and South Asia face every single day: customers want quick
              answers, but hiring a support team costs more than most small
              businesses can afford.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              AI chatbots are changing that. And I am not talking about some
              futuristic promise. I am talking about right now, today, in
              markets that most Western tech companies are completely ignoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Support Gap */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Customer Support Gap Is Real &mdash; And It Is Costing
              Businesses Money
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Before we get into solutions, let me paint the picture properly.
              Because unless you have run a business in Lagos, Pune, or Nairobi,
              you might not fully grasp how big this problem is.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {supportGaps.map((gap, i) => (
              <motion.div
                key={gap.title}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <gap.icon className="w-8 h-8 text-accent mb-3" />
                <p className="text-2xl font-bold text-white mb-1">
                  {gap.stat}
                </p>
                <p className="text-sm font-semibold text-accent mb-2">
                  {gap.title}
                </p>
                <p className="text-sm text-gray-400">{gap.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade()} className="prose-custom">
            <p className="text-gray-300 leading-relaxed mb-6">
              In the UK or the US, if a customer emails a company and does not
              hear back for a day, they are annoyed. In developing markets, that
              customer has already messaged three of your competitors on
              WhatsApp. Competition is fierce, margins are thin, and loyalty goes
              to whoever answers first.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The traditional solution &mdash; hiring more people &mdash; does
              not scale. A small e-commerce business in Nigeria doing well might
              get 200 to 500 WhatsApp messages a day. That needs at least two to
              three full-time staff just to keep up. In most emerging markets,
              that is $3,000 to $5,000 a month in salaries. For a business
              making $10,000 to $20,000 a month, that is a huge chunk of
              revenue going to answering the same ten questions over and over.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Chatbots Work */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why AI Chatbots Are a Perfect Fit for These Markets
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I have been building technology businesses across London, Lagos,
              and Pune for over twenty years. And honestly, I have never seen a
              technology fit a market need as perfectly as AI chatbots fit
              developing economies. Here is why.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div {...fade()} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-accent" />
                WhatsApp Is Already There
              </h3>
              <p className="text-gray-300 leading-relaxed">
                In Africa and South Asia, WhatsApp is not just a messaging app.
                It is the internet. It is how people shop, bank, complain, and
                do business. Nigeria alone has over 40 million WhatsApp users.
                India has over 500 million. You do not need to convince customers
                to download a new app or visit your website. They are already on
                WhatsApp. An AI chatbot that lives inside WhatsApp meets your
                customers exactly where they already are.
              </p>
            </motion.div>

            <motion.div {...fade(0.1)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Multilingual From Day One
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This is something most Silicon Valley chatbot companies
                completely miss. In Nigeria, a customer might start a message in
                English, switch to Pidgin halfway through, and throw in a Yoruba
                expression for good measure. In India, the same conversation
                could flow between Hindi, English, and Marathi. Modern AI
                chatbots handle this naturally. They understand context and
                language mixing in a way that old rule-based bots never could.
                For businesses serving diverse communities, this is massive.
              </p>
            </motion.div>

            <motion.div {...fade(0.2)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Always On, Never Tired
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A human support agent works eight hours. An AI chatbot works
                twenty-four. It does not take lunch breaks. It does not call in
                sick on Monday. It does not get frustrated when the same customer
                asks the same question for the fourth time. For businesses that
                serve customers across different time zones &mdash; say, a
                Nigerian brand selling to the diaspora in the UK and US &mdash;
                this around-the-clock availability is not a luxury. It is a
                necessity.
              </p>
            </motion.div>

            <motion.div {...fade(0.3)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                It Costs a Fraction of Hiring
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Let me put real numbers on it. A custom AI chatbot that handles
                your most common customer questions costs between $2,000 and
                $8,000 to build with a team in an emerging market. That is a
                one-time cost. Compare that to $3,000 to $5,000 every month for
                a small support team. Within two to three months, the chatbot
                has paid for itself. After that, you are saving money every
                single month. The maths is simple. And for founders watching
                every dollar, simple maths matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Real Stories, Real Numbers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I do not believe in selling dreams. I believe in showing results.
              Here are three real examples from businesses we have worked with
              at{" "}
              <Link href="/services/ai-chatbots" className="text-accent hover:underline">
                AdmireTech
              </Link>
              . I have changed some names for privacy, but the numbers are real.
            </p>
          </motion.div>

          <div className="space-y-6">
            {realResults.map((story, i) => (
              <motion.div
                key={story.industry}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <story.icon className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold text-white">
                    {story.industry}
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  <p className="text-gray-400">
                    <span className="text-white font-medium">
                      The problem:{" "}
                    </span>
                    {story.problem}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">
                      What we built:{" "}
                    </span>
                    {story.solution}
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

      {/* What Makes a Good Chatbot */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Separates a Good Chatbot From a Rubbish One
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Not all chatbots are created equal. We have all experienced those
              terrible bots that go round in circles, do not understand your
              question, and make you want to throw your phone across the room.
              That is what happens when someone builds a chatbot without
              thinking about the customer first. Here is what actually matters.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div {...fade()} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3">
                1. It has to understand how people actually talk
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your customers do not speak like textbooks. In Lagos, someone
                might type &ldquo;Abeg, when my order go come?&rdquo; In Pune,
                they might switch between Hindi and English mid-sentence. A good
                chatbot understands all of that without forcing customers to
                speak &ldquo;proper&rdquo; English. If your chatbot cannot
                handle the way your customers actually communicate, it is
                useless.
              </p>
            </motion.div>

            <motion.div {...fade(0.1)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3">
                2. It needs a smooth handoff to a human
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The moment a chatbot pretends it can handle something it
                cannot, you lose trust. The best chatbots know their limits.
                When a customer has a complex complaint or a sensitive issue,
                the bot should immediately say &ldquo;Let me connect you with
                someone who can help&rdquo; and pass the conversation to a real
                person &mdash; with all the context included so the customer
                does not have to repeat themselves.
              </p>
            </motion.div>

            <motion.div {...fade(0.2)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3">
                3. It should work on the channels your customers use
              </h3>
              <p className="text-gray-300 leading-relaxed">
                If your customers are on WhatsApp, your chatbot needs to be on
                WhatsApp. If they prefer Instagram DMs, it should be there too.
                Do not build a fancy chatbot on your website and expect
                customers in developing markets to go find it. Meet them where
                they already spend their time.
              </p>
            </motion.div>

            <motion.div {...fade(0.3)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3">
                4. It needs to learn and improve
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A chatbot that gives the same wrong answer forever is worse
                than no chatbot at all. Good AI chatbots learn from
                conversations. They flag questions they could not answer so you
                can train them. Over time, they get better and better. Within
                a few months, a well-maintained chatbot handles things you
                never even programmed it for.
              </p>
            </motion.div>

            <motion.div {...fade(0.4)} className="prose-custom">
              <h3 className="text-xl font-semibold text-white mb-3">
                5. It should feel human, not robotic
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nobody wants to chat with something that feels like a
                government form. A good chatbot has personality. It mirrors
                your brand voice. If your brand is friendly and informal, your
                chatbot should be too. If you are a professional services firm,
                it should be polished but warm. The technology should be
                invisible. The customer should just feel like they are getting
                great service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How to Get Started &mdash; Without Overcomplicating It
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              If you are reading this and thinking &ldquo;Right, I need a
              chatbot&rdquo; &mdash; good. But do not rush into it. Here is the
              approach I recommend to every founder I work with.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div {...fade()} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  List your top ten customer questions
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Go through your WhatsApp, email, or DMs and write down the
                  ten questions you get asked most often. Chances are, six or
                  seven of them are the same thing phrased slightly
                  differently. Those are your chatbot&apos;s first job.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.1)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Try a free tool first
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Before spending a penny, test the waters with a free chatbot
                  platform like Tidio, Crisp, or even WhatsApp Business
                  automated replies. See how your customers react. Do they
                  engage with it? Does it actually reduce the number of
                  messages you have to answer manually? This experiment costs
                  you nothing but a few hours.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.2)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Invest in a custom build when you have proof
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Once you know a chatbot works for your business, invest in a
                  proper one. A custom AI chatbot trained on your products,
                  your brand voice, and your customers&apos; language will
                  outperform any off-the-shelf tool. This is where working
                  with a partner like{" "}
                  <Link
                    href="/services/ai-chatbots"
                    className="text-accent hover:underline"
                  >
                    AdmireTech&apos;s AI Chatbot team
                  </Link>{" "}
                  makes a difference &mdash; we build chatbots specifically
                  for businesses in emerging markets, with multilingual
                  support and WhatsApp integration baked in from the start.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.3)} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Measure everything
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Track how many messages the chatbot handles versus how many
                  go to a human. Track response time. Track customer
                  satisfaction. Track sales. If you cannot measure it, you
                  cannot improve it. And improvement is where the magic
                  happens.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Honest Talk */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Honest Truth About Chatbots
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I would be doing you a disservice if I only told you the good
              stuff. So here is the honest truth.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Chatbots are not perfect. They will sometimes misunderstand a
              question. They will occasionally give an answer that makes no
              sense. They will frustrate some customers who just want to talk
              to a human being.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              But here is the thing &mdash; your current situation is not
              perfect either. If customers are waiting twelve hours for a
              reply, if you are losing sales because you cannot respond fast
              enough, if you are burning out trying to do everything yourself
              &mdash; a chatbot that handles even half your queries is a
              massive improvement.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The businesses that win are not the ones that wait for perfect
              technology. They are the ones that start with good-enough
              technology and make it better over time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              And that is exactly what AI chatbots offer: a good-enough
              starting point that gets better every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Bigger Picture: Customer Support as a Competitive Advantage
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here is something I tell every founder I mentor: in a market
              where most businesses respond to customers in hours or days, the
              one that responds in seconds wins.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Customer support is not just a cost centre. It is your best
              marketing tool. When someone messages your business and gets an
              instant, helpful, friendly response &mdash; even from a chatbot
              &mdash; that experience sticks. They tell their friends. They
              come back. They spend more.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              In developing markets, where word-of-mouth and WhatsApp
              referrals drive a huge portion of business, this matters more
              than anywhere else on earth.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The customer support gap is not just a problem to solve. It is
              an opportunity to stand out. And AI chatbots are the cheapest,
              fastest, most effective way to grab it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-wide max-w-4xl">
          <motion.div {...fade()}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I started this article with a story about a friend in Lagos
              drowning in WhatsApp messages. Today, her chatbot handles two
              thirds of those messages. She sleeps better. Her customers are
              happier. Her business is growing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              That is not a tech miracle. That is just a good tool solving a
              real problem.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you are running a business in Africa, South Asia, or any
              developing market and your customers are waiting too long for
              answers &mdash; you already know what the problem is. Now you
              know the solution is within reach. The only question left is
              whether you are going to start today or keep answering those
              messages yourself until midnight.
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
            <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Close Your Customer Support Gap?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              AdmireTech builds AI chatbots for businesses in Africa, South
              Asia, and beyond. We handle WhatsApp integration, multilingual
              support, and human handoffs &mdash; so your customers get fast
              answers and you get your time back.
            </p>
            <CalBookingButton
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-3 rounded-full transition-colors"
              eventSlug="admireit-discovery-call"
            >
              <MessageSquare className="w-5 h-5" />
              Book a Free AI Consultation
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
                href="/blog/ai-strategy-lean-budget-startups-emerging-markets"
                className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
              >
                <p className="text-sm text-accent mb-1">
                  AI Adoption &amp; Strategy
                </p>
                <p className="text-white font-medium">
                  Building an AI Strategy on a Lean Budget: A Guide for
                  Startups in Emerging Markets
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
