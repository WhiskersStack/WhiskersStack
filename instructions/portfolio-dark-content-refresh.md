# WhiskersStack Phase 2 Instructions — Dark Portfolio Content Refresh

You are working on my main portfolio project: WhiskersStack.

Project references:
- Live site: https://www.whiskersstack.com/
- GitHub repository: https://github.com/WhiskersStack/WhiskersStack
- Featured project: BreakSignal
- BreakSignal live site: https://www.break-signal.com/
- BreakSignal GitHub repository: https://github.com/WhiskersStack/BreakSignal

This task is Phase 2: turn the cleaned WhiskersStack prototype into a real dark-mode portfolio homepage.

Phase 1 cleanup has already been merged and deployed. Do not redo Phase 1 unless you find a regression.

## Goal

Refresh the homepage into a professional dark-mode portfolio site.

The page should clearly present:
- WhiskersStack as the main portfolio brand.
- Dan Kovalio as a developer focused on AWS cloud, AI learning, frontend development, and practical projects.
- BreakSignal as the first featured project.
- A clean skills section.
- A contact section with links intentionally left empty or non-public for now.

The result should feel portfolio-ready, recruiter-readable, technical, and calm.

## Confirmed Direction

Use this direction:
- Dark mode by default.
- Professional first, subtle Whiskers/cat identity second.
- Keep the mascot, but make it smaller or more subtle.
- Add BreakSignal now as the only featured project.
- Do not add fake placeholder projects.
- Do not write explicit career-transition copy in the homepage.
- Do not include public email or LinkedIn yet.

## Tech Rules

Allowed:
- React
- TypeScript
- Vite
- Tailwind CSS
- HTML
- CSS

Do not add:
- Backend
- Database
- Authentication
- External APIs
- Heavy animation libraries
- New routing library
- Complex state management
- Unnecessary dependencies

Keep the site static, fast, and simple.

## Required Git Workflow

Start from latest `main`.

Run:

```bash
git status
git branch
git pull
```

Create a new branch:

```bash
git checkout -b portfolio-dark-content-refresh
```

Do not work directly on `main`.

Do not commit until lint and build pass.

## Required Homepage Structure

Create or refactor the homepage into these sections:

1. Hero
2. About
3. Skills
4. Featured Projects
5. Contact
6. Footer

A single-page layout is preferred. Do not add routing unless there is a strong reason.

## Design Direction

Create a dark-mode visual system.

Preferred feel:
- Dark minimal recruiter-friendly portfolio.
- Technical, calm, and polished.
- Subtle Whiskers/cat identity.
- Cloud/AI/dev atmosphere without looking like a gaming dashboard.

Suggested visual language:
- Dark background: near-black, slate, zinc, or deep navy.
- Cards: slightly lighter dark surfaces with soft borders.
- Accent: amber/orange, cyan, or blue-green. Pick one primary accent and use it consistently.
- Typography: clean and readable.
- Spacing: generous and calm.
- Mascot: smaller, subtle, not the main subject.

Avoid:
- Bright orange full-page background.
- Overly cute cat jokes.
- Meme language.
- Fake terminal clutter.
- Heavy animations.
- Low-contrast text.
- Placeholder links.
- Overcrowded cards.

## Hero Section

The hero should communicate value quickly.

Required content ideas:
- Brand/name: WhiskersStack
- Short tagline focused on cloud, AI, frontend, and practical projects.
- One short paragraph describing the portfolio.
- Primary CTA: jump to Featured Projects.
- Secondary CTA: jump to Skills or About.

Do not overstate experience.

Possible copy direction:

```text
Cloud, AI & Frontend Portfolio
```

Possible paragraph direction:

```text
A focused portfolio of practical web projects, AWS cloud learning, AI exploration, and clean frontend development.
```

You may improve the wording, but keep it concise and credible.

## About Section

Add a concise about section.

Present Dan honestly as:
- A developer building practical frontend and cloud-oriented projects.
- Someone focused on AWS cloud, AI learning, and professional project polish.
- Someone with analytical banking/fraud experience, but do not make the page mainly about career transition.

Do not include explicit wording like:
- "transitioning from banking into tech"
- "trying to get into tech"
- "aspiring developer"

Instead, frame it with calm confidence.

Example direction:

```text
I build practical, focused web projects with an emphasis on clean interfaces, cloud fundamentals, and tools that solve real workflow problems. My background in banking and fraud analysis sharpened how I think about risk, investigation, accuracy, and operational detail.
```

This is a direction, not mandatory exact copy.

## Skills Section

Create grouped skill cards.

Suggested groups:

### Frontend
- React
- TypeScript
- JavaScript
- HTML
- CSS
- Tailwind CSS

### Cloud & AWS
- AWS fundamentals
- S3
- CloudFront
- IAM
- EC2
- Lambda
- Route 53

### Tools & Workflow
- Git
- GitHub
- Linux
- Bash
- Vite
- npm

### AI Learning
- AI fundamentals
- Prompt engineering
- Applied AI tools
- AI-assisted development workflows

Only include skills that are reasonable and honest.

Do not claim professional mastery.

## Featured Projects Section

Add BreakSignal as the only featured project for now.

Do not add fake placeholder projects.

BreakSignal details:
- Name: BreakSignal
- Tagline: Protect your eyes, posture, and focus.
- Description: A simple static web and Android app for healthy break reminders.
- Stack: HTML, CSS, Vanilla JavaScript, Capacitor
- Live site: https://www.break-signal.com/
- GitHub: https://github.com/WhiskersStack/BreakSignal

Make it clear that BreakSignal is a separate project.

Do not rewrite BreakSignal.
Do not copy BreakSignal code into WhiskersStack.
Do not suggest moving BreakSignal to React.

Project card should include:
- Project name
- Short description
- Stack pills/tags
- Live link
- GitHub link
- Optional short status line if accurate and not overhyped

Do not claim Play Store availability unless explicitly confirmed.

## Contact Section

Add a contact/link section, but leave public contact links minimal for now.

Allowed links for now:
- GitHub organization/profile link if already known from repository context.
- Project links already used above.

Do not invent:
- LinkedIn URL
- Email address
- Phone number
- Resume link

If contact details are not available, write a simple neutral line such as:

```text
More contact links will be added as the portfolio is finalized.
```

This is acceptable for now, but do not make it look abandoned.

## Mascot / Whiskers Identity

Keep the cat/Whiskers identity, but make it refined.

Rules:
- Mascot can appear in the hero or brand area.
- It should be smaller or more subtle than before.
- It must not dominate the page.
- No debug border.
- Animation must respect reduced motion.
- Alt text should remain useful.

Avoid joke-heavy copy.

## Accessibility Requirements

Maintain or improve:
- Semantic sections.
- Clear heading hierarchy.
- Good color contrast.
- Keyboard focus states.
- Meaningful link text.
- Mobile touch targets around 44px where practical.
- Reduced-motion handling for mascot/animation.

Test at mobile width around 390px.

No horizontal scrolling.

## SEO / Metadata

Keep the existing professional metadata from Phase 1.

Update metadata only if the new copy makes a clear improvement.

Do not reintroduce:
- Vite title
- Vite favicon
- Placeholder metadata

## README

Update README only if needed to reflect the Phase 2 homepage refresh.

Do not add fake claims.

It is acceptable to add a short note that the homepage now includes:
- About
- Skills
- Featured project: BreakSignal
- Contact placeholder/minimal links

## Files Likely To Change

Likely files:
- `src/App.tsx`
- `src/App.css`
- `src/index.css`
- `README.md` if needed
- possibly `index.html` only if metadata needs refinement

Do not change deployment configuration.

## Validation Commands

Run:

```bash
npm run lint
npm run build
```

Also run:

```bash
git diff --check
```

If possible, run or manually check:
- Desktop layout
- Mobile layout around 390px width
- Button/link behavior
- Browser console
- Reduced-motion behavior if practical

## Acceptance Criteria

The task is complete only when:

- Site uses a dark-mode design.
- Homepage has Hero, About, Skills, Featured Projects, Contact, and Footer.
- BreakSignal appears as the first and only featured project.
- BreakSignal links are correct.
- No fake placeholder projects exist.
- Contact section does not invent email, LinkedIn, or resume links.
- Mascot is subtle and professional.
- No default Vite artifacts are reintroduced.
- No dead `href="#"` links exist.
- No debug styling exists.
- Mobile layout is clean.
- `npm run lint` passes.
- `npm run build` passes.
- `git diff --check` passes.

## Commit

After validation passes, commit with:

```bash
git add .
git commit -m "Refresh portfolio homepage in dark mode"
```

Push the branch:

```bash
git push -u origin portfolio-dark-content-refresh
```

Do not merge directly into `main` without review.

## Final Output Format

Return:

### Branch
Name of branch used.

### Files Changed
List each changed file and what changed.

### Content Added
Summarize the new homepage sections.

### BreakSignal Card
Confirm live and GitHub links.

### Commands Run
Include results for:
- `npm run lint`
- `npm run build`
- `git diff --check`

### QA Notes
Mention desktop/mobile checks and any issues.

### Remaining Issues
List anything still missing, especially contact links.

### Recommendation
Tell me whether this is ready for PR review.
