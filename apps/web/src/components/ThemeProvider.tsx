"use client";
import { useEffect } from "react";
import { themeForAge, themeToCSSVars } from "@ash/core";
import { useProfile } from "@/lib/profileStore";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const profile = useProfile((s) => s.profile);
  const age = profile?.age ?? 16;

  useEffect(() => {
    const theme = themeForAge(age);
    const vars = themeToCSSVars(theme);
    const root = document.documentElement;
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  }, [age]);

  return <>{children}</>;
}
