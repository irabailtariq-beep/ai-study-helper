import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Help in Study",
    short_name: "Help Study",
    description: "Free AI study help — explain, quiz, flashcards, math solver, and board-specific exam prep for CBSE, GCSE, AP, Cambridge & WAEC.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F8FC",
    theme_color: "#0a6357",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/icons/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "maskable" },
    ],
    categories: ["education", "productivity"],
  };
}
