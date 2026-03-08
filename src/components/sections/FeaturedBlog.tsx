"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Placeholder data until Sanity is connected
const placeholderPosts = [
  {
    title: "How AI Chatbots Are Revolutionising Customer Support in 2024",
    excerpt:
      "Discover how businesses are using AI-powered chatbots to improve response times and customer satisfaction.",
    slug: "ai-chatbots-customer-support",
    date: "2024-03-15",
  },
  {
    title: "The Complete Guide to AI Automation for Small Businesses",
    excerpt:
      "A practical guide to implementing AI automation without breaking the bank.",
    slug: "ai-automation-small-business",
    date: "2024-03-10",
  },
  {
    title: "Why Every Business Needs an AI Strategy in 2024",
    excerpt:
      "From startups to enterprises, an AI strategy is no longer optional. Here's how to build one.",
    slug: "ai-strategy-2024",
    date: "2024-03-05",
  },
];

export function FeaturedBlog() {
  const t = useTranslations("blog");

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-wide mx-auto">
        <SectionHeader title={t("latestTitle")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Placeholder image area */}
                <div className="w-full h-48 rounded-lg bg-background-secondary mb-4" />
                <p className="text-text-secondary text-xs mb-2">{post.date}</p>
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
  );
}
