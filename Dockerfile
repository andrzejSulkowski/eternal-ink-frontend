# docker build -t ei-frontend .
# docker run -p 3000:3000 ei-frontend
FROM oven/bun:debian AS base

# Install dependencies only when needed
FROM base AS deps



WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

RUN apt-get update && apt-get install -y wget && apt-get install -y curl
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Install wget and curl before creating the nextjs user
RUN apt-get update && apt-get install -y wget curl && rm -rf /var/lib/apt/lists/*

RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:bun .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:bun /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bun /app/.next/static ./.next/static

# Set the correct permissions for the nextjs user
RUN chown -R nextjs:bun /app

# Disabled switching to nextjs user for now
USER nextjs

EXPOSE 3000


CMD ["bun", "server.js"]
