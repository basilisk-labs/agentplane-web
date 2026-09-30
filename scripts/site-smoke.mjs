const base = process.env.BASE_URL || "http://localhost:3000";
for (const route of ["/", "/about/", "/examples/", "/blog/"]) {
  const response = await fetch(new URL(route, base));
  if (!response.ok) throw new Error(`${route}: HTTP ${response.status}`);
  const html = await response.text();
  for (const text of ["Docs", "Quickstart", "npm i -g agentplane"]) {
    if (!html.includes(text)) throw new Error(`${route}: missing ${text}`);
  }
  if (!html.includes("https://github.com/basilisk-labs/agentplane/blob/main/docs/")) {
    throw new Error(`${route}: missing canonical documentation link`);
  }
}
console.log(`ok: 4 static routes at ${base}`);
