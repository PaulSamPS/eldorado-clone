/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['localhost:5000']
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
};

module.exports = nextConfig;
