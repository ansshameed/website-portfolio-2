/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  basePath: isProd ? '/website-portfolio-2' : '',
  assetPrefix: isProd ? '/website-portfolio-2/' : '',
}

module.exports = nextConfig;