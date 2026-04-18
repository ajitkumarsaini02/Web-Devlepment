let arr = [{
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

arr.forEach(function(student) {
    console.log("Name: " + student.name);
    console.log("Marks "+ student.marks);
    console.log();
});