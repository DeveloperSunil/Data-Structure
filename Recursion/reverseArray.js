// Reverse the array using Recurrsion

function reverseArray(array, start, end) {
  console.log("start", start, "end", end);
  if (start >= end) {
    return array; // base case
  }
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
  start++;
  end--;
  return reverseArray(array, start, end);
}
let array = [1, 2, 3, 4, 5, 6, 7];
let result = reverseArray(array, 0, array.length - 1);
console.log(result);
