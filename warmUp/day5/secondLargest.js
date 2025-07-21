/*
    corner cases
    1. Array is empty
    2. Array has negative numbers
    3. Array has duplicate numbers
*/
function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [4, 9, 0, 2, 8, 9, 7, 1];
let result = secondLargest(arr);
console.log(result);
