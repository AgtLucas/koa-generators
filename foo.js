/**
function *foo (arg) {
  return arg;
}

var bar = foo(123);

console.log(bar.next());

*/

/**
function* foo () {
  var index = 0;
  while (index < 2) {
    yield index++;
  }
}

var bar = foo();

console.log(bar.next());
console.log(bar.next());
console.log(bar.next());

*/

function* foo() {
  try {
    x = yield 'asd B';
  } catch (err) {
    throw err;
  }
}

var bar = foo();

if (bar.next().value == 'B') {
  bar.throw(new Error("it's B!"));
}