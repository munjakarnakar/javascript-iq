const array = [3, 3, 4, 2, 4, 4, 2, 4, 4]

// const countObj = new Map()
const countObj1 = {}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // countObj.has(element) ? countObj.set(element, countObj.get(element)+1) : countObj.set(element,1)
    (countObj1[element]) ? countObj1[element] += 1 : countObj1[element] = 1
}
console.log(countObj1)
console.log(Object.entries(countObj1))
const sorted = Object.entries(countObj1).sort((a,b)=>b[1]-a[1])
console.log(sorted)
const finalObject = new Map(sorted)
for (const [key, value] of finalObject) {
    console.log(key)
    return key
}