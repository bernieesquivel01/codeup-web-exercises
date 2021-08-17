"use strict";

console.log("This file is to practice functions challenge!");

//Make a function called returnTwo() that returns the number 2 when called
//Test this function with console.log(returnTwo())
function returnTwo(){
    return 2;
}

console.log(returnTwo());

//Make a function called sayHowdy() which console.logs the string "Howdy!"
//Test this function by directly calling sayHowdy()
function sayHowdy(){
    return "Howdy!";
}

console.log(sayHowdy());

//Make a function called returnName() that returns the string of your name
//Test this function with console.log(returnName())
function returnName(){
    return "Bernie";
}

console.log(returnName());


//Make a function called addThree() which takes in a number input and returns the number plus 3
//Test this function with console.log(addThree(5))
function addThree(x){
    return x +3;
}

console.log(addThree(10));
console.log(addThree(5));
console.log(addThree(1));

//Make a function called sayString() which returns the string input passed in
//Test this function with the console.log(sayString("codeup"))
function sayString(string){
    return string;
}

console.log(sayString("Functions Challenge Worksheet!"));
console.log(sayString("Practice makes perfect!"));

//Challenge Function Drills

//Write a function called identity(input) that takes in an argument called input and returns that input
function identity(input){
    return input;
}

console.log(identity("Brianna"));
console.log(identity("Hudson"));

//**Need to review this**
//Write a function called getRandomNumber(min,max) that returns a random number between min and max values sent to that function call.
function getRandomNumber(min,max){
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
console.log(getRandomNumber(12, 25));
console.log(getRandomNumber(1, 10));


//Write a function called first(input) that returns the first character in the provided string
function first(input){
    return input.charAt(0);
}

console.log(first("Spaghetti"));
console.log(first("Zebra"));

//Write a function called last(input) that returns the last character of a string
function last(input){
    return input.charAt(input.length-1);
}

console.log(last("Lasagna"));
console.log(last("Codeup"));
console.log(last("Mississippi"));

//Write a function called rest(input) that returns everything but the first character of a string
//Need to review this more...
function rest(input){
    return input.substring(1, input.length);
}

console.log(rest("California"));
console.log(rest("Pizza"));
console.log(rest("soccer"));

//Write a function called reverse(input) that takes a string and returns it reversed.
//Split, Reverse, Join
function reverse(input){
    return input.split("").reverse().join("");

}

console.log(reverse("Hello"));
console.log(reverse("Favorite"));
console.log(reverse("Codeup"));

//Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
function isNumeric(input){
    if (isNaN(input) || input === true || input === false){
        return false;
    }
    return true;
}

console.log(isNumeric(5));
console.log(isNumeric("abc"));


//Write a function called count(input) that takes in a string and returns the number of characters.
function count(input){
    return input.length;
}

console.log(count("Texas"));
console.log(count("Mississippi"));
console.log(count("Tennessee"));

//Write a function called add(a,b) that returns the sum of a and b
function add(a,b){
    return a + b;
}

console.log(add(5,5));
console.log(add(100,1));
console.log(add(12,17));

//Write a function called subtract(a,b) that return the difference between the two inputs.
function subtract(a,b){
    return a - b;
}

console.log(subtract(5,2));
console.log(subtract(8,1));
console.log(subtract(100,25));

//Write multiply(a,b) function that returns the product
function multiply(a,b){
    return a * b;
}

console.log(multiply(5,5));
console.log(multiply(7,3));
console.log(multiply(8,3));

//Write a divide(numerator, denominator) function that returns a divided by b
function divide(numerator, denominator){
    return numerator/denominator;
}

console.log(divide(20,5));
console.log(divide(25,10));
console.log(divide(100,10));

//Write a remainder(number,divisor) function that returns the remainder left over when dividing number by the divisor
function remainder(number, divisor){
    return number % divisor;
}

console.log(remainder(4,3));
console.log(remainder(9,2));
console.log(remainder(11,3));


//Write the function square(a) that takes in a number and returns the number multiplied by itself
function square(a){
    return a * a;
}

console.log(square(10));
console.log(square(5));
console.log(square(2));


//Write a function called sumOfSquares(a,b) that uses only your add() function and your square function and not + or * operators
function sumOfSquares(a,b){
    var squareA = square(a);
    var squareB = square(b);
    return add(squareA,squareB);
}

console.log(sumOfSquares(2,3));
console.log(sumOfSquares(5,2));


//Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on
function doMath(operator, a, b){
    return operator (a,b);
}

console.log(doMath (add, 4,4));
console.log(doMath(subtract, 100, 10));
console.log(doMath(divide, 20, 5));
