# Community chat: Discord

Set up November 17, 2026. This is the movement's first community space. It is kept deliberately minimal while the owner is the only member, and structure gets added as people join.

## What exists

- **Server:** "Our Economy", owned by the project owner's Discord account.
- **Access:** invite-only. It isn't listed in Discord's Server Discovery, and Community mode is off. Nobody can find or join it without an invite link.
- **Channels:**
  - `#welcome`: the first channel and where new members land. It holds the pinned welcome message (text below).
  - `#general`: everything else for now.
  - **General** (voice).
- **Roles:** none yet, beyond the owner and Discord's default `@everyone`.

## The invite link

**https://discord.gg/s6PzMtX6V9**

- It never expires, has no limit on uses, and sends people to `#welcome`.
- Anyone who has the link can join. It isn't a secret like a password, but treat it as "for people we've invited" until the server opens up.
- Discord also made a 30-day link automatically during setup (discord.gg/WkBeR5UnJ). Ignore it. It expires around December 17, 2026.
- **Manage links:** Server Settings → Invites. That page lists every active link and lets you revoke one.
- **If the link leaks or attracts spam:** revoke it, generate a new one with "Never" expiry, and update every place listed below.

## Where the link may appear

- **Public or private is still open** (see `docs/DECISIONS.md`). Until it's decided, share the link directly (DM, email, in person) and keep it off public pages: putting it on oureconomy.net, the GitHub org README, Discussions or neweconomyhub.net makes the server public.
- There is no sign-up form (dropped for v0.1), so the link can't be hidden behind one.
- If the server goes public, do the "Going public" steps below *before* the link goes on a public page.

## Pinned welcome message

> **Welcome to Our Economy. Everyone's in.**
> We take everyone. We may not be able to pay you yet, but here's real work building an economy you'll own part of.
> **Where we are:** early and experimenting. We're not tracking hours yet. For now, contributions live in the open in our GitHub repos, and we'll design how they count together, once there's a group to decide with.
> Say hi in #general: who you are, what you're good at, and what you'd like to build.
> 🌐 oureconomy.net · 💻 github.com/our-economy

The first version of this message (set up 2026-11-17) said "Early contributions are recorded from day one" and asked for available hours. It was replaced because hour tracking is deferred. If Discord still shows the old text, update it there.

## When to add structure

Add each piece only when it's needed:

- **The first few people join:** add `#introductions`, and a read-only `#announcements` channel if `#general` gets busy.
- **A first project gets a lead:** give it its own channel, one per active project.
- **More than one person moderates:** add a Moderator role.
- **The repo gets active:** connect a GitHub webhook that posts into a `#github-feed` channel.
- **Going public:** turn on Community mode, add a rules or guidelines channel, set verification to Medium and set up onboarding questions (which project, which language).
