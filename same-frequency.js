// add whatever parameters you deem necessary
function sameFrequency(numOne, numTwo) {
    let first = numOne.toString();
    let second = numTwo.toString();
    if(first.length === second.length) return false;

    const numOneFreq = {};
    const numTwoFreq = {};

    for(let num in first){
        numOneFreq[num] = ++numOneFreq[num] || 1;
    }

    for(let num in second){
        numTwoFreq[num] = ++numTwoFreq[num] || 1;
    }

    for(let num in numTwoFreq){
        if(!numOneFreq[num]){
            return false;
        } else if(numOneFreq[num] !== numTwoFreq[num]){
            return false;
        }
    }

    return true;
}
