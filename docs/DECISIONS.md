# Decisions

Newest first. Each entry says what was decided and why, so later sessions don't reopen settled questions without a reason.

## 2026-11-25: Comments on Ideas pages (EchoThread), and easier paths to them

**Decision:** Ideas pages have comments, run by EchoThread (echothread.io), embedded with `src/components/Comments.tsx`. Free Hobby plan for now: about 5,000 page views and 50 approved comments a month, manual moderation in EchoThread's dashboard. Each page's thread identifier is `ideas/<slug>`, so threads survive design changes. The home page now has the site nav, a "Read our current thinking" button in place of the GitHub button, and each "ideas we want to test" card links to its page.

- **Why EchoThread:** comments without an account (name only), replies nested up to 5 levels, built-in ML spam filter and banned-word lists on every plan, export of all comments as JSON or CSV on every plan, no cookies, no ads, no trackers. Hyvor Talk (more established, reader flagging, AI checks) no longer has a free plan (from €5/month; webhooks only on its €40 plan).
- **Risks:** closed source, run by one independent developer. Mitigation: export a backup now and then. Exported comments can be imported into another service after conversion, or built into the pages as a static archive.
- **The key in the embed is public by design** ("a safeguard, not a password"); the widget only runs on the domains allowed in EchoThread's site settings. The private API tokens (`et_...`) must never go in the repo.
- **Client-side navigation:** EchoThread documents no re-initialize API, so the component loads a fresh copy of the script whenever a page's comments mount (checked: navigating between Ideas pages loads the right thread).
- **Personal data:** we still collect none ourselves. EchoThread processes commenters' names and comments; each page says so above the widget.
- **Later:** the Starter plan ($5/month) adds moderator email alerts, webhooks, and an API that can reject or delete comments. That's what an automated AI moderation job (scheduled GitHub Action that checks new comments against our guidelines) would need. See `BACKLOG.md`.

## 2026-11-24: "Our current thinking" pages, and the words we use

**Decision:** The site grows from one page to the pitch plus an Ideas section (`/ideas/`): short, living pages with our current thinking. Each page has a status (Draft / Taking shape / Agreed), a last-updated date, an "in flux" notice ("mostly written by the founder so far"), and ends with questions for readers, plus links to discuss on Discord and suggest a change on GitHub.

- **Purpose:** give prospective joiners a sense of what we're trying to build and start conversations. Still static: no backend, no forms, no data collected.
- **Living pages, not a blog.** They're revised in place as thinking changes. A dated blog/news section may come later (see `BACKLOG.md`).
- **Statuses:** every page starts as *Draft*. The founder can move a page to *Taking shape*. *Agreed* is reserved for decisions made with the group once it exists.
- **No roadmap page yet.** Stages get decided and iterated as the group grows. One page on how we might organize, and how a company moves through stages, is planned instead.
- **Content format:** page metadata in `src/content/en/ideas.ts` (typed), page text in Markdown files (`src/content/en/ideas/<slug>.md`) so non-programmers can suggest edits on GitHub. Rendered at build time with `marked` (pinned, no dependencies).
- **`trailingSlash: true`:** the static export writes `ideas/<slug>/index.html`, which any static host serves at `/ideas/<slug>/` with no rewrite rules.
- **Terms:** "the main economy" and "Our Economy". "Solidarity economy" only on the page about where we fit in that wider family. Our Economy is a group within that family proposing a direction (snowball, everyone in, any amount of time, joined up, companies starting in groups, alongside the main economy). See the wording guide in `CLAUDE.md`.
- **Comments on the pages:** not yet decided (see `BACKLOG.md`). Until then, Discord and GitHub links.

**Why:** The founder is the only member right now, and content that makes people think is the best way to start conversations. Markdown keeps editing open. "Our Economy" is plain, already ours, and avoids a term ("solidarity economy") that means different things in different places and is unknown to many.
## 2026-11-22: Link previews, icon, robots.txt and sitemap

**Decision:** The preview image shown when the site is shared is generated at build time from the page copy, as a static route at `/og.png` (`src/app/og.png/route.tsx`). It uses Inter from `@fontsource/inter` because next/og's built-in font has no bold. `layout.tsx` points the `og:image`/`twitter:image` tags at it. The icon is a single SVG (`src/app/icon.svg`). `robots.txt` and `sitemap.xml` are generated from `src/app/robots.ts` and `src/app/sitemap.ts`.

**Why:** Most people will first see the site as a shared link, and generating the image from `src/content/en.ts` keeps it in sync with the copy. Next's `opengraph-image` file convention was tried first, but the static export writes that image to a file with no extension. Azure serves it as `application/octet-stream` with `nosniff`, and a `staticwebapp.config.json` route can't override the content type (checked on the PR #3 preview, 2026-11-22). A `.png` filename fixes it.

## 2026-11-18: The main address is oureconomy.net (no www)

**Decision:** `https://oureconomy.net` is the canonical address. `www` and the Azure hostname redirect to it. Hosting details are in `docs/INFRASTRUCTURE.md`.

**Why:** Shorter and cleaner when typed, printed or said aloud. (neweconomyhub.net uses `www`; the two sites don't need to match.)

## 2026-11-17: Pitch page implementation details

- **Next.js 16.4.6**, not the hub's 16.3.4: 16.3.4 has published security advisories. Most of them affect server features a static export doesn't use, but there was no reason to start on an old version.
- **System fonts only.** Nothing to download, fast on slow connections, and every script and language renders with the reader's own fonts.
- **All page text lives in `src/content/en.ts`.** Translating later means adding a sibling file and a locale route, not hunting through components. No i18n library until there's a second language.
- No Azure deploy workflow yet: Azure generates it when the Static Web App is created and linked to this repo.

## 2026-11-17: The Discord invite is public

**Decision:** The permanent invite link goes on oureconomy.net. Anyone who finds the site can join.

**Why:** The offer is "we take everyone", and asking people to email for an invite contradicts it and makes the owner a bottleneck. The site's honest "early, no pay, no hour tracking" copy does the screening. The server was made public-ready first (Community mode, AutoMod, guidelines; see `docs/DISCORD.md`). If spam becomes a problem: revoke the link, raise verification, or fall back to invites on request.

## 2026-11-17: Licenses

**Decision:** AGPL-3.0 for this repo's code, CC BY-SA 4.0 for its written content.

**Why:** Copyleft matches the movement's charter idea. Scope is this repo (the website) only; other projects pick their own licenses.

## 2026-11-17: v0.1 is the pitch only, no sign-up form

**Decision:** The site is one page that explains the offer and links to Discord and the GitHub org. No form, no backend, no database.

**Why:** The project is in an experimentation phase. The goal is to find people who are fine with that, not to build a member list. Dropping the form also means no personal data to store or protect.

**Deferred, not dropped:** the "I'm in" form, live member counts and contribution tracking (see `BRIEF.md` §8). Revisit once there's a group to design them with.

## 2026-11-17: Contributions are visible on GitHub; hours aren't tracked yet

**Decision:** For now, the record of contributions is the public history of the repos in github.com/our-economy.

**Why:** A ledger needs a group to agree on what counts. Known gap: work outside GitHub (organizing, outreach, writing in chat) isn't captured.

## 2026-11-16: Stack and hosting follow neweconomyhub.net

**Decision:** Next.js with `output: "export"` (fully static), deployed to Azure Static Web Apps (Free tier), with DNS kept at Namecheap. This is the same setup as pinodeca/new-economy-hub.

**Why:** One stack to maintain across both sites, and the owner already runs and documents it. Alternatives considered: Astro + Cloudflare Pages (good, but a second stack), and a single hand-written HTML page like commonwork.coop (simplest, but harder to grow).
