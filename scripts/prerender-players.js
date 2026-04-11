#!/usr/bin/env node
/**
 * Prerender player profile pages with Open Graph meta tags.
 *
 * Runs after `parcel build`. For each player in src/data/players-enhanced.js,
 * this script:
 *   1. Copies their headshot from src/assets/headshots/ to dist/og/{id}.png
 *      with a stable (non-hashed) filename so crawlers can fetch it.
 *   2. Reads dist/index.html as a template and injects per-player
 *      <meta property="og:*"> tags into the <head>.
 *   3. Writes the result to dist/players/{id}/index.html.
 *
 * Netlify serves static files before applying the SPA fallback redirect,
 * so a hit to /players/canaan-gedeon will serve the prerendered file.
 * Link unfurlers (iMessage, Gmail, Outlook, Slack, X, LinkedIn, Facebook)
 * read the OG tags to build rich preview cards. Real browsers get the
 * same HTML and the React SPA bootstraps normally because the script
 * bundle is referenced inside the file.
 *
 * Note: Parcel's --public-url ./ emits relative asset paths. We inject
 * <base href="/"> into the per-player HTML so those paths resolve from
 * the site root regardless of the current URL depth.
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://wellingtonwolveselite-17u.netlify.app';
const ROOT = path.resolve(__dirname, '..');
const PLAYERS_SRC = path.join(ROOT, 'src/data/players-enhanced.js');
const HEADSHOTS_DIR = path.join(ROOT, 'src/assets/headshots');
const DIST_DIR = path.join(ROOT, 'dist');
const DIST_INDEX = path.join(DIST_DIR, 'index.html');
const DIST_OG_DIR = path.join(DIST_DIR, 'og');

function die(msg) {
  console.error(`[prerender-players] ERROR: ${msg}`);
  process.exit(1);
}

if (!fs.existsSync(DIST_INDEX)) {
  die('dist/index.html not found — Parcel build must run first');
}

const src = fs.readFileSync(PLAYERS_SRC, 'utf8');
const template = fs.readFileSync(DIST_INDEX, 'utf8');

// Build: image variable name -> headshot filename
// e.g. import canaanImage from 'url:../assets/headshots/canaan-2026.png';
const imageMap = {};
const importRe = /^import (\w+) from 'url:\.\.\/assets\/headshots\/([^']+)';$/gm;
for (const m of src.matchAll(importRe)) {
  imageMap[m[1]] = m[2];
}

// Find each player's block by slicing the source between id: positions.
// (Non-greedy block matching is unreliable because nested objects have }.)
const idPositions = [];
for (const m of src.matchAll(/id:\s*"([^"]+)"/g)) {
  idPositions.push({ id: m[1], start: m.index });
}

function unescapeJsString(s) {
  if (s == null) return null;
  return s.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

function extractString(block, field) {
  const re = new RegExp(`${field}:\\s*"((?:\\\\"|[^"])*)"`);
  const m = block.match(re);
  return m ? unescapeJsString(m[1]) : null;
}

function extractNumber(block, field) {
  const m = block.match(new RegExp(`${field}:\\s*(\\d+(?:\\.\\d+)?)`));
  return m ? m[1] : null;
}

const players = [];
for (let i = 0; i < idPositions.length; i++) {
  const { id, start } = idPositions[i];
  const end = i + 1 < idPositions.length ? idPositions[i + 1].start : src.length;
  const block = src.slice(start, end);

  const imageVar = (block.match(/image:\s*(\w+)/) || [])[1];

  players.push({
    id,
    firstName: extractString(block, 'firstName'),
    lastName: extractString(block, 'lastName'),
    position: extractString(block, 'position'),
    height: extractString(block, 'height'),
    gradYear: extractNumber(block, 'gradYear'),
    school: extractString(block, 'school'),
    imageFile: imageVar && imageMap[imageVar],
    ppg: extractNumber(block, 'ppg'),
    rpg: extractNumber(block, 'rpg'),
    apg: extractNumber(block, 'apg'),
  });
}

if (players.length === 0) die('No players extracted from players-enhanced.js');

// Copy headshots with stable filenames so OG crawlers have a known URL
fs.mkdirSync(DIST_OG_DIR, { recursive: true });
let copied = 0;
for (const p of players) {
  if (!p.imageFile) continue;
  const srcPath = path.join(HEADSHOTS_DIR, p.imageFile);
  if (!fs.existsSync(srcPath)) {
    console.warn(`[prerender-players] Missing headshot: ${srcPath}`);
    continue;
  }
  fs.copyFileSync(srcPath, path.join(DIST_OG_DIR, `${p.id}.png`));
  copied++;
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Title-case an UPPERCASE name, preserving hyphens and spaces
function titleCase(s) {
  if (!s) return '';
  return s.split(/([\s-])/).map(part => {
    if (part === ' ' || part === '-' || part === '') return part;
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join('');
}

function renderPlayerHtml(p) {
  const name = `${titleCase(p.firstName)} ${titleCase(p.lastName)}`;
  const title = `${name} · Class of ${p.gradYear} · Wellington Wolves Elite`;

  const descParts = [
    p.height,
    p.position,
    p.school,
    p.ppg && parseFloat(p.ppg) > 0 ? `${p.ppg} PPG` : null,
    p.rpg && parseFloat(p.rpg) > 0 ? `${p.rpg} RPG` : null,
    p.apg && parseFloat(p.apg) > 0 ? `${p.apg} APG` : null,
  ].filter(Boolean);
  const desc = descParts.join(' · ');

  const url = `${SITE_URL}/players/${p.id}`;
  const image = p.imageFile
    ? `${SITE_URL}/og/${p.id}.png`
    : `${SITE_URL}/`;

  const ogTags = [
    '  <!-- Per-player Open Graph (generated by scripts/prerender-players.js) -->',
    '  <base href="/">',
    `  <meta name="description" content="${esc(desc)}">`,
    '  <meta property="og:type" content="profile">',
    '  <meta property="og:site_name" content="Wellington Wolves Elite 17U">',
    `  <meta property="og:title" content="${esc(title)}">`,
    `  <meta property="og:description" content="${esc(desc)}">`,
    `  <meta property="og:url" content="${esc(url)}">`,
    `  <meta property="og:image" content="${esc(image)}">`,
    `  <meta property="og:image:alt" content="${esc(name)} — Wellington Wolves Elite 17U">`,
    '  <meta name="twitter:card" content="summary_large_image">',
    `  <meta name="twitter:title" content="${esc(title)}">`,
    `  <meta name="twitter:description" content="${esc(desc)}">`,
    `  <meta name="twitter:image" content="${esc(image)}">`,
    `  <link rel="canonical" href="${esc(url)}">`,
  ].join('\n');

  let html = template;
  // Remove the baseline site-wide OG tags from the template (between the two comment lines)
  // so per-player tags don't conflict. Simpler approach: just inject ours after <head>
  // and let the later tags take precedence for crawlers that read the last value.
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace('<head>', `<head>\n${ogTags}`);
  return html;
}

for (const p of players) {
  const dir = path.join(DIST_DIR, 'players', p.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderPlayerHtml(p));
}

console.log(
  `[prerender-players] Generated ${players.length} player pages, copied ${copied} headshots`
);
