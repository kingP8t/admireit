"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Mail,
  Calendar,
  Building2,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CalBookingButton } from "@/components/CalBookingButton";

const offices = [
  {
    city: "London",
    flag: "🇬🇧",
    label: "HQ — United Kingdom",
    lines: [
      "Admire Tech Ltd",
      "167-169 Great Portland Street",
      "5th Floor",
      "London, England W1W 5PF",
    ],
  },
  {
    city: "Pune",
    flag: "🇮🇳",
    label: "AI & ML Hub — India",
    lines: [
      "Admire Tech",
      "4th Floor, Prabha vee Tech Park",
      "Baner Rd, Pune",
      "Maharashtra 411045",
    ],
  },
  {
    city: "Lagos",
    flag: "🇳🇬",
    label: "Engineering & Ops — Nigeria",
    lines: [
      "Admire Tech",
      "10 Hughes Ave",
      "Yaba, Lagos",
      "Nigeria",
    ],
  },
];

export function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-text-secondary text-lg mb-4">
                Tell us about your project and we&apos;ll get back to you within 24 hours
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Whether you have a clear project brief or just an idea you want to explore, we&apos;re here to help. Most clients start with a free 30-minute strategy call where we assess your needs and outline a practical path forward. No sales pressure — just honest advice from engineers who build AI systems every day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm text-text-secondary mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-text-secondary mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="custom-dev">Custom Development</option>
                      <option value="ai-chatbot">AI Chatbot</option>
                      <option value="consulting">AI Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-text-secondary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! We&apos;ll be in touch soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Email & Company Reg */}
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-accent" />
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@admireit.co"
                    className="flex items-center gap-3 text-accent hover:text-accent-warm transition-colors text-sm font-medium"
                  >
                    hello@admireit.co
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <Building2 size={16} className="text-text-secondary mt-0.5 shrink-0" />
                    <div className="text-text-secondary text-xs leading-relaxed">
                      <p className="font-medium text-white/70">Admire Tech Ltd</p>
                      <p>Company Reg: 09582981</p>
                      <p>Registered in England & Wales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Addresses */}
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
                  <Globe2 size={18} className="text-accent" />
                  Our Offices
                </h3>
                <div className="space-y-5">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">
                          {office.flag} {office.city}{" "}
                          <span className="text-text-secondary font-normal text-xs">
                            — {office.label}
                          </span>
                        </p>
                        <div className="text-text-secondary text-xs mt-1 leading-relaxed">
                          {office.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book a Call CTA */}
              <div className="glass-card p-6 border border-accent/20 bg-accent/[0.04]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Calendar size={20} className="text-accent" />
                  </div>
                  <h3 className="text-white font-semibold">
                    Book a Free Consultation
                  </h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Schedule a 30-minute call to discuss how AI can accelerate
                  your business. No commitment required.
                </p>
                <CalBookingButton className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold text-sm rounded-lg hover:bg-accent-warm transition-colors">
                  Book a Call
                  <Calendar size={14} />
                </CalBookingButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
