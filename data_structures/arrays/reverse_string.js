function reverseString(string) {
  if (!string || string.length < 2 || typeof string !== 'string') {
    return 'Invalid input';
  }

  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

function reverseRefactor(string) {
  if (!string || string.length < 2 || typeof string !== 'string') {
    return 'Invalid input';
  }

  return string.split('').reverse().join('');
}

const modernReverse = (string) => [...string].reverse().join('');

console.log(reverseString('Hi my name is kevin')); // O(n)
console.log(reverseString(0666)); // O(n)
console.log(reverseRefactor('Hi my name is kevin'));
console.log(modernReverse('Hi my name is kevin.'));
