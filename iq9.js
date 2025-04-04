let count = 0
const arr = [1,2,3]

delete arr[1]

arr.forEach(()=> {count++})

console.log(arr) // [ 1, <1 empty item>, 3 ]
console.log(arr.length) // 3
console.log(count) // 2