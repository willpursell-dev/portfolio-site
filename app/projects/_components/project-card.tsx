import Link from "next/link";
import type { Project } from "@/app/_data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-md border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-medium tracking-normal">
            <Link
              href={`/projects/${project.slug}`}
              className="underline-offset-4 hover:underline"
            >
              {project.title}
            </Link>
          </h2>
          <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
            {project.summary}
          </p>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {project.year}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded border border-zinc-200 px-2 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="font-medium underline underline-offset-4"
        >
          View project
        </Link>
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
