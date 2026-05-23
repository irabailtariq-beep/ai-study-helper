import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Math Solver — step-by-step solutions, photo or text";
const description = "Snap a math problem or paste it. Get every line of working, the named method, common pitfalls, and a way to check your answer. Free for students of all ages.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/math-solver" },
  keywords: ["math solver","step by step math","photo math","photomath alternative","quadratic equation solver","trigonometry solver"],
  openGraph: {
    title, description, url: `${SITE.url}/math-solver`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Step-by-step math")}&subtitle=${encodeURIComponent("Snap a problem. Get every line of working.")}&tag=${encodeURIComponent("Math solver")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
