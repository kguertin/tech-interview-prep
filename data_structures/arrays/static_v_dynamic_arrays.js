// static V Dynamic Arrays

// static arrays are fixed in size,

// arrays in JS work like Dymanic arrays, where as something like C++ allows for managing memory

// Dynamic arrays expand as we add more elements

const string = ["a", "b", "c", "d"];
// append may be O(n) because we may have to mave the element to a block of memory.
string.push("e"); // this is usually O(1) but in cases like above it may be  O(n) if we have the array in memory
