const lastOccurance = (k,array) => {
    let left_index = 0;
    let right_index = array.length - 1;
    let res = -1;
    while (left_index < right_index){
        const mid = left_index + Math.floor((right_index-left_index)/2)
        if (array[mid] === k){
            res = mid;
            left_index = mid+1;
        }
        if(k > array[mid]){
            left_index = mid + 1;
        } else {
            right_index = mid - 1;
        }
    }
    return res;
}

const arr = [1,2,5,5,6,9,12,67,124,567]
console.log(lastOccurance(5,arr))