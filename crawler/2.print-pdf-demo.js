const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch({
  headless: true // pdf暂只支持无头浏览器
  });
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
  await page.type('#kw', 'puppeteer', {delay: 100});
  page.click('#su')
  await page.waitFor(1000);
  let targetLink = await page.evaluate(() => {
    return [...document.querySelectorAll('.result a')].filter(item => {
      return item.innerText && item
        .innerText
        .includes('Puppeteer')
    }).toString()
  });

  targetLink = targetLink.split(',')
  targetLink = targetLink.slice(0, 5)
  for (let i = 0; i < targetLink.length; i++) {
    await page.goto(targetLink[i]);
    await page.waitFor(1000);
    await page.emulateMedia('screen');
    await page.pdf({
      path: `baidu${i}.pdf`
    })
  }
  browser.close();
})()
