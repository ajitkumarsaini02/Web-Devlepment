let factBtn = document.querySelector("#factBtn");
let dogBtn = document.querySelector("#dogBtn");

let p = document.querySelector("#result");
let img = document.querySelector("#dogImg");

let factUrl = "https://catfact.ninja/fact";
let dogUrl = "https://dog.ceo/api/breeds/image/random";

// Cat Fact
factBtn.addEventListener("click", async () => {
    let fact = await getFacts();
    p.innerText = fact;
});

// Dog Image
dogBtn.addEventListener("click", async () => {
    let link = await getImage();
    img.src = link;
});

// Function for Cat Facts
async function getFacts() {
    try {
        let res = await axios.get(factUrl);
        return res.data.fact;
    }
    catch (e) {
        console.log("Error :", e);
        return "No fact found";
    }
}

// Function for Dog Image
async function getImage() {
    try {
        let res = await axios.get(dogUrl);
        return res.data.message;
    }
    catch (e) {
        console.log("Error :", e);
        return "";
    }
}