# nuxt-project

A small client-rendered (SPA) web app built with [Nuxt 3](https://nuxt.com). It
renders a single landing page with the Nuxt logo and links to the docs and
repository — a clean starting point for a Nuxt 3 application.

## Prerequisites

- **Node.js 20 or newer** (CI and the container image use Node 22)
- **npm 10+** (ships with recent Node)

## Quick start

```bash
npm install      # install dependencies (runs `nuxt prepare` automatically)
npm run dev      # start the dev server at http://localhost:3000
```

## Local development

| Command             | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Dev server with hot module replacement on port 3000   |
| `npm run build`     | Production build into `.output/` (node-server preset) |
| `npm run preview`   | Serve the production build locally                    |
| `npm run generate`  | Pre-render a fully static site                        |
| `npm run lint`      | ESLint (flat config) over the project                 |
| `npm run lint:fix`  | ESLint with autofix                                   |
| `npm run format`    | Format the codebase with Prettier                     |
| `npm run typecheck` | Type-check with `vue-tsc`                             |
| `npm test`          | Run the Vitest unit suite                             |

### Running the production build

```bash
npm run build
node .output/server/index.mjs   # or: npm run preview
```

### Docker

A multi-stage, rootless image is provided:

```bash
docker build -t nuxt-project .
docker run --rm -p 3000:3000 nuxt-project
```

## Architecture

```
app.vue              # root component: <NuxtLayout> wrapping <NuxtPage>
pages/index.vue      # the landing page (auto-routed to "/")
layouts/default.vue  # default layout + global styles
components/Logo.vue   # auto-imported Nuxt logo (SVG)
public/              # static assets served from the web root (favicon)
nuxt.config.ts       # Nuxt config: SPA mode (ssr: false), page <head>
test/                # Vitest specs (Nuxt test environment)
```

Key conventions:

- **Rendering mode:** `ssr: false` — the app is served as a single-page
  application, matching the original project's behaviour.
- **Auto-imports:** components under `components/` and pages under `pages/` are
  registered automatically; no manual imports or route table required.
- **Tooling:** ESLint flat config (`eslint.config.mjs`) with the Nuxt preset,
  formatting owned by Prettier (`.prettierrc.json`), and unit tests on Vitest
  via `@nuxt/test-utils`.

## Configuration

The app currently reads no runtime configuration or secrets. When that changes,
add typed values under `runtimeConfig` in `nuxt.config.ts` and expose them via
`NUXT_*` environment variables (commit a documented `.env.example`, never a real
`.env`). See the [Nuxt runtime config docs](https://nuxt.com/docs/guide/going-further/runtime-config).

## Migration notes

This project was migrated from **Nuxt 2 / Vue 2** (last touched in 2020, and now
end-of-life) to **Nuxt 3 / Vue 3**. Notable changes:

- Dropped `bootstrap` and `bootstrap-vue`, which were registered but entirely
  unused (no components rendered them and no CSS was loaded), so removing them
  changes nothing visually.
- `<Nuxt />` in the layout became `<slot />`; the SPA entry is now `app.vue`.
- Config moved to `nuxt.config.ts` (`head` under `app.head`).
- Tests moved from Jest to Vitest; TypeScript config now extends the generated
  `.nuxt/tsconfig.json`.

### Recommended follow-up: Nuxt 4

Nuxt 4 is now the latest stable major. The upgrade is largely mechanical for an
app this size (chiefly adopting the `app/` source directory), and is a sensible
next step once the Nuxt 3 baseline has settled. It was intentionally left out of
this change to keep the diff focused and reviewable.
