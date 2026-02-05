console.log("Ajit Kumar")
console.warn("This is a warning message")
console.error("This is an error message")
let a

a = 10
let b = 20
console.log(typeof a)
console.log(typeof b)
let und;
let nul=null;
let bool=true;
console.log(typeof und)
console.log(typeof nul)
console.log(typeof bool)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
var x=10;
var x=15;
let y=20;
const z=30;
d=40;

function add(p,q){
    return p+q;
}
console.log(add(5,10));
//arrow function
const multiply=(p,q)=>p*q;
console.log("Arrow function result: ",multiply(5,10));

//Array
let arr=[1,2,3,4,5];
console.log(arr[0]);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(0);
console.log(arr);
console.log("Array length: ",arr.length);

//Object
let student ={
    name:"Ajit Kumar",
    age:20,
    course:"B.Tech",
};

let today = new Date();

console.time("test");
for(let i=0;i<100000;i++){
    
}
console.timeEnd("test");

console.group("Group 1");
console.count("a");
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.groupEnd();

//Table
let students = [
    {name:"Ajit Kumar", age:20, course:"B.Tech"},
    {name:"Rahul Sharma", age:22, course:"M.Tech"},
    {name:"Priya Singh", age:21, course:"B.Sc"},
    
];
console.table(students);