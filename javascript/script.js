//using DOM in manipulating htlm structure, using the querysellector
//here we are sellecting the button
const button = document.querySelector ('button');
//in order to see our output in the pbrowser, we run the code below
// console.log(button);
//using the innertext property to target and replace the text 'Submit' with 'Sign In'
button.innerText= 'Sign In'
// printing output again
console.log(button);
// now i want to add a heading to our form, 
// selecting heading with querrysellector again
const form = document.querySelector('form')
//as usual printing output
console.log(form);

//creating element
const title1 = document.createElement('div');

//addind text into the new element created
title1.textContent= 'Welcome Ernest!';

const username = "user";
const email = "user@example.com";
const password = "password123";

const validationMessage = validateForm(username, email, password);

if (validationMessage === "Form is valid.") {
  console.log("Form is valid. Proceed with registration.");
} else {
  console.log(validationMessage);
}