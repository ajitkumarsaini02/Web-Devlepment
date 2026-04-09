// array shallow copy
let arr = [1,2,3,4,5];
let arrCopy = [...arr];

arrCopy[0] = 10;
console.log(arr);
console.log(arrCopy);

let arr1 =[
    {
        name:"Ajit"
    }
    ,
    {
        name:"John"
    }
]

let arrCopy1 = [...arr1];

arrCopy1[0].name = "Vijay";
console.log(arr1);
console.log(arrCopy1);