
console.log('Hello')

setTimeout(()=>{console.log('Setimeout')}, 10)

setImmediate(()=>{console.log('Setimediate')})

process.nextTick(()=>{console.log('nextTick')})