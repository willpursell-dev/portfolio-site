import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/app/_components/page-shell";
import { getProjectBySlug, getProjects } from "@/app/_data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found - Will Pursell",
    };
  }

  return {
    title: `${project.title} - Will Pursell`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <article>
        <Link
          href="/projects"
          className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          Back to projects
        </Link>

        <header className="mt-10 max-w-2xl">
          <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
            {project.year}
          </p>
          <h1 className="text-4xl font-semibold tracking-normal">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            {project.summary}
          </p>
        </header>

        <div className="mt-12 grid gap-10 border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 text-sm">
            <div>
              <h2 className="font-medium">Role</h2>
              <p className="mt-2 leading-6 text-zinc-600 dark:text-zinc-400">
                {project.role}
              </p>
            </div>
            <div>
              <h2 className="font-medium">Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-zinc-200 px-2 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {project.links.length > 0 ? (
              <div>
                <h2 className="font-medium">Links</h2>
                <div className="mt-3 flex flex-col items-start gap-2">
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
              </div>
            ) : null}
          </aside>

          <div>
            <h2 className="text-2xl font-medium tracking-normal">Overview</h2>
            <p className="mt-4 leading-8 text-zinc-700 dark:text-zinc-300">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
