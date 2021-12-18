const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];

function firstRecurringCharacter(arr) {
  const characters = {};

  for (let i = 0; i < arr.length; i++) {
    if (characters[arr[i]]) {
      return arr[i];
    }

    if (i === arr.length - 1) {
      return undefined;
    }

    characters[arr[i]] = true;
  }
}

console.log(firstRecurringCharacter(arr1));
console.log(firstRecurringCharacter(arr2));
console.log(firstRecurringCharacter(arr3));
