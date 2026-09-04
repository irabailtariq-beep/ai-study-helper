"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { UserProfile } from "@ash/core";

type Store = {
  profile: UserProfile | null;
  setProfile: (p: UserProfile | null) => void;
  /**
   * False until the persisted profile has been read back from localStorage.
   *
   * Without this, a screen that seeds form state from `profile` on first render
   * reads null — rehydration happens after mount — and then saves those empty
   * defaults over the real profile. That is exactly how "Change" in Settings was
   * wiping a student's name, subjects, weak topics and interests.
   */
  hydrated: boolean;
};

export const useProfile = create<Store>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      hydrated: false,
    }),
    {
      name: "ash-profile",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : (undefined as any))),
      onRehydrateStorage: () => (state) => {
        // Runs once the stored value has been applied (or failed to load).
        useProfile.setState({ hydrated: true });
        void state;
      },
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
  // Marks these as placeholders. The prompts read this and deliberately avoid
  // asserting a country/board, so a CBSE or WAEC visitor who hasn't onboarded
  // doesn't get answers written in UK GCSE conventions.
  guest: true,
};

/** The student's real profile once onboarded, otherwise the guest defaults. */
export function useEffectiveProfile(): UserProfile {
  return useProfile((s) => s.profile) ?? GUEST_PROFILE;
}
