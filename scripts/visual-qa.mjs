import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:4190';
const out = process.env.QA_OUT || '/tmp/heydart-visual-qa';
await mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const routes = ['/', '/about', '/how-it-works', '/pricing'];
const viewports = [
  ['desktop', { width: 1440, height: 1000 }],
  ['mobile', { width: 390, height: 844 }],
];
const results = [];

for (const [label, viewport] of viewports) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  for (const route of routes) {
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
    await page.screenshot({
      path: `${out}/${label}-${route === '/' ? 'home' : route.slice(1)}.png`,
      fullPage: true,
    });
    const metrics = await page.evaluate(() => ({
      title: document.title,
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      images: [...document.images].map((image) => ({
        src: image.getAttribute('src'),
        alt: image.alt,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      })),
      css: {
        bg: getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
        ink: getComputedStyle(document.documentElement).getPropertyValue('--ink').trim(),
        brick: getComputedStyle(document.documentElement).getPropertyValue('--brick').trim(),
        twilight: getComputedStyle(document.documentElement).getPropertyValue('--twilight').trim(),
      },
    }));
    results.push({
      viewport: label,
      route,
      status: response?.status(),
      ...metrics,
      overflow: metrics.scrollWidth > viewport.width,
      brokenImages: metrics.images.filter((image) => !image.naturalWidth),
      missingAlt: metrics.images.filter((image) => !image.alt),
    });
  }
  await context.close();
}
await browser.close();
await writeFile(`${out}/results.json`, JSON.stringify(results, null, 2));
for (const result of results) {
  console.log(
    `${result.viewport} ${result.route} HTTP ${result.status} overflow=${result.overflow} ` +
    `broken=${result.brokenImages.length} missingAlt=${result.missingAlt.length} ` +
    `palette=${Object.values(result.css).join(',')}`,
  );
}
if (results.some((result) => (
  result.status !== 200 || result.overflow || result.brokenImages.length || result.missingAlt.length
))) process.exitCode = 1;
