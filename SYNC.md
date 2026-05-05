# Staying in sync

Two people work on this site (Patrick and Josephine), each with their own
local clone. There are three layers of "daily check" so you can see what
the other person changed and never end up out of sync.

---

## 1. Automatic daily digest (no setup)

Every morning at 9am Pacific, GitHub Actions opens a new issue titled
`Daily digest · [date]` summarizing the previous 24 hours of commits,
authors, and files touched.

If you Watch the repo (steps below), GitHub emails you when these issues
open. You'll get one email a day, ~9am.

**To enable per-issue notifications:**
1. Go to https://github.com/patrickparagas1/josephine-tutoring
2. Click the **Watch** dropdown (top right)
3. Pick **Custom** → check **Issues** → Apply

Or for everything (more emails, more visibility), pick **All Activity**.

The digest issue is auto-labeled `daily-digest` so you can filter or close
old ones.

---

## 2. Manual sync (run when you sit down to work)

Before you start editing, in your terminal:

```
cd path/to/josephine-tutoring
npm run sync
```

This pulls the latest code from GitHub and shows what changed since
yesterday. Takes 2 seconds.

If you forget — Claude Code will run it for you if you say *"sync me up"*.

---

## 3. Real-time per-commit notifications (optional)

If you want an email **every time** the other person pushes (more noise,
less waiting):

1. Same Watch button as above
2. Pick **All Activity**

You'll get an email within ~30 seconds of any push.

---

## What "stay connected in our own folders" actually means

Git is asynchronous. You can both edit at the same time, but you can't
see each other's typing the way Google Docs works.

The realistic flow:

- **Before working:** `npm run sync` (or `git pull`) to grab the latest.
- **After working:** ask Claude to commit + push. Or run `git push`.
- **If you push and it gets rejected:** the other person pushed first.
  Run `git pull --rebase` then `git push` again.
- **If you'll be touching the same file at the same time:** text each
  other. "Editing the FAQ now." For a 2-person project this is normal.

Vercel auto-deploys to **josephinethetutor.com** within ~30 seconds of
any push to `main`. So pushing = publishing.

---

## Quick reference

| Action | Command |
|---|---|
| Pull latest + see what's new | `npm run sync` |
| Run the site locally | `npm run dev` |
| Commit + push (Claude Code does this for you) | `git add . && git commit -m "msg" && git push` |
| If push is rejected | `git pull --rebase && git push` |
