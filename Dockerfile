# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies against the lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

# Produces .output/ via the node-server preset, copied into the runtime stage.
COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

# Ship only the self-contained server output; no dev deps, no source.
COPY --from=build --chown=node:node /app/.output ./.output

# Drop privileges: the official node image ships a non-root `node` user.
USER node

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
