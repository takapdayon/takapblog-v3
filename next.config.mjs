/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
