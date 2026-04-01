"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "12+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

export function Stats() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Trusted by Businesses Worldwide
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 text-text-secondary text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
