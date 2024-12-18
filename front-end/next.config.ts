import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  },
  eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
