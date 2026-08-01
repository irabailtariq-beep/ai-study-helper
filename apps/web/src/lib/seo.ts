// Centralised site config so SEO + structured data stays consistent.
export const SITE = {
  name: "Help in Study",
  shortName: "HelpInStudy",
  tagline: "Your free AI study helper",
  description:
    "Free AI study helper for any subject — math, English, science, history. Get help with homework, quizzes, flashcards, and exam prep. Upload a photo or PDF and our AI explains it in plain words. Built for students of every age and curriculum.",
  // Default URL — overridden in metadata via NEXT_PUBLIC_SITE_URL once you connect a domain.
  // .trim() guards against env var values that include trailing whitespace / newlines
  // (which `echo "..." | vercel env add` would otherwise inject and break canonicals + sitemap).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://helpinstudy.com").trim(),
  twitter: "@helpinstudy",
  locale: "en_US",
  // Add languages once you ship localisation
  languages: ["en"],
  // Used in JSON-LD organization schema
  founder: "Help in Study",
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
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/explain?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
    operatingSystem: "Web, iOS, Android",
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
    image: args.image ?? `${SITE.url}/icons/icon-512.png`,
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
