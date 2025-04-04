function countOcc(inputString){
    if(!inputString)
        return 'Please provide string'
    const counterObj = {}
    for (const element of inputString) {
        counterObj[element] ? counterObj[element] +=1 : counterObj[element] = 1
    }
    return counterObj
}

function countOccMap(inputString){
    if(!inputString)
        return 'Please provide string'
    const counterObj = new Map()
    for (const element of inputString) {
        counterObj.has(element) ? counterObj.set(element, counterObj.get(element)+1) : counterObj.set(element, 1)
    }
    return counterObj
}

const resultObj = countOcc('hello')
const resultObjMap = countOccMap('hello')
console.log(resultObj, Object.fromEntries(resultObjMap.entries()))

// let aa = [1,2,3,4,1,5,6]
// console.log(aa.indexOf(1,1))