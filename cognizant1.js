const input = ['a','b',2,'c','d',5] // reverse non numbers

const output1 = []
const reversedArray = [...input].reverse(); 

console.log(input, reversedArray)

for (const element of reversedArray) {
    if(isNaN(element)){
        output1.push(element)
    }
}

for(let [element,index] of input.entries()){
    if(isNaN(element)){
        input[index] = output1[index]
    }
}

console.log(input)