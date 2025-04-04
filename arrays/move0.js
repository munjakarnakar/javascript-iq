const moveArray = [1,2,0,2,3,0,4,3,0]
const zeros1 = []
const zeros = []
const nonZeros = []
// Solution 1
for (let index = 0; index < moveArray.length; index++) {
    const element = moveArray[index];
    (element === 0) ? zeros.push(element):nonZeros.push(element)
}
console.log([...nonZeros,...zeros])

// Solution 2
const zeros2 = [1,2,0,2,3,0,4,3,0]

for (let index = 0; index < zeros2.length; index++) {
    const element = zeros2[index];
    console.log('>',element)
    if(element === 0){
        const zeroEle = zeros2.splice(index,1)
        zeros2.push(zeroEle[0])
    }
}

console.log(zeros2)

console.log([...moveArray, ...zeros])