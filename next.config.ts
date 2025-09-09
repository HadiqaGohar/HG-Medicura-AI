import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
         {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ]
  },
  env: {
    NEXT_PUBLIC_FASTAPI_URL: 'https://hg-medicura-ai-backend-production.up.railway.app', // Ensure correct backend URL
  },
  
};

export default nextConfig;
