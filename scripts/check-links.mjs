import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const build = fileURLToPath(new URL("../build/", import.meta.url));
const origin = "https://agentplane.org";
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : file.endsWith(".html") ? [file] : [];
  });
}
const errors = new Set();
const pages = walk(build);
for (const route of ["index.html", "about/index.html", "examples/index.html", "blog/index.html"]) {
  if (!existsSync(path.join(build, route))) errors.add(`Missing page: ${route}`);
}
for (const file of pages) {
  const relative = path.relative(build, file).split(path.sep).join("/");
  const url = new URL(relative.replace(/index\.html$/, ""), `${origin}/`);
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const value = match[1].replaceAll("&amp;", "&");
    if (/^(?:data:|mailto:|tel:|javascript:|#)/.test(value)) continue;
    const target = new URL(value, url);
    if (target.origin !== origin) continue;
    const pathname = decodeURIComponent(target.pathname).replace(/^\/+/, "");
    const candidates = [pathname, `${pathname}.html`, `${pathname.replace(/\/$/, "")}/index.html`];
    if (!candidates.some((candidate) => {
      const destination = path.join(build, candidate);
      return existsSync(destination) && statSync(destination).isFile();
    })) errors.add(`${relative}: missing ${target.pathname}`);
  }
}
if (errors.size) throw new Error([...errors].join("\n"));
console.log(`ok: local links and assets across ${pages.length} static pages`);
