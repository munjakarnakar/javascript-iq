const obj3 = {a:"string1", b:{c:'string2', d: {e:"string3"}}}


function getValue(obj, getKey){
    console.log('step 1', getKey, obj)
    if(obj[getKey])
        return obj[getKey]

    let finalVal = null;
    for (const key in obj) {
        if(typeof(obj[key]) === 'object'){
            finalVal = getValue(obj[key], getKey)
            if(finalVal)
                return finalVal
        }
    }
    return finalVal
}


console.log(getValue(obj3, 'b'))

function outerFunction(){
    let count = 0
    return function(){
        return count += 111
    }
}

const outerFunctionObj = outerFunction()
console.log(outerFunction()())

function function1(a){
    return function(b){
       return function(c){
        return a+b+c
       }
    }
}

console.log(function1(1)(2)(10))


async function funcName(){
    const result = await function funtion2(){
        
    }
}



// const express =  require('express')
// const app = express()
// app.use(express.json())

// app.use((req,res, next) => {

// })

// app.get('/getData/:id',(req, res) => {
//     // controllers ->  serivice
// })

// app.listen(3000, ()=>{
//     console.log()
// })


// closure and real time usage 
// Currying
// JS is sync or async
// node app full structure api call to response
// how to manage sub apis in nodejs
// did you use clusters
// api optimization
// what we can do with nodejs otherthan developing rest apis
