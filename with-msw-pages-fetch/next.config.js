/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
