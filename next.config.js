/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Prefer AVIF/WebP — sharper per byte than the source PNGs.
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
