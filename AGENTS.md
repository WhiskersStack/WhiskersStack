# WhiskersStack Project Instructions

You are working on my main portfolio project: WhiskersStack.

Project references:
- Live site: https://www.whiskersstack.com/
- GitHub repository: https://github.com/WhiskersStack/WhiskersStack
- Featured project to include: BreakSignal
- BreakSignal live site: https://www.break-signal.com/
- BreakSignal GitHub repository: https://github.com/WhiskersStack/BreakSignal

WhiskersStack is my main professional portfolio website. It should present me as a developer focused on cloud, AWS, AI, frontend, and practical software projects.

The site should become a clean, professional portfolio hub, not just a playful landing page.

## Main Goal

Update and polish WhiskersStack so it becomes my primary portfolio website.

The site should:
- Present WhiskersStack as my main developer brand.
- Clearly show who I am and what I build.
- Feature BreakSignal as a real portfolio project.
- Link to GitHub projects and live demos.
- Look professional enough to share with recruiters, coworkers, managers, and LinkedIn.
- Keep the cat/Whiskers identity, but reduce anything that feels too childish or joke-heavy.
- Preserve a creative identity while making the site credible.

## Current Project State

The project is currently a React + TypeScript + Vite + Tailwind CSS app.

Allowed stack for this portfolio:
- React
- TypeScript
- Vite
- Tailwind CSS
- HTML
- CSS

Do not migrate the project to another framework unless explicitly requested.

Do not add:
- Backend
- Database
- Authentication
- External APIs
- Heavy animation libraries
- Unnecessary dependencies
- Over-engineered architecture

This should remain a simple, fast, static portfolio site.

## Important Distinction: WhiskersStack vs BreakSignal

WhiskersStack and BreakSignal are separate projects.

WhiskersStack:
- Main portfolio website.
- React / TypeScript / Vite / Tailwind is allowed.
- Can include project cards, personal profile, skills, contact links, and case studies.

BreakSignal:
- Separate static web app and Android app.
- Core web app must stay plain HTML, CSS, and Vanilla JavaScript.
- Do not rewrite BreakSignal in React.
- Do not modify the BreakSignal repository unless I explicitly ask.
- In WhiskersStack, only reference BreakSignal as a featured portfolio project with links, screenshots, description, and technical summary.

## Brand Direction

WhiskersStack should feel like:
- Professional
- Calm
- Sharp
- Technical
- Slightly playful
- Cloud-focused
- Portfolio-ready

The cat/whiskers theme is allowed, but it should be subtle and polished.

Avoid:
- Too many cat jokes
- Meme-like copy
- Overly silly language
- Unprofessional phrasing
- Fake claims
- Placeholder text
- Coming soon sections unless truly needed

Good tone examples:
- "Cloud-focused developer building practical web and productivity tools."
- "Projects built with clean frontend architecture, AWS deployment practices, and production-minded polish."
- "A focused portfolio of cloud, frontend, and AI-adjacent projects."

Bad tone examples:
- "Powered by cat energy."
- "No dogs allowed."
- "Meowgic."
- Joke-heavy README language.

## Personal Positioning

Present me as:
- A developer studying and building in AWS cloud and AI.
- A fraud analyst with banking experience transitioning into cloud / AI / technical roles.
- Someone building real, deployable portfolio projects.
- Someone with practical frontend and cloud foundations.

Do not invent experience.

Do not claim certifications unless they are confirmed.

Important:
- Do not claim AWS Solutions Architect Associate unless I explicitly confirm it.
- If certifications are mentioned, only mention confirmed certifications.
- Keep career wording honest, polished, and credible.

## Must-Fix Items

Audit and fix obvious stale or placeholder items.

Known issues to check and fix:
- Replace the default Vite page title.
- Replace the default Vite favicon.
- Remove unused default Vite CSS.
- Remove debug borders from components.
- Replace `href="#"` placeholder links with real links or proper section anchors.
- Update copyright year to 2026.
- Review README for outdated or exaggerated claims.
- Make README match the current actual project.
- Make the homepage feel like a serious portfolio, not a prototype.
- Ensure the site works well on desktop and mobile.
- Ensure build and lint pass before final summary.

## Recommended Site Structure

Build or refactor the homepage into these sections:

1. Hero
   - Name/brand: WhiskersStack
   - Short professional tagline
   - Short intro paragraph
   - Primary CTA: View Projects
   - Secondary CTA: GitHub or Contact

2. About
   - Brief professional summary
   - Cloud/AWS direction
   - Frontend development background
   - AI learning direction
   - Banking/fraud analysis background as a strength

3. Featured Projects
   Include BreakSignal as the first featured project.

   BreakSignal card should include:
   - Name: BreakSignal
   - Tagline: Protect your eyes, posture, and focus.
   - Description: A simple static web and Android app for healthy break reminders.
   - Stack: HTML, CSS, Vanilla JavaScript, Capacitor for Android
   - Links:
     - Live site: https://www.break-signal.com/
     - GitHub: https://github.com/WhiskersStack/BreakSignal
   - Status: Release-candidate / Play Store preparation, if accurate at the time of editing.

   Add other project cards only if already present or clearly relevant. Do not invent fake projects.

4. Skills
   Suggested categories:
   - Frontend: React, TypeScript, JavaScript, HTML, CSS, Tailwind
   - Cloud: AWS fundamentals, S3, CloudFront, IAM, VPC, EC2, Lambda, Route 53
   - Tools: Git, GitHub, Linux, Bash, Docker basics
   - AI learning: AI fundamentals, prompt engineering, applied AI tools

5. Contact / Links
   Include:
   - GitHub
   - LinkedIn if available in the repo or provided by me
   - Email only if already public or explicitly provided

6. Footer
   - Clean copyright
   - WhiskersStack brand
   - No excessive jokes

## Design Requirements

The design should be modern and portfolio-grade.

Preferred visual direction:
- Dark or calm neutral background
- Clean cards
- Soft gradients
- Strong typography
- Good spacing
- Clear hierarchy
- Subtle cat/whisker accent
- Professional but memorable

Avoid:
- Overcrowding
- Tiny text
- Hard-to-read contrast
- Debug borders
- Random bright colors
- Overuse of emoji
- Excessive animations

Responsive requirements:
- Mobile-first layout
- Looks good on desktop, tablet, and mobile
- No horizontal scrolling
- Buttons are easy to tap
- Project cards stack cleanly on small screens

Accessibility:
- Use semantic HTML where possible.
- Use proper alt text for mascot/images.
- Use accessible color contrast.
- Use visible focus states.
- Do not rely on color alone for meaning.
- Respect reduced motion if adding animation.

## Code Quality Rules

Keep the implementation simple and clean.

Use:
- Small components if useful
- Clear naming
- Reusable data arrays for project cards and skills if appropriate
- TypeScript types where useful
- Tailwind classes consistently

Avoid:
- Over-abstraction
- Large unnecessary component trees
- Premature routing
- Adding React Router unless multiple real pages are needed
- Adding state management libraries
- Adding animation libraries

Before finishing, run:

```bash
npm install
npm run lint
npm run build
```

If `npm install` is already done, still run:

```bash
npm run lint
npm run build
```

Do not ignore build or lint errors.

## README Requirements

Update README so it accurately describes the portfolio.

README should include:
- Project name
- Short description
- Live site link
- Tech stack
- Featured projects
- Local development commands
- Build command
- Deployment notes if known
- Honest current status

Remove or rewrite:
- Outdated certification claims
- Placeholder AWS infrastructure claims
- Excessive cat jokes
- Coming soon sections that do not reflect actual work
- Anything that makes the project look abandoned

Suggested README tone:
Professional, concise, lightly branded.

## Deployment Awareness

The current live site is:
https://www.whiskersstack.com/

Do not change deployment provider or deployment flow unless needed.

If deployment configuration is unclear:
- Do not guess.
- Report what you found.
- Suggest the safest next step.

## Git Workflow

Before making changes:

```bash
git status
git branch
git pull
```

Work on a new branch, not directly on main.

Suggested branch name:

```bash
portfolio-refresh-breaksignal
```

Commit message example:

```bash
Refresh portfolio and feature BreakSignal
```

Do not force push.

Do not delete existing work unless it is clearly unused template code or broken placeholder content.

## Definition of Done

The task is done only when:
- Homepage is professional and updated.
- BreakSignal is featured clearly.
- Placeholder links are removed or fixed.
- Default Vite title/favicon are replaced.
- Debug styling is removed.
- README is updated.
- Mobile layout is checked.
- `npm run lint` passes.
- `npm run build` passes.
- Final summary lists:
  - Files changed
  - What changed
  - Tests/build commands run
  - Any remaining recommendations
