function hof(num1, num2, operation){ // HOF taking function as argument
    return operation(num1, num2)
}
function add(num1, num2){
    return num1+num2
}
function mul(num1, num2){
    return num1*num2
}
console.log(hof(1,2,add))
console.log(hof(1,2,mul))


function hof2(num){ // HOF Returning function
    return function (num2){
        return num * num2
    }
}
const multiply = hof2(2)
console.log(multiply(1))