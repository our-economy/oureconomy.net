# Backlog

Things we've deliberately not done yet, so they don't get lost. Newest ideas at the bottom of each section. When something here gets done, move the decision to `DECISIONS.md` and delete it from here. Anyone can propose additions through a pull request.

## Ideas pages still to write
Listed on `/ideas/` as "Coming as we work them out" (`src/content/en/ideas.ts`, `index.coming`).

- **Ownership in two layers:** your company and a shared fund (BRIEF §3.2).
- **Mutual commitments:** what we promise each other; the snowball clause; why commitments made early are cheap and strong. A draft pledge could go here, e.g. "I contribute what I can, I record what I do, I help bring the next person in, and I care that everyone does well." Pledge wording should be decided with the first group.
- **How we might organize, and how a company moves through stages:** the practice organization (projects, teams, 6-week cycles, demos, the Watch → Join → Probationary → Full ladder); a company's path (practice company → graduate → charter member → helps start the next group); how existing companies join at different levels (ally → customer/supplier → host for learners → charter member → owned by its workers, including business succession); the systems needed for trust and commitment (contribution record, charter, pledge, experiment registry, team formation, e.g. Found Teams). This replaces a roadmap page for now.
- **Recording what people give:** today, GitHub history; later, possibly an internal ledger in units that doubles as the contribution record. Be honest that nobody is paid yet.
- **A lab, not a blueprint / Experiments to try:** part-time teams, 6-week cycles, a first practice-company group, internal units, rotating roles, a pledge, scaling hours up and down fairly, a 20-hour livelihood. Include the experiment registry format.
- **Where you can help:** software (team formation, contribution record, experiment registry, this site, translation tooling) and everything else (writing, translation, outreach, charter drafting, welcoming newcomers, the first practice companies).
- **Open questions:** units vs. money; free riders; fairness when hours scale up or down; what holds a global membership together; leaving well; local vs. global groups; the risk of make-work in internal trade.
- **What this isn't:** not a political campaign, not anti-market, not a get-rich scheme, not a replacement for the main economy, not a closed group, not a religion.

## Notes for the pages still to write
Drafts from the November 2026 brainstorm, kept so later sessions don't redo them. None of this is decided.

### Draft stages (for "How we might organize", not a public roadmap)
| Stage | What happens | You know it's done when |
|---|---|---|
| 0. Founding circle | Practice organization takes shape: projects, 6-week cycles, the membership ladder, contributions recorded | 20–30 people work in a shared rhythm |
| 1. First group of practice companies | 4–6 practice companies serve the movement and each other, keeping internal accounts in units | The internal record works; first experiments registered |
| 2. First outside customers | First outside customers, first ally companies, charter v0.1 | The first company graduates |
| 3. Snowball | Graduates seed and mentor the next group | A group starts without the founders |
| 4. Shared floor | The common fund becomes real money; members cover some needs inside Our Economy | The measure (below) rises above zero for real people |
| 5. A second economy | Many groups, many countries, companies joining at every level | People can choose any mix of the two economies and live well on it |

No dates beyond the first ~90 days (BRIEF §9: 100 founding members, charter v0.1, 2–3 teams selling something).

### A way to measure progress
"How much of their needs can a person cover with whatever time they choose to give?" Zero today; each stage should raise it for more people. Twenty hours a week is an illustration of a full livelihood at a gentle pace, not an entry requirement.

### How practice companies could work
- **Choose groups whose outputs chain together** (design serves web, translation serves everyone, bookkeeping keeps the group's accounts). The movement's own needs are the first market.
- **The internal trading record in units could double as the contribution record**, so contribution accounting might not need a separate design. Precedents: mutual credit (WIR in Switzerland, Sardex in Italy), time banks.
- **Guard against make-work:** every group needs at least one real outside need, and every internal order should answer a real need.
- **Graduation:** first outside customer, or covering part of members' living costs. Graduates adopt the charter and help start the next group.
- **Existing companies** can join at levels: ally → customer/supplier → host for learners → charter member → owned by its workers. Business succession (owners retiring without a successor) is a large real-world entry point for the last level, though not in the first year.

### Sources already checked (November 2026)
- **WIR network (Switzerland, since 1934):** James Stodder, "Complementary credit networks and macroeconomic stability: Switzerland's Wirtschaftsring", *Journal of Economic Behavior & Organization* 72(1), 2009, pp. 79–95: WIR turnover rises in recessions. Follow-up: Stodder & Lietaer, *Comparative Economic Studies* 58(4), 2016.
- **PEN Worldwide:** the international practice-enterprise network, roughly 7,000–7,500 practice firms in 40+ countries (figures vary by source; no official current count found).
- **Harvard Study of Adult Development:** running since 1938; good relationships are among the strongest predictors of a healthy, happy life.
- **Kurzarbeit:** Germany's short-time work scheme (hours cut across a workforce instead of layoffs).
- **Mondragon:** grew through shared institutions (its own bank, school, support services); see BRIEF §1.

## Site features
- **Automated comment moderation.** Comments publish by default (EchoThread's spam filter screens them first). When volume grows: upgrade EchoThread to Starter ($5/month, API can reject/delete, webhooks, email alerts) and add a scheduled GitHub Action that fetches new comments, asks Claude to check each against our guidelines, and either keeps it, rejects clear spam/abuse, or sets it back to pending and notifies the founder. Log every removal with a reason, and publish a short moderation policy. Needs an Anthropic API key and an EchoThread `et_` token as GitHub secrets.
- **Comment backups.** Export all comments (JSON) from EchoThread now and then, and keep the file somewhere safe. Do one test export early to confirm which fields it includes (the docs don't list them; the API has page, parent comment, author name, text, status and dates).
- **EchoThread facts (checked November 2026):** the default sort order is "Best" and can't be changed by the site owner (readers can switch to newest, oldest, most liked or most replied). Guest comments are a per-site setting ("Allow guest comments"). The widget only runs on the domains in "Allowed domains": PR preview sites need their address added to show comments. Free Hobby plan for new accounts: about 5,000 page views and 50 approved comments a month. Moderating through the API needs Starter.
- **Clean-up:** remove the PR #5 preview address (`happy-coast-0d9ea8c1e-5.westus2.4.azurestaticapps.net`) from EchoThread's Allowed domains if it was added.
- **A roadmap page**, once there's a group to decide stages with.
- **A blog or news section** for dated updates ("we ran this experiment, here's what happened").
- **Translations** of the Ideas pages (add `src/content/<lang>/`), once there's a second language to ship.

## Discord
- Add channels only when needed (see `DISCORD.md`). When the Ideas pages start generating discussion: an `#ideas` forum channel with one thread per page, linked from each page's `discussUrl` in `src/content/en/ideas.ts`. Also `#introductions` and a read-only `#announcements` as the server fills up.
- Optional now: one line in the pinned welcome message pointing to oureconomy.net/ideas/.

## Elsewhere
- Org profile README (`our-economy/.github`) with the same framing.
- Link from neweconomyhub.net to `/ideas/`.
