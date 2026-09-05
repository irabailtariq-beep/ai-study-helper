import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";

export const runtime = "edge";

// Flood guard. Every DISTINCT query string is a CDN cache MISS and therefore a
// fresh Satori render (~0.2-0.4s of Active CPU each), and Hobby only includes
// 4 CPU-hours a month across every function on the project — including all the
// AI tool routes. Unthrottled, one script exhausts that in under half an hour
// and Vercel then pauses functions for up to 30 days.
// This counter is per-isolate and best-effort, the same honest caveat as the
// AI routes; the real enforcement is the Vercel WAF rate-limit rule on /api/og
// (free on Hobby, 1 rule per project). Legitimate callers are crawlers fetching
// one card per page, so 60/min/IP is generous.
const OG_RENDERS_PER_MINUTE = 60;

// Generate a 1200×630 OG image dynamically.
// Satori (the engine behind next/og) only supports a subset of CSS — keep it flat.
// Usage: /api/og?title=Math%20Solver&subtitle=Step-by-step%20solutions&tag=Math
export async function GET(req: NextRequest) {
  if (!checkRateLimit(`og:${keyFromRequest(req)}`, OG_RENDERS_PER_MINUTE, 60_000).allowed) {
    // no-store is deliberate: a cached 429 would be served from the CDN to
    // everyone who asks for that URL, including crawlers, for a whole minute.
    return new Response(null, {
      status: 429,
      headers: { "cache-control": "no-store", "retry-after": "60" },
    });
  }

  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "AI Study Helper").slice(0, 100);
  const subtitle = (searchParams.get("subtitle") ?? "Snap it. Understand it. Ace it.").slice(0, 140);
  const tag = (searchParams.get("tag") ?? "Free AI tutor").slice(0, 32);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1512 0%, #0a2a24 60%, #0b1a17 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo row — open book with sparkles, in brand gradient tile */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #0a6357, #0e9f8e, #14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 18,
              position: "relative",
            }}
          >
            {/* book left page */}
            <div style={{
              position: "absolute", left: 12, top: 28, width: 24, height: 30,
              background: "white",
              clipPath: "polygon(0 12%, 100% 0%, 100% 100%, 0% 88%)",
            }}/>
            {/* book right page */}
            <div style={{
              position: "absolute", right: 12, top: 28, width: 24, height: 30,
              background: "white",
              clipPath: "polygon(0 0%, 100% 12%, 100% 88%, 0% 100%)",
            }}/>
            {/* spine */}
            <div style={{
              position: "absolute", left: 35, top: 30, width: 2, height: 26,
              background: "rgba(14,159,142,0.6)",
            }}/>
            {/* sparkle big */}
            <div style={{
              position: "absolute", left: 30, top: 8, width: 12, height: 12,
              background: "white",
              clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
            }}/>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: "white", lineHeight: 1 }}>Help in Study</div>
            <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginTop: 6, letterSpacing: "0.15em", textTransform: "uppercase" }}>Free AI study helper</div>
          </div>
        </div>

        {/* Tag pill */}
        <div
          style={{
            marginTop: 60,
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 20px",
            borderRadius: 999,
            background: "rgba(14,159,142,0.30)",
            border: "1px solid rgba(20,184,166,0.55)",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#a7e8de",
          }}
        >
          {tag}
        </div>

        {/* Title (solid white — Satori doesn't render gradient text reliably) */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "white",
            maxWidth: "92%",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.85)",
            maxWidth: "85%",
          }}
        >
          {subtitle}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex" }}>Free forever &nbsp;-&nbsp; 5 exam boards &nbsp;-&nbsp; No ads</div>
          <div style={{ display: "flex" }}>helpinstudy.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
