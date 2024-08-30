/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  // Remove basePath and assetPrefix if deploying to root of main branch
}

module.exports = nextConfig;
