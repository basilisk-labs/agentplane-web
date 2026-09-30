import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
  site: "https://v2.agentplane.org",
  output: "server",
  publicDir: "./static",
  adapter: cloudflare(),
  integrations: [
    react(),
    mdx(),
    emdash({
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "MEDIA" }),
    }),
  ],
  devToolbar: { enabled: false },
});
