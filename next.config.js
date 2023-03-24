// @type {import('next').NextConfig}

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
