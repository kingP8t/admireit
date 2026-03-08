"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

const placeholderPosts = [
  {
    title: "How AI Chatbots Are Revolutionising Customer Support in 2024",
    excerpt: "Discover how businesses are using AI-powered chatbots to improve response times and customer satisfaction.",
    slug: "ai-chatbots-customer-support",
    date: "2024-03-15",
    category: "AI",
  },
  {
    title: "The Complete Guide to AI Automation for Small Businesses",
    excerpt: "A practical guide to implementing AI automation without breaking the bank.",
    slug: "ai-automation-small-business",
    date: "2024-03-10",
    category: "Automation",
  },
  {
    title: "Why Every Business Needs an AI Strategy in 2024",
    excerpt: "From startups to enterprises, an AI strategy is no longer optional. Here's how to build one.",
    slug: "ai-strategy-2024",
    date: "2024-03-05",
    category: "Business",
  },
  {
    title: "Building Scalable AI Applications with Next.js and Python",
    excerpt: "A developer's guide to building production-ready AI applications with modern web technologies.",
    slug: "scalable-ai-nextjs-python",
    date: "2024-02-28",
    category: "Development",
  },
  {
    title: "The Ethics of AI in Business: What You Need to Know",
    excerpt: "Navigating the ethical challenges of AI deployment in your organisation.",
    slug: "ai-ethics-business",
    date: "2024-02-20",
    category: "AI",
  },
  {
    title: "5 Ways AI is Transforming the African Tech Ecosystem",
    excerpt: "How AI startups and agencies are driving innovation across Africa.",
    slug: "ai-african-tech-ecosystem",
    date: "2024-02-15",
    category: "Business",
  },
];

export function BlogContent() {
  const t = useTranslations("blog");

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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="w-full h-48 rounded-lg bg-background-secondary mb-4" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium">
                      {post.category}
                    </span>
                    <span className="text-text-secondary text-xs">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-warm transition-colors group"
                  >
                    {t("readMore")}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
