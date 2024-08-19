// MergeSort: Stable sort, useful when order matters (O(nlog n))
function mergeSort(array) {
  if (array.length < 2) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    return array;
  }
  const middle = Math.floor(array.length / 2); // find the middle index
  const left = array.slice(0, middle); // Split the array into left half
  const right = array.slice(middle); // Split the array into right half
  return merge(mergeSort(left), mergeSort(right)); //// Recursively sort both halves and merge them
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from left or right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
