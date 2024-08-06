/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["www.gravatar.com"],
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/",
};

console.log("url:", "https://localhost:3000");

export default nextConfig;
