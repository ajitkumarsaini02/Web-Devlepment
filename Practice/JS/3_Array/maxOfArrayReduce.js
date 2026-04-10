
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mx= num.reduce((acc, el) => {
    if(el > acc){
        return el;
    }
    return acc;
});

console.log(mx); // 10