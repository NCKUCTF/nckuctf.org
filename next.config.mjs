/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["www.gravatar.com"],
    unoptimized: true,
  },
};

console.log("url:", "https://localhost:3000");

export default nextConfig;
