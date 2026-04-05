import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
