/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Hero photos are replaced by filename, not in place; a day of edge cache
    // keeps repeat views fast without letting stale art linger for long.
    minimumCacheTTL: 60 * 60 * 24,
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
