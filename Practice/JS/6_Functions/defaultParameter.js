function sum(a, b=5){
    return a + b;
}

console.log(sum(10)); // 15
console.log(sum(10, 20)); // 30

function sum2(a=6, b){
    return a + b;
}

console.log(sum2(undefined, 10)); // 16
console.log(sum2(10)); // a = 10, b = undefined, result = NaN
