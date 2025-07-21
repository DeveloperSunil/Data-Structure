// create a function to check if a number is Even or odd
function isEvenOdd(num) {
  if (num < 0) {
    console.log("Number should be positive");
  } else if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

isEvenOdd(5);
isEvenOdd(4);
isEvenOdd(-3);
