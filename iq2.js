const arr = ['a', 'A', 'F', 'g', 'H', 'f', 'G', 'h'];
// output= a, F, g, H
let uniqArr = [];
for (const element1 of arr) {
    if(uniqArr.indexOf(element1.toLowerCase()) === -1 && uniqArr.indexOf(element1.toUpperCase())  === -1){
        uniqArr.push(element1)
    }
}
console.log(uniqArr);