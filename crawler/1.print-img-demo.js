const puppeteer = require('puppeteer');
// 我们可以创建一个设备 并按照设备生成图片 或者用于测试
// https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
(async() => {
  const browser = await puppeteer.launch({
    headless: false // 是否使用无头浏览器
  });
  const page = await browser.newPage();
  // 创建好浏览器实例之后我们需要让页面模拟成iphone6，这里的emulate函数的参数你也可以自定义参数
  await page.emulate(iPhone)
  await page.goto('https://baidu.com');
  await page.type('[type=search]', 'puppeteer', {delay: 100});
  page.click('#index-bn')
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
    await page.screenshot({
      path: `baidu${i}.png`, type: 'png',
      // quality: 100, 只对jpg有效
      fullPage: true,
      // 指定区域截图，clip和fullPage两者只能设置一个 clip: {   x: 0,   y: 0,   width: 1000,   height:
      // 40 }
    })
  }
  browser.close();
})()
