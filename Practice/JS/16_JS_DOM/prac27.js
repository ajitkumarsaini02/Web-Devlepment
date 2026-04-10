// // Manipluation of DOM using JS


// // selecting the element using querySelector
// let element = document.querySelector('img'); //selecting the first element with the class oldImg

// console.log(element);

// //id of the image
// console.log(element.getAttribute('id'));//returns null because the image does not have an id attribute

// // Changing the id of the image
// element.setAttribute('id', 'newImgId');

// // Changing the source of the image
// element.setAttribute('src', "../assests/creation2.jpg");
// console.log(element);

// element.getAttribute('class'); //returns null because the image does not have a class attribute

// // Changing the class of the image
// element.setAttribute('class', 'newImgClass');
// console.log(element);

// // Removing the class attribute from the image
// element.removeAttribute('class');
// console.log(element);

// // Removing the id attribute from the image
// element.removeAttribute('id');
// console.log(element);

// // style manipulation
// let element2 = document.querySelector('img');
// console.dir(element2)

// console.dir(element2.style); //returns the style object of the element

// let heading = document.querySelector('h1');
// console.dir(heading.style); //returns the style object of the element

// // changing the color of the heading
// heading.style.color = 'red';
// heading.style.fontSize = '50px';
// heading.style.textAlign = 'center';

// let links = document.querySelectorAll('a');
// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'green';
//     links[i].style.textDecoration = 'none';
// }

// for(let link of links){
//     link.style.color = 'yellow';
//     link.style.textDecoration = 'underline';
// }

// for .class selector
let img = document.querySelector('img');
console.log(img.classList);

let heading = document.querySelector('h1');
console.log(heading.classList);

// adding a class to the image
img.classList.add('newClass');
console.log(img.classList);

// removing a class from the image
img.classList.remove('oldImg');
console.log(img.classList);

heading.classList.add('green');

heading.classList.remove('green'); //removes the class if it is present and adds the class if it is not present