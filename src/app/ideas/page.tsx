import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, container } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { StatusTag } from "@/components/StatusTag";
import { ideas, ideasText as t, type IdeaGroup } from "@/content/en/ideas";

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: { canonical: "/ideas/" },
};

const groups = Object.keys(t.index.groups) as IdeaGroup[];

export default function IdeasIndex() {
  return (
    <>
      <SiteNav />
      <main className={`${container} py-12 sm:py-16`}>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
          {t.index.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-pretty">{t.index.intro}</p>
        <p className="mt-6 border-l-4 border-accent pl-4 text-base leading-relaxed text-muted">
          {t.notice}
        </p>

        {groups.map((group) => (
          <section key={group} aria-labelledby={`group-${group}`} className="mt-12">
            <h2 id={`group-${group}`} className="text-2xl font-bold tracking-tight">
              {t.index.groups[group]}
            </h2>
            <ul className="mt-5 grid gap-4">
              {ideas
                .filter((idea) => idea.group === group)
                .map((idea) => (
                  <li key={idea.slug}>
                    <Link
                      href={`/ideas/${idea.slug}`}
                      className="block rounded-xl border border-rule bg-paper p-5 transition-colors hover:bg-paper-2"
                    >
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg font-semibold text-accent">
                          {idea.title}
                        </span>
                        <StatusTag status={idea.status} />
                      </span>
                      <span className="mt-1 block leading-relaxed text-muted">
                        {idea.summary}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="coming" className="mt-12">
          <h2 id="coming" className="text-2xl font-bold tracking-tight">
            {t.index.comingHeading}
          </h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-6 leading-relaxed text-muted">
            {t.index.coming.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
