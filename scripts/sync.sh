#!/usr/bin/env bash
#
# Daily check / sync script — run this when you sit down to work.
# Pulls the latest changes from GitHub and shows what changed since
# yesterday so you can see what your collaborator put in.
#
# Usage:  npm run sync
# Or:     bash scripts/sync.sh
#
set -e

# Color helpers (skip if no terminal)
if [ -t 1 ]; then
  BOLD=$'\033[1m'
  DIM=$'\033[2m'
  ACCENT=$'\033[38;5;71m'   # sage
  GOLD=$'\033[38;5;179m'
  RESET=$'\033[0m'
else
  BOLD="" DIM="" ACCENT="" GOLD="" RESET=""
fi

echo
echo "${BOLD}${ACCENT}Pulling latest from GitHub…${RESET}"
git fetch --quiet origin

# Show what's incoming before we apply it
behind="$(git rev-list --count HEAD..origin/main 2>/dev/null || echo 0)"
ahead="$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)"

if [ "$behind" = "0" ] && [ "$ahead" = "0" ]; then
  echo "${DIM}You're already up to date with origin/main.${RESET}"
elif [ "$behind" != "0" ]; then
  echo
  echo "${BOLD}${GOLD}New commits coming in ($behind):${RESET}"
  git log --pretty=format:"  ${ACCENT}%h${RESET} %an · %ar%n    %s" HEAD..origin/main
  echo
  echo
  echo "${DIM}Pulling them in…${RESET}"
  git pull --rebase --quiet
  echo "${DIM}Done.${RESET}"
fi

if [ "$ahead" != "0" ]; then
  echo
  echo "${BOLD}${GOLD}You have local commits not yet pushed ($ahead):${RESET}"
  git log --pretty=format:"  ${ACCENT}%h${RESET} %s" origin/main..HEAD
  echo
  echo
  echo "${DIM}Run 'git push' when you're ready to share them.${RESET}"
fi

echo
echo "${BOLD}${ACCENT}Last 24 hours of activity:${RESET}"
git log --since="24 hours ago" --no-merges \
  --pretty=format:"  ${GOLD}%an${RESET} · %ar%n    %s" \
  | sed 's/^$/(quiet)/' \
  || echo "  ${DIM}(quiet day)${RESET}"

echo
echo
echo "${DIM}Tip: ask Claude 'what did Josephine change since yesterday?' for a friendlier summary.${RESET}"
echo
