"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

export function CTA() {

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
              Let&apos;s discuss how AI can accelerate your growth. Book a free consultation today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
                Book a Call
                <Calendar size={18} />
              </CalBookingButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
              >
                Send a Message
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
