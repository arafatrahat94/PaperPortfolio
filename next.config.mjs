/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // Ensure this line is correct
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // Ensure this line is correct
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "jmp.sh",
        port: "",
        pathname: "**",
      },
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
