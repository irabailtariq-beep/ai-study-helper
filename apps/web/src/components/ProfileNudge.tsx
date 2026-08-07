"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProfile } from "@/lib/profileStore";

/**
 * Shown at the top of a tool when the visitor hasn't onboarded yet.
 *
 * Deliberately a nudge, not a gate: the tool underneath is fully usable with
 * generic defaults. Setting a board just makes the answers match their exam.
 */
export function ProfileNudge() {
  const profile = useProfile((s) => s.profile);
  const pathname = usePathname();
  if (profile) return null;

  return (
    <div
      className="rounded-xl px-4 py-3 mb-5 text-sm"
      style={{ background: "var(--ash-surface)", border: "1px solid var(--ash-border)" }}
    >
      <b>Using generic answers.</b>{" "}
      <Link
        href={`/onboarding?next=${encodeURIComponent(pathname || "/tools")}`}
        className="underline"
        style={{ color: "var(--ash-primary)" }}
      >
        Set your exam board
      </Link>{" "}
      (30 seconds) and every answer comes back in CBSE, GCSE, AP, Cambridge or WAEC style.
    </div>
  );
}
