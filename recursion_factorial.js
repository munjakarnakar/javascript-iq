let factorialSum = 0 
function factorial(n){
    console.log(n)
    // factorialSum += n * factorial(n-1)
    // if(n === 1)
    //     return factorialSum
    if (n < 0) {
        console.log('here 1')
        return undefined;} // Factorial of negative numbers isn't defined
    if (n === 0 || n === 1){
        console.log('here 2')
         return 1; // Base cases
    }
    return n * factorial(n-1)
}

console.log(factorial(5))