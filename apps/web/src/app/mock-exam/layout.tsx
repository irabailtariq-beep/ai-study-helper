import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { ToolPageContent } from "@/components/ToolPageContent";

const title = "Free GCSE Mock Exam Generator (AQA, Edexcel, OCR)";
const description = "Generate a GCSE mock exam free — AQA, Edexcel or OCR style — plus CBSE, AP, Cambridge and WAEC papers. Sit it timed, marked instantly. No signup.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/mock-exam" },
  openGraph: {
    title, description, url: `${SITE.url}/mock-exam`,
    images: [{ url: `/api/og?title=${encodeURIComponent("Mock exam generator")}&subtitle=${encodeURIComponent("A full paper in your board's style, marked.")}&tag=${encodeURIComponent("Mock exam")}`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolPageContent slug="mock-exam" />
    </>
  );
}
