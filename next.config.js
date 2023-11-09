/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'realmtest.sfo3.digitaloceanspaces.com',
        port: '',
        pathname: '/bloxx/**',
      },
    ],
  },
}

module.exports = nextConfig
