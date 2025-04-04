const input = ['a','b',2,'c','d',5] // reverse non numbers

const result = []
for (let index = input.length-1; index >= 0 ; index--) {
    console.log(input[index])
    isNaN(input[index]) ? result.push(input[index]) : ""
}

console.log(result)
let index2 = 0
for (let index = 0; index < input.length; index++) {
    // const element = result[index];
    if(isNaN(input[index])){
        input[index] = result[index2]
        index2 += 1
    }
}

console.log(input)