// To find duplicates in an array of integers containing 𝑛
// n elements, there are several approaches you can take depending on the constraints and the desired efficiency.

function findDuplicateElement(array) {
  let set = new Set(); // initial set
  let duplicate = null;
  for (let i = 0; i <= array.length - 1; i++) {
    if (set.has(array[i])) {
      // check element in set if it has already there it return
      return (duplicate = array[i]);
    }
    set.add(array[i]); // if element is not there then it add in sets
  }
}

let array = [1, 2, 3, 4, 5, 3];
let result = findDuplicateElement(array);
console.log("Duplicate element in Array is : ", result);
