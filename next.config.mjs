/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "admireit.co" }],
        destination: "https://www.admireit.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
