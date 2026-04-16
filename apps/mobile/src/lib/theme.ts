import { useMemo } from "react";
import { themeForAge } from "@ash/core";
import { useProfile } from "./profile";

export function useAshTheme() {
  const age = useProfile((s) => s.profile?.age ?? 16);
  return useMemo(() => themeForAge(age), [age]);
}
