import Link from "next/link";
import { en } from "@/content/en";
import { ideasText } from "@/content/en/ideas";

export const container = "mx-auto w-full max-w-3xl px-4 sm:px-6";

export function SiteNav() {
  return (
    <header className="border-b border-rule">
      <nav
        aria-label="Site"
        className={`${container} flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4`}
      >
        <Link href="/" className="text-lg font-semibold text-accent">
          {en.hero.name}
        </Link>
        <ul className="flex gap-5 text-base">
          <li>
            <Link href="/" className="underline-offset-4 hover:underline">
              {ideasText.nav.home}
            </Link>
          </li>
          <li>
            <Link href="/ideas" className="underline-offset-4 hover:underline">
              {ideasText.nav.ideas}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
