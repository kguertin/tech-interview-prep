const strings = ["a", "b", "c", "d"];
// 4 items = 16 bytes of storage

// Get the third item from array in memory
strings[2]; // O(1)

// push - add to end of array
strings.push("e"); // O(1)
console.log(strings);

// pop - remove from end of array
strings.pop();
console.log(strings);

// unshift - add to beginning of array
strings.unshift("x"); // O(n) - has to reassign the indexes
console.log(strings);

// splice // O(n)
strings.splice(2, 0, "alien");
console.log(strings);

// lookup - O(1)
// push - O(1)
// insertion - O(n)
// deletion - O(n)
