function removeNumbers(str){
    const reverseString = str.split("").reverse()
    console.log(reverseString.join(""))
    let foundChar = false
    let finalStr = ''
    for (const element of reverseString) {
        if(isNaN(parseInt(element)) || foundChar){
            foundChar = true
            finalStr += element
            console.log(element)
        }
    }
    console.log(finalStr)
}

removeNumbers('qw123jj42')