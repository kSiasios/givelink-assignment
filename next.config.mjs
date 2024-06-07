/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "be2.givelink.app",
      },
    ],
  },
};

export default nextConfig;
