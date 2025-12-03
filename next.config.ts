import type { NextConfig } from "next";

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Only apply basePath/assetPrefix in production
    basePath: process.env.NODE_ENV === 'production' ? '/caesar-portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/caesar-portfolio/' : '',
};

export default nextConfig;