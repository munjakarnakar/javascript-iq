// swiss w

const str = 'swiss';

function firstnonrepeat(){
    const tempObj = {};
    for(let char of str){
        console.log(char,tempObj[char])
        if(Object.keys(tempObj).indexOf(char) !== -1)
            tempObj[char] = tempObj[char]+1
        else
            tempObj[char] = 0
    }
    for(let key in tempObj){
        console.log(key, '?')
        if(tempObj[key] === 0){
            return `First non return key is ${key}`
        }
    }
}

console.log(firstnonrepeat());
