"use client";
import { useEffect, useRef } from "react";

/**
 * AdSense ad slot.
 *
 * Renders nothing (a tasteful empty space, no visual clutter) until you set:
 *   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 *
 * For each placement, create an Ad Unit in AdSense → copy its slot ID,
 * pass it via `slot` prop. We respect Google AdSense's policies:
 *   - never near "click here" or fake nav
 *   - never on pages targeting under-13 (kids mode would gate this off)
 *   - max 3 ads per page
 *   - clearly labelled "Advertisement"
 */
export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}: {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const ref = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!client || !ref.current) return;
    try {
      // @ts-ignore - adsbygoogle is provided by the AdSense loader script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [client]);

  if (!client) return null;

  return (
    <div className={`my-4 ${className}`} aria-label="Advertisement">
      <div className="text-[10px] uppercase tracking-widest text-center mb-1" style={{ color: "var(--ash-muted)" }}>
        Advertisement
      </div>
      <ins
        ref={ref}
        className="adsbygoogle block"
        style={{ display: "block", ...style }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
