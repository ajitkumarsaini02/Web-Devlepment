let arr = [1, 2, 3, 4, 5];

let isEven = arr.some((el) => { // checks if some element in the array is even if one element is even it will return true
    return el % 2 == 0;
});

console.log(isEven); // true

let isOdd = arr.some((el) => { // checks if some element in the array is odd if one element is odd it will return true
    return el % 2 != 0;
});

console.log(isOdd); // true

let isGreaterThan4 = arr.some((el) => { // checks if some element in the array is greater than 4 if one element is greater than 4 it will return true
    return el > 4;
});

console.log(isGreaterThan4); // true