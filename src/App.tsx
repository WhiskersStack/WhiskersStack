import PixelCat from "./components/PixelCat";

const focusItems = [
  {
    label: "Cloud focus",
    value: "AWS fundamentals",
  },
  {
    label: "AI track",
    value: "Learning + applied workflows",
  },
  {
    label: "Frontend",
    value: "React, TypeScript, Tailwind",
  },
  {
    label: "Analytical base",
    value: "Banking + fraud analysis",
  },
];

const skills = [
  {
    layer: "01",
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    layer: "02",
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
    layer: "03",
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Linux", "Bash", "Vite", "npm"],
  },
  {
    layer: "04",
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

const profileSignals = [
  "Static portfolio hub",
  "Cloud-learning direction",
  "Frontend project polish",
  "AI-assisted workflows",
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] text-stone-100">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(124,58,237,0.16),transparent_24%),linear-gradient(120deg,rgba(15,23,42,0.92),rgba(8,9,13,0.98)_55%)]" />

      <header className="relative mx-auto flex max-w-7xl flex-col items-start gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-stone-100"
          aria-label="WhiskersStack home"
        >
          <span className="grid h-9 w-9 place-items-center border border-amber-300/40 bg-stone-950/80 shadow-[6px_6px_0_rgba(245,158,11,0.16)] transition group-hover:border-amber-200">
            <PixelCat className="h-5 w-5" />
          </span>
          <span>WhiskersStack</span>
        </a>
        <nav className="w-full sm:w-auto" aria-label="Primary navigation">
          <ul className="flex items-center justify-between gap-1 font-mono text-xs uppercase tracking-[0.18em] text-stone-400 sm:justify-start sm:gap-2">
            <li>
              <a
                className="inline-flex min-h-11 items-center border border-transparent px-2.5 py-2 transition hover:border-stone-700 hover:text-stone-100 sm:px-3"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center border border-transparent px-2.5 py-2 transition hover:border-stone-700 hover:text-stone-100 sm:px-3"
                href="#skills"
              >
                Stack
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center border border-transparent px-2.5 py-2 transition hover:border-stone-700 hover:text-stone-100 sm:px-3"
                href="#featured-projects"
              >
                Work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top" className="relative mx-auto max-w-7xl px-5 pb-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-24">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
              Portfolio dossier / cloud + frontend + AI
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.06em] text-stone-50 sm:text-6xl lg:text-7xl">
              Developer portfolio hub for practical, deployable projects.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
              WhiskersStack is Dan Kovalio&apos;s professional portfolio for clean
              frontend development, AWS cloud learning, AI exploration, and
              practical software projects that are built to be evaluated.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-projects"
                className="inline-flex min-h-11 items-center justify-center border border-amber-300 bg-amber-300 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone-950 shadow-[8px_8px_0_rgba(245,158,11,0.18)] transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                View case study
              </a>
              <a
                href="#skills"
                className="inline-flex min-h-11 items-center justify-center border border-stone-700 bg-stone-950/60 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone-100 transition hover:border-violet-300 hover:text-violet-200"
              >
                Inspect stack
              </a>
            </div>
          </div>

          <aside
            className="border border-stone-700 bg-stone-950/80 p-5 shadow-[14px_14px_0_rgba(124,58,237,0.13)] lg:p-6"
            aria-label="WhiskersStack profile signal"
          >
            <div className="flex items-start justify-between gap-4 border-b border-stone-800 pb-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-violet-300">
                  Profile signal
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-50">
                  Dan Kovalio
                </h2>
              </div>
              <div className="border border-amber-300/30 bg-amber-300/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-amber-200">
                WS-01
              </div>
            </div>

            <dl className="mt-5 grid gap-3">
              {profileSignals.map((signal, index) => (
                <div
                  key={signal}
                  className="grid grid-cols-[3.5rem_1fr] items-center border border-stone-800 bg-stone-900/45"
                >
                  <dt className="border-r border-stone-800 px-3 py-3 font-mono text-xs text-stone-500">
                    0{index + 1}
                  </dt>
                  <dd className="px-3 py-3 text-sm text-stone-300">{signal}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section
          aria-label="Current focus"
          className="grid border-y border-stone-800 bg-stone-950/55 sm:grid-cols-2 lg:grid-cols-4"
        >
          {focusItems.map((item) => (
            <article
              key={item.label}
              className="border-b border-stone-800 p-4 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-100">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section id="about" className="scroll-mt-24 py-18 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            <div className="border-l-2 border-amber-300 pl-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                About
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-50 sm:text-4xl">
                Practical interfaces, analytical judgment, and cloud-minded
                execution.
              </h2>
            </div>
            <div className="grid gap-4 text-base leading-8 text-stone-300">
              <p>
                I build focused web projects with an emphasis on clean
                interfaces, cloud fundamentals, and tools that solve real
                workflow problems.
              </p>
              <p>
                My background in banking and fraud analysis shaped how I think
                about investigation, risk, accuracy, and operational detail.
                That same discipline carries into how I plan, build, and polish
                portfolio projects.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-14 sm:py-18">
          <div className="flex flex-col justify-between gap-4 border-b border-stone-800 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                Stack map
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-50 sm:text-4xl">
                Skills organized as a working stack.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-400">
              Grouped by practical use rather than presented as generic badges.
            </p>
          </div>

          <div className="mt-8 divide-y divide-stone-800 border border-stone-800 bg-stone-950/70">
            {skills.map((group) => (
              <article
                key={group.title}
                className="grid gap-4 p-5 md:grid-cols-[6rem_12rem_1fr] md:items-center"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">
                  Layer {group.layer}
                </p>
                <h3 className="text-lg font-bold text-stone-50">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="border border-stone-700 bg-stone-900/70 px-3 py-1.5 font-mono text-xs text-stone-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="featured-projects" className="scroll-mt-24 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-stretch">
            <div className="border border-stone-800 bg-stone-950/55 p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                Featured work
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-stone-50">
                BreakSignal
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300">
                BreakSignal is a separate project featured here as the first
                portfolio case study.
              </p>
            </div>

            <article className="relative overflow-hidden border border-stone-700 bg-stone-100 text-stone-950 shadow-[14px_14px_0_rgba(245,158,11,0.16)]">
              <div className="absolute right-0 top-0 hidden h-full w-24 bg-[repeating-linear-gradient(135deg,rgba(8,9,13,0.12)_0,rgba(8,9,13,0.12)_1px,transparent_1px,transparent_9px)] sm:block" />
              <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
                    Case study tile / separate project
                  </p>
                  <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950">
                    Protect your eyes, posture, and focus.
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700">
                    A simple static web and Android app for healthy break
                    reminders. It is intentionally lightweight, practical, and
                    separate from the WhiskersStack portfolio codebase.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://www.break-signal.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center border border-stone-950 bg-stone-950 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone-50 transition hover:bg-stone-800"
                    >
                      View live site
                    </a>
                    <a
                      href="https://github.com/WhiskersStack/BreakSignal"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center border border-stone-950 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-stone-200"
                    >
                      View GitHub repo
                    </a>
                  </div>
                </div>

                <div className="border border-stone-300 bg-white/70 p-5">
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-stone-500">
                    Build notes
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {breakSignalStack.map((item) => (
                      <li
                        key={item}
                        className="border border-stone-300 bg-stone-50 px-3 py-1.5 font-mono text-xs text-stone-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-stone-300 pt-5 text-sm leading-7 text-stone-600">
                    Status: active portfolio project. Play Store availability is
                    not claimed here.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
          <div className="grid gap-6 border border-stone-800 bg-stone-950/75 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-50">
                Public links are intentionally minimal for now.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                More contact links will be added as the portfolio is finalized.
                For now, the public project work is available through GitHub.
              </p>
            </div>
            <a
              href="https://github.com/WhiskersStack"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-violet-300 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-violet-100 transition hover:bg-violet-300 hover:text-stone-950"
            >
              GitHub profile
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-stone-800 px-5 py-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-stone-500 sm:px-6 lg:px-8">
        <p>
          &copy; 2026 WhiskersStack. Built with React, TypeScript, Vite, and
          Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
