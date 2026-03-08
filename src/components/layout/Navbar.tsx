"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-white">
              Admire<span className="text-accent">IT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-secondary"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-warm transition-colors"
            >
              {t("getStarted")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-accent/10 text-accent"
                        : "text-text-secondary hover:bg-card hover:text-white"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block mx-4 mt-4 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg text-center hover:bg-accent-warm transition-colors"
                >
                  {t("getStarted")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
