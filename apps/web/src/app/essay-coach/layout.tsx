import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Essay coach — plan, draft and improve your essay";
const description = "Free AI essay coach for students. Plan your structure, draft paragraph by paragraph, and get honest feedback against what examiners actually reward — without it writing the essay for you.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/essay-coach" },
  openGraph: {
    title, description, url: `${SITE.url}/essay-coach`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Essay coach")}&subtitle=${encodeURIComponent("Plan, draft, improve — paragraph by paragraph.")}&tag=${encodeURIComponent("Essay coach")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
