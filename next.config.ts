import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["cdn.sanity.io"], // add Sanity CDN here
  },
};

export default nextConfig;
