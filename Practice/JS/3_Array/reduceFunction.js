let arr = [1, 2, 3, 4, 5];

let r1 = arr.reduce((acc, el) => { // acc is the accumulator which holds the previous value and el is the current value
    return acc + el; // returns the sum of all the elements in the array
});

console.log(r1); // 15

let r2 = arr.reduce(function(acc, el) { // acc is the accumulator which holds the previous value and el is the current value
    return acc * el; // returns the product of all the elements in the array
});

console.log(r2); // 120

let r3 = arr.reduce((acc, el) => {
    return acc - el; // returns the difference of all the elements in the array
});

console.log(r3); // -13

let r4 = arr.reduce((acc, el) => {
    return acc / el; // returns the quotient of all the elements in the array
});

console.log(r4); // 0.008333333333333333