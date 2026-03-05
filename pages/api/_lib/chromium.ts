import puppeteer, { Page } from 'puppeteer-core';
import { getOptions } from './chromiumOptions';

let _page: Page | null;

async function getPage(isDev: boolean): Promise<Page> {
  try {
    if (_page && !_page.isClosed()) {
      return _page;
    }
  } catch (e) {
    _page = null;
  }

  console.log('Launching browser with isDev:', isDev);
  const options = await getOptions(isDev);
  console.log('Using options:', JSON.stringify(options));

  const browser = await puppeteer.launch(options);
  console.log('Browser launched');

  _page = await browser.newPage();
  console.log('New page created');

  return _page;
}

export async function getScreenshot(
  url: string,
  isDev: boolean
): Promise<Buffer> {
  const page = await getPage(isDev);

  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle0' });

  const file = await page.screenshot({ type: 'png' });

  return file;
}
