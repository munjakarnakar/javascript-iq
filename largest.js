var array = [2,4,1,67,34,56,456,45]

let largestNum = array[0]
for (let index = 0; index < array.length; index++) {
    // console.log(array[index], largestNum)
    if(array[index] > largestNum){
        largestNum = array[index]
        // console.log('?',array[index], largestNum)
    }
}

console.log('Largest:',largestNum)