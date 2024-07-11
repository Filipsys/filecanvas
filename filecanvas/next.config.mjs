/** @type {import("next").NextConfig} */

// config.externals.push("bun:sqlite");

const nextConfig = {
  webpack: (config) => {
    config.externals.push("bun:sqlite");
    return config;
  },
  experimental: {
    optimizePackageImports: [
      "better-sqlite3", 
      "drizzle-orm",
      "tailwindcss",
      "postcss",
      "drizzle-kit",
      
    ],
  },
};

export default nextConfig;
