/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [  {
  //     source: '/v1/nid/me', // url이 source에 해당될 경우
  //     destination: 'https://openapi.naver.com/v1/nid/me', // destination으로 redirect
  //   }];
  // },
};

export default nextConfig;
