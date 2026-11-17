# Decisions

Newest first. Each entry says what was decided and why, so later sessions don't reopen settled questions without a reason.

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
