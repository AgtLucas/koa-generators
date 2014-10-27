/**
function *foo (arg) {
  return arg;
}

var bar = foo(123);

console.log(bar.next());

*/

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