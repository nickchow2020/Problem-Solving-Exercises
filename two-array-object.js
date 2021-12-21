// add whatever parameters you deem necessary
function twoArrayObject(keyArr,val) {

    // init a new object with Map()
    const newObj = new Map()

    // for of loop the loop through each keyArr
    for(let i in keyArr){
        if(val[i] && keyArr[i]){

            // if val[i] is exit
            newObj.set(keyArr[i],val[i])
        }else{

            // if value[i] value is not exit
            newObj.set(keyArr[i],null)
        }
    }

    // return the new object result
    return newObj;
} 
