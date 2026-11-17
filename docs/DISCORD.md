# Community chat: Discord

Set up November 17, 2026. This is the movement's first community space. It is kept deliberately minimal while the owner is the only member, and structure gets added as people join.

## What exists

- **Server:** "Our Economy", owned by the project owner's Discord account.
- **Access:** anyone with the invite link can join. Because the link will go on the public website, the server is set up as public-ready from the start.
- **Community mode: on.** This turns on Discord's safety baseline:
  - Members need a verified email before they can send messages.
  - The explicit-media filter scans everything members post.
  - Risky permissions are removed from `@everyone`.
  - Notifications default to mentions only.
- **Not in Server Discovery.** Community mode doesn't list the server in Discord's search. Discovery requires at least 1,000 members and a server at least 8 weeks old, and isn't planned.
- **AutoMod:** blocks mention spam and suspected spam content.
- **Raid protection, CAPTCHA and DM spam protection:** on (Discord defaults).
- **Channels:**
  - `#welcome`: the rules channel and where new members land. It holds two pinned messages, the welcome and the guidelines (text below).
  - `#general`: everything else for now.
  - `#moderator-only`: private. Discord sends Community updates, raid alerts and lockdown notices here.
  - **General** (voice).
- **Roles:** none yet, beyond the owner and Discord's default `@everyone`.

## The invite link

**https://discord.gg/s6PzMtX6V9**

- It never expires, has no limit on uses, and sends people to `#welcome`.
- Anyone who has the link can join. It's fine to publish it on the website.
- Discord also made a 30-day link automatically during setup (discord.gg/WkBeR5UnJ). Ignore it. It expires around December 17, 2026.
- **Manage links:** Server Settings → Invites. That page lists every active link and lets you revoke one.
- **If the link attracts spam or a raid:** revoke it, generate a new one with "Never" expiry, and update every place listed below. Raising verification to Medium (Server Settings → Safety Setup) also helps, because accounts then have to be on Discord for 5 minutes before they can post.

## Where the link goes

- **On the website** (decided 2026-11-17): the pitch page links to it directly. There's no sign-up form, so there's no thank-you page.
- **Elsewhere:** the GitHub org README, Discussions, neweconomyhub.net, and direct messages to the first people you want to bring in.

## Pinned messages in #welcome

> **Welcome to Our Economy. Everyone's in.**
> We take everyone. We may not be able to pay you yet, but here's real work building an economy you'll own part of.
> **Where we are:** early and experimenting. We're not tracking hours yet. For now, contributions live in the open in our GitHub repos, and we'll design how they count together, once there's a group to decide with.
> Say hi in #general: who you are, what you're good at, and what you'd like to build.
> 🌐 oureconomy.net · 💻 github.com/our-economy

The welcome message above replaces the first version (2026-11-17), which said "Early contributions are recorded from day one" and asked for available hours. Hour tracking is deferred, so that wording overpromised. The pinned message in Discord was updated to this text on 2026-11-17.

> **Guidelines**
> 1. Be kind and assume good faith. People join from every country and background.
> 2. We're here to build together. Debate ideas, not people, and leave party politics at the door.
> 3. No spam, scams, unsolicited DMs or self-promotion.
> 4. No harassment, hate or explicit content.
> 5. Respect privacy: don't share what others told you privately.
> Breaking these can get you removed. Questions? Ask in #general.

## When to add structure

Add each piece only when it's needed:

- **The first few people join:** add `#introductions`, and a read-only `#announcements` channel if `#general` gets busy. Community mode allows announcement channels that others can follow.
- **A first project gets a lead:** give it its own channel, one per active project.
- **More than one person moderates:** add a Moderator role and give it access to `#moderator-only`.
- **There are several project channels:** set up Onboarding (Server Settings → Onboarding), so newcomers pick their projects and languages. Consider rules screening there too, so members accept the guidelines before posting.
- **The repo gets active:** connect a GitHub webhook that posts into a `#github-feed` channel.
- **Spam shows up:** raise verification to Medium, and turn on AutoMod's "Block Commonly Flagged Words".
