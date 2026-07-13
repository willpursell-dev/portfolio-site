import type { Metadata } from "next";
import { PageShell } from "@/app/_components/page-shell";

const socialLinks = [
  {
    label: "GitHub",
    description: "Code, projects, and experiments.",
    href: "https://github.com/willpursell-dev",
    displayHref: "github.com/willpursell-dev",
  },
  {
    label: "LinkedIn",
    description: "Professional background and updates.",
    href: "https://www.linkedin.com/in/wpursell/",
    displayHref: "linkedin.com/in/wpursell",
  },
  {
    label: "X",
    description: "Short notes and occasional work updates.",
    href: "https://x.com/willpursell_dev",
    displayHref: "x.com/willpursell_dev",
  },
];

export const metadata: Metadata = {
  title: "Contact - Will Pursell",
  description: "Social links for Will Pursell.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="max-w-2xl">
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-normal">
          Find me online
        </h1>
      </section>

      <section className="mt-12 max-w-2xl" aria-label="Social links">
        <div className="grid gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-md border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-medium underline-offset-4 group-hover:underline">
                    {link.label}
                  </h2>
                  <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
                    {link.description}
                  </p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {link.displayHref}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
