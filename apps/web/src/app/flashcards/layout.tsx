import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { ToolPageContent } from "@/components/ToolPageContent";

const title = "Flashcard Maker from Notes — Free (GCSE, IGCSE, AP)";
const description = "Auto-generate flashcards from any material. Built on the SM-2 algorithm so you review at the right interval — research-backed memory boost.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/flashcards" },
  openGraph: { title, description, url: `${SITE.url}/flashcards`, images: [{ url: `/api/og?title=${encodeURIComponent("Flashcards that stick")}&subtitle=${encodeURIComponent("Spaced repetition. Auto-generated.")}&tag=${encodeURIComponent("Memory")}`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent slug="flashcards" />
    </>
  );
}
