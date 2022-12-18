// add whatever parameters you deem necessary
function isSubsequence(first, second) {
    let firstIdx = 0;
    let secondIdx = 0;
    if(!first) return true;
    while(secondIdx < second.length){
        if(first[firstIdx] === second[secondIdx]){
            firstIdx++;
        } 
        if(firstIdx === first.length) return true;
        secondIdx++;
    }

    return false;
}
