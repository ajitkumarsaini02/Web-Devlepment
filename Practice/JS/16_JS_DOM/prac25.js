// JavaScript DOM 

// getElementById()
let imgObj = document.getElementById('mainImg'); // Get the image element by its ID
let images = document.getElementsByClassName('oldImg'); // Get all elements with the class 'oldImg'

console.log(imgObj); // Log the main image element to the console
console.log(images); // Log the collection of old images to the console

console.log(imgObj.src); // Log the source URL of the main image
console.log(imgObj.alt); // Log the alt text of the main image
console.log(imgObj.tagName); // Log the tag name of the main image (should be 'IMG')

// getElementsByClassName()

let oldImg = document.getElementsByClassName('oldImg'); // Get all elements with the class 'oldImg'
console.log(oldImg); // Log the collection of old images to the console

// Loop through the collection of old images and log their sources
for (let i = 0; i < oldImg.length; i++) {
    oldImg[i].src = "../assests/spiderman.jpeg"; // Update the source URL of each old image
    console.log(`value of oldImg[${i}]: ${oldImg[i].src}`); // Log the source URL of each old image
}

console.log(document.getElementsByClassName("hdgd")); // Log the result of trying to get elements with a non-existent class (should be an empty collection)

// getElementsByTagName()
let par = document.getElementsByTagName('p'); // Get all paragraph elements
console.log(par); // Log the collection of paragraph elements to the console

//  querySelector() and querySelectorAll()
let mainImg = document.querySelector('#mainImg'); // Get the first element with the ID 'mainImg'
console.log(mainImg); // Log the main image element to the console
let firstOldImg = document.querySelector('p'); // Get the first paragraph element (note: there is a syntax error here, it should be 'p' instead of 'p)')
console.log(firstOldImg); // Log the first paragraph element to the console

let oldImgs = document.querySelectorAll('.oldImg'); // Get all elements with the class 'oldImg'
console.log(oldImgs); // Log the collection of old images to the console

