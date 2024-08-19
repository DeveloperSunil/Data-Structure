// Print Factorial of a number n

function factorial(n) {
  if (n == 0 || n == 1) return 1; // base case
  return n * factorial(n - 1);
}
const n = 5;
const result = factorial(n);
console.log(`Factorial of 5 is ${result}`);
