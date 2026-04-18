let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el * el;
});

console.log(double); // [1, 4, 9, 16, 25]

let double2 = num.map(function(el) {
    return el * el;
});
console.log(double2); // [1, 4, 9, 16, 25]

let students = [{
    name: "John",
    marks: 85
},
{
    name: "Jane",
    marks: 92
},
{
    name: "Doe",
    marks: 78
}];

let gpa = students.map((el) => {
    return el.marks/10;
});

console.log(gpa); // [8.5, 9.2, 7.8]