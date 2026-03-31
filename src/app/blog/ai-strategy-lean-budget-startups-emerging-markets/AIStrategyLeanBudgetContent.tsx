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
  Bot,
  Zap,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  BarChart3,
  Palette,
  Mic,
  FileText,
  Workflow,
  Globe,
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
    q: "How much does it cost to implement AI for a small startup?",
    a: "Implementing AI for a small startup can cost anywhere from $0 (using free tools like ChatGPT, Tidio, or Zapier free tier) to $5,000\u2013$15,000 for a custom-built MVP like a chatbot or recommendation engine. Working with development teams in emerging markets like India or Nigeria significantly reduces costs compared to hiring US or UK agencies.",
  },
  {
    q: "What is the best AI tool for startups on a budget?",
    a: "The best AI tool depends on your specific problem. For customer support, WhatsApp Business API with an AI chatbot is hard to beat in developing markets. For content and marketing, ChatGPT or Claude offer powerful free tiers. For workflow automation, Zapier and Make.com can connect your tools and eliminate manual tasks without any code.",
  },
  {
    q: "Can I build an AI product without a technical co-founder?",
    a: "Yes. Many successful AI products have been built by non-technical founders who partnered with the right development team. No-code and low-code AI platforms make it possible to prototype ideas without coding skills. When you are ready to build a custom solution, working with an experienced partner who offers outcome-based pricing removes the technical risk from your side.",
  },
  {
    q: "What is outcome-based development?",
    a: "Outcome-based development is a model where you pay your technology partner based on the results they deliver, not the number of hours they work. For example, if the agreed outcome is a chatbot that reduces customer support tickets by 50%, payment is tied to that result. This model works especially well for budget-conscious startups because it aligns your partner\u2019s incentives with your business goals.",
  },
  {
    q: "How long does it take to build an AI MVP?",
    a: "A simple AI chatbot MVP can be built in two to four weeks. More complex products like recommendation engines or predictive analytics tools typically take six to twelve weeks. The key is to start with a narrow scope, launch quickly, and improve based on real customer feedback rather than trying to perfect everything before launch.",
  },
];

const freeTools = [
  {
    icon: MessageSquare,
    useCase: "Customer Support",
    tools: "Tidio, Crisp, Manychat, WhatsApp Business API",
    benefit: "Answers common customer questions 24/7 without hiring extra staff",
  },
  {
    icon: FileText,
    useCase: "Content & Marketing",
    tools: "ChatGPT, Claude, Jasper (free tiers)",
    benefit:
      "Writes social media posts, blog drafts, email campaigns in minutes",
  },
  {
    icon: BarChart3,
    useCase: "Data Analysis",
    tools: "Google Sheets AI, Julius AI, ChatGPT Code Interpreter",
    benefit:
      "Analyses your sales data and finds patterns you would miss manually",
  },
  {
    icon: Workflow,
    useCase: "Workflow Automation",
    tools: "Zapier, Make.com, n8n (open-source)",
    benefit: "Connects your apps and automates repetitive admin tasks",
  },
  {
    icon: Palette,
    useCase: "Design & Visuals",
    tools: "Canva AI, Microsoft Designer",
    benefit:
      "Creates professional marketing materials without a graphic designer",
  },
  {
    icon: Mic,
    useCase: "Voice & Transcription",
    tools: "Whisper (open-source), Otter.ai",
    benefit: "Transcribes meetings and customer calls into searchable text",
  },
];

const budgetTable = [
  {
    type: "AI Chatbot (WhatsApp / Web)",
    cost: "$2,000 \u2013 $8,000",
    desc: "Handles FAQs, order tracking, and basic support. Integrates with your existing tools.",
  },
  {
    type: "Workflow Automation",
    cost: "$1,000 \u2013 $5,000",
    desc: "Connects your apps, automates invoicing, follow-ups, data entry, and reporting.",
  },
  {
    type: "AI Recommendation Engine",
    cost: "$5,000 \u2013 $15,000",
    desc: "Suggests products or content based on user behaviour. Increases conversion rates.",
  },
  {
    type: "Predictive Analytics Dashboard",
    cost: "$8,000 \u2013 $20,000",
    desc: "Analyses historical data to forecast demand, sales trends, or customer churn.",
  },
  {
    type: "Custom AI Agent / Copilot",
    cost: "$10,000 \u2013 $30,000",
    desc: "A tailored AI assistant trained on your business data for internal or customer-facing tasks.",
  },
];

const mistakes = [
  {
    icon: AlertTriangle,
    title: "Trying to do everything at once",
    desc: "Pick one problem. Solve it well. Then move on. Spreading your budget across five AI projects means none of them get done properly.",
  },
  {
    icon: AlertTriangle,
    title: "Chasing the latest technology instead of solving a real problem",
    desc: "Your customers do not care whether you are using GPT-4 or an open-source model. They care whether their question gets answered and their order arrives on time.",
  },
  {
    icon: AlertTriangle,
    title: "Hiring the cheapest developer you can find",
    desc: "There is a difference between affordable and cheap. A $10-per-hour developer who delivers broken code will cost you more than a $30-per-hour developer who gets it right the first time.",
  },
  {
    icon: AlertTriangle,
    title: "Not measuring results",
    desc: "If you cannot tell me how much time or money your AI tool is saving, you do not have a strategy. You have a science experiment.",
  },
  {
    icon: AlertTriangle,
    title: 'Waiting for the "perfect" time',
    desc: "There is no perfect time. The best AI strategy is the one you start today. Even a small, imperfect implementation teaches you more than six months of planning.",
  },
];

export function AIStrategyLeanBudgetContent() {
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
            AI Adoption &amp; Strategy
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            15 June 2025
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            10 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Building an AI Strategy on a Lean Budget: A Guide for Startups in
          Emerging Markets
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img
            src="/images/team/peter-king.webp"
            alt="Peter King, CEO and CTO of AdmireTech"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">
              Serial Entrepreneur &middot; CEO &amp; CTO, AdmireTech &middot;
              Published 15 June 2025
            </p>
          </div>
        </div>

        {/* Quick Answer Box */}
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-6 mt-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Quick Answer
          </p>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            Start by identifying one painful, repetitive business problem that AI
            can solve. Use free or low-cost AI tools to build a minimum viable
            product. Focus on outcomes rather than technology for its own sake.
            Leverage affordable development talent in emerging markets, adopt
            outcome-based pricing models where you pay for results not hours, and
            scale only after you have proven value. A practical AI strategy does
            not require millions &mdash; it requires clarity, focus, and the
            right partners.
          </p>
        </div>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            Let me tell you something that nobody in Silicon Valley wants to
            admit: you do not need a million-dollar budget to build an AI-powered
            business.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            I know this because I have done it. Multiple times. Across Lagos,
            Pune, and London. With budgets that would make a Bay Area product
            manager laugh. And yet, the products worked. The customers paid. The
            businesses grew.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            There is a myth floating around that AI is only for big corporations
            with deep pockets and dedicated data science teams. That myth is
            keeping thousands of talented founders in Africa, India, and across
            the developing world from taking their first step. And that bothers
            me, because the opportunity has never been bigger.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This guide is for you if you are a startup founder, a small business
            owner, or anyone in an emerging market who wants to use AI but thinks
            it is out of reach. I am going to walk you through how to build a
            practical AI strategy without burning through your savings.
          </p>
        </motion.section>

        {/* Why Every Startup Needs an AI Strategy */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Every Startup Needs an AI Strategy in 2025
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            First, let us clear something up. An &ldquo;AI strategy&rdquo; is
            not a hundred-page document. It is not a buzzword for your pitch
            deck. At its simplest, an{" "}
            <Link
              href="/services/ai-consulting"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              AI strategy
            </Link>{" "}
            answers one question: Where can artificial intelligence make my
            business faster, cheaper, or better for my customers?
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The reason this matters now &mdash; especially for startups in
            developing countries &mdash; is that the tools have become
            dramatically more accessible. Five years ago, building an AI chatbot
            required a team of machine learning engineers and months of training
            data. Today, you can spin one up in an afternoon using pre-built
            models and no-code platforms.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The global AI market is expected to reach $391 billion by the end of
            2025, with private investment topping $109 billion in the US alone.
            But here is the thing &mdash; you do not need to compete at that
            scale. You just need to be smart about where you invest your limited
            resources.
          </p>
        </motion.section>

        {/* Five-Step Framework */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            A Five-Step AI Strategy for Lean Startups
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Over the years, I have developed a simple framework that I use with
            every founder I advise. It works whether you have $500 or $50,000 to
            spend. The key is discipline and focus.
          </p>

          {/* Step 1 */}
          <div className="bg-card border border-white/5 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Target size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Step 1: Find Your One Painful Problem
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Do not try to &ldquo;do AI&rdquo; across your whole business.
                  That is how big companies waste millions. Instead, find one
                  specific, painful, repetitive problem.
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              Ask yourself:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              {[
                "What task eats up the most time for me or my team every week?",
                "Where are we losing customers because we cannot respond fast enough?",
                "What decision do we make every day that could benefit from better data?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-black/30 rounded-lg p-4 mt-4">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-medium">From the field:</span>{" "}
                For a logistics startup in Lagos I worked with, the answer was
                route planning. Drivers were making inefficient trips, burning
                fuel, and arriving late. For a small e-commerce business in Pune,
                it was customer support &mdash; the founder was personally
                answering WhatsApp messages until midnight.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-white/5 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <CheckCircle size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Step 2: Check If AI Is Actually the Right Solution
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Not everything needs AI. Sometimes a simple spreadsheet or a
                  better process solves the problem. I have seen founders chase
                  AI solutions when what they really needed was a properly set up
                  CRM.
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              AI is a good fit when:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              {[
                "The task involves processing large amounts of text, images, or data",
                "The task is repetitive and follows patterns (like answering the same customer questions)",
                "You need to make predictions based on historical data (like demand forecasting)",
                "Speed and availability matter (like providing 24/7 customer support without hiring night staff)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-secondary text-sm leading-relaxed mt-3">
              If your problem ticks one or more of these boxes, keep going. If
              not, save your money and solve it the simple way.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-white/5 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Lightbulb size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Step 3: Start Free, Then Scale
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Here is where most founders in emerging markets get stuck. They
                  think AI means hiring a machine learning team and building
                  everything from scratch. It does not.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {freeTools.map((tool) => (
                <div
                  key={tool.useCase}
                  className="bg-black/30 rounded-lg p-4 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <tool.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xs mb-1">
                      {tool.useCase}
                    </h4>
                    <p className="text-accent text-xs font-medium mb-1">
                      {tool.tools}
                    </p>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {tool.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mt-4">
              Start with the free tier. Test whether AI actually solves your
              problem. If it does, then invest in a custom solution built around
              your specific needs.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-card border border-white/5 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Zap size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Step 4: Build Your MVP &mdash; Not Your Masterpiece
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Once you know AI works for your problem, build a minimum viable
                  product. Not a perfect product. An MVP that does one thing well
                  enough for real customers to use it and give you feedback.
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              In emerging markets, this is where your cost advantage kicks in. A
              custom{" "}
              <Link
                href="/services/ai-chatbots"
                className="text-accent hover:text-accent-warm transition-colors"
              >
                AI chatbot
              </Link>{" "}
              that would cost $30,000&ndash;$50,000 to build with a US agency
              can be built for $3,000&ndash;$8,000 with a skilled team in India
              or Nigeria.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              But &mdash; and I cannot stress this enough &mdash; do not just go
              for the cheapest option. At AdmireTech, we use an{" "}
              <Link
                href="/services/outcome-based-development"
                className="text-accent hover:text-accent-warm transition-colors"
              >
                outcome-based development
              </Link>{" "}
              model for exactly this reason. Our clients pay for results, not
              hours. If the chatbot does not reduce support tickets by the agreed
              percentage, we have not done our job.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-card border border-white/5 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <BarChart3 size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Step 5: Measure, Learn, and Scale What Works
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  This is where most startups drop the ball. They build
                  something, launch it, and then move on to the next shiny idea.
                  Do not do that.
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              After you launch your AI MVP, track three things:
            </p>
            <ol className="space-y-2 text-text-secondary text-sm list-decimal list-inside">
              <li>
                <span className="font-semibold text-white">Time saved.</span>{" "}
                How many hours per week is the AI tool saving your team?
              </li>
              <li>
                <span className="font-semibold text-white">
                  Customer impact.
                </span>{" "}
                Are your customers happier? Faster response times, fewer errors,
                better recommendations.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Revenue effect.
                </span>{" "}
                Is the AI tool helping you make more money?
              </li>
            </ol>
            <p className="text-text-secondary text-sm leading-relaxed mt-3">
              Once you have proof that AI is working in one area, expand to the
              next. This is how you build an AI strategy that grows with your
              business.
            </p>
          </div>
        </motion.section>

        {/* Real-World Example */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            A Real-World Example: How a Lagos Startup Built an AI Product for
            Under $5,000
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A founder I mentored in Lagos runs a small online fashion brand. She
            was drowning in WhatsApp messages from customers asking the same
            questions over and over: &ldquo;What sizes do you have?&rdquo;
            &ldquo;Do you deliver to Abuja?&rdquo; &ldquo;When will my order
            arrive?&rdquo;
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            She could not afford to hire a customer service team. She was doing
            it all herself, and it was eating into the time she needed to
            actually grow the business.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            We helped her build a simple{" "}
            <Link
              href="/services/ai-chatbots"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              AI chatbot
            </Link>{" "}
            that integrates with WhatsApp. It handles the repetitive questions
            automatically, responds in both English and Pidgin, and escalates
            complex queries to her personal phone. The total cost was under
            $5,000, including design, development, and three months of support.
          </p>

          {/* Stats Callout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "65%", label: "Messages handled automatically" },
              { value: "<30s", label: "Average response time" },
              { value: "+3hrs", label: "Daily time saved" },
              { value: "+22%", label: "Monthly sales increase" },
            ].map((stat) => (
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
          </div>

          <p className="text-text-secondary leading-relaxed mt-6">
            That is the power of a focused AI strategy. No massive budget. No
            machine learning team. Just a clear problem, the right solution, and
            a partner who understood the market.
          </p>
        </motion.section>

        {/* Five Mistakes to Avoid */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Five Mistakes to Avoid When Building an AI Strategy on a Budget
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            I have made most of these myself over the years, so consider this
            hard-won wisdom:
          </p>
          <div className="space-y-3">
            {mistakes.map((mistake, i) => (
              <div
                key={i}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <AlertTriangle size={16} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {i + 1}. {mistake.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {mistake.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Realistic Budget */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Does a Realistic AI Budget Look Like?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            I get asked this question constantly, so let me give you honest
            numbers based on what we see at AdmireTech working with startups
            across Africa and South Asia:
          </p>
          <div className="space-y-3">
            {budgetTable.map((row) => (
              <div
                key={row.type}
                className="bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-white font-semibold text-sm">
                    {row.type}
                  </h3>
                  <span className="text-accent font-bold text-sm">
                    {row.cost}
                  </span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {row.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mt-4">
            These costs are based on working with experienced development teams
            in emerging markets. The same projects quoted by agencies in the US
            or UK would typically cost three to ten times more.
          </p>
        </motion.section>

        {/* When to DIY vs Partner */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            When to DIY and When to Bring in a Partner
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            As a serial entrepreneur, I am all for rolling up your sleeves. But I
            have also learnt &mdash; the hard way &mdash; when to ask for help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-card border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Lightbulb size={16} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-sm">
                  Do It Yourself When...
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                You are just testing whether AI can help. Use free tools. Play
                with ChatGPT. Try a no-code chatbot builder. See what sticks.
                This is your experimentation phase and it should cost you nothing
                but time.
              </p>
            </div>
            <div className="bg-card border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users size={16} className="text-accent" />
                </div>
                <h3 className="text-white font-semibold text-sm">
                  Bring in a Partner When...
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                You have validated the idea and need something custom-built,
                reliable, and scalable. Look for partners who offer{" "}
                <Link
                  href="/services/outcome-based-development"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  outcome-based pricing
                </Link>
                , have teams in your region, and can show real examples of AI
                products they have built.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final Thoughts */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Final Thoughts: Your Budget Is Not Your Barrier
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            I grew up between two worlds. In one, technology moved fast but cost
            a fortune. In the other, problems were everywhere but resources were
            scarce. AI is the bridge between those worlds.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Today, a founder in Accra has access to the same AI models as a
            founder in Austin. The playing field has never been more level. The
            difference is not money &mdash; it is mindset.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            An AI strategy on a lean budget is not about cutting corners. It is
            about being ruthlessly focused on the problems that matter, the tools
            that work, and the partners who deliver. It is about starting before
            you feel ready and learning as you go.
          </p>
          <p className="text-white font-semibold leading-relaxed">
            If I could give you just one piece of advice, it would be this: stop
            planning and start building. The best AI strategy is the one that
            ships.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need Help Building Your AI Strategy?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            AdmireTech helps startups in Africa, India, and beyond go from idea
            to AI-powered product &mdash; fast and on budget. We offer
            outcome-based development so you only pay for results.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free AI Consultation
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

        {/* Author Bio */}
        <motion.div
          {...fade()}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="flex items-start gap-4">
            <img
              src="/images/team/peter-king.webp"
              alt="Peter King, CEO and CTO of AdmireTech"
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <h3 className="text-white font-semibold mb-1">
                About the Author
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-medium">Peter King</span> is a
                British-African serial entrepreneur with over two decades of
                experience building technology businesses across the UK, West
                Africa, and India. He is a founding partner at{" "}
                <Link
                  href="/about"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  AdmireTech
                </Link>
                , an AI-powered digital agency with offices in London, Pune, and
                Lagos that helps businesses launch intelligent solutions that
                drive real growth.
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
              href="/services/outcome-based-development"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Target size={16} />
              Outcome-Based Development
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
              <Globe size={16} />
              AI in Developing Countries
            </Link>
            <Link
              href="/portfolio/mfb-ai-transformation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <TrendingUp size={16} />
              MFB AI Case Study
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
