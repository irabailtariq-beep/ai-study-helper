// Help in Study logo — a friendly "help bubble" with a spark.
// Brand teal bubble (#0e9f8e) + soft coral spark (#e8705c). Decorative mark + wordmark.

export function Logo({ size = 30, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path
          d="M6 15c0-5 4.4-8 11-8s11 3 11 8-4.4 8-11 8c-1.2 0-2.4-.1-3.5-.35L8.5 26l1-4.2C7.3 20.3 6 17.9 6 15z"
          fill="var(--ash-primary, #0a6357)"
        />
        <path
          d="M17 9.8l2.1 4.3 4.7.6-3.5 3.3.9 4.7-4.2-2.3-4.2 2.3.9-4.7-3.5-3.3 4.7-.6z"
          fill="#ffffff"
        />
      </svg>
      {showText && (
        <span style={{ fontWeight: 750, letterSpacing: "-0.01em", color: "var(--ash-text)" }}>
          Help in Study
        </span>
      )}
    </span>
  );
}
