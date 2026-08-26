import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { ToolPageContent } from "@/components/ToolPageContent";

const title = "Free AI Marker for GCSE & IGCSE Answers";
const description = "Free AI exam marker: paste any GCSE, IGCSE, CBSE, AP or WAEC answer and get mark-scheme-style feedback — the points you hit and the ones you missed. No signup.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/grade" },
  openGraph: {
    title, description, url: `${SITE.url}/grade`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Mark my answer")}&subtitle=${encodeURIComponent("Mark-scheme feedback on any answer, free.")}&tag=${encodeURIComponent("Grade")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent slug="grade" />
    </>
  );
}
