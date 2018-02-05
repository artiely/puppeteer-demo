// 还没搞清楚怎么动态加入脚本
const puppeteer = require('puppeteer');
void(async() => {
  const browser = await puppeteer.launch({
    headless: false 
  });
  const page = await browser.newPage();
  await page.goto('https://juejin.im');
  await page
    .mainFrame()
    .addScriptTag({path: 'jquery.js'});
  await page.waitFor(2000);
  await page.click('.login')
  await page.waitFor(1000);
  await page.type('[name=loginPhoneOrEmail]', '15926290460', {delay: 100});
  await page.type('[name=loginPassword]', 'P@ssw0rd1024', {delay: 100});
  await page.click('.auth-form .btn')
  let targetLink = await page.evaluate(() => {
    // ...
  });
  console.log(targetLink)
  // browser.close();
})()
