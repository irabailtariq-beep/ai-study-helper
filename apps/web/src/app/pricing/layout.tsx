import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Pricing — Free, Pro, Family · AI Study Helper";
const description = "Free forever for the basics. Pro $4.99/mo: no ads, unlimited usage, concept maps, essay coach. Family $9.99/mo: 5 student profiles + parent dashboard.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title, description, url: `${SITE.url}/pricing`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Simple pricing")}&subtitle=${encodeURIComponent("Free forever. Pro $4.99/mo. Family $9.99/mo.")}&tag=${encodeURIComponent("Pricing")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
