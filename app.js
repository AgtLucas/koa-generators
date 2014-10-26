var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = "Yo, Koa!";
});

app.listen(3000);