// Print sum of first n natural number

function sumOfNaturalNumber(start, number, sum) {
  //base condition
  if (start == number) {
    // base case
    sum += start;
    console.log("sum of first five number", sum);
    return;
  }
  sum += start;
  sumOfNaturalNumber(start + 1, number, sum);
}

sumOfNaturalNumber(1, 5, 0);
