"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { UserProfile } from "@ash/core";

type Store = {
  profile: UserProfile | null;
  setProfile: (p: UserProfile | null) => void;
};

export const useProfile = create<Store>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
    }),
    {
      name: "ash-profile",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : (undefined as any))),
    }
  )
);

/**
 * Profile used when a visitor has not completed onboarding.
 *
 * Every tool must work immediately for someone arriving cold from a search
 * result — gating them behind onboarding turned all ten tool pages into dead
 * ends. Answers are simply generic until the student sets their real board,
 * which we nudge them to do with <ProfileNudge /> rather than blocking them.
 */
export const GUEST_PROFILE: UserProfile = {
  country: "GB",
  age: 16,
  grade: "Year 11",
  curriculum: "uk-gcse-aqa",
};

/** The student's real profile once onboarded, otherwise the guest defaults. */
export function useEffectiveProfile(): UserProfile {
  return useProfile((s) => s.profile) ?? GUEST_PROFILE;
}
