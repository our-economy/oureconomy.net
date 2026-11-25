import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav, container } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { StatusTag } from "@/components/StatusTag";
import { Comments } from "@/components/Comments";
import { links } from "@/content/en";
import { ideas, ideasText as t } from "@/content/en/ideas";
import { getIdea, getIdeaHtml, ideaSourcePath } from "@/lib/ideas";

export const dynamicParams = false;

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ideas/[slug]">): Promise<Metadata> {
  const idea = getIdea((await params).slug);
  if (!idea) return {};
  return {
    title: `${idea.title} | Our Economy`,
    description: idea.summary,
    alternates: { canonical: `/ideas/${idea.slug}/` },
    openGraph: {
      title: idea.title,
      description: idea.summary,
      url: `/ideas/${idea.slug}/`,
      siteName: "Our Economy",
      type: "article",
      // A page's openGraph replaces the layout's, so repeat the shared image.
      images: [{ url: "/og.png", width: 1200, height: 630, alt: idea.title }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function IdeaPage({ params }: PageProps<"/ideas/[slug]">) {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) notFound();
  const html = await getIdeaHtml(slug);
  const editUrl = `${links.repo}/edit/main/${ideaSourcePath(slug)}`;

  return (
    <>
      <SiteNav />
      <main className={`${container} py-12 sm:py-16`}>
        <p>
          <Link href="/ideas" className="text-accent underline underline-offset-4">
            ← {t.back}
          </Link>
        </p>
        <article className="mt-6">
          <header>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {idea.title}
            </h1>
            <p className="mt-4 text-xl leading-snug text-muted text-pretty">
              {idea.summary}
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <StatusTag status={idea.status} />
              <span>
                {t.updatedLabel}: <time dateTime={idea.updated}>{formatDate(idea.updated)}</time>
              </span>
            </p>
            <p className="mt-6 border-l-4 border-accent pl-4 text-base leading-relaxed text-muted">
              {t.notice}
            </p>
          </header>
          <div className="prose-page mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <section aria-labelledby="comments" className="mt-12">
          <h2 id="comments" className="text-2xl font-bold tracking-tight">
            {t.comments.heading}
          </h2>
          <p className="mt-2 leading-relaxed">{t.comments.intro}</p>
          <p className="mt-2 text-sm text-muted">{t.comments.privacy}</p>
          <div className="mt-6">
            <Comments
              key={idea.slug}
              pageId={`ideas/${idea.slug}`}
              pageTitle={idea.title}
              pageUrl={`https://oureconomy.net/ideas/${idea.slug}/`}
            />
          </div>
        </section>

        <aside
          aria-labelledby="discuss"
          className="mt-12 rounded-xl border border-rule bg-paper-2 p-6"
        >
          <h2 id="discuss" className="text-xl font-bold">
            {t.discuss.heading}
          </h2>
          <p className="mt-2 leading-relaxed">{t.discuss.body}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={idea.discussUrl ?? links.discord}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-5 font-semibold text-accent-ink hover:opacity-90"
            >
              {t.discuss.discordCta}
            </a>
            <a
              href={editUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-accent px-5 font-semibold text-accent hover:bg-paper"
            >
              {t.discuss.editCta}
            </a>
          </div>
          {!idea.discussUrl && (
            <p className="mt-3 text-sm text-muted">{t.discuss.discordHint}</p>
          )}
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
