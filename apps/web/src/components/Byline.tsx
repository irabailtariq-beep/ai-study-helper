// Author byline — an E-E-A-T signal Google rewards. Honest framing: a student
// who writes and checks these study guides, linking to the About page.

export function Byline() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginTop: 12,
        fontSize: 13.5,
        color: "var(--ash-muted)",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "var(--ash-primary)",
          color: "#fff",
          fontSize: 11,
          fontWeight: 800,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        R
      </span>
      <span>
        Written &amp; checked by{" "}
        <a href="/about" style={{ color: "var(--ash-text)", fontWeight: 600, textDecoration: "underline" }}>
          Rabail
        </a>
        , a student.
      </span>
    </div>
  );
}
