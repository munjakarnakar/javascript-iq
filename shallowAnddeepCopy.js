const data = {
    name: "Karnakar", mobile:9000423012
}
const shallowCopy = data;
shallowCopy.mobile = 9966488444
console.log(data) // Original array got updated because of shallow copy


const data2 = {
    name: "Karnakar", mobile:9000423012
}
const deepCopy = JSON.parse(JSON.stringify(data2))
// const deepCopy = Object.freeze(data2)
 deepCopy.name = "Munja"
 console.log(data2) // Original array not updated because of deep copy
 console.log(deepCopy)

 // shallow copy reference gets copied along with the data so parent object gets updated when we change something in child object
 // Deep only data gets copied, so there is no impact on parent object when we change something in child object