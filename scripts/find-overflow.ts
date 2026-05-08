import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 375, height: 667 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto('https://heydart.com/how-it-works', { waitUntil: 'networkidle' });

  const data = await page.evaluate(`(() => {
    const steps = Array.from(document.querySelectorAll('.step'));
    return steps.slice(0,2).map(s => {
      const r = s.getBoundingClientRect();
      const cs = getComputedStyle(s);
      const parent = s.parentElement;
      const pr = parent.getBoundingClientRect();
      const pcs = getComputedStyle(parent);
      return {
        step: { w: r.width, left: r.left, right: r.right, gridCols: cs.gridTemplateColumns, padding: cs.padding },
        parent: { tag: parent.tagName, cls: parent.className, w: pr.width, left: pr.left, right: pr.right, padding: pcs.padding }
      };
    });
  })()`);
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
}
main();
