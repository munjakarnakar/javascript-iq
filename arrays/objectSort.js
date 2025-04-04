const obj = {c:3,b:1,e:5}
const sorted = Object.entries(obj).sort() //  Ascending
// const sorted = Object.entries(obj).sort((a,b)=>b[1]-a[1]) // Descending

const sortedFinal = Object.fromEntries(sorted)
console.log(sortedFinal)