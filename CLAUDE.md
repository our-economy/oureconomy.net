# oureconomy.net

The website for **Our Economy**: a global movement that invites anyone badly served by the current economy to build co-owned companies, projects and shared infrastructure together. It runs *alongside* the existing economy as a "fallback" or "gentle" economy. It isn't a replacement and it isn't a political campaign.

**Read `docs/BRIEF.md` before any significant design, copy or architecture work.** It holds the vision, the principles and the first projects. Read `docs/DECISIONS.md` before changing scope, stack or hosting. All of these are working documents: update them through pull requests when things change.

## Current phase: experimentation (November 2026)

- The site is **just the pitch**: one page, with links to the Discord server and the GitHub org. No sign-up form, no backend, no database, no personal data collected.
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
- Page text: `src/content/en.ts`. The page: `src/app/page.tsx`. Colors: `src/app/globals.css`.
- `npm run dev` (local server), `npm run lint`, `npm run build`. CI runs lint and build on every pull request.

## Guidance for working on this repo
- Tone: an invitation to build, not ideology or protest. Plain language that people anywhere can understand and that translates well. No jargon like "solidarity economy" or "post-capitalism" in the main copy.
- Build in small, shippable steps.
- Plan for many languages and a global audience (i18n-ready text, no US-only assumptions), but don't add translation machinery until there's a second language to ship.
- Keep the stack simple and cheap to host. Prefer open source.
- Related: neweconomyhub.net (the owner maintains it; repo pinodeca/new-economy-hub) is the outward-facing directory of the wider ecosystem. This site is the movement itself. Link them; don't merge them. Reuse its stack and conventions where it makes sense.
- Possible reuse for team formation later: Found Teams (andrea-dev.com/tree/prototypes/found-teams): Fastify, Drizzle, Postgres/pgvector, React 19 + Vite.
