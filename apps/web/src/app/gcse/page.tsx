import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { BOARD_HUBS } from "@/content/boardHubs";
import { BoardHub } from "@/components/BoardHub";

const cfg = BOARD_HUBS.find((h) => h.board === "gcse")!;

export const metadata: Metadata = {
  title: cfg.title,
  description: cfg.description,
  alternates: { canonical: "/gcse" },
  openGraph: {
    title: cfg.title, description: cfg.description, url: `${SITE.url}/gcse`,
    images: [{ url: `/api/og?title=${encodeURIComponent(cfg.h1)}&tag=${encodeURIComponent(cfg.label)}`, width: 1200, height: 630 }],
  },
};

export default function Page() { return <BoardHub cfg={cfg} />; }
