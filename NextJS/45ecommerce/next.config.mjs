const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/**", // Allow all paths on this domain
      },
    ],
  },
};

export default nextConfig;
