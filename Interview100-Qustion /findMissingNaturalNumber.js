/*
 Question: Given an array containing n distinct numbers taken from the range 0 to n,
 find the one number that is missing from the array.
 Example: If the input array is [3, 0, 1] for n = 3, the output should be 2.
 */

function findMissingNumber(array, n) {
  let expectedSum = Math.floor((n * (n + 1)) / 2);
  let totalSumOfArray = 0;
  for (element of array) {
    totalSumOfArray += element;
  }
  return expectedSum - totalSumOfArray;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];
let result = findMissingNumber(array, array.length);
console.log("Missing number of natural number is : ", result);
