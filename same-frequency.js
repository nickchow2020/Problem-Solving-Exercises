// add whatever parameters you deem necessary
function sameFrequency(num1,num2) {

    // if two nums are not the same length return false
    if(String(num1).length !== String(num2).length) return false

    // make frequency counter for both nums 
    const num1Obj = makeCounter(num1)
    const num2Obj = makeCounter(num2)

    // for in loop to check they key and value are equal
    for(let key in num1Obj){
        if(num1Obj[key] !== num2Obj[key]) return false
    }

    return true
}


function makeCounter(num){
    // convert number to string;
    const numString = String(num);

    // init empty object with map
    const counterObj = new Map();

    // loop through num string
    for(let num of numString){

        // set new Map value
        counterObj.set(num,counterObj.get(num) + 1 || 0)
    }

    // return that map object
    return counterObj
}