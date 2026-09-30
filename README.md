# agentplane-web

Independent Astro + EmDash site for Agentplane.

Target origin: **https://v2.agentplane.org**

The marketing site and editorial runtime live here. Product documentation remains Git-native in `basilisk-labs/agentplane`.

## Development

```sh
bun install
bun run dev
```

EmDash admin: `/_emdash/admin`.

## Validation

```sh
bun run check
```

## Deployment

The Cloudflare Worker, D1 database, R2 bucket, and the `v2.agentplane.org` Custom Domain are declared in `wrangler.jsonc`.

```sh
bun run deploy
```

See `CONTENT_ARCHITECTURE.md` for the Git/D1 ownership model.
