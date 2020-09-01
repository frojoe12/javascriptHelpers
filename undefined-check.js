function foo(bar) {
    bar = typeof(bar) !== 'undefined' ? bar : 10;
    console.log(bar);
}
foo(); // 10
foo(20); // 20


// or es6 set default in argument
function foo(bar=10) {
    console.log(bar);
}
foo(); // 10
foo(20); // 20


// check if array - if not return empty array
  const array1 = ['me', 'you']
  const array2 = 'jack'

  console.log(Array.isArray(array1) ? array1 : ['empty'])
  console.log(Array.isArray(array2) ? array2 : ['empty'])
