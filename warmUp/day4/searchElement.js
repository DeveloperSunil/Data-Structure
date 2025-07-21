// write a function to search an element in array if it found then return index and if it is not there return -1;

function searchElement(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return i;
    }
  }
  return -1;
}
let arr = [4, 2, 0, 10, 8, 30];
let result = searchElement(arr, 30);
console.log(result);
