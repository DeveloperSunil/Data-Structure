// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// A HashMap (or simply a hash map) is a data structure that allows you to store key-value pairs, where each key is unique. The keys are hashed to generate an index, which points to the value associated with the key. This makes it highly efficient for lookups, insertions, and deletions, typically with average time complexity of O(1).

// HashMap in JavaScript
// JavaScript does not have a built-in HashMap class, but the Map object is a close equivalent. Additionally, you can also use plain JavaScript objects as hash maps, though they have some limitations compared to Map.

function twoSum(target, array) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const complement = target - current;

    // Check if the complement exists in the map
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return the indices of the complement and the current number
    }

    // Store the current number and its index in the map
    map.set(current, i);
  }

  return null; // Return null if no pair is found
}

let target = 6;
let nums = [3, 2, 4];

const result = twoSum(target, nums);

if (result) {
  console.log(`Indices: ${result[0]}, ${result[1]}`);
  console.log(`Values: ${nums[result[0]]}, ${nums[result[1]]}`);
} else {
  console.log("No pair found that adds up to the target.");
}
