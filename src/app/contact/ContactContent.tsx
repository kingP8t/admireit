"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactContent() {
  const t = useTranslations("contact");
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
                {t("title")}
              </h1>
              <p className="text-text-secondary text-lg mb-8">
                {t("subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-2">
                      {t("name")}
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
                      {t("email")}
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
                      {t("company")}
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
                      {t("service")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-automation">{t("services.aiAutomation")}</option>
                      <option value="custom-dev">{t("services.customDev")}</option>
                      <option value="ai-chatbot">{t("services.aiChatbot")}</option>
                      <option value="consulting">{t("services.consulting")}</option>
                      <option value="other">{t("services.other")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-text-secondary mb-2">
                    {t("message")}
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
                    t("sending")
                  ) : (
                    <>
                      {t("submit")} <Send size={16} />
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
                    {t("success")}
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    {t("error")}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {[
                    { city: "London", country: "United Kingdom", flag: "🇬🇧" },
                    { city: "Pune", country: "India", flag: "🇮🇳" },
                    { city: "Lagos", country: "Nigeria", flag: "🇳🇬" },
                  ].map((office) => (
                    <div key={office.city} className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">
                          {office.flag} {office.city}
                        </p>
                        <p className="text-text-secondary text-xs">
                          {office.country}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent" />
                    <span className="text-text-secondary text-sm">
                      hello@admireit.co
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent" />
                    <span className="text-text-secondary text-sm">
                      Available via WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-2">
                  Response Time
                </h3>
                <p className="text-text-secondary text-sm">
                  We typically respond within 24 hours. For urgent enquiries,
                  reach us on WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
