import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: false
      });
      
  const page = await browser.newPage();

  await page.goto("https://quotes.toscrape.com/"); 
  await page.screenshot({path:"screenshot.png"})

  await page.click('a[href="/login"]');
  await page.type("#username", "PedroTech", {delay: 100} );
  await page.type("#password", "Password123", {delay: 100}  );

  await page.click('input[value="Login"]');
})();