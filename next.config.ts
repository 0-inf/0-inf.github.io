import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://0-inf.github.io/0-inf-page/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/0-inf-page' : '',
  trailingSlash: true,
  reactStrictMode: true,
  webpack5: true,
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ['0-inf.github.io'],
  },
  sassOptions: {
    prependData: `
      $base-path: '${process.env.NEXT_PUBLIC_BASE_PATH || ''}';
    `,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://0-inf.github.io; script-src 'self' 'unsafe-inline';`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
