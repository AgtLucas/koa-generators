function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

for (v of foo()) {
  console.log(v);
}