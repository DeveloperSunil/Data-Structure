// find third largest number in array

function findThirdLargestNumber(array) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i <= array.length - 1; i++) {
    let num = array[i];
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }
  return third;
}

let array = [1, 5, 3, 9, 16, 11];
// 9 6 4 3 2 1
let result = findThirdLargestNumber(array);
console.log("Third largest number in array is", result);
