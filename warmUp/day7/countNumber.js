function countNumber(n) {
  if (n === 0) return 1; // handle if n = 0
  n = Math.abs(n); // handle negative number
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// let num = 0;
// let num = 650;
let num = -125;
let result = countNumber(num);
console.log(result);
