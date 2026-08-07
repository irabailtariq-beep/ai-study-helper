import type { Metadata } from "next";

// App UI, not a search landing page. Without its own metadata this inherited the
// root canonical of "/" and told Google it was a duplicate of the homepage.
export const metadata: Metadata = {
  title: "Set up your profile",
  description: "Tell Help in Study your country, grade and exam board so every answer comes back in your board's style.",
  alternates: { canonical: "/onboarding" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
