// values stored in memory
let user = {
  age: 54,
  name: 'Kylie',
  maigc: true,
  scream: function () {
    console.log('ahhhh!');
  },
};

// Lookup is O(1)
console.log(user.age);

// Insert should also be O(1)
user.spell = 'Abra Kadabra';
console.log(user.spell);
user.scream();

// Hash Tables have the chance at collision with enough data, it will be randomly assigned. This slows down the access of data, reading and writing will be O(n) (Has to iterate over the linked list).
