let arr = [10, 20, 30, 40, 50];

let multipleOf10 = arr.every((el) => { 
    return el % 10 == 0;
});

console.log(multipleOf10); // true

function getMin(nums){
    let min = nums.reduce((mn, el) => {
    if(el < mn){
        return el;
    } else{
        return mn;
    }
});
    return min;
}

console.log(getMin(arr)); // 10