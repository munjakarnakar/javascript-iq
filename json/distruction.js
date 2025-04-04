const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
const {a, b:{c='4', d: { e }}} = nested
console.log(a, c, e)