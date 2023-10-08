/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  images: {
    domains: ["cdn.midjourney.com", "via.placeholder.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;

