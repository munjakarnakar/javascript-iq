const a = [3,4,5]
const b = a.map(num=> num *2)
console.log(b);
const r = a.reduce((acc,cVal)=> acc+cVal,0)
console.log(r)
const f = a.filter((num)=> num % 2 === 0)
console.log(f)