官方文档： https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions
## puppetter-demo
['https://github.com/artiely/puppeteer-demo.git'](https://github.com/artiely/puppeteer-demo.git)

## Puppeteer 介绍

Puppeteer  翻译是操纵木偶的人，利用这个工具，我们能做一个操纵页面的人。Puppeteer是一个Nodejs的库，支持调用Chrome的API来操纵Web，相比较Selenium或是PhantomJs,它最大的特点就是它的操作Dom可以完全在内存中进行模拟既在V8引擎中处理而不打开浏览器，而且关键是这个是Chrome团队在维护，会拥有更好的兼容性和前景。

## Puppeteer 用处

利用网页生成PDF、图片
爬取SPA应用，并生成预渲染内容（即“SSR” 服务端渲染）
可以从网站抓取内容
自动化表单提交、UI测试、键盘输入等
帮你创建一个最新的自动化测试环境（chrome），可以直接在此运行测试用例6.捕获站点的时间线，以便追踪你的网站，帮助分析网站性能问题

## 基础知识点
* puppeteer.launch() 创建浏览器实例   
* puppeteer.newPage() 创建一个新页面    
* puppeteer.goto() 进入指定网站    
* page.screenshot() 截屏    
* page.pdf() 输出为pdf 注意必须是headless=true    
* page.evaluate() 在浏览器中执行函数想到与在控制台执行函数 返回promise    
* page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]]) 等待 可以是等待一段时间，某个函数执行或某个DOM的出现    
* page.click(selector[, options]) 点击某个元素    
* page.type(selector, text[, options]) 文本输入    
* page.frames() 获取当前页面所有的 iframe，然后根据 iframe 的名字精确获取某个想要的 iframe    
* iframe.$('.srchsongst') 获取 iframe 中的某个元素    
* iframe.evaluate() 在浏览器中执行函数，相当于在控制台中执行函数，返回一个 Promise     
* Array.from 将类数组对象转化为对象    
* iframe.$eval() 相当于在 iframe 中运行 document.queryselector 获取指定元素，并将其作为第一个参数传递     
* iframe.$$eval 相当于在 iframe 中运行 document.querySelectorAll 获取指定元素数组，并将其作为第一个参数传递   
* page.emulate() 指定设备
```
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
await page.emulate(iPhone)
```  

参考
https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions     
https://cloud.tencent.com/developer/article/1006000     
https://www.jianshu.com/p/2f04f9d665ce    
http://cnodejs.org/topic/5a4d8d2299d207fa49f5cbbc     


