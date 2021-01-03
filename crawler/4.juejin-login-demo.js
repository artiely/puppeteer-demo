const puppeteer = require('puppeteer');
// 登录掘金并爬取 这里有个个人演示账号
void(async() => {
  const browser = await puppeteer.launch({
    headless: false // 是否使用无头浏览器
  });
  const page = await browser.newPage();
  await page.goto('https://juejin.im');

  await page.waitFor(1000);
  await page.click('.login')
  await page.waitFor(1000);
  await page.type('[name=loginPhoneOrEmail]', '15926290460', {delay: 100});
  await page.type('[name=loginPassword]', '*******', {delay: 100});
  await page.click('.auth-form .btn')
  let targetLink = await page.evaluate(() => {
    // ...
  });

  // browser.close();
})()
