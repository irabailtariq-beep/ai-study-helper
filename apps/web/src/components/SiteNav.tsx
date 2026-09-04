"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useProfile } from "@/lib/profileStore";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "/tools", label: "Tools" },
  { href: "/#subjects", label: "Subjects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const profile = useProfile((s) => s.profile);
  const [open, setOpen] = useState(false);
  // document.body does not exist during server rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close drawer on route change (hamburger pattern)
  useEffect(() => {
    function close() { setOpen(false); }
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        background: "rgba(255,255,255,0.78)",
        borderBottom: "1px solid var(--ash-border)",
        WebkitBackdropFilter: "saturate(180%) blur(14px)",
      }}
      aria-label="Site"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)} aria-label="Help in Study — home">
          <Logo size={34} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-5 text-sm" style={{ color: "var(--ash-muted)" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[color:var(--ash-primary)]">
              {l.label}
            </Link>
          ))}
          <Link href="/signin" className="hover:text-[color:var(--ash-primary)] font-medium">
            Log in
          </Link>
          {profile ? (
            <Link
              href="/settings"
              className="flex items-center gap-2 px-3 py-1 rounded-full"
              style={{ border: "1px solid var(--ash-border)", background: "rgba(255,255,255,0.7)" }}
              title="Your profile"
            >
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), var(--ash-brand))" }}
              >
                {(profile.displayName ?? profile.grade ?? "U").slice(0, 1).toUpperCase()}
              </span>
              <span className="text-sm font-semibold max-w-[120px] truncate" style={{ color: "var(--ash-text)" }}>
                {profile.displayName || profile.grade}
              </span>
            </Link>
          ) : (
            <Link
              href="/onboarding"
              className="px-4 py-1.5 rounded-full text-white font-semibold"
              style={{ background: "linear-gradient(135deg, var(--ash-primary), var(--ash-brand))" }}
            >
              Get started free
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ border: "1px solid var(--ash-border)", background: "white" }}
        >
          <span aria-hidden style={{ display: "inline-block", width: 18, position: "relative", height: 12 }}>
            <span style={hamburgerLine(open ? "translate(0,5px) rotate(45deg)" : "")} />
            <span style={{ ...hamburgerLine(""), top: 5, opacity: open ? 0 : 1 }} />
            <span style={hamburgerLine(open ? "translate(0,-5px) rotate(-45deg)" : "translate(0,10px)")} />
          </span>
        </button>
      </div>

      {/* Mobile drawer.
          Rendered through a portal into <body> on purpose. This <nav> uses
          backdrop-blur, and an ancestor with a backdrop-filter becomes the
          containing block for position:fixed descendants — so "fixed inset-0"
          resolved against the 63px-tall nav instead of the screen, and the
          drawer opened as a thin strip with all eight links clipped out of
          sight. Measuring the links said they were fine; the screenshot showed
          they were not. Keep this portal. */}
      {open && mounted && (createPortal((
        <div
          className="sm:hidden fixed inset-0 z-50"
          onClick={() => setOpen(false)}
          style={{ background: "rgba(15,23,42,0.4)" }}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-72 max-w-[85%] p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ background: "white", boxShadow: "var(--ash-shadow)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg"
                aria-label="Close menu"
                style={{ border: "1px solid var(--ash-border)" }}
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg font-medium"
                  style={{ color: "var(--ash-text)" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="my-3 h-px" style={{ background: "var(--ash-border)" }} />
              <Link href="/onboarding" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg">Onboarding</Link>
              <Link href="/signin" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg">Sign in</Link>
              <Link href="/settings" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg">Settings</Link>
              <Link
                href={profile ? "/transform" : "/onboarding"}
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-3 rounded-full text-white font-semibold text-center"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), var(--ash-brand))" }}
              >
                {profile ? "Open my study helper" : "Get started free"}
              </Link>
            </div>
          </div>
        </div>
      ), document.body) as React.ReactNode)}
    </nav>
  );
}

function hamburgerLine(transform: string): React.CSSProperties {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    width: 18,
    height: 2,
    background: "var(--ash-text)",
    borderRadius: 2,
    transition: "transform 200ms ease, opacity 200ms ease",
    transform,
  };
}
