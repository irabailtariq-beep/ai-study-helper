import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Generate a 1200×630 OG image dynamically.
// Satori (the engine behind next/og) only supports a subset of CSS — keep it flat.
// Usage: /api/og?title=Math%20Solver&subtitle=Step-by-step%20solutions&tag=Math
export async function GET(req: NextRequest) {
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
          background: "linear-gradient(135deg, #0b0f19 0%, #1a1530 60%, #0a1a2a 100%)",
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
              background: "linear-gradient(135deg, #4F46E5, #7c3aed, #06b6d4)",
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
              background: "rgba(79,70,229,0.6)",
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
            background: "rgba(124,58,237,0.30)",
            border: "1px solid rgba(167,139,250,0.55)",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#c7d2fe",
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
          <div style={{ display: "flex" }}>Free forever &nbsp;-&nbsp; 80+ curricula &nbsp;-&nbsp; No tracking</div>
          <div style={{ display: "flex" }}>ai-study-helper</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
