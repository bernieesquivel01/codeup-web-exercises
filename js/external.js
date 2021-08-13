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

//Exercise 3 JavaScript with HTML

var LittleMermaid = prompt ("How many days have you had the Little Mermaid?");
alert("Awesome! You owe: " + (LittleMermaid * 3));

var BrotherBear = prompt ("How many days have you had BrotherBear?");
alert("Great! That'll be: " + (BrotherBear * 3));

var Hercules = prompt ("How many days have you had Hercules?");
alert("That'll be: " + (Hercules * 3));


//A prompt: will return a string. . either: a. we need to PARSE the string into a number OR we could multiply all of our variables furst
alert("Your total for all three movies is: " + (LittleMermaid*3+BrotherBear*3+Hercules*3));

var Google = 400
var Amazon = 380
var Facebook = 350

var GooglePaycheck = prompt ("How many hours did you work at Google?");
alert("You made " +GooglePaycheck*Google+ " at Google!");

var AmazonPaycheck = prompt ("How many hours did you work at Amazon?");
alert("You made " +AmazonPaycheck*Amazon+ " at Amazon!");

var FacebookPaycheck = prompt ("How many hours did you work at Facebook?");
alert("You made " +FacebookPaycheck*Facebook+ " at Facebook!");

alert ("Your total pay for the week is: " + (GooglePaycheck*Google+AmazonPaycheck*Amazon+FacebookPaycheck*Facebook));



