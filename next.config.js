/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.midjourney.com", "via.placeholder.com"],
  },
  domains: ["vitals.vercel-insights.com"],
  reactStrictMode: false,
  
};

module.exports = nextConfig
