"use client";

import Link from "next/link";
import { MapPin, Mail, Shield } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
              AI-powered digital agency helping businesses transform with intelligent solutions.
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
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Addresses */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get in Touch
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

        {/* ISO Certifications */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-5">
              {[
                { standard: "27701", label: "Privacy Information Management" },
                { standard: "27001", label: "Information Security Management" },
              ].map((cert) => (
                <div key={cert.standard} className="group relative flex items-center gap-3">
                  {/* Badge */}
                  <div className="relative w-[72px] h-[72px] flex-shrink-0">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-accent/40 bg-gradient-to-b from-accent/10 to-transparent" />
                    {/* Inner circle */}
                    <div className="absolute inset-[5px] rounded-full bg-background border border-accent/30 flex flex-col items-center justify-center gap-0.5">
                      <span className="text-[8px] font-medium tracking-wider text-accent/80 uppercase">
                        Certified
                      </span>
                      {/* Globe icon */}
                      <div className="relative w-5 h-5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-full h-full text-accent"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          <path d="M4.5 5.5h15" />
                          <path d="M4.5 18.5h15" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold text-white leading-none">
                        ISO
                      </span>
                      <span className="text-[8px] font-semibold text-accent leading-none">
                        {cert.standard}
                      </span>
                    </div>
                  </div>
                  {/* Label (visible on hover / always on desktop) */}
                  <div className="hidden sm:block">
                    <p className="text-[10px] font-medium text-text-secondary/60 leading-tight max-w-[120px]">
                      {cert.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-text-secondary/50">
              <Shield size={14} className="text-accent/50" />
              <span className="text-[11px]">
                Enterprise-grade security &amp; privacy compliance
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Admire Tech Ltd. All rights reserved.
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
