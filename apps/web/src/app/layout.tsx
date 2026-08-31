import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE, organizationJsonLd, websiteJsonLd, softwareJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // The homepage inherits this default (it is a client component). Lead with
    // what students actually type — "study help" — not the brand.
    default: "Free AI Study Help — CBSE, GCSE, AP, Cambridge, WAEC",
    // No brand suffix. Google truncates titles at roughly 600px (~55-60 chars)
    // and shows the site name separately in results anyway, so appending
    // " · Help in Study" cost 16 characters on all 232 pages and pushed 145 of
    // them past the cut — the keywords students search got dropped while the
    // brand nobody searches for yet survived. Pages that want the brand can
    // put it in their own title.
    template: "%s",
  },
  description: SITE.description,
  applicationName: SITE.name,
  // Note: <meta name="keywords"> is ignored by Google since 2009. Removed to keep
  // the head clean and avoid looking spammy. Per-page metadata carries SEO weight.
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.founder,
  appleWebApp: { capable: true, title: SITE.shortName, statusBarStyle: "default" },
  // Advertise the RSS feed so readers and feed crawlers can actually find it —
  // /feed.xml existed but nothing linked to it.
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: `${SITE.name} — blog` }] },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/icons/icon.svg", color: "#0a6357" }],
  },
  other: {
    "msapplication-TileColor": "#0a6357",
    "msapplication-config": "/browserconfig.xml",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Free AI Study Help — CBSE, GCSE, AP, Cambridge, WAEC",
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
    images: [{
      url: `/api/og?title=${encodeURIComponent(SITE.name)}&subtitle=${encodeURIComponent(SITE.tagline)}`,
      width: 1200,
      height: 630,
      alt: SITE.name,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [`/api/og?title=${encodeURIComponent(SITE.name)}&subtitle=${encodeURIComponent(SITE.tagline)}`],
    creator: SITE.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    // Drop your codes from Google Search Console / Bing Webmaster Tools here once you sign up.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#0a6357",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd()) }} />

        {/* Google AdSense — only loads when the publisher ID is set in env. */}
        {adsenseClient && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <ThemeProvider>
          <SiteNav />
          <div className="min-h-[calc(100vh-220px)]">{children}</div>
          <SiteFooter />
        </ThemeProvider>

        {/* Vercel Web Analytics: cookieless (visitors are identified by a hash of
            the request, discarded after 24h), so it needs no consent banner, and
            the Hobby tier covers 50,000 events a month — far beyond our traffic.
            This is the number that answers "how many people visited". */}
        <Analytics />

        {/* Google Analytics 4 — only loads when GA ID is set */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
