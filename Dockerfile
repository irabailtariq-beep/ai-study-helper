# Alternative to Railway/Nixpacks: classic Docker build.
# Build:  docker build -t ai-study-helper .
# Run:    docker run -p 3000:3000 -e GEMINI_API_KEY=... ai-study-helper
FROM node:20-bookworm-slim AS base
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

FROM base AS deps
WORKDIR /repo
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/core/package.json packages/core/package.json
COPY packages/ai-client/package.json packages/ai-client/package.json
COPY packages/ui/ packages/ui/ 2>/dev/null || true
RUN pnpm install --frozen-lockfile --filter @ash/web...

FROM base AS build
WORKDIR /repo
COPY --from=deps /repo/node_modules ./node_modules
COPY --from=deps /repo/packages ./packages
COPY --from=deps /repo/apps/web/node_modules ./apps/web/node_modules
COPY . .
RUN pnpm --filter @ash/web build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /repo/apps/web ./apps/web
COPY --from=build /repo/packages ./packages
COPY --from=build /repo/node_modules ./node_modules
COPY --from=build /repo/package.json ./package.json
COPY --from=build /repo/pnpm-workspace.yaml ./pnpm-workspace.yaml
EXPOSE 3000
CMD ["pnpm", "--filter", "@ash/web", "start", "--", "-p", "3000"]
