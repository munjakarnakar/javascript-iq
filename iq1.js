(() => {
  let x 
  let y;
  try {
    throw new Error();
  } catch (x) { // here x is redeclared
    (x = 1), 
    (y = 2);
    console.log(x);

  }
  console.log(x);
  console.log(y);
})();

console.log(typeof typeof 1)
console.log(typeof typeof "hello")
console.log(typeof typeof null)
console.log(typeof typeof [1,2,3])

console.log('NaN',typeof NaN)
console.log('Undefined',typeof undefined)
console.log('null',typeof null)
