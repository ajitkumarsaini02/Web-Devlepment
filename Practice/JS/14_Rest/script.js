function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(100); // This will cause an error as arguments is not a real array it ia a collection
}

sum(1,2,3,4,5);

min(1,2,3,4,5);

function min(msg, ...args){ // if we want to use rest parameters we have to put it at the end of the parameter list
    console.log(msg);
    return args.reduce((min, el) => {
        if(el < min){
            return el;
        } else{
            return min;
        }
    });
}

console.log(min("Finding minimum", 1,2,3,4,5));