let arr = [1, 2, 3, 4, 5];

let isEven = arr.every((el) => { // checks if every element in the array is even if one element is odd it will return false
    return el % 2 == 0;
});

console.log(isEven); // false

let isOdd = arr.every((el) => { // checks if every element in the array is odd if one element is even it will return false
    return el % 2 != 0;
});

console.log(isOdd); // false


let isLessThan10 = arr.every((el) => { // checks if every element in the array is less than 10 if one element is greater than 10 it will return false
    return el < 10;
});

console.log(isLessThan10); // true