let user={
    name:"Ajit",
    age:20,
    address:{
        city:"Amroha",
        pincode:244221
    }
};
//shallow coy
let userCopy={...user};

userCopy.address.city="Moradabad";
console.log(user);
console.log(userCopy);
console.log("Another method");

let user1={
    name:"John",
    age:20,
    address:{
        city:"New York",
        pincode:244221
    }
};
//another method of shallow copy
let userCopy1=Object.assign({}, user1);

userCopy1.address.city="Delhi";
console.log(user1);
console.log(userCopy1);