import Link from "next/link";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/", label: "Resume" },
  { href: "/", label: "Articles" },
  { href: "/", label: "Contact" },
];

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 sm:px-10 sm:py-14">
        <header className="mb-20 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <Link
            href="/"
            className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            Will Pursell
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-600 dark:text-zinc-400">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="flex flex-1 flex-col">{children}</div>
      </main>
    </div>
  );
}
