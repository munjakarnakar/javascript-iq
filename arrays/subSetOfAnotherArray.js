const a1 = [1,2,4]
const a2 = [1,2,3,4,5,6]

function check(){
    for (let index = 0; index < a1.length; index++) {
        if(!a2.includes(a1[index])){
            return false
        }
    }
    return true
}

console.log(check())