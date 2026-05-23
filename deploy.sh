#!/usr/bin/env bash
# AI Study Helper — one-shot deploy script.
# Usage:
#   bash deploy.sh web        # deploy web backend to Railway
#   bash deploy.sh mobile     # build iOS + Android via EAS
#   bash deploy.sh all        # both
set -euo pipefail

TARGET="${1:-web}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

say() { printf "\n\033[1;35m▸ %s\033[0m\n" "$*"; }
fail() { printf "\n\033[1;31m✗ %s\033[0m\n" "$*"; exit 1; }
ok() { printf "\033[1;32m✓ %s\033[0m\n" "$*"; }

ensure_tool() {
  local cmd="$1" npm_pkg="$2"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    say "Installing $cmd…"
    npm install -g "$npm_pkg"
  fi
}

deploy_web() {
  say "Preflight"
  [ -f apps/web/.env.local ] || { cp .env.example apps/web/.env.local; fail "Created apps/web/.env.local — please fill in GEMINI_API_KEY (minimum) and run again."; }
  grep -q "^GEMINI_API_KEY=[^[:space:]]\+" apps/web/.env.local || fail "GEMINI_API_KEY missing in apps/web/.env.local"

  say "Build"
  pnpm install --frozen-lockfile
  pnpm --filter @ash/web build
  ok "Build passed"

  ensure_tool railway @railway/cli

  if ! railway whoami >/dev/null 2>&1; then
    say "Railway login required (browser will open)…"
    railway login
  fi

  if [ ! -f .railway/project.json ] && [ ! -f ~/.railway/config.json ]; then
    say "Railway link (pick or create project)…"
    railway init || true
  fi

  say "Setting env vars on Railway from .env.local"
  # shellcheck disable=SC2046
  while IFS='=' read -r k v; do
    [ -z "$k" ] && continue
    case "$k" in \#*) continue ;; esac
    [ -z "${v:-}" ] && continue
    railway variables --set "$k=$v" >/dev/null 2>&1 || true
  done < <(grep -v '^\s*#' apps/web/.env.local | grep '=')

  say "Deploying"
  railway up --detach
  ok "Deployment triggered. Check progress: railway open"
}

deploy_mobile() {
  ensure_tool eas eas-cli
  if ! eas whoami >/dev/null 2>&1; then
    say "EAS login required…"
    eas login
  fi
  cd apps/mobile
  say "Building iOS (preview)…"
  eas build --platform ios --profile preview --non-interactive || true
  say "Building Android (preview)…"
  eas build --platform android --profile preview --non-interactive || true
  ok "EAS builds triggered. Watch progress: eas build:list"
}

case "$TARGET" in
  web)    deploy_web ;;
  mobile) deploy_mobile ;;
  all)    deploy_web; deploy_mobile ;;
  *) fail "Usage: bash deploy.sh {web|mobile|all}" ;;
esac
