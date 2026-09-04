// Centralised site config so SEO + structured data stays consistent.
export const SITE = {
  name: "Help in Study",
  shortName: "HelpInStudy",
  tagline: "Your free AI study helper",
  description:
    "Free AI study help for any subject. Snap a photo or paste your homework and get it explained step by step, in your exam board's style. No signup.",
  // Default URL — overridden in metadata via NEXT_PUBLIC_SITE_URL once you connect a domain.
  // .trim() guards against env var values that include trailing whitespace / newlines
  // (which `echo "..." | vercel env add` would otherwise inject and break canonicals + sitemap).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://helpinstudy.com").trim(),
  twitter: "@helpinstudy",
  locale: "en_US",
  // Add languages once you ship localisation
  languages: ["en"],
  // Used in JSON-LD organization schema
  founder: "Rabail",
  logo: "/icons/icon-512.png",
} as const;

// JSON-LD: Educational Organization + WebSite + SearchAction
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    description: SITE.description,
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    // What Google may show instead of the domain in results. Now that titles no
    // longer carry a brand suffix, this markup is the only thing naming us.
    alternateName: ["HelpInStudy", "helpinstudy.com"],
    url: SITE.url,
    description: SITE.description,
    // NOTE: the sitelinks search box (potentialAction/SearchAction) was retired by
    // Google — the markup produces nothing, so it is deliberately not emitted.
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    applicationCategory: "EducationalApplication",
    // Web only. There is no iOS or Android app — claiming them in schema told
    // Google about products that do not exist.
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: undefined,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleJsonLd(args: { title: string; description: string; slug: string; published: string; updated?: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    // Google wants Article images at least 1200px wide. The old default was the
    // 512x512 app icon, so every post shipped an image Google would not use.
    // /api/og renders a real 1200x630 card from the title.
    image: args.image ?? `${SITE.url}/api/og?title=${encodeURIComponent(args.title)}&tag=${encodeURIComponent("Blog")}`,
    datePublished: args.published,
    dateModified: args.updated ?? args.published,
    author: { "@type": "Person", name: "Rabail", url: `${SITE.url}/about`, description: "Student and founder of Help in Study" },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${args.slug}` },
  };
}

export function courseJsonLd(args: { name: string; description: string; provider?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: args.name,
    description: args.description,
    provider: { "@type": "Organization", name: args.provider ?? SITE.name },
  };
}

/**
 * BreadcrumbList JSON-LD — gives Google the breadcrumb path so it can render
 * breadcrumb rich snippets in search results instead of the bare URL.
 * Pass an array of { name, path } in left-to-right order (excluding the home item;
 * we add it automatically).
 */
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  const items = [
    { name: "Home", path: "/" },
    ...crumbs,
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

/**
 * Stringify JSON-LD with `<` escaped, so a stray "</script>" inside any
 * content field can never break out of the script tag.
 */
export function jsonLdSafe(o: unknown): string {
  return JSON.stringify(o).replace(/</g, "\\u003c");
}
