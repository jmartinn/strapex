/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@strapex/database'],
    async rewrites() {
      return [
        {
          source: '/test/:path*',
          destination: '/:path*',
          //has: [{ type: 'host', value: 'pay.strapex.org' }],
        },
      ];
    },
  };

module.exports = nextConfig
