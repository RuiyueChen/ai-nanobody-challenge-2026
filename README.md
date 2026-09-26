# AI-Designed Nanobody Challenge 2026

An international scientific competition platform for AI-driven microbial nanobody design with experimental validation.

This is a presentation prototype. Registration, login, and submissions are simulated in the browser. No database, authentication service, laboratory connection, or secrets are required.

## Technology

Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS 4. The project already uses static export (`output: 'export'`); `npm run build` writes the deployable website to `out/`.

## Local development

Use Node.js 22 and npm:

```sh
npm ci
npm run dev
```

For a production static build:

```sh
npm run build
```

Serve `out/` with a static HTTP server. `next start` is not supported for static exports. All routes are pre-generated, including challenges, rules, timeline, results, FAQ, submission, registration, and login.

## GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for uploading this project and enabling automatic deployment. Pushes to `main` run `.github/workflows/deploy-pages.yml` and publish `out/`.

The workflow reads the correct repository base path from GitHub Pages. Next.js links, JS/CSS bundles, favicon, and CSS background images use that path. An empty path retains normal root-domain deployment behavior. No remote fonts or external image services are required.

The current UI, content, components, and animations are unchanged by the deployment configuration.
