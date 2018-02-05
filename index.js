var koa = require('koa')
var app = new koa()

app.use(async (cxt, next)=>{
  cxt.body = '你好'
})

app.listen(2333)