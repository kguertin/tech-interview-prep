// Given two arrays, create a function that lets a user know (true/flase) weather these two arrays contain any common items.
// For Example:
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','i']
// should return false
// -------------------------------
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x']
// should return true

// function should:
// take 2 parameters - arrays
// return true or false

// Might want to ask how big the array might be.
// ask whats more important - space complexity or time complexity

// Nested for loops - O(n^2) - Brute force solution
// explain why this isn't the best.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2));
