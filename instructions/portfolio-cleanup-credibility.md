# WhiskersStack Cleanup + Credibility Pass

You are working on my main portfolio project: WhiskersStack.

Project references:
- Live site: https://www.whiskersstack.com/
- GitHub repository: https://github.com/WhiskersStack/WhiskersStack
- Featured project for later: BreakSignal
- BreakSignal live site: https://www.break-signal.com/
- BreakSignal repository: https://github.com/WhiskersStack/BreakSignal

This task is Phase 1 only: cleanup and credibility.

Do not redesign the full site yet.
Do not add BreakSignal yet.
Do not add new major sections yet.
Do not add new packages unless absolutely necessary.
Do not change deployment settings.
Do not use `npm audit fix --force`.

## Goal

Make the existing WhiskersStack project cleaner, safer, and more credible before the main portfolio refresh.

This should be a small, reviewable cleanup branch.

## Required Git Workflow

Start from the current `main` branch.

Run:

```bash
git status
git branch
git pull
```

Create a new branch:

```bash
git checkout -b portfolio-cleanup-credibility
```

Do not commit until all checks pass.

## Main Cleanup Tasks

### 1. Confirm deployment drift

Inspect the repo and note any deployment configuration.

Check whether the local source appears to match the live site.

Do not change Render, Cloudflare, DNS, or deployment configuration.

In the final summary, report:
- Whether the repo appears to match the live site
- Any deployment files found
- Any suspected source/branch mismatch

### 2. Fix default Vite metadata

Update `index.html`.

Replace:
- Default Vite title
- Default Vite favicon

Add basic professional metadata:
- Title
- Meta description
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph URL
- Twitter card metadata

Use professional copy.

Suggested title:

```text
WhiskersStack | Cloud, AI & Frontend Portfolio
```

Suggested description:

```text
WhiskersStack is the professional portfolio of Dan Kovalio, focused on AWS cloud, AI learning, frontend development, and practical software projects.
```

Do not claim certifications, jobs, clients, or production usage beyond what is already confirmed.

### 3. Fix placeholder links

Find any `href="#"` links.

Replace them with real section anchors if the section exists.

If the section does not exist yet, use safe anchors that will be valid after the refresh, such as:
- `#projects`
- `#contact`

Do not leave dead placeholder links.

### 4. Remove debug/prototype styling

Remove visible debug borders, especially around the mascot.

Clean obvious leftover Vite template CSS from:
- `src/App.css`
- `src/index.css`

Keep styling functional.
Do not perform a full redesign.

### 5. Fix Tailwind/global CSS loading

Check whether Tailwind/global CSS is imported more than once.

Remove duplicate loading if present.

Ensure the app still builds and styles still apply correctly.

### 6. Fix mascot asset issue

Inspect `src/components/PixelCat.tsx` and the `public/` assets.

Fix the broken reference to `/sprites/blink.png` if the actual file name is different.

Do not rename assets unless that is clearly safer than changing the reference.

Add a small reduced-motion guard if the mascot animation currently ignores `prefers-reduced-motion`.

If there are timeouts in the mascot animation, clean them up on unmount if simple and safe.

Do not add an animation library.

### 7. Improve basic accessibility

Add clear focus-visible styles for links/buttons if missing.

Make CTA touch targets at least about 44px tall where practical.

Do not overcomplicate this.

### 8. Fix README credibility

Update `README.md`.

Remove any unconfirmed claims, especially:
- AWS Solutions Architect Associate
- Any certification not explicitly confirmed
- Any exaggerated cloud infrastructure claim
- Any fake production/client claim

Make the README accurate and professional.

README should include:
- Project name
- Short description
- Live site
- Tech stack
- Local development commands
- Build command
- Current status
- Short note that this is being refreshed as the main portfolio site

Do not add BreakSignal details yet unless only mentioned as a planned featured project.

### 9. Update stale year

Update copyright year from 2025 to 2026 if present.

### 10. Dependency handling

Run:

```bash
npm audit
```

If safe non-breaking updates are available, apply only compatible minor/patch updates.

Do not use:

```bash
npm audit fix --force
```

Do not jump major versions during this cleanup pass.

If advisories remain, report them clearly in the final summary.

## Required Checks

Run:

```bash
npm run lint
npm run build
```

If either fails, fix the issue before finalizing.

Also run:

```bash
git diff
```

Review the diff before committing.

## Commit

If everything passes, commit with:

```bash
git add .
git commit -m "Clean up portfolio credibility issues"
```

Do not push unless I explicitly ask.

## Acceptance Criteria

This task is complete only when:

- No default Vite title remains.
- No default Vite favicon remains.
- No dead `href="#"` links remain.
- Debug borders are removed.
- Broken mascot asset reference is fixed.
- Reduced-motion behavior is respected if animation exists.
- Duplicate Tailwind/global CSS loading is cleaned up.
- Basic metadata exists.
- README no longer contains unconfirmed certification claims.
- Copyright year is updated to 2026.
- `npm run lint` passes.
- `npm run build` passes.
- Final summary clearly lists files changed, commands run, and remaining risks.

## Final Output Format

Return:

### Branch
Name of branch used.

### Files Changed
List each changed file and what changed.

### Commands Run
Include results for:
- `git status`
- `npm audit`
- `npm run lint`
- `npm run build`

### Deployment Drift Finding
Explain whether local repo and live site appear aligned or mismatched.

### Remaining Issues
List only issues that still matter after this cleanup.

### Recommendation
Tell me the safest next step after this cleanup.
