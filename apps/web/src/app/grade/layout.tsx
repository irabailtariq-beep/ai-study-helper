import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Mark my answer — free AI exam marking";
const description = "Paste any exam answer and get it marked against the mark scheme. Free AI marking for GCSE, CBSE, AP, Cambridge and WAEC — see the points you hit and the ones you missed.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/grade" },
  openGraph: {
    title, description, url: `${SITE.url}/grade`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Mark my answer")}&subtitle=${encodeURIComponent("Mark-scheme feedback on any answer, free.")}&tag=${encodeURIComponent("Grade")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
