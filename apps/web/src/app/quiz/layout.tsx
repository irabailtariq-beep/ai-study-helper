import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Quiz me — auto-generated practice questions";
const description = "Generate quizzes from any material: MCQ, short answer, true/false, fill-in-the-blank. Auto-graded with explanations.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/quiz" },
  openGraph: { title, description, url: `${SITE.url}/quiz`, images: [{ url: `/api/og?title=${encodeURIComponent("Quiz me")}&subtitle=${encodeURIComponent("Auto-generated practice from any material.")}&tag=${encodeURIComponent("Quiz")}`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
