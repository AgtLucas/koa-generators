var koa = require('koa');
var app = koa();

// * makes that function a generator function
app.use(function *() {
  this.body = "Yo, Koa!";
});

app.listen(3000);