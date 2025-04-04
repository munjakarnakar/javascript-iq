function sum(a){
    return function(b){
        return a+b
    }
}

const total = sum(1)
console.log(total(2))