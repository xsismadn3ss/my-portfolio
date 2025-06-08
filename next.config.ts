import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(`${siteUrl}/assets/**`),
      new URL(`${siteUrl}/assets/projects/**`),
    ],
  },
};

export default nextConfig;
