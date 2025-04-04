const originalArray = [5,2,6,1,7,5,9]
for (let index1 = 0; index1 < originalArray.length; index1++) {
    for (let index = 0; index < originalArray.length; index++) {
        const element = originalArray[index];
        const nextElement = originalArray[index+1];
        console.log(element,nextElement, element >= nextElement)
        if(element >= nextElement){
            originalArray[index] = nextElement
            originalArray[index+1] = element
        }
    }    
}
console.log(originalArray, originalArray[originalArray.length-2])