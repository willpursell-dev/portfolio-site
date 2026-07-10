import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Will Pursell</h1>
        <h2 className="my-4">Software Engineer in Athens, GA</h2>
        <p> I write code that solves problems for people. Anyone can use AI to write code today, but I believe that writing code is more that just a solution to a problem. Good code encompases the problem, the solution, and the experience of the people who will use it. I strive to write code that is not only functional, but also elegant and intuitive.</p>
        <div className="flex flec-col-2 space-x-4">
          <Link href="/projects" className="my-4 underline">
          My Projects
          </Link>
          <Link href="/" className="my-4 underline">
          My Resume
          </Link>
          <Link href="/" className="my-4 underline">
          My Articles
          </Link>
          <Link href="/" className="my-4 underline">
          Contact Me
          </Link>
        </div>
      </main>
    </div>
  );
}
