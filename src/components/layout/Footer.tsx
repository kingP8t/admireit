"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-background-secondary border-t border-white/5">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Admire<span className="text-accent">IT</span>
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors"
                  >
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("getInTouch")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {t("london")}
              </li>
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {t("pune")}
              </li>
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {t("lagos")}
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <span
                  key={social}
                  className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-text-secondary hover:text-accent hover:bg-card/80 transition-colors cursor-pointer text-xs font-medium"
                >
                  {social[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} AdmireIT. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
