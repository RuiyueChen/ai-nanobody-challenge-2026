# Deploy to GitHub Pages

## 1. Create the repository and upload the source

Create an empty **public** repository on GitHub, for example `ai-nanobody-challenge-2026`, with default branch `main`. Public repositories support GitHub Pages on GitHub Free.

Upload the contents of this project directory to the repository root, not a nested folder. Include `app/`, `public/`, `.github/workflows/deploy-pages.yml`, `next.config.ts`, `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts`, `postcss.config.mjs`, `.gitignore`, and the documentation. Ensure hidden files such as `.github/` and `public/.nojekyll` are included.

Do not upload `node_modules/`, `.next/`, `out/`, `.env` files, or the local `.git/` directory. `.openai/hosting.json` belongs to the earlier hosting provider and is not needed by GitHub Pages; omit it when manually uploading if desired.

### Upload using Git

Open a terminal in `nanobody-challenge-2026`. Replace `YOUR-USERNAME` and the repository name below. Use a separate remote name to preserve any existing hosting remote:

```sh
git add .github app/layout.tsx app/globals.css app/institutional.css next.config.ts public/.nojekyll README.md DEPLOYMENT.md
git commit -m "Prepare static GitHub Pages deployment"
git remote add github https://github.com/YOUR-USERNAME/ai-nanobody-challenge-2026.git
git push -u github HEAD:main
```

This project already has Git history containing the rest of the source. If a `github` remote already exists, inspect it with `git remote -v` and use the correct existing remote instead of adding another. Do not force-push over an existing repository. A new repository avoids unrelated history conflicts.

Alternatively use GitHub Desktop to publish the project as a public repository, ensuring the workflow file is included.

## 2. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. Open **Actions → Deploy to GitHub Pages → Run workflow**, selecting `main`.
5. Wait for both `build` and `deploy` to succeed. The deployment summary and Settings → Pages show the public URL.

If the initial push runs before Pages is enabled, enable it and rerun the workflow. Future pushes to `main` deploy automatically. If Actions are disabled by an organization policy, the repository administrator must allow the listed official GitHub actions and the `github-pages` deployment environment.

## 3. Public URL

For a project repository:

```text
https://YOUR-USERNAME.github.io/ai-nanobody-challenge-2026/
```

For a repository named `YOUR-USERNAME.github.io`:

```text
https://YOUR-USERNAME.github.io/
```

The workflow obtains the base path from `actions/configure-pages`; do not hard-code a username or repository name in the UI. Repository renames or custom-domain changes require rerunning the workflow so the build uses the new base path.

## 4. Verify the presentation

Open the URL in a signed-out/private browser. Check the hero image, navigation, direct links such as `/challenges/`, the FAQ, and demo submission confirmation. Visitors do not need a GitHub, OpenAI, or ChatGPT account. No VPN is required by the application, although reachability of GitHub Pages can vary with local network restrictions.

## Optional local repository-path check

PowerShell example:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/ai-nanobody-challenge-2026'
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Mount `out/` under `/ai-nanobody-challenge-2026/` in a static server; serving it directly at `/` does not reproduce a project-site URL. The base path is a build-time value. The exported files live directly in `out/`; GitHub Pages supplies the URL prefix.

## Deployment files

- `next.config.ts`: static export, trailing slashes, unoptimized images, environment-driven `basePath` and `assetPrefix`.
- `app/layout.tsx`: base-path-aware favicon and image URL variables.
- `app/globals.css` and `app/institutional.css`: resolve the same background artwork through those variables, with no visual changes.
- `public/.nojekyll`: preserves underscore-prefixed assets on static hosting.
- `.github/workflows/deploy-pages.yml`: reproducible install, build, artifact upload, and deployment.

Only `out/` is published. Source files and earlier hosting metadata are not served as website content. No GitHub repository has been created or uploaded automatically by these preparation steps.

References: [Next.js basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
