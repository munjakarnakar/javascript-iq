const array = [4, 5, 1, 2, 0, 4, 5];

function nonRepeat(){
    const counter = new Map()
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        counter.has(element) ? counter.set(element, counter.get(element)+1) : counter.set(element, 1) 
    }
    console.log(counter, '?')
    for (const [key,value] of counter) {
        if(value === 1)
            return key
    }
}

console.log(nonRepeat())