const a1 = [1,2,3,[4,5,6], [7,8,9], [10,11,12,[13,14,15]]]

console.log(a1.toString().split(',').map((ele)=> parseInt(ele)))
// const flatten = a.flat(Infinity)
// console.log(flatten)



function flattenArr1(a){
    let flatten = [];
    a.forEach(ele=>{
        if(Array.isArray(ele)){
            // flatten = flatten.concat(flattenArr(ele))
            flatten =[...flatten, ...flattenArr1(ele)]
        }
        else{
            flatten.push(ele)
        }
    })
    return flatten;
}

console.log(flattenArr1(a1))