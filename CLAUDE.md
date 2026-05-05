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
