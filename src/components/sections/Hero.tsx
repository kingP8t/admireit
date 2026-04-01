"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-warm/5 rounded-full blur-3xl" />

      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-accent text-sm font-medium">
              AI-Powered Digital Agency
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            We Build <span className="gradient-text">Intelligent</span> Solutions That Drive Growth
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
            From AI automation to custom development, we help businesses across London, Pune, and Lagos transform with cutting-edge technology.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors group"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:bg-card transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
