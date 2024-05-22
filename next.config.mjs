/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.gravatar.com"],
  },
};

console.log("url:", "https://localhost:3000");

export default nextConfig;
