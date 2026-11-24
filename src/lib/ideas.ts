import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import { ideas, type Idea } from "@/content/en/ideas";

const contentDir = path.join(process.cwd(), "src", "content", "en", "ideas");

export function getIdea(slug: string): Idea | undefined {
  return ideas.find((idea) => idea.slug === slug);
}

// Read at build time only: the site is a static export.
// The Markdown is our own, reviewed through pull requests, so raw HTML in it
// is trusted.
export async function getIdeaHtml(slug: string): Promise<string> {
  const source = await readFile(path.join(contentDir, `${slug}.md`), "utf8");
  return marked.parse(source, { async: false });
}

export function ideaSourcePath(slug: string): string {
  return `src/content/en/ideas/${slug}.md`;
}
