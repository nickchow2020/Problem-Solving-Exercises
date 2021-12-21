// add whatever parameters you deem necessary;
function countPairs(arr,val) {

    // pair counter
    // let counter = 0;

    // use two next for loop;
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = i + 1; j < arr.length; j++){
    //         if(arr[i] + arr[j] === val){
    //             counter ++
    //         }
    //     }
    // };

    // return counter;

    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}
