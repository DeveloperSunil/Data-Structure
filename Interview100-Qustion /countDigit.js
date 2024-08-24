// write a program for count the number in input

function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

n = 528;
let result = countDigit(n);
console.log("Total digit in n is ", result);
