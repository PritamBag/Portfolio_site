// Post-build step: generates a real static HTML file per route (in docs/) with
// route-specific <title>/description/canonical/OG tags and server-rendered content
// baked in, plus a matching sitemap.xml. Runs after both the client build and the
// SSR build of src/entry-server.jsx.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "docs");
const SSR_DIR = join(ROOT, "dist-ssr");
const SITE_URL = "https://pritambag.in";
const DEFAULT_KEYWORDS =
  "Pritam Bag, software engineer, backend engineer, Python developer, FastAPI developer, Laravel developer, data pipelines, web scraping, Next.js, React Native, portfolio, Kolkata";

const escapeHtml = (str) =>
  String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const escapeAttr = (str) => escapeHtml(str);

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
}

function setMetaContent(html, matchAttr, matchValue, content) {
  const re = new RegExp(
    `(<meta\\s+${matchAttr}=["']${matchValue}["'][^>]*content=["'])[^"']*(["'][^>]*/?>)`,
    "i"
  );
  return html.replace(re, `$1${escapeAttr(content)}$2`);
}

function setCanonical(html, url) {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${escapeAttr(url)}" />`
  );
}

function setRootContent(html, contentHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${contentHtml || ""}</div>`);
}

function setOgType(html, type) {
  return html.replace(
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${escapeAttr(type)}" />`
  );
}

function injectJsonLd(html, jsonLd) {
  if (!jsonLd) return html;
  const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const scripts = entries
    .map((entry) => `    <script type="application/ld+json">\n${JSON.stringify(entry, null, 2)}\n    </script>`)
    .join("\n");
  return html.replace(/\s*<\/head>/, `\n${scripts}\n  </head>`);
}

function injectArticleMeta(html, article) {
  if (!article) return html;
  const tags = [];
  if (article.publishedTime) {
    tags.push(`    <meta property="article:published_time" content="${escapeAttr(article.publishedTime)}" />`);
  }
  if (article.author) {
    tags.push(`    <meta property="article:author" content="${escapeAttr(article.author)}" />`);
  }
  for (const tag of article.tags || []) {
    tags.push(`    <meta property="article:tag" content="${escapeAttr(tag)}" />`);
  }
  if (tags.length === 0) return html;
  return html.replace(/\s*<\/head>/, `\n${tags.join("\n")}\n  </head>`);
}

function buildPageHtml(template, route, meta, contentHtml) {
  let html = template;
  html = setTitle(html, meta.title);
  html = setMetaContent(html, "name", "description", meta.description);
  html = setMetaContent(html, "name", "keywords", meta.keywords || DEFAULT_KEYWORDS);
  html = setMetaContent(html, "property", "og:title", meta.title);
  html = setMetaContent(html, "property", "og:description", meta.description);
  html = setMetaContent(html, "property", "og:url", meta.canonical);
  html = setOgType(html, meta.ogType || "website");
  if (meta.image) {
    html = setMetaContent(html, "property", "og:image", meta.image);
    html = setMetaContent(html, "property", "og:image:alt", meta.title);
    html = setMetaContent(html, "name", "twitter:image", meta.image);
    html = setMetaContent(html, "name", "twitter:image:alt", meta.title);
  }
  html = setMetaContent(html, "name", "twitter:title", meta.title);
  html = setMetaContent(html, "name", "twitter:description", meta.description);
  html = setMetaContent(html, "name", "twitter:url", meta.canonical);
  html = setCanonical(html, meta.canonical);
  html = setRootContent(html, contentHtml);
  html = injectArticleMeta(html, meta.article);
  if (meta.jsonLd) html = injectJsonLd(html, meta.jsonLd);
  return html;
}

function writeRouteFile(route, html) {
  const outPath = route === "/" ? join(OUT_DIR, "index.html") : join(OUT_DIR, route, "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf-8");
  return outPath;
}

function buildSitemap(routes) {
  const priorities = {
    "/": "1.0",
    "/about": "0.9",
    "/projects": "0.8",
    "/services": "0.9",
    "/resume": "0.8",
    "/blog": "0.8",
    "/certifications": "0.6",
    "/contact": "0.5",
  };
  const changefreq = {
    "/": "monthly",
    "/blog": "weekly",
  };
  const urls = routes
    .map((route) => {
      const loc = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}/`;
      const priority = priorities[route] || (route.startsWith("/blog/") ? "0.7" : "0.6");
      const freq = changefreq[route] || (route.startsWith("/blog/") ? "monthly" : "monthly");
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function main() {
  if (!existsSync(join(OUT_DIR, "index.html"))) {
    throw new Error(`Client build not found at ${OUT_DIR}/index.html — run "vite build" first.`);
  }
  const ssrEntry = join(SSR_DIR, "entry-server.js");
  if (!existsSync(ssrEntry)) {
    throw new Error(`SSR bundle not found at ${ssrEntry} — run the SSR build first.`);
  }

  const { getAllRoutes, getMetaForRoute, renderRoute } = await import(pathToFileURL(ssrEntry).href);
  const template = readFileSync(join(OUT_DIR, "index.html"), "utf-8");
  const routes = getAllRoutes();

  const written = [];
  for (const route of routes) {
    const meta = getMetaForRoute(route);
    const contentHtml = renderRoute(route);
    if (!meta || contentHtml === null) {
      console.warn(`[prerender] Skipping ${route} — no meta or renderer found.`);
      continue;
    }
    const html = buildPageHtml(template, route, meta, contentHtml);
    const outPath = writeRouteFile(route, html);
    written.push(outPath);
  }

  writeFileSync(join(OUT_DIR, "sitemap.xml"), buildSitemap(routes), "utf-8");

  rmSync(SSR_DIR, { recursive: true, force: true });

  console.log(`[prerender] Wrote ${written.length} static pages + sitemap.xml to docs/`);
  for (const route of routes) console.log(`  ${route}`);
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
