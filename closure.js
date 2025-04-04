function outerFunction(){
    let count = 0
    return function closureFunc(){
        count++;
        return count
    }
}
const counter = outerFunction()
console.log(counter()) // 1
console.log(counter()) // 2