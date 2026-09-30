# agentplane-web

[![Website CI](https://github.com/basilisk-labs/agentplane-web/actions/workflows/site.yml/badge.svg)](https://github.com/basilisk-labs/agentplane-web/actions/workflows/site.yml)

The independent static website for [Agentplane](https://agentplane.org), the Git-native control plane for coding agents.

This repository owns the homepage, blog, examples, presentation assets, styling, and GitHub Pages deployment. Product documentation and CLI code remain in [basilisk-labs/agentplane](https://github.com/basilisk-labs/agentplane). Documentation links open canonical files in that repository. This site does not import documentation, build the CLI, or depend on its CI. `redirects.json` preserves old documentation URLs as static links to canonical source files; update that mapping here when a linked page moves.

## Develop

Use Node.js 24 and Bun 1.4.2.

```sh
bun install --frozen-lockfile --ignore-scripts
bun run start
```

## Validate and build

```sh
bun run check
```

This typechecks the site, checks content, generates static HTML into `build/`, and validates local links and assets. To preview the production build:

```sh
bun run serve
bun run smoke:site
```

## Publish

The `Website CI` workflow checks pull requests. Pushes to `main` and manual runs on `main` build and deploy to GitHub Pages. Enable Pages with **GitHub Actions** as its source and configure `agentplane.org` as the custom domain. No workflow in the framework repository triggers this deployment.

Blog posts live in `blog/`, pages in `src/pages/`, shared content in `src/data/`, and static assets in `static/`. Update product links when canonical documentation moves. Keep `CONTENT.md` as the homepage editorial guide.

## License

[MIT](LICENSE). Website source extracted from [basilisk-labs/agentplane](https://github.com/basilisk-labs/agentplane).
