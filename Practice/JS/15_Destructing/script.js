let names = ["John", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];

let winner = names[0];
let runnerUp = names[1];
let secondRunnerUp = names[2];

console.log(winner); // John
console.log(runnerUp); // Doe
console.log(secondRunnerUp); // Smith

// Destructuring assignment
let [first, second, third, ...others] = names;

console.log(first); // John
console.log(second); // Doe
console.log(third); // Smith
console.log(others); // ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]

// Skipping elements
let [champion, , thirdPlace] = names;

console.log(champion); // John
console.log(thirdPlace); // Smith

// Default values
let [gold, silver, bronze, fourth = "No fourth place"] = names;

console.log(gold); // John
console.log(silver); // Doe
console.log(bronze); // Smith
console.log(fourth); // No fourth place
 