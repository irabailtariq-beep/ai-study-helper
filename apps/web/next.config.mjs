/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ash/core", "@ash/ai-client"],
  experimental: {
    // Currently inert: there is not one "use server" directive in the build, so
    // no Server Action exists for this limit to apply to. Left in place because
    // it records the intended ceiling for photo/PDF uploads if one is ever
    // added — but note that adding a Server Action is what would make several
    // Next advisories live, so upgrade before you register the first one.
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
      // Removed page with no replacement — send it somewhere real rather than 404.
      { source: "/refund-policy",    destination: "/terms",           permanent: true },
    ];
  },
  async headers() {
    // The site previously sent only HSTS. These are the standard protections a
    // site handling student text and logins should carry.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};
export default nextConfig;
