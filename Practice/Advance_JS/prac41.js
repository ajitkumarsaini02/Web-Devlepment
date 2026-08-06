function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (num > 3) {
        h1.style.color = color;
        resolve("Success");
      } else {
        reject("Promise Rejected");
      }
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    console.log("Task Completed");
  } catch (err) {
    console.log(err);
  }
}

demo();
