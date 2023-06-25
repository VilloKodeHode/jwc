/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.midjourney.com", "via.placeholder.com"],
  },
  reactStrictMode: true,
  headers: {
    contentSecurityPolicy:
      "default-src 'self'; connect-src 'self' vitals.vercel-insights.com",
  },
};

module.exports = nextConfig
