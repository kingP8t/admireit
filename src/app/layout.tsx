import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { CookieConsent } from "@/components/CookieConsent";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.admireit.co"),
  title: {
    default: "AdmireTech | AI-Powered Digital Agency",
    template: "%s | AdmireTech",
  },
  description:
    "We build intelligent solutions that drive growth. AI automation, custom development, and digital transformation for businesses in London, Pune, and Lagos.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "AdmireTech",
    title: "AdmireTech | AI-Powered Digital Agency",
    description:
      "We build intelligent solutions that drive growth. AI automation, custom development, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdmireTech | AI-Powered Digital Agency",
    description: "We build intelligent solutions that drive growth.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.admireit.co",
    languages: {
      "en-GB": "https://www.admireit.co",
      "x-default": "https://www.admireit.co",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EPWF6JQHYE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EPWF6JQHYE');
          `}
        </Script>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
