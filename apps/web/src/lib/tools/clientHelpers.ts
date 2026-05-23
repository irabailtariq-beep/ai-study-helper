// Shared helpers for the simpler tool pages so each is short and consistent.
import type { UserProfile } from "@ash/core";

export async function explainWith(payload: {
  profile: UserProfile;
  text?: string;
  imageBase64?: string;
  pdfBase64?: string;
  interestContext?: string;
  transformIntensity?: "off" | "light" | "heavy" | "full";
  answerLength?: "short" | "long";
}) {
  const res = await fetch("/api/explain", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Request failed");
  return data as { explanation: string; keyPoints: string[]; followUps: string[]; disclaimer: string };
}

export function ifNoProfileMessage(profile: any): string | null {
  if (!profile) return "Please complete onboarding first to use this tool.";
  return null;
}
