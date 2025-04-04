for (var index = 0; index < 10; index++) {
    setTimeout(()=>{
        console.log(index)
    }, 2000)
}


for (let index = 0; index < 10; index++) {
    setTimeout(()=>{
        console.log(index)
    }, 2000)
}  
`The let keyword has block scope, which means a new instance of index is created for each iteration of the loop.
 This will make each callback function capture the correct value of index when it was defined in that particular
  iteration.`


  setImmediate(()=>{
    console.log('setimmediate -- 2')
  })

  setTimeout(() => {
    console.log('settimeout -- 1')
  }, 10);

  process.nextTick(()=>{
    console.log('nexttick')
  })