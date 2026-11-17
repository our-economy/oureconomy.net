import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static: the site is just the pitch, with no backend
  // (see docs/DECISIONS.md). Deploys to Azure Static Web Apps as plain files.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
