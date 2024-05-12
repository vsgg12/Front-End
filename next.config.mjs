/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination:
          'http://ec2-13-236-153-246.ap-southeast-2.compute.amazonaws.com/:path*',
      },
    ];
  },
};

export default nextConfig;
