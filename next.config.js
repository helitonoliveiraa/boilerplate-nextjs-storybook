// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
});

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
});

module.exports = nextConfig;
