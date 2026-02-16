import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: false,
  },
  experimental: {},
  turbopack: {}, // Silencia el error de Turbopack
  webpack(config) {
    config.resolve.alias['@'] = require('path').resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
