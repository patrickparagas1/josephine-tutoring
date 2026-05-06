@AGENTS.md

# Josephine the Tutor — Project Instructions

## Auto-deploy workflow
This project deploys to **josephinethetutor.com** via Vercel on every push to `main`.

**Whenever Josephine asks for any change to the website:**
1. Make the edits to the relevant files
2. Commit with a clear message describing what changed
3. Push to `git push origin main`
4. Confirm the change is live (Vercel deploys in ~30 seconds)

Do this automatically — no need to ask for permission to push. Josephine expects changes to go live immediately.

## Pre-push build guard
A husky pre-push hook (`.husky/pre-push`) runs `npm run build` before
every push. If the build fails locally, the push is **rejected** and
the code never reaches GitHub or Vercel. This prevents broken commits
from triggering failed Vercel deploys (and the email pings).

**Setup happens automatically when you run `npm install`** — husky's
`prepare` script wires the hook into the local `.git/hooks` directory.

**Never push with `--no-verify`** unless you're truly certain the
build is broken because of a non-code reason (e.g., transient lockfile
issue) and you've coordinated with the other person.

**If your push gets rejected:** read the build error, fix it locally,
make a new commit, and push again.

## Editing components carefully
When editing files like `components/Testimonial.tsx`, replace content
in-place — don't append new function/type definitions on top of the
existing ones. The pre-push build catches these mistakes, but it's
cleaner to avoid them.

## Collaboration
- **Josephine** (josephineannkim) — content, copy, design direction
- **Patrick** (patrickparagas1) — repo owner, built the initial site
- Repo: https://github.com/patrickparagas1/josephine-tutoring
- Before making changes, run `git pull origin main` to get Patrick's latest work

## Site structure
- `/app` — pages (home, about, blog, contact, rates, subjects)
- `/components` — reusable UI (Hero, Nav, Footer, BookingForm, FAQ, Testimonial, etc.)
- `/public` — images and assets
- `/content/posts` — blog posts (Markdown)
- `/brand-assets` — logos, social media graphics

## Live site
josephinethetutor.com — Next.js 16, deployed on Vercel
