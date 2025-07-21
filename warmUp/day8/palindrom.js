function isPalindrom(n) {
  if (n < 0) return false;
  let actualNumber = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  //   if (actualNumber === rev) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return actualNumber === rev;
}
let num = 121;
let result = isPalindrom(num);
console.log(result);
