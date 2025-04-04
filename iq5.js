const a = [1,2]
const b = [1,2]
const c = a 
console.log(a===c) // True - Pointing/reference to the diff object
console.log(a===b) // False - Pointing/reference to the diff object

// Above exaple same for both array & json object.