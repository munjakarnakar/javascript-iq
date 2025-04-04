const data = { a: { b: { c: { d: "value" } } } };

function getNestedVal(jsonObj, key){
    // console.log(jsonObj)
    if(jsonObj[key])
        return jsonObj[key]

    let value = null
    for(const objKey in jsonObj){
        if(typeof[objKey] === 'object'){
            // console.log(jsonObj[objKey])
            value = getNestedVal(jsonObj[objKey], key)
            if(value)
                return value
        }
    }
    return value

}

console.log(getNestedVal(data, 'd'))