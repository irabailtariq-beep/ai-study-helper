import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { examPagesByBoard, findExamPage } from "@/content/examPages";
import { ExamPageView } from "@/components/ExamPageView";

const BOARD = "cambridge" as const;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return examPagesByBoard(BOARD).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findExamPage(BOARD, slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/${BOARD}/${slug}` },
    openGraph: {
      title: p.metaTitle, description: p.metaDescription, url: `${SITE.url}/${BOARD}/${slug}`,
      images: [{ url: `/api/og?title=${encodeURIComponent(p.h1)}&tag=${encodeURIComponent(BOARD.toUpperCase())}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = findExamPage(BOARD, slug);
  if (!p) notFound();
  return <ExamPageView page={p} />;
}
