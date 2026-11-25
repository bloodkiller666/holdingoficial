import type { NextConfig } from "next";

const r2Domain = process.env.R2_PUBLIC_DOMAIN ?? "";
let r2Host = "";
try {
  r2Host = new URL(r2Domain).hostname;
} catch {}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  cacheComponents: true,
  partialPrefetching: true,
  env: { NEXT_PUBLIC_R2_DOMAIN: r2Domain },
  images: {
    remotePatterns: r2Host ? [{ protocol: "https", hostname: r2Host }] : [],
    formats: ["image/avif", "image/webp"],
    // Las imágenes de R2 no cambian de nombre al reemplazarse: caché larga para no reprocesarlas.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Menos variantes = menos transformaciones y más aciertos de caché.
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  async headers() {
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/sectores/:file*", headers: immutable },
      { source: "/:all*(svg|png|jpg|jpeg|webp|avif|ico|woff2)", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
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
