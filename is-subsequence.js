// add whatever parameters you deem necessary
function isSubsequence(str1,str2) {
    // if str2 length is less than str1 return false 
    if(str2.length < str1.length) return false;

    // define the length of the str2 and str1
    let str2Length = str2.length;
    let str1Length = str1.length;

    // define a start index
    let startStr2 = 0;
    let startStr1 = 0;

    // define foundCounter 
    let foundCounter = 0;

    // using while loop
    while(str2Length > startStr2){
        // find the first match character.
        const firstMatchIdex = str2.indexOf(str2[startStr2])
        if(str1[startStr1] === str2[firstMatchIdex]){
            startStr1 ++
            foundCounter ++
        }else{
            startStr2 ++
        }
    };


    if(foundCounter < startStr1) return false

    return true;
}
