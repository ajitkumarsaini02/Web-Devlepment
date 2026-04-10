const students = {
    name: "John",
    age: 25,
    class: 9,
    subjects: ["Math", "Science", "History"],
    username: "john_doe",
    password: "securepassword123"
};

let username1 = students.username;
let password1 = students.password;

console.log(username1); // john_doe
console.log(password1); // securepassword123

// Destructuring assignment
let { name, age, username } = students;

console.log(name); // John
console.log(age); // 25
console.log(username); // john_doe

// add default values
let { name: studentName, age: studentAge, grade = "A" } = students;

console.log(studentName); // John
console.log(studentAge); // 25
console.log(grade); // A (default value since 'grade' is not in the object)

// Skipping properties
let { name: firstName, class: studentClass } = students;

console.log(firstName); // John
console.log(studentClass); // 9