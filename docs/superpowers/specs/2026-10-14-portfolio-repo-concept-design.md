# Portfolio: repo concept (branches, versions, changelog, CI/CD results)

Status: design approved in conversation on 2026-10-14. Awaiting review of this written spec.

## 1. Intent

**Outcome.** Ricardo's portfolio presents a senior QA automation engineer / SDET career the way a software repository presents its history: a branch graph, versioned releases, a changelog per role, and CI/CD run results for projects. The metaphor is the domain: the work is test automation and pipelines.

**Readers.** Engineering managers and recruiters hiring for remote senior roles, and prospective consulting clients, with equal weight. A reader must be able to find Experience and Projects instantly, so the repo vocabulary lives inside sections, not in the headings.

**Success criteria.**
- In under 30 seconds a reader sees seniority (role statement, career graph, latest release) and can contact Ricardo.
- Every status shown on the page (pass, fail, in progress) is real, fetched from GitHub or clearly marked as a saved snapshot.
- The page stays scannable for a non-developer: plain headings, readable prose, no jargon needed to find anything.

**Builds on** the uncommitted redesign already on branch `feat/portfolio-redesign-plan-a83c67` (light "inspection report" look: Archivo + Source Serif 4, Section gutter layout, i18n EN/ES/FR, Formspree contact form). This spec changes the career strip, Experience, Projects and Footer, and adds the repo plumbing. Everything else is unchanged.

## 2. Decisions (all confirmed by the user)

| Topic | Decision |
|---|---|
| How literal | "Changelog + pipelines": Experience is a changelog, the career strip is a branch graph, Projects show CI runs. Not a full GitHub-style interface. |
| Look | Light page (current palette) with dark instrument panels for the branch graph and pipeline runs. |
| Headings and nav | Plain: About, Experience, Skills, Projects, Contact. |
| CI data source | Live from the GitHub API at build time, with a committed snapshot as fallback. |
| Site as its own subject | Included: `CHANGELOG.md`, version in the footer, a GitHub Actions workflow, footer shows its real status. |
| Languages | EN, ES, FR all updated; new strings translated by Claude, proofread by Ricardo. |

## 3. Versions and branches

Each role is a release. The version is **computed**, never typed:

- Sort roles by start month, ascending.
- `major` = 1 + the order in which the role's employer first appears.
- `minor` = number of earlier roles at the same employer.
- Display as `v{major}.{minor}`.

Result: Sherwin-Williams v1.0, Synergyca v2.0, Rulesware QA v3.0, Rulesware Pega developer v3.1, Encora v4.0, Avenue Code v5.0, Lumenalta v6.0.

Branch = the role's existing `kind`: `dev` or `qa`. `lib/data/career.ts` gains an `employer` key per role (needed to group Rulesware's two roles) and exports `version(role)` as a pure function.

## 4. Branch graph (hero)

Replaces `components/CareerStrip.tsx` with `components/BranchGraph.tsx`, in the same place under the hero.

- A dark panel holding three tracks on the shared time axis (first month worked to last): `dev` lane on top, `main` trunk in the middle with release tags, `qa` lane below.
- Each role is a segment on its branch's lane. It forks from `main` at the role's start month and merges back at its end month. A node at the fork carries the version tag (`v6.0`). Pega developer (v3.1) forks onto `dev` while the QA branch (v3.0) is still open. The overlap, 05/2018 to 07/2018, is accurate and intentional: Ricardo contributed to both roles as the team needed while transitioning from QA to Pega development. The graph therefore shows two branches live at once, not a clean hand-off, and the data keeps both date ranges as they are.
- Hover or keyboard focus on a node shows `{company}, {title}, {start} to {end}` in a readout line inside the panel; the idle readout is the one-sentence career summary. Nodes are links to `#exp-{id}` and open the collapsed development roles, exactly as the strip does today.
- Lines are SVG with non-scaling strokes. Labels are HTML positioned over the SVG so text never scales. Company labels appear only when measured text fits (the existing canvas measurement approach). Mobile keeps tags and drops company names.
- Motion: lines draw in once on load (one orchestrated moment). `prefers-reduced-motion` renders the final state.
- Accessibility: the panel is a labeled region, nodes have full aria-labels, status never relies on color alone.

## 5. Experience as a changelog

`components/Experience.tsx` renders each role as a release entry:

```
v6.0   qa            05/2023 to 11/2025   Remote
Senior QA Automation Engineer, Lumenalta LLC (formerly Clevertech)
  Added     End-to-end automation platform with Cypress and TypeScript...
  Changed   Containerized the framework and moved it into Azure Pipelines...
  Fixed     Flaky pipelines stabilized.
  Cypress, TypeScript, Azure DevOps, Docker, Postman, SQL, Nx, React Testing Library
```

- The existing highlights are sorted into groups, wording changed as little as possible, no new claims or numbers:
  - **Added**: built, introduced, set up, wrote, designed, validated, served as.
  - **Changed**: refactored, optimized, moved, containerized, enforced, improved.
  - **Fixed**: stabilized, triaged, troubleshot, resolved.
  - Empty groups are not rendered.
- The group labels are translated: Added / Changed / Fixed, Añadido / Cambiado / Corregido, Ajouté / Modifié / Corrigé.
- Dictionary shape per role: `{ title, company, changes: { added: string[]; changed: string[]; fixed: string[] } }`. `Translations` is typed explicitly (not inferred from `en`) so empty arrays type-check in all three languages.
- QA roles show by default; the three development roles stay behind the existing disclosure button and hash deep-link behavior.

## 6. Projects with pipeline results

`components/Projects.tsx` keeps the ledger. Two projects get a `components/PipelinePanel.tsx` (dark panel, last 5 runs):

- `k6` ← `rcastaneda-dev/k6-typescript-portfolio`
- `testcafe` ← `rcastaneda-dev/AutomationPractice-Theorem`

The other four projects have no CI runs and keep their repo link only; no placeholder panel.

Each run row: status icon plus word (passed, failed, running, cancelled), workflow name, `#run`, branch, duration, a localized date, and a link to the real run page on GitHub. A footer line reads "From GitHub Actions, fetched {date}" or "Saved snapshot from {date}" so the page never implies liveness it does not have.

**Data layer** (`lib/data/ci.ts`):
- `getCiRuns()` runs at build in the server `app/page.tsx` (now `async`) and passes plain data to the client components.
- It calls `GET https://api.github.com/repos/{repo}/actions/runs?per_page=5` with `Accept: application/vnd.github+json` and, if present, `Authorization: Bearer ${GITHUB_TOKEN}`.
- Mapping: `status`/`conclusion` to `passed | failed | running | cancelled`; duration is `updated_at - run_started_at`; `html_url` as the link.
- **Failure handling:** any network error, non-200, rate limit or empty result falls back to `lib/data/ci-snapshot.json` for that repo. If neither exists the panel is omitted. The build never fails because of CI data; it logs a one-line warning.
- Static export means the data refreshes on redeploy, not live. Vercel's shared build IPs can hit GitHub's anonymous rate limit, so an optional `GITHUB_TOKEN` (fine-grained, public-read, no scopes) is documented in `.env.example`; the fallback covers its absence.
- Today's real failures (k6 runs #5, #2, #1; TestCafe E2E on `main`) are shown as they are.

## 7. The site as its own subject

- `CHANGELOG.md` in Keep a Changelog format: `[1.0.0]` for this redesign, `[0.1.0]` for the original site. `package.json` version becomes `1.0.0`.
- `.github/workflows/ci.yml` on push and pull request to `main`: `npm ci`, `npx tsc --noEmit`, `npm run lint`, `npm run build`, with `GITHUB_TOKEN` passed to the build.
- Footer: `v{package version}` plus the latest `main` run status of that workflow, linked, read through the same `getCiRuns()` (repo `rcastaneda-dev/portfolio`). If no run exists yet the status is omitted. The first status appears after the branch merges to `main` and the workflow runs once.

## 8. Dark panel tokens

Added to `tailwind.config.ts`; text contrast measured on the panel background:

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `panel` | `#0E1A23` | panel background | 16.0:1 against Bench |
| `panel-ink` | `#E8EEF1` | primary text | 15.1:1 |
| `panel-muted` | `#9FB0BB` | secondary text | 7.9:1 |
| `pass-dark` | `#3DBE82` | passed, QA lane | 7.5:1 |
| `fail-dark` | `#F2877A` | failed | 7.2:1 |
| `run-dark` | `#E5A04A` | running, in progress | 7.9:1 |

Panel edges and lane lines use `panel-ink` at low opacity (graphics, not text). Focus rings inside panels use `pass-dark`.

## 9. Files

**Create:** `components/BranchGraph.tsx`, `components/PipelinePanel.tsx`, `lib/data/ci.ts`, `lib/data/ci-snapshot.json`, `CHANGELOG.md`, `.github/workflows/ci.yml`.

**Modify:** `tailwind.config.ts`, `app/globals.css` (graph draw-in), `app/page.tsx` (async, fetch), `components/Hero.tsx`, `components/Experience.tsx`, `components/Projects.tsx`, `components/Footer.tsx`, `lib/data/career.ts`, `lib/data/projects.ts` (repo mapping), `lib/i18n/translations/{en,es,fr}.ts`, `lib/i18n/types.ts` if needed, `.env.example`, `package.json`, `README.md`.

**Delete:** `components/CareerStrip.tsx`.

**Unchanged:** About, Skills, Contact, ContactForm, Section, Navigation, LanguageSwitcher, layout, i18n context.

## 10. Verification

- `npx tsc --noEmit`, `npm run lint` (or ESLint with the project config when run from this nested worktree), `npm run build`.
- Version derivation checked against the seven expected values above with a throwaway script; no test framework is added.
- Browser checks at 375, 768 and 1280px in EN, ES and FR: no horizontal scroll, graph labels fit or hide, readout works on hover and focus, nodes link to entries, development roles open from a node, panels wrap cleanly.
- CI data: real fetch succeeds; a deliberately bad repo name forces the snapshot path; with both missing the panel is omitted.
- Accessibility: keyboard order, focus visible on dark panels, status readable without color, reduced motion shows the final graph state.
- The generated `ci.yml` is syntax-checked locally; its first real run happens on GitHub after merge.

## 11. Open items for Ricardo

1. **Inventory repo.** `github.com/rcastaneda-dev/nanis-essentials-inventory` returns 404 for logged-out visitors, so the project's "Code" link is likely dead. Options: make the repo public, remove the link, or keep it. Default if unanswered: keep the link and flag it again at review.
2. **Optional `GITHUB_TOKEN`** in Vercel to avoid anonymous rate limits.
3. **Formspree ID**, **availability line wording**, and the **reply-time sentence** from the earlier work are still pending.
4. **ES and FR proofreading**, including the new group labels.
5. **Assessment-repo titles** that name hiring companies are unchanged unless Ricardo decides otherwise.

## 12. Out of scope

Dark mode for the whole page, a full GitHub-style interface, live (client-side) CI polling, adding CI to repos that have none, a Playwright smoke suite for the portfolio itself (a natural follow-up), an OG image, and any change to the project repos.
