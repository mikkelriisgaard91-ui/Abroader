import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/become-an-abroader",
        permanent: true,
      },
      {
        source: "/kim",
        destination: "/stefano",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.teamtailor-cdn.com",
      },
    ],
  },
  turbopack: {
    root: appDir,
  },
};

export default nextConfig;
