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
const array2 = ['z', 'y', 'x'];

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

// array 1 to object: {
// a: true,
// b: true
// c: true
// x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loops through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array existed on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
// This is better for time complexity
// space complexity of O(a)
console.log(containsCommonItem2(array1, array2));

// this is more readable, but may be language specific.
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
