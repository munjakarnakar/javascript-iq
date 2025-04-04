const crypto = require('crypto');
const OS = require('os');
console.log(OS.cpus().length)
// process.env.UV_THREADPOOL_SIZE = OS.cpus().length;
process.env.UV_THREADPOOL_SIZE = 1
const start = Date.now()
crypto.pbkdf2('password1', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password1', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password2', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password3', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password4', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password5', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password6', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})


crypto.pbkdf2('password7', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password8', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})

crypto.pbkdf2('password9', 'satl1', 1000, 64, 'sha512',(err, data)=>{
    console.log(`${Date.now()-start}`,data.toString('hex'))
})