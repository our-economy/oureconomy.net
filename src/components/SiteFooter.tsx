import { en as t, links } from "@/content/en";
import { container } from "./SiteNav";

export function SiteFooter() {
  return (
    <footer className={`${container} py-10 text-sm text-muted`}>
      <p>
        {t.footer.hubIntro}{" "}
        <a href={links.hub} className="font-semibold text-accent underline underline-offset-4">
          {t.footer.hubLink}
        </a>
      </p>
      <p className="mt-3">
        <a href={links.repo} className="underline underline-offset-4">
          {t.footer.source}
        </a>{" "}
        · {t.footer.license}
      </p>
    </footer>
  );
}
