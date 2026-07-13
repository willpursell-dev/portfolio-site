export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sheepnote",
    title: "Sheepnote: Relationship Notes",
    year: "2026",
    summary:
      "An IOS app for remembering conversations, ideas, and follow-ups so that people can be more intentional in their relationships.",
    description:
      "Sheepnote is a personal CRM for friendship. It helps people remember the details of their relationships, so they can be more thoughtful and intentional in their interactions.",
    role: "Design, development, marketing",
    stack: ["Swift", "Apple Intelligence", "SwiftData", "IOS"],
    links: [{ label: "View Site", href: "https://www.sheepnote.io/" }],
    featured: true,
  },
  {
    slug: "focus-flo",
    title: "Focus Flo: Focus Timer",
    year: "2026",
    summary:
      "A lightweight task tracker and focus timer that helps people stay on task and avoid distractions.",
    description:
      "Focus Flo is a lightweight task tracker and focus timer that helps people stay on task and avoid distractions. It uses the Pomodoro technique to break work into intervals, with short breaks in between.",
    role: "Product thinking, interface design, prototype development",
    stack: ["Swift", "SwiftData", "Local-first UX"],
    links: [{ label: "View Site", href: "https://www.focusflo.io/" }],
    featured: true,
  },
];

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
