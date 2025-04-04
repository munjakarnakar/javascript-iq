function missingNumber(inputArray){
    inputArray = inputArray.sort()
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        const nextElement = inputArray[index+1]
        if(nextElement-element > 1){
            return `Missing number is ${element+1}`
        }
    }
}

console.log(missingNumber([1,2,4,5]))
console.log(missingNumber([2,1,4,5]))