/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local images with special characters in filenames
    unoptimized: false,
  },
  // Ensure static files with special characters in names are served
  experimental: {
    // No extra flags needed for local assets
  },
};

export default nextConfig;
