import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Study Helper",
    short_name: "Study Helper",
    description: "Your personal AI study tutor — explain, quiz, remember.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F8FC",
    theme_color: "#4F46E5",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    categories: ["education", "productivity"],
  };
}
