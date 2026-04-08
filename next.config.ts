import type { NextConfig } from "next";

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
    ],
  },
  turbopack: {},
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
