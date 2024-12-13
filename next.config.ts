import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: true,
  },

  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  output: 'export',
};

export default nextConfig;
