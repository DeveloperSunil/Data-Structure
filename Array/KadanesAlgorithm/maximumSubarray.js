// Find the Maximum Subarray (Kadane's Algorithm)

// Problem: Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example: For the array [-2,1,-3,4,-1,2,1,-5,4], the maximum subarray is [4,-1,2,1] with a sum of 6.

/* kadane's algo says 3 points
1. inital sum is zero and maximum is array zeroth element
2. update maximumSum
3. if sum is less then zero update zero sum 
this is Kadane's algorithm
*/

function maximumSubarray(array) {
  let sum = 0;
  let maximumSum = array[0];
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    maximumSum = Math.max(maximumSum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maximumSum;
}

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maximumSubarray(array);
console.log(result);
