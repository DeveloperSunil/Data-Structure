// Quick sort Efficient average-case time complexity (O(nlog n))
// Quicksort is a highly efficient and widely used sorting algorithm, particularly effective for large datasets.
// It follows the divide and conquer approach, breaking down a problem into smaller sub-problems that are easier to solve.

// How Quicksort Works:
// Choose a Pivot:

// Select an element from the array to serve as the "pivot." The choice of pivot can vary; it could be the first element, the last element, the middle, or even a random element.
// Partitioning:

// Rearrange the array such that all elements less than the pivot are on its left, and all elements greater than the pivot are on its right. The pivot is then in its correct sorted position.
// Recursion:

// Recursively apply the same process to the sub-arrays to the left and right of the pivot.
// Base Case:

// The recursion ends when the sub-arrays have one or no elements, as these are already sorted.

function quickSort(array) {
  if (array.length <= 1) {
    // base case : array of 1 or fewer elements is already sorted
    return array;
  }
  // choose the pivot element(here we choose the last element of array)
  const pivot = array[array.length - 1];
  // partition the array into two sub-arrays
  let left = [];
  let right = [];
  //compare each elements with pivot
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // recursively sort the left and right sub-arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unSortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unSortedArray);
console.log("Sorted Array is", sortedArray);
