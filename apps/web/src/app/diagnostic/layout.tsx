import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Diagnostic + 7-day study plan";
const description = "Take a 10-question diagnostic. We find your weak topics and build a personalised 7-day plan with daily tasks and minutes.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/diagnostic" },
  openGraph: { title, description, url: `${SITE.url}/diagnostic`, images: [{ url: `/api/og?title=${encodeURIComponent("7-day study plan")}&subtitle=${encodeURIComponent("10 questions in. Personalised plan out.")}&tag=${encodeURIComponent("Diagnostic")}`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
