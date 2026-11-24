import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// One page for now. Add new pages here as the site grows.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://oureconomy.net/", changeFrequency: "monthly", priority: 1 }];
}
