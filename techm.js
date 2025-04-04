const s = "}])([{}])([{}"
// output: {}[]()
// }])([{

const pairs = {'{':'}', '[':']'}

const counter ={}
for (const element of s) {
    //console.log(element, pairs[element])
    (counter[element]) ? counter[element] +=1 : counter[element] = 1
}
console.log(counter)

for (const key in pairs) {
   console.log(key, pairs[key], counter[key] === counter[pairs[key]])
}

// console.log({'{':"a", '}':"b"})
// - Folder
// - server file - main file run server
// - routes Folder
// - controller Folder
// - db con
// - serivce 
// - to main schema
// - uitilies 
// package.json
