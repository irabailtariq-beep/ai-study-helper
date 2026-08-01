/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ash/core", "@ash/ai-client"],
  experimental: {
    serverActions: { bodySizeLimit: "25mb" },
  },
  async redirects() {
    return [
      // Convenience: bare /security.txt → the RFC 9116 well-known location
      { source: "/security.txt", destination: "/.well-known/security.txt", permanent: true },
      // 100% free — no pricing page anymore
      { source: "/pricing", destination: "/", permanent: true },
      // Removed integrations — send any indexed copies to the surviving tool
      { source: "/teams", destination: "/tools", permanent: true },
      { source: "/lms", destination: "/tools", permanent: true },
      { source: "/classroom", destination: "/tools", permanent: true },
      // We don't offer a past-papers tool — send any old links to the closest surviving tool
      { source: "/past-papers",      destination: "/mock-exam",       permanent: true },
      // Tools cut to the focused 10 — removed tools 301 to the closest surviving one
      { source: "/whiteboard",       destination: "/lecture-summary", permanent: true },
      { source: "/formula-sheet",    destination: "/math-solver",     permanent: true },
      { source: "/problem-variants", destination: "/quiz",            permanent: true },
      { source: "/graph-plotter",    destination: "/math-solver",     permanent: true },
      { source: "/calculator",       destination: "/math-solver",     permanent: true },
      { source: "/concept-map",      destination: "/tools",           permanent: true },
      { source: "/syllabus",         destination: "/tools",           permanent: true },
      { source: "/vocab",            destination: "/explain",         permanent: true },
      { source: "/translate",        destination: "/explain",         permanent: true },
      { source: "/diagnostic",       destination: "/quiz",            permanent: true },
      { source: "/parent",           destination: "/tools",           permanent: true },
      { source: "/personal-explain", destination: "/explain",         permanent: true },
    ];
  },
};
export default nextConfig;
