function smallestNumer(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [-1, 5, 10, 1, 0];
let result = smallestNumer(arr);
console.log(result);
