// add whatever parameters you deem necessary
function separatePositive(arr) {
    // init an empty array 
    const emptyArr = [];

    // using for loop to loop through arr 
    for(let n of arr){
        if(n > 0){
            emptyArr.unshift(n)
        }else{
            emptyArr.push(n)
        }
    }

    return emptyArr
}
