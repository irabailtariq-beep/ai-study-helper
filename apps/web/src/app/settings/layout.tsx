import type { Metadata } from "next";

// Settings screen — app UI, not a search landing page.
//
// This file was missing, so the page inherited the root metadata: it told Google
// its title was the homepage's and pointed its canonical at helpinstudy.com,
// which invites Google to treat the two as the same page. Its three sibling app
// screens (Log in, Onboarding, Progress) all had a layout; this one did not.
export const metadata: Metadata = {
  title: "Settings",
  description: "Change your country, exam board, grade and answer style, or export and delete your Help in Study data.",
  alternates: { canonical: "/settings" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
