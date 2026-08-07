import type { Metadata } from "next";

// Personal dashboard — app UI, not a search landing page.
export const metadata: Metadata = {
  title: "Your progress",
  description: "Your study streak, active days and practice history on Help in Study.",
  alternates: { canonical: "/progress" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
