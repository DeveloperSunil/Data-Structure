//write a function to check eligible to vote
function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid age");
  } else if (age > 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}
eligibleToVote(-1);
eligibleToVote(10);
eligibleToVote(25);
