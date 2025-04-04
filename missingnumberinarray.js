const a = [1,2,4,6];

let prevElement = a[0];
let missingNumber = 0;
// for(let i of a) {
//     console.log(i)
//     if(prevElement !== i+1)
//         missingNumber = i+1
//     prevElement = i
// }

for (let index = 0; index < a.length; index++) {
    console.log(a[index], a[index+1], a[index+1] - a[index]  )
    if(a[index+1] - a[index] !== 1){
        missingNumber=a[index]+1
        console.log(',,,',missingNumber)
    }
}

console.log(missingNumber)