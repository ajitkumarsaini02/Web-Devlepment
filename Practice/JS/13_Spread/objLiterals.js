// Spread operator to combine objects
let obj1 = { name: 'Alice', age: 25 };
let obj2 = { city: 'New York', country: 'USA' };

let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }

// Spread operator to create a new object with additional properties
let newObj = { ...obj1, country: 'USA' };
console.log(newObj); // Output: { name: 'Alice', age: 25, country: 'USA' }

let arr1 = [1, 2, 3];
let obj3 = {...arr1};
console.log(obj3); // Output: { '0': 1, '1': 2, '2': 3 }

let obj4 = {..."hello"};
console.log(obj4); // Output: { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

let obj5 = {...null};
console.log(obj5); // Output: {}

let obj6 = {...undefined};
console.log(obj6); // Output: {}