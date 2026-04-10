const square = (n) => {
    return n * n;
};

// other way to write the same function
const square2 = (n) => (n*n);

console.log(square(5));
console.log(square2(5));