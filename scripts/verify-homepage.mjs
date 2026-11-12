import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://localhost:3100";
const redirected = [
  "/projects/product",
  "/components/home",
  "/components/workspace",
  "/unknown",
  "/unknown.html",
  "/blog/missing-article/",
  "/.env",
  "/posts/twentyfive.md",
  "/site.webmanifest",
];
for (const path of redirected) {
  for (const headers of [
    {},
    { RSC: "1", "Next-Router-Prefetch": "1" },
    {
      "x-middleware-subrequest":
        "middleware:middleware:middleware:middleware:middleware",
    },
  ]) {
    const response = await fetch(base + path, { redirect: "manual", headers });
    assert.equal(response.status, 307, path);
    assert.equal(
      new URL(response.headers.get("location"), base).pathname,
      "/",
      path,
    );
    const text = await response.text();
    assert.ok(!text.includes("Looking back at"), "Retired content leaked");
  }
}
for (const path of [
  "/",
  "/about",
  "/blog",
  "/blog/twentyfive",
  "/blog/lookingbackatdsc",
  "/projects",
  "/journey",
  "/workspace",
  "/images/workspace.png",
  "/favicon.ico",
  "/advaith.JPG",
  "/portrait-sketch.jpg",
  "/apple-touch-icon.png",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/_next/image?url=%2Fportrait-sketch.jpg&w=640&q=75",
]) {
  const r = await fetch(base + path, { redirect: "manual" });
  assert.equal(r.status, 200, path);
  if (path === "/opengraph-image")
    assert.match(r.headers.get("content-type"), /image\/png/);
}
for (const path of [
  "/api/test",
  "/_next/image?url=%2Fimages%2Fblog%2Fgraduation.jpg&w=640&q=75",
]) {
  assert.ok(
    [400, 404].includes(
      (await fetch(base + path, { redirect: "manual" })).status,
    ),
    path,
  );
}
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
assert.equal((sitemap.match(/<loc>/g) || []).length, 8);
assert.ok(sitemap.includes("https://advaith.co/"));
const html = await (await fetch(base)).text();
assert.ok(html.includes("I invest in early-stage startups at Y0."));
assert.ok(!html.includes("India Regional Lead"));
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
assert.ok(html.includes("application/ld+json"));
assert.ok(
  html.includes('rel="canonical" href="https://advaith.co"') ||
    html.includes('rel="canonical" href="https://advaith.co/"'),
);
assert.ok(
  !html.includes("https://www.googletagmanager.com/gtag/js"),
  "Analytics should initialize client-side",
);
assert.ok(!html.includes("Analytics preferences"));
assert.ok(!html.includes("clarity.ms"));
assert.ok(html.includes("https://advaithu.substack.com/"));
assert.ok(html.includes("Switch to dark mode"));
console.log(
  `PASS: ${redirected.length} paths × 3 request types, 18 public pages and assets, API/image isolation, sitemap and metadata`,
);
