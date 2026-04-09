let promise = new Promise(function(resolve, reject) {
    
    let success = false;

    if(success){
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})

//set timeout example
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Task completed after 2 seconds");
    }, 2000);
});

promise1.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})