let user={
    name:"Ajit",
    age:20,
    address:{
        city:"Amroha",
        pincode:244221
    }
};
//deep copy
let userCopy=JSON.parse(JSON.stringify(user));

userCopy.address.city="Moradabad";
console.log(user);
console.log(userCopy);
console.log("Another method");
//another method of shallow copy

let user1={
    name:"John",
    age:20,
    address:{
        city:"New York",
        pincode:244221
    }
};
//deep copy
let userCopy1=structuredClone(user1);

userCopy1.address.city="Moradabad";
console.log(user1);
console.log(userCopy1);