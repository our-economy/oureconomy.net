import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static: the site is just the pitch, with no backend
  // (see docs/DECISIONS.md). Deploys to Azure Static Web Apps as plain files.
  output: "export",
  // Export each page as a folder with an index.html (ideas/why-now/index.html),
  // which every static host serves at /ideas/why-now/ without extra config.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
