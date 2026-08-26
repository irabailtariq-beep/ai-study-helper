import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { TOOL_LANDINGS, findToolLanding } from "@/content/toolLandings";
import { ToolLandingView } from "@/components/ToolLandingView";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TOOL_LANDINGS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findToolLanding(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/tools/${slug}` },
    openGraph: {
      title: p.metaTitle, description: p.metaDescription, url: `${SITE.url}/tools/${slug}`,
      images: [{ url: `/api/og?title=${encodeURIComponent(p.h1)}&tag=${encodeURIComponent("Free tool")}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = findToolLanding(slug);
  if (!p) notFound();
  return <ToolLandingView page={p} />;
}
