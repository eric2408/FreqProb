// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length -1;

    while(right > left){
        if((arr[left]+arr[right])/2 === avg){
            return true;
        } else if ((arr[left]+arr[right])/2 > avg){
            right--;
        } else {
            left++;
        }
    }

    return false;
}
