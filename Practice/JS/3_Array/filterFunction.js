
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = num.filter((el) =>{
    return el % 2 == 0;
});

console.log(even); // [2, 4, 6, 8, 10]

let odd = num.filter((el) =>{
    return el % 2 != 0;
});

console.log(odd); // [1, 3, 5, 7, 9]