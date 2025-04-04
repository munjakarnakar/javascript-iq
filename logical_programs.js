// String reverse
function strReverse(str){
    const revStr = str.split('').reverse().join("")
    console.log(revStr)
}
strReverse('munja')

// Palindrom
function isPalindrom(str){
    const isPalindrom = (str === str.split('').reverse().join('')) ? true : false;
    console.log(isPalindrom);
}

isPalindrom("munja")

// Remove duplicates from array

let a = [1,3,2,5,6,4,4]
a = [...new Set(a)]
console.log(a.sort((a,b)=>b-a))

// Swap two numbers without third variable

let x = 10;
let y = 20;
[y, x] = [x, y]
console.log(x,y)