function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [20, 0, 10, 8, 17, 1];
let result = findLargest(arr);
console.log(result);
