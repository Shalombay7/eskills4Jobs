const form = document.getElementsByClassName('Username:');
console.log(form);

const email = document.getElementById('email');
console.log(email);

const button = document.querySelector('button');

console.log(button);
//changing text on login

button.innerText = 'Signin' //this code will change my button name to Sign in

// to change heading//text of the login form = 
const title =document.querySelector('h2');

console.log(h2);

//change S-M-S login to Lets get started

title. innerHTML = "<strong>Let's Get Started</strong>";// this code changes the heading for you.

//note: .innertext, innerHTML, etc are all built in functions...

// Adding a clsaa to the heading of my log in form
title.setAttribute('class', 'titleClass');//this adds or gives a class to the title..
console.log(title);
// to change to id , same code but replace class with id and titleid in place of titleclass

//creating an element
const