import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.admireit.co";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const servicePages = [
    "/services/ai-chatbots",
    "/services/ai-automation",
    "/services/custom-development",
    "/services/ai-consulting",
    "/services/outcome-based-development",
    "/services/fractional-ai-developers",
  ];

  const blogPages = [
    "/blog/ai-chatbots-customer-support",
    "/blog/ai-automation-small-business",
    "/blog/ai-strategy-2026",
    "/blog/scalable-ai-nextjs-python",
    "/blog/ai-ethics-business",
    "/blog/ai-transforming-african-tech-ecosystem",
    "/blog/ai-in-developing-countries-africa-south-asia",
    "/blog/ai-strategy-lean-budget-startups-emerging-markets",
    "/blog/ai-chatbots-solving-customer-support-gap",
    "/blog/mvp-to-scale-nigerian-startups-ai-automation",
    "/blog/digital-leapfrogging-skip-legacy-tech-ai",
    "/blog/ai-adoption-nigeria-opportunities-challenges",
  ];

  const portfolioPages = [
    "/portfolio/mfb-ai-transformation",
    "/portfolio/easybuy-vip-loan",
    "/portfolio/llm-enterprise-chatbot",
    "/portfolio/warehouse-management-pwa",
    "/portfolio/fractional-ai-developer",
    "/portfolio/rural-energy-ai-platform",
    "/portfolio/land-registry-ai-modernisation",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries, ...portfolioEntries];
}
