let ar = [1, 2, 3, 4, 5];

// forEach -> executes a provided function once for each array element. It does not return a new array, it simply executes the function for each element in the array.
ar.forEach(function(el) {
    console.log(el);
});

// other method of forEach
let print = function(el){
    console.log(el);
};
ar.forEach(print);

//arrow function
ar.forEach(el => {
    console.log(el);
});