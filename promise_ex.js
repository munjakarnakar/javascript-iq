function promiseDemo(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name:"Karnakar"})
        }, 5000);

        reject({'error':true})
    })
}

promiseDemo().then((data)=>console.log(data)).catch((err)=>{console.log('error',err)})