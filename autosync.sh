#!/bin/bash
# ─────────────────────────────────────────────
#  Josephine the Tutor — Auto-sync (silent)
#  Runs every 15 min via cron. Pulls latest from GitHub.
#  Logs activity to sync.log. Sends Mac notification
#  if Patrick (or anyone else) pushed new commits.
# ─────────────────────────────────────────────

REPO="/Users/josephinekim/Downloads/Josephine the Tutor"
LOG="$REPO/sync.log"
cd "$REPO" || exit 1

BEFORE=$(git rev-parse HEAD)
git fetch origin main --quiet 2>>"$LOG"
AFTER=$(git rev-parse origin/main)

# Bail out if there's nothing new
if [ "$BEFORE" = "$AFTER" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M')] up to date" >> "$LOG"
  exit 0
fi

# Don't pull if there are uncommitted local changes — too risky
if [ -n "$(git status --porcelain)" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M')] new commits on remote but local has uncommitted changes — skipping pull" >> "$LOG"
  osascript -e 'display notification "New changes from Patrick are waiting, but you have unsaved local edits. Run sync manually." with title "Josephine the Tutor" sound name "Glass"' 2>/dev/null
  exit 0
fi

# Pull
git pull --rebase origin main --quiet 2>>"$LOG"

# Get summary of new commits
NEW_COMMITS=$(git log "$BEFORE..$AFTER" --format='%an: %s' | head -3)
COUNT=$(git log "$BEFORE..$AFTER" --oneline | wc -l | tr -d ' ')

echo "[$(date '+%Y-%m-%d %H:%M')] pulled $COUNT new commit(s):" >> "$LOG"
echo "$NEW_COMMITS" | sed 's/^/  /' >> "$LOG"

# Append to DAILY_LOG.md (one block per change burst)
{
  echo ""
  echo "### $(date '+%Y-%m-%d %H:%M')"
  echo "$NEW_COMMITS" | sed 's/^/- /'
} >> "$REPO/DAILY_LOG.md"

# Mac desktop notification
FIRST=$(echo "$NEW_COMMITS" | head -1)
osascript -e "display notification \"$FIRST\" with title \"Josephine the Tutor — synced\" subtitle \"$COUNT new commit(s)\" sound name \"Pop\"" 2>/dev/null
