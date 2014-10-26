function *foo (arg) {
  return arg;
}

var bar = foo(123);

console.log(bar.next());