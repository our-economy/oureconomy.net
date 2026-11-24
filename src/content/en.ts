// All page text lives here, so translating the site later means adding a
// sibling file (es.ts, fr.ts...) rather than hunting through components.
// Keep sentences plain and short: they should translate well.
// Content in this file is licensed CC BY-SA 4.0 (see LICENSE-CONTENT).

export const links = {
  discord: "https://discord.gg/s6PzMtX6V9",
  github: "https://github.com/our-economy",
  repo: "https://github.com/our-economy/oureconomy.net",
  goodFirstTasks:
    "https://github.com/our-economy/oureconomy.net/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+task%22",
  hub: "https://neweconomyhub.net",
};

export const en = {
  meta: {
    title: "Our Economy. Everyone's in.",
    description:
      "We take everyone. We may not be able to pay you yet, but here's real work building an economy you'll own part of.",
  },
  hero: {
    name: "Our Economy",
    tagline: "Everyone's in.",
    offer:
      "We take everyone. We may not be able to pay you yet, but here's real work building an economy you'll own part of.",
    joinCta: "Join us on Discord",
    githubCta: "See the work on GitHub",
  },
  why: {
    heading: "Why",
    paragraphs: [
      "The main economy is good at many things, but it isn't built to make room for everyone. Lots of people are left out of it, badly served by it, or worn out by it. We'd like to start from everyone being in.",
      "Co-ops and community projects have shown for over a hundred years that people can own the places they work and look after each other. But co-ops mostly stay small, and each one starts from scratch. Success in one rarely helps start the next.",
      "We want to try something different: a second economy, built next to the main one. A network of co-owned projects and companies, made so that each one helps start the next.",
    ],
  },
  ideas: {
    heading: "The ideas we want to test",
    items: [
      {
        title: "Everyone's in",
        body: "Anyone who wants to help has a place, whatever their skills or background.",
      },
      {
        title: "Everyone's an owner",
        body: "You'd own part of the project you work on, and everyone would share in a common fund that helps start new teams.",
      },
      {
        title: "Built to snowball",
        body: "Every project should help start the next one, with people, tools and money.",
      },
      {
        title: "A lab, not a company",
        body: "Groups try different ways of working and share what they learn, including what didn't work.",
      },
      {
        title: "Alongside the economy we have",
        body: "Not against anything. We trade with the wider economy and build next to it.",
      },
    ],
    moreIntro: "Want the longer version, with the questions we haven't answered yet?",
    moreCta: "Read our current thinking",
  },
  now: {
    heading: "Where we are, honestly",
    items: [
      "We're at the very beginning, and we're experimenting.",
      "Nobody is paid yet.",
      "We're not tracking hours yet. For now, contributions live in the open in our GitHub projects, where anyone can see who did what.",
      "How contributions turn into ownership is something we'll design together, once there's a group to decide with.",
    ],
    closing:
      "If that sounds like the right kind of early to you, come and say hi.",
  },
  today: {
    heading: "What you can do today",
    steps: [
      {
        title: "Join the Discord",
        body: "Say who you are, what you're good at and what you'd like to build.",
        cta: "Open Discord",
        href: links.discord,
      },
      {
        title: "Pick up a task",
        body: "Our projects are open source. Tasks marked \"good first task\" are a good place to start.",
        cta: "See good first tasks",
        href: links.goodFirstTasks,
      },
      {
        title: "Bring an experiment",
        body: "Have an idea for a new way to work or own things together? Bring it to the Discord.",
        cta: "Share an idea",
        href: links.discord,
      },
    ],
  },
  footer: {
    hubIntro: "Looking for other groups building new kinds of economy?",
    hubLink: "Explore New Economy Hub",
    source: "Source code",
    license:
      "Code: AGPL-3.0. Text: CC BY-SA 4.0.",
  },
};

export type Content = typeof en;
