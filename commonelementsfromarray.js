const a = [1,2,3,4,5,6,9,45]
const b = [9,10,1,4,12,13,45,32]

const common = []
console.log(a.length > b.length)

if(a.length > b.length) 
    for(let num of a){
        if(b.indexOf(num) !== -1){
            common.push(num)
        }
    }

if(b.length > a.length) 
    for(let num of b){
        if(a.indexOf(num) !== -1){
            common.push(num)
        }
    }

console.log([... new Set(common)])

