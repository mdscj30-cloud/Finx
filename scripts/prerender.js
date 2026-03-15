/**
 * scripts/prerender.js
 * Generates static HTML for each marketing route using the Vite SSR bundle.
 * Runs automatically as part of: npm run build
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distClient = resolve(__dirname, '../dist');
const ssrBundle  = resolve(__dirname, '../.ssr/entry-server.js');

// Load the built SSR bundle
const { render } = await import(ssrBundle);

// index.html template (client build output)
const template = readFileSync(resolve(distClient, 'index.html'), 'utf-8');

// All public marketing routes to prerender
// Private/portal routes (/client/*, /cpa/*, /login, /onboarding) are excluded
const ROUTES = [
  '/',
  '/pricing',
  '/about',
  '/contact',
  '/careers',
  '/privacy-policy',

  // Services
  '/services/ai-bookkeeping',
  '/services/cpa-support',
  '/services/tax-preparation',
  '/services/virtual-cfo',
  '/services/cpa-bookkeeping',
  '/services/cpa-outsourced-support',
  '/services/by-industry',
  '/services/by-location',

  // Solutions
  '/solutions/cpa',
  '/solutions/smb',
  '/solutions/tax-advisory',
  '/formation',

  // Blog & content hubs
  '/blog',
  '/blog/cpa',
  '/case-studies',
  '/comparisons',
  '/glossary',

  // Country pages
  '/usa',
  '/uk',
  '/australia',
  '/netherlands',
  '/egypt',
  '/uae',

  // Partnerships
  '/partnerships/cpa-white-label',
];

let success = 0;
let errors = 0;

for (const route of ROUTES) {
  try {
    const { appHtml, helmet } = render(route);

    // Inject Helmet-collected head tags
    const headTags = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join('\n    ');

    let fullHtml = template
      // Replace app shell placeholder with rendered HTML
      .replace('<!--app-html-->', appHtml)
      // Inject per-route head tags just before </head>
      .replace('</head>', `    ${headTags}\n  </head>`);

    // Write to dist/<route>/index.html
    const routePath =
      route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`;

    const filePath = resolve(distClient, routePath);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, fullHtml, 'utf-8');

    console.log(`  ✓  ${route}`);
    success++;
  } catch (err) {
    // Non-fatal: if a route fails, the SPA fallback still works
    console.error(`  ✗  ${route}: ${err.message}`);
    errors++;
  }
}

console.log(`\nPrerender complete: ${success} OK, ${errors} failed\n`);
