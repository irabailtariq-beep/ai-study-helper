import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

const title = "Explain anything — photo, PDF, or paste";
const description = "Free AI tutor. Upload a photo of a textbook page or a PDF, paste a question, and get an explanation in your level and your board's style.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/explain" },
  openGraph: {
    title, description, url: `${SITE.url}/explain`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Explain anything")}&subtitle=${encodeURIComponent("Photo, PDF, or paste — explained at your level.")}&tag=${encodeURIComponent("Explain")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
