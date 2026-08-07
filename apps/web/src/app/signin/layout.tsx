import type { Metadata } from "next";

// Auth screen — app UI, not a search landing page.
export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to Help in Study to sync your profile, flashcards and progress across devices. Every tool works without an account too.",
  alternates: { canonical: "/signin" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
