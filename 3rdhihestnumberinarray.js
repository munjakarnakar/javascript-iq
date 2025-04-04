const array = [2,1,10,6,7,9]
let hNum = []

// for (const element of a) {
//     if(hNum <= element){
//         hNum = element

//     }
// }
const array2=[]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const nextElement= array[index+1]
    console.log(element, nextElement, element <= nextElement)
    if(element <= nextElement){
        array2.unshift(nextElement)
    }else{
        array2.push(element)
    }
    console.log(array2)
}

console.log(array2)