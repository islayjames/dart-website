import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] },
  async redirects() {
    return [
      {
        source: "/guides/is-lightning-lane-worth-it-disney-world-2026",
        destination: "/guides/is-lightning-lane-worth-it-disney-world",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
