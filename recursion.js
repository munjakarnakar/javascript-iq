let index = 0
let sum = 0
function counter(n){
    console.log(index)
    if(index !== n){
        sum += index
        index += 1
        counter(n)
    }
}

counter(5)
console.log(sum)
