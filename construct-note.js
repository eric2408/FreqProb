// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // create objects
    const letterFreq = {};
    const messageFreq = {};
    // frequency counter 
    for(let l in letters){
        letterFreq[l] = ++letterFreq[l] || 1
    }

    for(let m in message){
        messageFreq[m] = ++messageFreq[m] || 1
    }

    // loop message 
    for(let char in messageFreq){
        //if letters not in message
         // return false
        if(!letterFreq[char]){
            return false;
        } else if(MessageFreq[char] > letterFreq[char]){
            return false;
        }
    }


    
    // return true
    return true;
}
