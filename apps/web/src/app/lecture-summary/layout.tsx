import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { ToolPageContent } from "@/components/ToolPageContent";

const title = "Lecture summary — turn any lesson into notes";
const description = "Paste a lecture, transcript or long notes and get clean revision notes back free: key points, definitions and what is worth memorising.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/lecture-summary" },
  openGraph: {
    title, description, url: `${SITE.url}/lecture-summary`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Lecture summary")}&subtitle=${encodeURIComponent("Any lesson, turned into revision notes.")}&tag=${encodeURIComponent("Summarise")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent slug="lecture-summary" />
    </>
  );
}
