function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boooo!');
  }
}

boo([1, 2, 3, 4, 5]); // O1

function array_of_high_n_times(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }

  return hiArray;
}

console.log(array_of_high_n_times(6)); // O(n)
