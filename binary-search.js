// Search element k inside a sorted array..
const binarySearch = (k,array) => {
    let left_index = 0;
    let right_index = array.length - 1;
    while (left_index <= right_index){
        const mid = left_index + Math.floor((right_index - left_index) / 2);
        if (array[mid] == k){
            return mid;
        } else if (array[mid] > k){
            right_index = mid - 1;
        } else {
            left_index = mid + 1;
        }
    }
    return -1;
}
var k = 5;
var arr = [1,3,4,5,8,9,15,30,67]
console.log(binarySearch(k,arr))