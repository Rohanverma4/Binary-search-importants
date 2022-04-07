// Ques - Search any element in sorted and rotated array..
const sortedAndRotatedArray = (k,array) => {
    const position = findMinimumElement(array);

    const leftSortedArray = array.slice(0,position);
    const rightSortedArray = array.slice(position);

    const leftSearch = binarySearch(k,leftSortedArray);
    const rightSearch = binarySearch(k,rightSortedArray) + leftSortedArray.length;

    return leftSearch || rightSearch;
}

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
}

const findMinimumElement = (array) => {
    let left_index = 0;
    let right_index = array.length - 1;
    while(left_index <= right_index){
        const mid = left_index + Math.floor((right_index-left_index)/2);
        if (left_index < mid && array[mid] < array[mid-1]){
            return mid;
        } else if (right_index > mid && array[mid] > array[mid+1]){
            return mid+1;
        } else if (array[mid] < array[right_index]){
            right_index = mid - 1;
        } else {
            left_index = mid + 1;
        }
    }
    return -1;
}

const array = [3,4,5,1,2]
const k = 1;
console.log(sortedAndRotatedArray(k,array))