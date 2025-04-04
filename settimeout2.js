console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)

new Promise((resolve, reject) => {
    console.log(3)
    resolve(100)
}).then((a) => console.log(a))

process.nextTick(()=>console.log('nexttick'))

console.log(4);