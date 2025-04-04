// const mainArr = [2,3,4,5,6]
// // [6,2,3,4,5]

// for(let i =  mainArr.length-1 ; i > 0 ; i--){
    const popedElement = mainArr.pop()
    mainArr.unshift(popedElement)
    console.log(mainArr)
// }
console.log(mainArr)

const aa1 = ['r','f','c','e','l','k']
const sliced = aa1.slice(2,4)
console.log(aa1)
console.log(sliced)
console.log()

const aa2 = ['r','f','c','e','l','k']
const spliced = aa2.splice(3,2)
console.log(aa2)
console.log(spliced)