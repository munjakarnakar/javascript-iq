console.log("Start")

async function demo(){
    console.log('in demo async')
    const res = await new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true)}, 3000)
    })
    console.log(res)
    console.log('Mid')
}

demo();
console.log('End')