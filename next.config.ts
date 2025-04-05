import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'unsplash.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'media.licdn.com',
      },
    ],
  },
};

export default nextConfig;
