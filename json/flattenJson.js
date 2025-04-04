const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
let flatten = {}
function flattenJson(objectData){
    for(const key in objectData){
        console.log(typeof(objectData[key]))
        if(typeof(objectData[key]) === 'object')
            flattenJson(objectData[key])
        else
            flatten[key] = objectData[key]
    }
}

flattenJson(nested)
console.log(flatten)