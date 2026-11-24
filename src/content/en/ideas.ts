// The Ideas section: short, living pages with our current thinking.
// Metadata lives here (typed). Each page's text lives in ideas/<slug>.md,
// so anyone can suggest a change on GitHub without touching code.
// Content in this file and in ideas/*.md is licensed CC BY-SA 4.0.

export type IdeaStatus = "draft" | "taking-shape" | "agreed";

export type IdeaGroup = "build" | "how";

export type Idea = {
  slug: string;
  title: string;
  summary: string;
  group: IdeaGroup;
  status: IdeaStatus;
  updated: string; // ISO date, YYYY-MM-DD
  // Optional link to a specific discussion (e.g. a Discord thread).
  // Falls back to the Discord invite.
  discussUrl?: string;
};

export const ideas: Idea[] = [
  {
    slug: "two-economies",
    title: "Two economies, side by side",
    summary:
      "The main economy is good at many things, but it isn't built to make room for everyone. Our Economy is a second economy, built next to it, for what it can't do.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "where-we-fit",
    title: "Where we fit: the solidarity economy",
    summary:
      "Co-ops and community projects have built economies around working together for over a century. We're part of that family, with a proposal for how it could grow.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "why-we-care",
    title: "Why we care",
    summary:
      "We're building this for ourselves and for each other. We believe most people are more fulfilled when everyone can do well.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "who-its-for",
    title: "Who it's for",
    summary:
      "Anyone left out, badly served or worn out by the main economy, and anyone who simply wants something different.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "any-amount-of-time",
    title: "Any amount of time counts",
    summary:
      "To include everyone, an economy has to work for people who only have a few hours to give.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "your-mix",
    title: "Your mix, your choice",
    summary:
      "People and companies can split their work, spending and savings between the two economies, and change the mix over a lifetime.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "why-now",
    title: "Why now",
    summary:
      "The tools to do this have never been cheaper. And the longer we wait, the fewer people will have the spare time to start.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "built-for-upheaval",
    title: "Built for upheaval",
    summary:
      "An economy designed to keep working through bad years, and when machines can do most of the work.",
    group: "build",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "producing-for-each-other",
    title: "Producing for each other",
    summary:
      "Instead of only competing to sell into the main economy, we make things for each other, and buy from each other.",
    group: "how",
    status: "draft",
    updated: "2026-11-24",
  },
  {
    slug: "practice-companies",
    title: "Practice companies, growing up together",
    summary:
      "New companies start in groups that use each other's work, and grow up together instead of alone.",
    group: "how",
    status: "draft",
    updated: "2026-11-24",
  },
];

export const ideasText = {
  meta: {
    title: "Our current thinking | Our Economy",
    description:
      "Short pages on what we're trying to build, how it could work, and what's still open. All of it is a draft.",
  },
  nav: {
    home: "Home",
    ideas: "Our thinking",
  },
  index: {
    heading: "Our current thinking",
    intro:
      "Short pages on what we're trying to build and how it could work. None of it is settled. It's here to start conversations, so read, disagree, and tell us what's missing.",
    groups: {
      build: "What we're trying to build",
      how: "How it could work",
    } satisfies Record<IdeaGroup, string>,
    comingHeading: "Coming as we work them out",
    coming: [
      "Ownership in two layers: your company and a shared fund",
      "Mutual commitments: what we promise each other",
      "How we might organize, and how a company moves through stages",
      "Recording what people give",
      "A lab, not a blueprint: the experiments we want to try",
      "How existing companies and co-ops can take part",
      "Where you can help: software and everything else",
      "Open questions",
      "What this isn't",
    ],
  },
  status: {
    draft: "Draft",
    "taking-shape": "Taking shape",
    agreed: "Agreed",
  } satisfies Record<IdeaStatus, string>,
  updatedLabel: "Last updated",
  notice:
    "This is our current thinking, and it will change as more people join. It settles only once there are enough of us to decide together. So far it's mostly written by the founder.",
  discuss: {
    heading: "What do you think?",
    body: "Disagree, or see something missing? Come and talk about it, or suggest a change to this page.",
    discordCta: "Talk about it on Discord",
    discordHint: "Start a conversation in #general.",
    editCta: "Suggest a change on GitHub",
  },
  back: "All pages",
};
