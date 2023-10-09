/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  enabled: process.env.ANALYZE === "true",
  buildActivityPosition: "bottom-right",
  // reactStrictMode: true,
  // unoptimized: true
};

const withBundleAnalyzer = require("@next/bundle-analyzer")(nextConfig);

module.exports = withBundleAnalyzer({});
