/*
Rotate Array
Problem: Given an array, rotate the array to the right by k steps, where k is non-negative.
Example: For the array [1,2,3,4,5,6,7] and k = 3, the result would be [5,6,7,1,2,3,4].
*/

function rotateArray(array, k) {
  const n = array.length;
  k = k % n; // in case k is greater than the length of the array
  // step 1 reverse entire array
  reverse(array, 0, n - 1);

  // step 2 reverse the first k elements
  reverse(array, 0, k - 1);

  // step 3 reverse the remaining  n-k element
  reverse(array, n, k - 1);

  return array;
}
function reverse(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}
let k = 3;
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(array, k));
