# Dockerfile for Next.js App (Simple Version - Using Yarn - No Lockfile)
# WARNING: Not using a lockfile can lead to non-reproducible builds.

# ---- Builder Stage ----
# Use an official Node.js LTS image. Match your development version (e.g., 18, 20).
FROM node:18-alpine AS builder
LABEL maintainer="DevOops"

# Set working directory
WORKDIR /app

# Copy only package.json
COPY package.json ./

# Install all dependencies needed for building using Yarn
# This will resolve dependencies based on package.json and may generate a new lockfile inside the image
RUN yarn install

# Copy the rest of the application code
# Use .dockerignore to exclude node_modules, .next, etc.
COPY . .

# Build the Next.js application using Yarn
RUN yarn build

# Remove development dependencies after build
# This reinstalls only production dependencies based on package.json
RUN rm -rf node_modules
# Install only production dependencies
RUN yarn install --production

# ---- Runner Stage ----
# Use a minimal Node.js image for the final stage
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production
# Optionally, set the port Next.js listens on (default is 3000)
# ENV PORT=3000

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from the builder stage
# Copy production node_modules
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
# Copy the built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# Copy public assets
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# Copy package.json (needed for yarn start)
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
# Copy next.config.js (or .ts) if it contains runtime configurations
COPY --from=builder --chown=nextjs:nodejs /app/next.config.ts ./next.config.ts
# NOTE: yarn.lock is NOT copied as it wasn't used for install

# Change ownership of the working directory
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application using Yarn
CMD ["yarn", "start"]

