import Link from "next/link";
import { PageShell } from "@/app/_components/page-shell";
import { getFeaturedProjects } from "@/app/_data/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <PageShell>
      <section className="max-w-2xl">
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Software Engineer in Athens, GA
        </p>
        <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
          Will Pursell
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          I write code that solves problems for people. Good software is more
          than a solution to a technical problem; it also carries the shape of
          the people who use it, maintain it, and trust it.
        </p>
      </section>

      <section className="mt-20 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Featured work
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-normal">
              Recent projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium underline underline-offset-4"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-8 grid gap-5">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-md border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium underline-offset-4 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
                    {project.summary}
                  </p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
