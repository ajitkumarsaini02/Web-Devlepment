// Properties and Methods of DOM Elements
let para = document.querySelector('p'); //selecting the first p element in the document and storing it in a variable called para
console.log(para);

console.dir(para); //shows the properties of the element in the console

console.log(para.innerText); //shows the text content of the element, including hidden elements
console.log(para.innerHTML); //shows the HTML content of the element
console.log(para.textContent); //shows the text content of the element, excluding hidden elements

//Changing the content of the element
para.innerText = "hi, I am Peter Parker!";
console.log(para);
para.innerHTML = "hi, I am <b>Peter Parker</b>!"; //we can also use HTML tags to change the content of the element
console.log(para);
para.textContent = "hi, I am Peter Parker!"; //we can also use textContent to change the content of the element, but it will not render HTML tags
console.log(para);

let heading = document.querySelector('h1'); //selecting the first h1 element in the document
heading.innerText = "Iron Man";
heading.innerHTML = `<u>${heading.innerText}</u>`; //we can also use template literals to change the content of the element

console.log(heading);