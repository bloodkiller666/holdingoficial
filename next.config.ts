import type { NextConfig } from "next";

const r2Domain = process.env.R2_PUBLIC_DOMAIN ?? "";
let r2Host = "";
try {
  r2Host = new URL(r2Domain).hostname;
} catch {}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  env: { NEXT_PUBLIC_R2_DOMAIN: r2Domain },
  images: {
    remotePatterns: r2Host ? [{ protocol: "https", hostname: r2Host }] : [],
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
