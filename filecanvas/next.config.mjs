/** @type {import('next').NextConfig} */

// config.externals.push('bun:sqlite');

const nextConfig = {
    webpack: (config) => {
        config.externals.push('bun:sqlite');
        return config;
      },
};

export default nextConfig;
