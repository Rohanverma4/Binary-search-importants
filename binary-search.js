// Search element k inside a sorted array..
const binarySearch = (k,array) => {
    let left_index = 0;
    let right_index = array.length - 1;
    while (left_index < right_index){
        const mid = left + Math.floor((right_index - left_index) / 2);
        if (array[mid] === k){
            return mid;
        } else if (array[mid] < k){
            left_index = mid + 1;
        } else {
            right_index = mid - 1
        }
    }
    return -1;
}