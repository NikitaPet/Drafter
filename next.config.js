/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
export const env = dotenv?.config();

export default {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
