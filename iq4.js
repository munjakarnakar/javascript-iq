// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         console.log(n,i)
//       if (n % i === 0) return false;
//     }
//     return true;
// }

// isPrime(5)

function primeNumbers(n){
    for (let index = 0; index < n.length; index++) {
        const element = n[index]
        let a = [];
        for (let index1 = 1; index1 <= element; index1++) {
            if(element % index1 === 0){
                a.push(index1)
            }        
        }
        (a.length > 2) ? console.log(`${element} is not a prime`) : console.log(`${element} is a prime`) 
        console.log(a)
        a = []
    }
}

primeNumbers([10,13, 21, 77, 19])