"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin, Mail } from "lucide-react";

const quickLinks = [
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

const offices = [
  {
    flag: "\u{1F1EC}\u{1F1E7}",
    line1: "167-169 Great Portland Street, 5th Floor",
    line2: "London W1W 5PF, England",
  },
  {
    flag: "\u{1F1EE}\u{1F1F3}",
    line1: "4th Floor, Prabha vee Tech Park, Baner Rd",
    line2: "Pune, Maharashtra 411045",
  },
  {
    flag: "\u{1F1F3}\u{1F1EC}",
    line1: "10 Hughes Ave, Yaba",
    line2: "Lagos, Nigeria",
  },
];

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
              Admire<span className="text-accent">Tech</span>
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">
              {t("description")}
            </p>
            <a
              href="mailto:hello@admireit.co"
              className="mt-3 inline-flex items-center gap-2 text-accent text-sm hover:text-accent-warm transition-colors"
            >
              <Mail size={14} />
              hello@admireit.co
            </a>
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

          {/* Office Addresses */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("getInTouch")}
            </h3>
            <ul className="space-y-4">
              {offices.map((office) => (
                <li
                  key={office.flag}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <div className="leading-relaxed">
                    <span className="mr-1">{office.flag}</span>
                    {office.line1}
                    <br />
                    {office.line2}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", letter: "Li", url: "https://www.linkedin.com/company/admireitech" },
                { name: "Twitter", letter: "X", url: "https://twitter.com/admiretech" },
                { name: "GitHub", letter: "Gh", url: "https://github.com/admiretech" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-text-secondary hover:text-accent hover:bg-card/80 transition-colors text-xs font-medium"
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Admire Tech Ltd. {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-text-secondary/60 text-xs hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-secondary/60 text-xs hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <p className="text-text-secondary/60 text-xs">
              Company Reg: 09582981 &middot; Registered in England &amp; Wales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
