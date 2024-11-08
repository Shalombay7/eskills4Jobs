// let department ='programming';
// console.log(department)

// let firstname = "Akosua";

// let sum = 200 + 500
// console.log(sum);
// let  division = 4/2
// console.log(division)
// let multiplication = 4 * 4
// console.log(multiplication)

// let y = 200;
// y *= 50;
// y += 200;
// console.log(y)

// let x = 100
// x *= 2
// x += 5
// console.log(x)

// logical operator

//IF STATEMENT

// let age = 17;
// //to limit the age of less than 18 to enroll

// // if (age >= 18);
//     if age < 18 {
//     //this means if age is less than 18
// console.log("you are not eligible");
// }
// else {console.log("You are eligible");
// }
// if the age is between 18 and 50, "you are eligible".
// note with conditional statements use 'if' or 'else' or 'else if'
// let age = 19;

// if (age < 18) {
//     console.log("you are under age, so not eligible");
//     // age is above 50
// } else if (age>= 18 && age <= 50) {
//     console.log("you are eligible");
    
// } else {
//     console.log("you are not eligible, because you are too old");
    
// }
// {} is to begin a code and endsa code and its not suppose to be ended with ;
// it always comes after the if and else statements


//the for loop

//function

// function greet() {
//     console.log("Hello World")
// }
// greet();

//adding a for loop into afuction


// function addition (a, b) {
//     console.log(a + b);
    
// }
// addition (10 , 5)

//function Scope

// const greeting = () =>  {
//     let message = 'Hello';
//     console.log(message);
    
// }
// function area 
//ARRAY
let students = ["Cristy","Gloria","Lois","prince", "Sly"];
console.log(students);
console.log();

let numbers = [1, 23, 25, 15, 30, 17, 25, 28];
console.log(numbers.length);
console.log(numbers[numbers.length -2]) //total no. of values in the lenght 

let courses = new Array("Maths", "English", "Science", "Social Studie");
console.log(courses[3]);

//Properties of array
// let courses = new Array("Maths", "English", "Science", "Social Studie");
// TO TAKE out THE LASS value an  Element in an arryaUSING POP=delete
// console.log(courses);
// console.log(courses.pop());
// console.log(courses);

//PUSH is used to add an element to the last part in an array
//adding the course Biology to the courses array
// courses.push("Biology");
// console.log(courses);

javascript

//for loops in array
// let courses = new Array("Maths", "English", "Science", "Social Studie");
// for (let i = 0; i < courses.length; i++){
//     console.log(i)//this will print the inedx of each element in the loop
//     console.log(courses[i])
//     //note i+=2 means increament by 2 i++ increament any one
   
// }

// let courses = new Array("Maths", "English", "Science", "Social Studie");
// (let i = 0; i < courses.length; i++){{
//     console.log(i)//this will print the inedx of each element in the loop
//     console.log(courses[i])
// }
//forEach loop, this is just like is faster than the for loop
// let courses = new Array("Maths", "English", "Science", "Social Studie");
// courses.forEach((course) => {//this will print the list of each courses
//     console.log(course);
    
// })