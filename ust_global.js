const str1 = "asd,we,sd,rt,sef"

function splitString(str){
    const splitted = []
    let temp = ""
    for (const element of str) {
        if(element === ','){
            splitted.push(temp)
            temp=''
        }
        else
            temp+=element
    }
    return splitted
}

console.log(splitString(str1))
