import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { ToolPageContent } from "@/components/ToolPageContent";

const title = "AI tutor chat — ask anything, free";
const description = "A free AI tutor that knows your curriculum. Ask any question, follow up until it clicks, and get answers in your board's style — GCSE, CBSE, AP, Cambridge and WAEC.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/chat" },
  openGraph: {
    title, description, url: `${SITE.url}/chat`,
    images: [{ url: `/api/og?title=${encodeURIComponent("AI tutor chat")}&subtitle=${encodeURIComponent("Ask anything. Answers in your board's style.")}&tag=${encodeURIComponent("Chat")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent slug="chat" />
    </>
  );
}
