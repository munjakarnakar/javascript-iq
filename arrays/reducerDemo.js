const array = [3,4,5]
const sum = array.reduce((acc, cVal)=>{ 
    console.log(acc,cVal)
    acc = acc+cVal
    return acc
}, 10)
console.log(sum)