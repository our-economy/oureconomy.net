import type { MetadataRoute } from "next";
import { ideas } from "@/content/en/ideas";

export const dynamic = "force-static";

const base = "https://oureconomy.net";

// Every page on the site. Ideas pages are added automatically from
// src/content/en/ideas.ts. URLs end in "/" to match trailingSlash in
// next.config.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ideas/`, changeFrequency: "weekly", priority: 0.8 },
    ...ideas.map((idea) => ({
      url: `${base}/ideas/${idea.slug}/`,
      lastModified: idea.updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
