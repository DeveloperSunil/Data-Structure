// write a program to reverse the number

function reverseNumber(n) {
  let reverseDigit = 0;
  while (n > 0) {
    let remainder = n % 10;
    reverseDigit = reverseDigit * 10 + remainder;
    n = Math.floor(n / 10);
  }
  return reverseDigit;
}

let n = 12345;
let result = reverseNumber(n);
console.log("Reverse number", result);
