const moveArray = [1,2,0,2,3,0,4,3,0]

moveArray.map((Val) => {
    if(Val === 0){
        moveArray.splice(moveArray.indexOf(Val), 1)
        moveArray.push(Val)
    }
})

// for (const [element,ind] of moveArray) {
//         console.log(element,ind)
// }

let newArr = new Array(5)
console.log(newArr,newArr.join("*"), newArr.join("*").length)

console.log(moveArray)