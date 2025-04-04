let findMissing= [1, 2, 4, 6, 3, 7, 8]
findMissing = findMissing.sort()
console.log(findMissing)

function missingNumber(){
    for (let index = 0; index < findMissing.length; index++) {
        const element = findMissing[index];
        const nextElement = findMissing[index+1];
        if(nextElement - element > 1){
            return element+1
        }
    }
}

console.log(missingNumber())


// const n = findMissing.length + 1;
// const expectedSum = (n * (n + 1)) / 2;
// const actualSum = findMissing.reduce((sum, num) => sum + num, 0);
// console.log(expectedSum, actualSum, expectedSum - actualSum)