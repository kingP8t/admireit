export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AdmireTech",
    legalName: "Admire Tech Ltd",
    url: "https://www.admireit.co",
    logo: "https://www.admireit.co/logo.svg",
    description:
      "AI-powered digital agency helping businesses transform with intelligent solutions. Offices in London, Pune, and Lagos.",
    foundingDate: "2015",
    founder: {
      "@type": "Person",
      name: "Peter King",
      jobTitle: "CEO / CTO / Founder",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 13,
    },
    taxID: "09582981",
    sameAs: [
      "https://www.linkedin.com/company/admireitech",
      "https://twitter.com/admiretech",
      "https://github.com/admiretech",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "167-169 Great Portland Street, 5th Floor",
        addressLocality: "London",
        postalCode: "W1W 5PF",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, Prabha vee Tech Park, Baner Rd",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411045",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "10 Hughes Ave, Yaba",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@admireit.co",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  // Schema data is hardcoded (not user input), safe to serialize
  const jsonString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AdmireTech",
    url: "https://www.admireit.co",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.admireit.co/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "AdmireTech",
      url: "https://www.admireit.co",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Nigeria" },
    ],
  };

  const jsonString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const shared = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    url: "https://www.admireit.co",
    email: "hello@admireit.co",
    image: "https://www.admireit.co/logo.svg",
    description:
      "AI-powered digital agency helping businesses transform with intelligent solutions. Offices in London, Pune, and Lagos.",
    foundingDate: "2015",
    sameAs: ["https://www.linkedin.com/company/admireitech"],
    parentOrganization: {
      "@type": "Organization",
      name: "AdmireTech",
      url: "https://www.admireit.co",
    },
  };

  const london = {
    ...shared,
    name: "AdmireTech — London",
    address: {
      "@type": "PostalAddress",
      streetAddress: "167-169 Great Portland Street, 5th Floor",
      addressLocality: "London",
      postalCode: "W1W 5PF",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5194,
      longitude: -0.143,
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const pune = {
    ...shared,
    name: "AdmireTech — Pune",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, Prabha vee Tech Park, Baner Rd",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411045",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5596,
      longitude: 73.7868,
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  const lagos = {
    ...shared,
    name: "AdmireTech — Lagos",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Hughes Ave, Yaba",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.5095,
      longitude: 3.3711,
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(london) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pune) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lagos) }}
      />
    </>
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  // Schema data is constructed from hardcoded breadcrumb items, safe to serialize
  const jsonString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
