const box = { x: 10, y: 20 };
	
Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape); // Question 1


var output = (function(x) {
    delete x;
    return x;
})(0);

console.log(output) // Question 2


const user = { name: 'David', age: 29 };
const admin = { admin: true, ...user };

console.log(admin); // Questiomn 3

function chck(){
 //   var a = 10;
    a = 10;
}
chck()
    
console.log(a)
console.log(b)
var b = 10; 