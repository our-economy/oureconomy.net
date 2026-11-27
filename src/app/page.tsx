import Link from "next/link";
import { en as t, links } from "@/content/en";
import { SiteNav, container } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
const sectionHeading =
  "text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-6";

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-lg px-6 text-base font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:opacity-90"
      : "border-2 border-accent text-accent hover:bg-paper-2";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <header className="border-b border-rule">
        <div className={`${container} py-16 sm:py-24`}>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance">
            {t.hero.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-xl sm:text-2xl leading-snug text-ink text-pretty">
            {t.hero.offer}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={links.discord}>{t.hero.joinCta}</ButtonLink>
            <ButtonLink href="/ideas/" variant="secondary">
              {t.hero.thinkingCta}
            </ButtonLink>
          </div>
        </div>
      </header>

      <main>
        <section aria-labelledby="why" className={`${container} py-14 sm:py-20`}>
          <h2 id="why" className={sectionHeading}>
            {t.why.heading}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-ink">
            {t.why.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="ideas" className="bg-paper-2 border-y border-rule">
          <div className={`${container} py-14 sm:py-20`}>
            <h2 id="ideas" className={sectionHeading}>
              {t.ideas.heading}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {t.ideas.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group block rounded-xl border border-rule bg-paper p-5 transition-colors hover:border-accent"
                  >
                    <h3 className="text-lg font-semibold text-accent group-hover:underline underline-offset-4">
                      {item.title} →
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted">{item.body}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg">
              {t.ideas.moreIntro}{" "}
              <Link
                href="/ideas"
                className="font-semibold text-accent underline underline-offset-4"
              >
                {t.ideas.moreCta} →
              </Link>
            </p>
          </div>
        </section>

        <section aria-labelledby="now" className={`${container} py-14 sm:py-20`}>
          <h2 id="now" className={sectionHeading}>
            {t.now.heading}
          </h2>
          <ul className="space-y-3 border-l-4 border-accent pl-5 text-lg leading-relaxed">
            {t.now.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-semibold">{t.now.closing}</p>
        </section>

        <section aria-labelledby="today" className="bg-paper-2 border-y border-rule">
          <div className={`${container} py-14 sm:py-20`}>
            <h2 id="today" className={sectionHeading}>
              {t.today.heading}
            </h2>
            <ol className="grid gap-4 sm:grid-cols-2">
              {t.today.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex flex-col rounded-xl border border-rule bg-paper p-5"
                >
                  <span className="text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">
                    {step.body}
                  </p>
                  <a
                    href={step.href}
                    className="mt-4 font-semibold text-accent underline underline-offset-4"
                  >
                    {step.cta} →
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
