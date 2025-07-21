// how array data store
// declare the array
let arr = [2, 6, 0, 100, 9, 27];

//access array value
console.log(arr[0]); //2
console.log(arr[1]); //6

// access the value of array with loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// decalre the object
// object store data in key value pair
let obj = {
  a: 7,
  name: "sunil",
  bool: true,
  arr: [1, 2, 3, 4, 5],
};
// access object value
console.log(obj.a); //7
console.log(obj.name);

// iterate the value object
for (let key in obj) {
  console.log(key + " " + obj[key]);
}
