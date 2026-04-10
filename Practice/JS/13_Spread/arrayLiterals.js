let arr1 = [1, 2, 3];

// Spread operator to copy an array
let copiedArr = [...arr1];
console.log(copiedArr); // Output: [1, 2, 3]

let chars = ['a', 'b', 'c'];
let newChars = ['x', ...chars, 'y'];
console.log(newChars); // Output: ['x', 'a', 'b', 'c', 'y']

let nestedArr = [1, [2, 3], 4];
let flatArr = [...nestedArr];
console.log(flatArr); // Output: [1, [2, 3], 4]

let odd = [1, 3, 5];
let even = [2, 4, 6];
let numbers = [...odd, ...even];
console.log(numbers); // Output: [1, 3, 5, 2, 4, 6]

let arr = [1, 2, 3];
let newArrWithSpread = [...arr, 4, 5];
console.log(newArrWithSpread); // Output: [1, 2, 3, 4, 5]