function* bar() {
  var val = yield 'A';
  console.log(val);
}

var foo = bar();

console.log(foo.next());
console.log(foo.next('B'));