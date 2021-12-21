// add whatever parameters you deem necessary
function constructNote(msg,letter) {
    const letterCount = makeCounter(letter)
    const msgCount = makeCounter(msg)
    
    if(letterCount.size < msgCount.size) return false
    // using for in loop to loop through the object
    for(let key in letterCount){
        if (!msg.get(key)) return false
    }
    return true
}

// function turn string into object make freCounter 
function makeCounter(str){
    // init empty object with Map() 
    const freObj = new Map()

    // use for of loop to loop through the string
    for(let char of str){
        // set the value into the freObj with set 
        freObj.set(char,(freObj.get(char) || 0) + 1 )
    }
    
    return freObj
}
