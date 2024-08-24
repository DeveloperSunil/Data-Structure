// check a number it is palindrome number on not

function checkPalindromeNumber(n) {
  let number = n;
  let reverseDigit = 0;
  while (n > 0) {
    let remainder = n % 10;
    reverseDigit = reverseDigit * 10 + remainder;
    n = Math.floor(n / 10);
  }
  if (reverseDigit === number) {
    return `Number is palindrom ${reverseDigit}`;
  } else {
    return `Number is not palindrom ${reverseDigit}`;
  }
}

let n = 121;
console.log(n);
let result = checkPalindromeNumber(n);
console.log(result);
