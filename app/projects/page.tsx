import type { Metadata } from "next";
import { PageShell } from "@/app/_components/page-shell";
import { getProjects } from "@/app/_data/projects";
import { ProjectList } from "./_components/project-list";

export const metadata: Metadata = {
  title: "Projects - Will Pursell",
  description: "Selected software projects by Will Pursell.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageShell>
      <section className="max-w-2xl">
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Selected work
        </p>
        <h1 className="text-4xl font-semibold tracking-normal">Projects</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          A small collection of projects, prototypes, and patterns. The details
          here are intentionally concise, with room to replace the placeholder
          entries as the portfolio grows.
        </p>
      </section>
      <section className="mt-12">
        <ProjectList projects={projects} />
      </section>
    </PageShell>
  );
}
