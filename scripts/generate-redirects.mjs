import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const redirects = JSON.parse(await readFile(path.join(root, "redirects.json"), "utf8"));
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
for (const [route, target] of Object.entries(redirects)) {
  if (!/^\/docs(?:\/[a-zA-Z0-9_.-]+)*$/.test(route) || route.split("/").includes("..")) {
    throw new Error(`Invalid redirect route: ${route}`);
  }
  const destination = new URL(target);
  if (destination.protocol !== "https:" || !["github.com", "agentplane.org"].includes(destination.hostname)) {
    throw new Error(`Invalid redirect target: ${target}`);
  }
  const directory = path.join(root, "build", route.slice(1));
  await mkdir(directory, { recursive: true });
  const escaped = escapeHtml(target);
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><title>Documentation moved</title><link rel="canonical" href="${escaped}"><meta http-equiv="refresh" content="0;url=${escaped}"></head><body><p>Read the <a href="${escaped}">canonical documentation</a>.</p><script>location.replace(${JSON.stringify(target)} + location.hash);</script></body></html>\n`;
  await writeFile(path.join(directory, "index.html"), html);
}
console.log(`ok: ${Object.keys(redirects).length} static compatibility redirects`);
