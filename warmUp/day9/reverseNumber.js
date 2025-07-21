function reverseNumber(n) {
  let actualNumber = n;
  let rev = 0;
  n = Math.abs(n); // Make positive if number is negative
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  // let limit = Math.pow(2, 31); //calculate power
  let limit = 2 ** 31; // calculate power
  if (rev < -limit || rev > limit) return 0;
  return actualNumber < 0 ? -rev : rev;
}
let num = 123;
let result = reverseNumber(num);
console.log(result);
