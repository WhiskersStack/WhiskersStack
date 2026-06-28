# Portfolio Visual Differentiation

You are working on the WhiskersStack portfolio refresh branch.

Branch:
`portfolio-dark-content-refresh`

Project references:
- WhiskersStack live site: https://www.whiskersstack.com/
- WhiskersStack repo: https://github.com/WhiskersStack/WhiskersStack
- Featured project: BreakSignal
- BreakSignal live site: https://www.break-signal.com/
- BreakSignal repo: https://github.com/WhiskersStack/BreakSignal

## Problem

The current WhiskersStack UI feels too similar to BreakSignal.

That is not acceptable.

WhiskersStack is the main professional portfolio hub. BreakSignal is a separate productivity/break-reminder app. They should feel connected only through ownership and quality, not through identical visual language.

## Goal

Revise the WhiskersStack UI so it has a distinct portfolio identity while preserving the professional content already added.

This is a visual-differentiation pass, not a full content rewrite.

## Core Direction

WhiskersStack should feel like:

- A developer portfolio hub
- A cloud/frontend/AI workspace
- Sharp, polished, and recruiter-friendly
- Slightly creative and subtly cat-branded
- More like a professional project index / technical profile than a productivity command center

BreakSignal should feel like:

- A calm productivity command center
- A break-reminder utility
- Focused on eyes, posture, focus, and healthy work rhythms

Do not let WhiskersStack look like another BreakSignal screen.

## What Must Change

Differentiate WhiskersStack from BreakSignal through layout, visual rhythm, and design language.

Change at least several of these:

- Overall page composition
- Hero layout
- Card shapes and density
- Section rhythm
- Accent treatment
- Background treatment
- Project card design
- Typography scale or hierarchy
- Visual motifs

Prefer an identity such as:

- Technical portfolio console
- Cloud map / stack board
- Developer dossier
- Project index
- Clean editorial profile with technical cards
- Subtle grid/layer system

Avoid making it feel like:

- A timer app
- A productivity dashboard
- A wellness app
- A clone of the BreakSignal layout
- Generic dark SaaS landing page

## Strong Recommendation

Use a more distinctive structure:

1. Hero as a split technical profile panel:
   - Left: strong positioning statement
   - Right: compact "stack signal" or "profile card" with AWS/frontend/AI highlights

2. Add a slim "current focus" strip:
   - AWS cloud
   - AI learning
   - Frontend projects
   - Banking/fraud analysis background

3. Make skills feel like a structured stack map, not generic cards.

4. Make BreakSignal card look like a project case study tile, not another app dashboard card.

5. Use the mascot as a small signature mark, not a central UI object.

## Visual Rules

Allowed:

- Dark mode
- Subtle gradients
- Grid or blueprint-like background
- Thin borders
- Monospace micro-labels
- Sharp panels
- Small whisker/cat accent
- Professional color accents

Avoid:

- Same BreakSignal-style command-center card layout
- Same color balance if it makes both sites feel identical
- Large glowing cards everywhere
- Too much cyan everywhere
- Joke-heavy mascot treatment
- Big playful cat focus
- Overdesigned animations
- New animation libraries

## Content Rules

Preserve the main content intent:

- WhiskersStack is Dan Kovalio's professional portfolio.
- It focuses on AWS cloud learning, AI learning, frontend development, and practical projects.
- Banking/fraud analysis should be framed as strength: investigation, risk thinking, operational judgment, attention to detail.
- BreakSignal remains the first featured project.

Do not invent:

- Certifications
- Jobs
- Clients
- Production usage
- Play Store availability
- Cloud architecture that does not exist

## Technical Constraints

Keep using:

- React
- TypeScript
- Vite
- Tailwind CSS

Do not add:

- Backend
- Database
- Router
- Authentication
- External APIs
- Heavy animation packages
- New UI libraries
- Extra npm packages unless absolutely necessary

Keep it static, fast, and simple.

## Files to Inspect

Review and update only what is necessary:

- `src/App.tsx`
- `src/index.css`
- `src/App.css`
- `src/components/PixelCat.tsx`
- `index.html`
- `README.md` only if the visual/content direction changes enough to require it

## Specific Cleanup Opportunity

If `src/App.css` only contains a tiny leftover rule such as `#root { min-height: 100vh; }`, move that rule into `src/index.css` or remove it if unnecessary, then remove the `import "./App.css";` line from `src/App.tsx`.

## Acceptance Criteria

The task is complete only when:

- WhiskersStack no longer feels visually identical to BreakSignal.
- The homepage still feels professional and recruiter-safe.
- BreakSignal is still featured accurately.
- The cat/whisker identity is subtle.
- No fake claims are added.
- No placeholder links are introduced.
- No unnecessary dependencies are added.
- Mobile layout remains clean.
- Focus-visible styles remain intact.
- Reduced-motion behavior remains respected.
- `npm run lint` passes.
- `npm run build` passes.

## Required Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status
```

Also inspect the diff:

```bash
git diff main..portfolio-dark-content-refresh --stat
git diff main..portfolio-dark-content-refresh
```

## Final Output Format

Return:

### Visual Verdict

Explain whether WhiskersStack now feels meaningfully different from BreakSignal.

### Files Changed

List files changed and what changed.

### Design Direction

Briefly describe the new visual identity.

### BreakSignal Accuracy

Confirm BreakSignal remains separate and accurately represented.

### Commands Run

List each command and result.

### Remaining Concerns

List anything still worth checking before merge.

### Recommendation

Tell me whether to:

- review locally
- open PR
- merge
- make one more small fix
