import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ash: {
          bg: "var(--ash-bg)",
          surface: "var(--ash-surface)",
          primary: "var(--ash-primary)",
          accent: "var(--ash-accent)",
          text: "var(--ash-text)",
          muted: "var(--ash-muted)",
        },
      },
      borderRadius: {
        ash: "var(--ash-radius)",
      },
    },
  },
  plugins: [],
} satisfies Config;
