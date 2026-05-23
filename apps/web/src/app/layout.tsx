import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE, organizationJsonLd, websiteJsonLd, softwareJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    // Brand + primary
    "Help in Study", "helpinstudy", "AI study helper", "AI study help", "study help AI",
    "AI homework helper", "free AI tutor", "AI study buddy", "study helper online",
    // Subject-keyword sweet spot (matches user's voice search patterns)
    "help in study math", "AI study helper math", "math help AI",
    "help in study English", "help in study calculus", "help in study physics",
    "help in study chemistry", "help in study biology", "help in study history",
    "help in study programming", "help in study coding", "help in study accounting",
    "AI math solver", "AI calculus help", "AI English helper",
    "step by step math", "photo math solver", "PDF homework helper",
    // Curricula
    "GCSE", "A Level", "IGCSE", "CBSE", "ICSE", "Matric", "FSc", "NEET", "JEE",
    "AP", "SAT", "IB", "WAEC", "NCEA", "ENEM", "STAAR",
    // Use cases
    "explain my homework", "homework help AI", "past paper practice", "exam prep AI",
    "flashcards spaced repetition", "study plan AI",
    // Audience
    "kids learning app", "study app for students", "AI tutor for kids", "AI tutor for teens",
    "free study app", "no ads study app",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.founder,
  appleWebApp: { capable: true, title: SITE.shortName, statusBarStyle: "default" },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/icons/icon.svg", color: "#4F46E5" }],
  },
  other: {
    "msapplication-TileColor": "#4F46E5",
    "msapplication-config": "/browserconfig.xml",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
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
  themeColor: "#4F46E5",
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

        {/* Google Analytics 4 — only loads when GA ID is set */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
