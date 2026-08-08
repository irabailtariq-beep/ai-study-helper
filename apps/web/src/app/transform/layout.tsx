import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { ToolPageContent } from "@/components/ToolPageContent";

const title = "Make it about your interests — AI tutor that reframes any topic";
const description =
  "Pick an interest, drop in a topic. Electromagnetic waves through cooking. Trigonometry through cricket. Photosynthesis through Minecraft. Free.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/transform" },
  openGraph: {
    title, description, url: `${SITE.url}/transform`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Make it about your interests")}&subtitle=${encodeURIComponent("Reframe any topic through what you love")}&tag=${encodeURIComponent("Headline feature")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent slug="transform" />
    </>
  );
}
