/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ash/core", "@ash/ai-client"],
  experimental: {
    serverActions: { bodySizeLimit: "25mb" },
  },
};
export default nextConfig;
