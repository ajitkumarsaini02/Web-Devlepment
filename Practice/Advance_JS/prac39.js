function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve(`${data} saved successfully`);
        } else {
            reject(`${data} not saved. Weak connection`);
        }
    });
}

savetoDb("apna college")
.then((result) => {
    console.log(result);
    return savetoDb("hello world");
})
.then((result) => {
    console.log(result);
    return savetoDb("shradha");
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});