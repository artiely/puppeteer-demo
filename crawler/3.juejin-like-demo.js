const puppeteer = require('puppeteer');
const fs = require('fs')
// 爬取掘金喜欢的文章并生成json文件
void(async() => {
  const browser = await puppeteer.launch({
    headless: true // 是否使用无头浏览器
  });
  const page = await browser.newPage();
  await page.goto('https://juejin.im/user/599f7fccf265da24734437d9/likes');

  await page.waitFor(1000);
  let targetLink = await page.evaluate(() => {
    return [...document.querySelectorAll('a.title')]
      .filter(item => {
      return item.innerText && item.innerText
    })
      .toString()
  });
  targetLink = targetLink.split(',')
  targetLink = targetLink.slice(0, 5)
  let articleList = []
  for (let i = 0; i < targetLink.length; i++) {
    await page.goto(targetLink[i]);
    await page.waitFor(1000);
    let article = await page.evaluate(() => {
      let title = document
        .querySelector('.post-title')
        .innerHTML
      let content = document
        .querySelector('.post-content-container')
        .innerHTML
      return {title, content}
    })
    articleList.push(article)
  }
  var ws = fs.createWriteStream(__dirname + '/juejin-like.json');
  ws.write(JSON.stringify(articleList))
  ws.on('end', function () {
    console.log('文件写入完成');
  });
  browser.close();
})()
