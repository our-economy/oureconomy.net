# Our Economy: Project Brief

Distilled from brainstorming conversations, November 2026. This is a starting point, not a fixed spec. The movement is meant to experiment. It's a working document: edit it through pull requests as things change.

> **Current phase (November 2026): experimentation.** The site is just the pitch, people meet on Discord, and contributions are visible in the open-source repos under github.com/our-economy. Hours aren't tracked yet. Contribution accounting, the sign-up form and the rest of the v0.1 list below are **deferred, not dropped**: they get designed with the first group of collaborators. See `docs/DECISIONS.md`.

## 1. The problem
- Co-ops and the solidarity economy have existed for 100+ years but haven't spread widely. Starting a co-op today doesn't help *more* people take part in the economy than starting a regular company does.
- Why co-ops don't spread:
  - **Members have a reason to stay small.** Adding members splits the same surplus more ways.
  - **Each co-op is on its own.** Success doesn't carry over to the next one.
  - **There's no copying mechanism.** Co-ops can't be copied the way franchises are. Every one is rebuilt from scratch.
  - **Money is hard to get.** A co-op can't sell equity.
  - **The exception proves it.** Mondragon grew because the federation (its own bank, its school, and a contract obliging co-ops to fund and start new ones) created new co-ops.
- By *not* federating, co-ops accept competition's rules about who's in and who's out. Inclusion can't belong to a single firm. It has to belong to a system that pools risk across many firms.
- A huge number of people worldwide are dissatisfied with, excluded from, or poorly served by the current economy. No one clearly says "we take everyone."

## 2. The offer
"We take everyone. We may not be able to pay you yet, but here's real work building an economy you'll own part of."
- **Record contributions from day one.** Early unpaid work is logged and later converts into ownership or other value. This is what makes the offer honest and not just volunteer labor.
  - *For now:* the record is the public history of the GitHub repos (commits, pull requests, issues, reviews). Work that happens outside GitHub (organizing, outreach, writing in chat) isn't captured yet. That's a known gap.
- Possible taglines: "Our Economy. Everyone's in." / "The market decides who's in. We start from everyone being in."

## 3. Principles
1. **Built to grow from day one ("the snowball").** Every project and company should help start the next one.
2. **Everyone is an owner.** Ownership has two layers:
   - **Firm layer:** you own part of the company you work in.
   - **Commons layer:** every member holds units in a shared fund. Charter companies pay into it. It pays dividends and seeds new teams. This answers "what if machines do the work?" and "what if there isn't enough work for everyone?"
3. **Takes in everyone.** Aim for a guaranteed place within a set time: training, a probationary role, or paid commons work. Track publicly how many people are waiting for a place, how long they wait, and how many leave.
4. **A thin shared core, freedom at the edges.**
   - **The core** (required for everyone): the pledge, the contribution ledger, the snowball clause, the experiment registry.
   - **The edges** (anything goes): how groups organize and work.
5. **A lab, not a startup.** Many parallel experiments: a 20-hour week, no fixed roles, rotating people through new skills, ownership contracts, transparency and commitment systems, federation, cross-border work, real businesses.
6. **AI breaks up narrow specialization.** With AI help, people can be an expert in one thing and a generalist in many. Fulfilment comes from variety and from taking part in decisions.
7. **Lives alongside the existing economy.** The wider market is context to trade with and draw from, not an enemy.
8. **Measure inclusion and security, not GDP.** The system should work even with a shrinking population, where growth no longer comes from more workers and consumers. In some rich countries (e.g. Sweden), low-income people are increasingly excluded from partnership and having children, so economic security is linked to family life.

## 4. Mechanisms to design (open problems)
- **A "copyleft" charter for companies.** Any company can adopt it. Any company started with commons money or commons people must adopt it. It can include profit sharing into the commons and fair terms for new members.
- **Contribution accounting.** How commons units are earned (work, money, recruiting, teaching) without creating free riders or a new hierarchy.
- **Anti-splintering.** Projects leave when the movement costs more than it gives. Responses:
  - Make the commitment early, at formation, while it's cheap.
  - Make staying worth it: shared legal, accounting and AI tools; a talent pool; an internal market; shared insurance; the commons fund.
  - Allow forks, but commitments made at formation still apply.
- **Tiers of association.** "Aligned" groups share information and the registry. "Members" adopt the charter. This lets existing co-ops and outside efforts join gradually.
- **Experiment registry.** Each experiment is recorded in a standard format: what was tried, the hypothesis, how long it ran, and what happened, including failures.
- **Academy.** A path from basic literacy plus AI training, to probationary work on real projects, to ownership.
- **Open question:** should the commons fund be real money from the start (entities, payments, taxes), or a recorded ledger of units that only becomes money later?

## 5. Risks and tensions to keep in mind
- "Take in everyone" vs. "competitive companies." Inclusion happens in the commons layer, and firms still need to deliver.
- Trust grows more slowly than websites do. Simple, tested templates for charters, decisions and conflict matter more than reach.
- The poorest 50% have the least spare time and money. The first businesses should need almost no capital and pay quickly (AI-assisted services, trades, care work).
- What holds a global, culturally mixed membership together? (Mondragon had shared Basque identity and a founding leader.)

## 6. First projects (each with a lead and "good first tasks")
1. **Launch site (oureconomy.net):** the pitch, an "I'm in" sign-up, a "what can I do today" page.
2. **neweconomyhub.net:** keep maintaining it as the outward-facing map of the ecosystem.
3. **Team formation and information sharing:** consider building on Found Teams (mutual opt-in matching, a Watch → Join → Probationary → Full membership ladder, fork/merge).
4. **Cohesion layer:** charter v0.1, contribution ledger, experiment registry, snowball clause.
5. **Experiments lab:** the first 3–5 groups trying new ways of working.
6. **First businesses:** low-capital service co-ops.
7. **International:** translation, legal setups by country, local chapters.

## 7. Name, domain and repos (decided November 2026)
- **Name: Our Economy.** "Our" carries ownership and inclusion.
  - Known weaknesses: it can sound like policy advocacy, the phrase is common (so it's hard to search for or trademark), and "our" can read as a national economy.
  - Mitigation: always pair it with an action-oriented tagline, e.g. "Our Economy. Everyone's in." or "Let's build our economy." Lead with building, not demands.
- **Domain:** oureconomy.net (owned). Its .net matches neweconomyhub.net.
- **GitHub org:** github.com/our-economy (`oureconomy` was taken).
- **Site repo:** our-economy/oureconomy.net.
  - Public, with Issues and Discussions on.
  - `good first task` labels.
  - Licenses (confirmed 2026-11-17): AGPL-3.0 for the website code, CC BY-SA 4.0 for written content. They cover this repo only; other projects choose their own.
- **Planned repos:**
  - `.github`: org profile README
  - `charter`
  - `experiments`: the registry
  - possibly a Found Teams fork
- **Two sites:** neweconomyhub.net is the outward-facing map of the wider ecosystem (the owner maintains it), and oureconomy.net is the movement itself. The map draws people in, and the movement gives them a home.

## 8. Suggested build order for the site
- **v0.1 (as actually scoped, November 2026):** the one-page pitch plus links to Discord and the GitHub org. Nothing else.
- **v0.1 (original list, now deferred):**
  - one-page pitch
  - "I'm in" form: name, email, country, skills, hours available, what you'd like to build, which project interests you
  - list of projects with their "good first tasks"
  - link to a community chat
- **v0.2:**
  - member profiles and working-group pages
  - a simple contribution log
  - experiment registry, read-only at first
- **v0.3+:**
  - team formation (Found Teams integration or similar)
  - public ledger of charter companies, member counts and commons fund
  - i18n
- Visible growth is marketing: show live counts of members, countries, teams and experiments.

## 9. First experiment
About 90 days: 100 founding members, charter v0.1, and 2–3 real teams selling something. The goal is to learn what breaks.
