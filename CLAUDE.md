# oureconomy.net

The website for **Our Economy**: a global movement that invites anyone badly served by the current economy to build co-owned companies, projects and shared infrastructure together. It runs *alongside* the existing economy as a "fallback" or "gentle" economy. It isn't a replacement and it isn't a political campaign.

**Read `docs/BRIEF.md` before any significant design, copy or architecture work.** It holds the vision, the principles and the first projects. Read `docs/DECISIONS.md` before changing scope, stack or hosting. All of these are working documents: update them through pull requests when things change.

## Current phase: experimentation (November 2026)

- The site is **the pitch plus "Our current thinking"** (`/ideas/`): short, living pages on what we're trying to build, with links to the Discord server and the GitHub org. No sign-up form, no backend, no database, no personal data collected by us (comments are handled by EchoThread, an outside service).
- People meet on **Discord** (see `docs/DISCORD.md`).
- **Hours are not tracked yet.** Contributions are visible in the open-source repos under github.com/our-economy. Contribution accounting gets designed later, with the first group of collaborators.
- Copy must be honest about this: early, experimenting, no pay yet, no hour tracking yet. Don't promise anything the project can't deliver today.

## Core offer (the site must make this obvious within 5 seconds)
"We take everyone. We may not be able to pay you yet, but here's real work building an economy you'll own part of."

## Project setup (decided)
- Domain: **oureconomy.net** (owned, registered at Namecheap).
- GitHub org: **github.com/our-economy** (the name `oureconomy` was already taken on GitHub).
- This repo: **our-economy/oureconomy.net**: the website only. Other things the movement builds live in their own repos with their own licenses.
- The repo is public from day one. Issues labeled `good first task` act as the "what can I do today" list.
- Licenses (confirmed 2026-11-17): **AGPL-3.0** for the code (`LICENSE`), **CC BY-SA 4.0** for written content (`LICENSE-CONTENT`).
- Community chat: Discord server "Our Economy" (Community mode on, public invite). Permanent invite: https://discord.gg/s6PzMtX6V9 (see `docs/DISCORD.md`). It goes on the pitch page.
- Planned sibling repos:
  - `our-economy/.github`: org profile README with the core offer
  - `our-economy/charter`: the copyleft charter, edited openly through pull requests
  - `our-economy/experiments`: the experiment registry, plain markdown at first
  - possibly a Found Teams fork
- Record new decisions (stack, hosting, data model) in `docs/DECISIONS.md`, so later sessions don't have to work them out again.

## Code layout and commands
- Next.js (App Router), `output: "export"`: a fully static site, built to `out/`. Tailwind CSS 4.
- Home page text: `src/content/en.ts`; the page: `src/app/page.tsx`. Ideas pages: `src/content/en/ideas.ts` + `src/content/en/ideas/*.md`, rendered by `src/app/ideas/`. Colors: `src/app/globals.css`.
- `npm run dev` (local server), `npm run lint`, `npm run build`. CI runs lint and build on every pull request.
- Hosting: Azure Static Web Apps, deployed on every push to `main`, with a preview site per PR. Main address `https://oureconomy.net`. Details and gotchas: `docs/INFRASTRUCTURE.md`.

## Guidance for working on this repo
- Tone: an invitation to build, not ideology or protest. Plain language that people anywhere can understand and that translates well. No jargon like "solidarity economy" or "post-capitalism" in the main copy.
- **Terms (decided 2026-11-24):** the pair is **"the main economy"** and **"Our Economy"** ("your mix of the main economy and Our Economy"). "Solidarity economy" appears only where we explain where we fit in that wider family (`/ideas/where-we-fit/`), not as our main label.
- **We build; we don't take.** Never criticize, blame or ask people to abandon the main economy. It has created a lot of wealth and health, and competition is its engine, not its flaw; it just isn't built to make room for everyone. Before publishing, ask: does this blame anyone? Does it ask anyone to give something up? Would someone doing well in the main economy feel welcome reading it?

  | Instead of | Say |
  |---|---|
  | broken, failing, unfair, cut-throat, winner-take-all economy | the main economy |
  | disinvest, exit, leave | shift some of your time and spending |
  | replace, alternative to | alongside, a second economy, complement |
  | redistribute, tax, take | build, own, share what we make |
  | collapse, implosion | bad years, downturns, upheaval |
  | faith, mission, calling | care, shared purpose, belief |
  | blockchain | shared records, transparent records |
  | "better than basic income" | "doesn't depend on basic income or any public program" |
  | the excluded as victims | people looking for a place, or for something different |
- Say "designed to", not "will", for anything untested (stability, 20-hour livelihoods). Cite sources for factual claims and check them before publishing.
- **The Ideas pages** (`/ideas/`): metadata in `src/content/en/ideas.ts`, text in `src/content/en/ideas/<slug>.md`. Every page starts as *Draft*, shows the "in flux" notice, ends with "Questions for you" to start conversations, and has EchoThread comments (`src/components/Comments.tsx`). Things deliberately not done yet are in `docs/BACKLOG.md`.
- Build in small, shippable steps.
- Plan for many languages and a global audience (i18n-ready text, no US-only assumptions), but don't add translation machinery until there's a second language to ship.
- Keep the stack simple and cheap to host. Prefer open source.
- Related: neweconomyhub.net (the owner maintains it; repo pinodeca/new-economy-hub) is the outward-facing directory of the wider ecosystem. This site is the movement itself. Link them; don't merge them. Reuse its stack and conventions where it makes sense.
- Possible reuse for team formation later: Found Teams (andrea-dev.com/tree/prototypes/found-teams): Fastify, Drizzle, Postgres/pgvector, React 19 + Vite.
