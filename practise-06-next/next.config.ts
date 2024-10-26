// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com", "m.media-amazon.com"], // Dono domains ko add karein
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['books.google.com'], // Allowed domains ko add karein
//   },
// }

// module.exports = nextConfig
