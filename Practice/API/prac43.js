let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 =", data1.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 =", data2.fact);
    }
    catch (err) {
        console.log("ERROR -", err);
    }
}
getFacts();