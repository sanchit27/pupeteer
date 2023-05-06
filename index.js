import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: "new"
      });
      
  const page = await browser.newPage();

  await page.goto("https://quotes.toscrape.com/"); 
  await page.screenshot({path:"screenshot.png"})

  const grabQuotes= await page.evaluate(()=>{
    const quotes= document.querySelectorAll('.quote');
    let quoteArr=[];
    quotes.forEach((quoteTag)=>{
        const quoteInfo = quoteTag.querySelectorAll("span");
      
        const actualQuote= quoteInfo[0];
        const author= quoteInfo[1];
        const authorName= author.querySelector("small");
        

        quoteArr.push({
            quote: actualQuote.innerText,author: authorName.innerText
        });

    });

return quoteArr;
  });

   
console.log(grabQuotes);


// const pgText = await page.evaluate(() => {
//   const pgTag = document.querySelector('title');
//   return pgTag ? pgTag.textContent : null;
// });

// if (pgText === null) {
//   console.log("Element not found on page.");
// } else {
//   console.log(pgText);
// }

// await page.waitForSelector('a.sc-elhb8j-17.iFsnCv');

// const blogText = await page.evaluate(() => {
//   const aTag = document.querySelector('a.sc-elhb8j-17.iFsnCv p.sc-elhb8j-16.dxcfRo');
//   return aTag ? aTag.textContent : null;
// });

// if (blogText === null) {
//   console.log("Element not found on page.");
// } else {
//   console.log(blogText);
// }

// await page.waitForSelector('a.sc-elhb8j-17.iFsnCv[href="https://blog.zomato.com/"] > p.sc-elhb8j-16.dxcfRo');

// const linkText = await page.evaluate(() => {
//   const linkTag = document.querySelector('a.sc-elhb8j-17.iFsnCv[href="https://blog.zomato.com/"] > p.sc-elhb8j-16.dxcfRo');
//   return linkTag ? linkTag.textContent : null;
// });

// if (linkText === null) {
//   console.log("Element not found on page.");
// } else {
//   console.log(linkText);
// }



  
 
  
  
  await browser.close();
})();