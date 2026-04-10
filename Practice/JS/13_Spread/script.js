let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Spread operator to combine arrays
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Spread operator to pass array elements as individual arguments
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Spread operator to copy an object
let copiedObj = { ...obj1 };
console.log(copiedObj); // Output: { name: 'Alice', age: 25 }

// Spread operator to find the maximum value in an array
console.log(Math.max(...arr1)); // Output: 3
console.log(Math.max(...arr2)); // Output: 6

// Spread operator to create a new array with additional elements
let newArr = [0, ...arr1, 4];
console.log(newArr); // Output: [0, 1, 2, 3, 4]

console.log(...arr1); // Output: 1 2 3