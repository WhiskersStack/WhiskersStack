import "./App.css";

import PixelCat from "./components/PixelCat";

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Cloud & AWS",
    items: [
      "AWS fundamentals",
      "S3",
      "CloudFront",
      "IAM",
      "EC2",
      "Lambda",
      "Route 53",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Linux", "Bash", "Vite", "npm"],
  },
  {
    title: "AI Learning",
    items: [
      "AI fundamentals",
      "Prompt engineering",
      "Applied AI tools",
      "AI-assisted development workflows",
    ],
  },
];

const breakSignalStack = ["HTML", "CSS", "Vanilla JavaScript", "Capacitor"];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight text-white"
          aria-label="WhiskersStack home"
        >
          WhiskersStack
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-1 text-sm text-slate-300 sm:gap-3">
            <li>
              <a className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 hover:text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 hover:text-white" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 hover:text-white"
                href="#featured-projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-6 pb-10">
        <section className="grid gap-10 py-16 md:grid-cols-[1.4fr_0.8fr] md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Cloud, AI & Frontend Portfolio
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Practical web projects with cloud-minded polish.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              WhiskersStack is the portfolio of Dan Kovalio, focused on clean
              frontend development, AWS cloud fundamentals, AI learning, and
              practical software projects that are built to be shared.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-projects"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-200"
              >
                View Featured Project
              </a>
              <a
                href="#skills"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View Skills
              </a>
            </div>
          </div>

          <aside
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/50"
            aria-label="WhiskersStack brand note"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-3">
                <PixelCat className="h-16 w-16" />
              </div>
              <div>
                <p className="text-sm font-semibold text-cyan-200">
                  WhiskersStack
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  A focused portfolio hub for cloud, frontend, and AI-adjacent
                  work.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-slate-800 py-16"
        >
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Built for clear, practical work.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                I build focused web projects with an emphasis on clean
                interfaces, cloud fundamentals, and tools that solve real
                workflow problems.
              </p>
              <p>
                My background in banking and fraud analysis shaped how I think
                about risk, investigation, accuracy, and operational detail.
                That same discipline carries into how I plan, build, and polish
                portfolio projects.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-24 border-t border-slate-800 py-16"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Frontend, cloud fundamentals, and applied AI learning.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="featured-projects"
          className="scroll-mt-24 border-t border-slate-800 py-16"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Featured Project
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">BreakSignal</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              BreakSignal is a separate project featured here as the first
              portfolio case study.
            </p>
          </div>

          <article className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold text-cyan-200">
                  Protect your eyes, posture, and focus.
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  BreakSignal
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  A simple static web and Android app for healthy break
                  reminders. It is intentionally lightweight, practical, and
                  separate from the WhiskersStack portfolio codebase.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.break-signal.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                  >
                    View live site
                  </a>
                  <a
                    href="https://github.com/WhiskersStack/BreakSignal"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    View GitHub repository
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Stack
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {breakSignalStack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100 ring-1 ring-cyan-300/20"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-7 text-slate-400">
                  Status: active portfolio project. Play Store availability is
                  not claimed here.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-slate-800 py-16"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Public links are intentionally minimal for now.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              More contact links will be added as the portfolio is finalized.
              For now, the public project work is available through GitHub.
            </p>
            <a
              href="https://github.com/WhiskersStack"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Visit WhiskersStack on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        <p>
          &copy; 2026 WhiskersStack. Built with React, TypeScript, Vite, and
          Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
