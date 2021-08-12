//"use strict";

// console.log("Hello from External JS!")
//var myStr = true;

// console.log(myStr)


// alert("Hey, this is definitely the external file.")
// var userConfirm = confirm("Do you want to remain logged in?")

// alter("The user selected: " + userConfirm)

// var userLunch = prompt (message: "What did you have for lunch?")

// alert ("The user had " + userLunch + "for lunch!")

alert("Welcome to my Website!");

var userInput = prompt ("What's your favorite color?");
alert(" Great, " + userInput + " is my favorite color too!");

var LittleMermaid = prompt ("How many days have you had the Little Mermaid?");
alert("Awesome! You owe: " + (LittleMermaid * 3));

var BrotherBear = prompt ("How many days have you had BrotherBear?");
alert("Great! That'll be: " + (BrotherBear * 3));

var Hercules = prompt ("How many days have you had Hercules?");
alert("That'll be: " + (Hercules * 3));


//A prompt: will return a string. . either: a. we need to PARSE the string into a number OR we could multiply all of our variables furst
alert("Your total for all three movies is: " (LittleMermaid * 3)+(BrotherBear * 3)+(Hercules * 3));
