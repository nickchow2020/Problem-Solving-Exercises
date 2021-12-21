// add whatever parameters you deem necessary
function averagePair(arr1,avg) {
    // making sure not empty array allow
    if (arr1.length === 0) return false

    // define the start index and end index
    let start = 0 ;
    let end = arr1.length - 1;

    // use while loop 
        // if start and end not cross 
    while(start < end){
        // define the ava of two point index value
        let matchAvg = (arr1[start] + arr1[end]) / 2; 

        //check if matVag is equal to target avg
        if (matchAvg === avg){
            return true
        }else if (matchAvg < avg){
            start ++ 
        }else{
            end --
        }
    }

    return false
}
