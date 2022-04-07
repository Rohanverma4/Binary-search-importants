
const lowerBound = (k,array) => {
    let left_index = 0;
    let right_index = array.length - 1;
    while(left_index < right_index){
        const mid = left_index + Math.floor((right_index - left_index)/2);
        if (array[mid] >= k){
            right_index = mid;
        } else {
            left_index = mid+1;
        }
    }
    return left_index;
}

console.log(lowerBound(1,[0, 1, 1, 1, 2]))