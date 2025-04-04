const obj1 = {fname:"Karnakar", mobile:9000423012}
const obj2 = {lname: "Munja"}
const newObj = {...obj1, ...obj2}
console.log(newObj)
const newObj1 = Object.assign(obj1,obj2)
console.log(newObj1)