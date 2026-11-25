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

## Site features
- **Automated comment moderation.** Comments publish by default (EchoThread's spam filter screens them first). When volume grows: upgrade EchoThread to Starter ($5/month, API can reject/delete, webhooks, email alerts) and add a scheduled GitHub Action that fetches new comments, asks Claude to check each against our guidelines, and either keeps it, rejects clear spam/abuse, or sets it back to pending and notifies the founder. Log every removal with a reason, and publish a short moderation policy. Needs an Anthropic API key and an EchoThread `et_` token as GitHub secrets.
- **Comment backups.** Export all comments (JSON) from EchoThread now and then, and keep the file somewhere safe.
- **A roadmap page**, once there's a group to decide stages with.
- **A blog or news section** for dated updates ("we ran this experiment, here's what happened").
- **Translations** of the Ideas pages (add `src/content/<lang>/`), once there's a second language to ship.

## Discord
- Add channels only when needed (see `DISCORD.md`). When the Ideas pages start generating discussion: an `#ideas` forum channel with one thread per page, linked from each page's `discussUrl` in `src/content/en/ideas.ts`. Also `#introductions` and a read-only `#announcements` as the server fills up.
- Optional now: one line in the pinned welcome message pointing to oureconomy.net/ideas/.

## Elsewhere
- Org profile README (`our-economy/.github`) with the same framing.
- Link from neweconomyhub.net to `/ideas/`.
