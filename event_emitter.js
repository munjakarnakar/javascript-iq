const eventEmitter= require('events')
const eventEmitterObj = new eventEmitter()

eventEmitterObj.on('em1',(data)=>{
    console.log('in em1',data)
})

eventEmitterObj.emit('em1', 'hello')