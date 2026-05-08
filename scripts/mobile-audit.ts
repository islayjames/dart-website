import { chromium, devices } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = process.env.AUDIT_URL || 'https://heydart.com';
const OUT_DIR = path.join(__dirname, 'screenshots');

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'pricing', path: '/pricing' },
  { name: 'how-it-works', path: '/how-it-works' },
  { name: 'learn', path: '/learn' },
  { name: 'about', path: '/about' },
  { name: 'disclaimer', path: '/disclaimer' },
  { name: 'terms', path: '/terms' },
  { name: 'privacy', path: '/privacy' },
  { name: 'partnerships', path: '/partnerships' },
];

const VIEWPORTS = [
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-14-pro', width: 390, height: 844 },
];

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const overflowReport: Array<{ page: string; device: string; scrollWidth: number; clientWidth: number }> = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: devices['iPhone 13'].userAgent,
    });

    for (const p of PAGES) {
      const page = await context.newPage();
      const url = BASE_URL + p.path;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (e) {
        console.error(`Failed to load ${url}: ${(e as Error).message}`);
      }
      await page.waitForTimeout(800);

      const dims = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      if (dims.scrollWidth > dims.clientWidth + 1) {
        overflowReport.push({ page: p.name, device: vp.name, ...dims });
        console.log(`OVERFLOW: ${p.name} @ ${vp.name} - scroll=${dims.scrollWidth} client=${dims.clientWidth}`);
      }

      const file = path.join(OUT_DIR, `${p.name}-${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`Saved ${file}`);
      await page.close();
    }
    await context.close();
  }
  await browser.close();

  fs.writeFileSync(path.join(OUT_DIR, 'overflow-report.json'), JSON.stringify(overflowReport, null, 2));
  console.log('\nOverflow report:', overflowReport);
}

main().catch((e) => { console.error(e); process.exit(1); });
