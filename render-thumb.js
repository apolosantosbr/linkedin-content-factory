// Renders an HTML file to PNG using Chrome via playwright-core
// Usage: node render-thumb.js <input.html> <output.png> <width> <height>
const { chromium } = require('playwright-core');
const path = require('path');

(async () => {
  const [,, inputArg, outputArg, widthArg, heightArg] = process.argv;
  if (!inputArg || !outputArg || !widthArg || !heightArg) {
    console.error('Usage: node render-thumb.js <input.html> <output.png> <width> <height>');
    process.exit(1);
  }
  const input = path.resolve(inputArg);
  const output = path.resolve(outputArg);
  const width = parseInt(widthArg, 10);
  const height = parseInt(heightArg, 10);

  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto('file://' + input, { waitUntil: 'networkidle' });
  // wait extra for fonts
  await page.evaluate(() => document.fonts ? document.fonts.ready : Promise.resolve());
  await page.waitForTimeout(500);
  await page.screenshot({ path: output, omitBackground: false, fullPage: false, clip: { x: 0, y: 0, width, height } });
  await browser.close();
  console.log('Rendered:', output);
})().catch(err => { console.error(err); process.exit(1); });
