const { performance } = require('perf_hooks');

const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

// O(n) ==> Linear Time -- time depends on number of inputs -- operations increase with inputs
findNemo(large);

// O(1) ==> Constant Time --- number or operations stays flat
const boxes = [1, 2, 3, 4, 5, 6, 7, 8];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

// this function is O(2) -- still constant
logFirstTwoBoxes(boxes);

// O(n^2) -- quadratic time
const testArray = ['a', 'b', 'c', 'd', 'e'];

function printArrayPairs(array) {
  array.forEach((i) => {
    array.forEach((j) => {
      console.log(i, j);
    });
  });
}

printArrayPairs(testArray);
