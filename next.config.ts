import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Pin Turbopack to this app. A lockfile in the parent folder (../) would
// otherwise be picked as the workspace root and can break dev (wrong paths).
const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/places-stays",
        destination: "/",
        permanent: true,
      },
      {
        source: "/guides/united-kingdom",
        destination: "/guides/uk",
        permanent: true,
      },
      {
        source: "/guides/great-britain",
        destination: "/guides/uk",
        permanent: true,
      },
      {
        source: "/guides/britain",
        destination: "/guides/uk",
        permanent: true,
      },
    ];
  },
  images: {
    // Vercel returns 402 for /_next/image when optimization quota/billing blocks it;
    // serve remote URLs directly so Unsplash (and other allowlisted hosts) still load.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "harmonysurflodge.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.crocrosurfmaroc.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
  turbopack: {
    root: appDir,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      const extraIgnored = [
        /[\\/]\.next[\\/]types[\\/]/,
        /[\\/]\.next[\\/]dev[\\/]types[\\/]/,
      ];
      const prev = config.watchOptions?.ignored;
      const ignored = Array.isArray(prev)
        ? [...prev, ...extraIgnored]
        : prev != null
          ? [prev, ...extraIgnored]
          : extraIgnored;

      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: config.watchOptions?.aggregateTimeout ?? 400,
        ignored,
      };
    }
    return config;
  },
};

export default nextConfig;
