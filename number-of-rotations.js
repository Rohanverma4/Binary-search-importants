// Number of times array is rotated..
const numberOfRotations = (array) => {
    const minimumElement = findMinimumElement(array);
    return minimumElement;
}

const findMinimumElement = (array) => {
    let left_index = 0;
    let right_index = array.length - 1;
    while(left_index < right_index){
        const mid = left_index + Math.floor((right_index-left_index)/2);
        if(left_index < mid && array[mid] < array[mid-1]){
            return mid;
        } else if (right_index > mid && array[mid] > array[mid+1]){
            return mid+1;
        } else if (array[mid] < array[right_index]){
            right_index = mid - 1;
        } else{
            left_index = mid + 1;
        }
    }
}

const array = [3,4,5,1,2]

console.log(numberOfRotations(array))