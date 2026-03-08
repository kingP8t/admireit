import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AdmireIT | AI-Powered Digital Agency",
    template: "%s | AdmireIT",
  },
  description:
    "We build intelligent solutions that drive growth. AI automation, custom development, and digital transformation for businesses in London, Pune, and Lagos.",
  keywords: [
    "AI agency",
    "artificial intelligence",
    "digital transformation",
    "AI automation",
    "custom development",
    "London",
    "Pune",
    "Lagos",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "AdmireIT",
    title: "AdmireIT | AI-Powered Digital Agency",
    description:
      "We build intelligent solutions that drive growth. AI automation, custom development, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdmireIT | AI-Powered Digital Agency",
    description: "We build intelligent solutions that drive growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
