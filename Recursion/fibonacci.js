// fibonacci 0 1 1 2 3 5

function fibonacci(a, b, n) {
  if (n === 0) {
    // base case
    return;
  }
  let c = a + b;
  console.log(c);
  fibonacci(b, c, n - 1);
}
const n = 7;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
fibonacci(a, b, n - 2);
