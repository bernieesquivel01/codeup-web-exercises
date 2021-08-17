"use strict";

/* ########################################################################## */
console.log("Conditional Exercises!");

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//function analyzeColor(color){
//    if (color === "red"){
//        return "Strawberries are " + color;
//    } else if (color === "orange"){
//        return "Oranges are " + color;
//    } else if (color === "yellow"){
//        return "Bananas are " + color;
//    } else {
//        return color + " is not a defined color!";
//    }
//}

//console.log(analyzeColor("red"));
//console.log(analyzeColor("Black"));
//console.log(analyzeColor("yellow"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//analyzeColor(randomColor)
//console.log(analyzeColor("black"));
//console.log(analyzeColor("blue"));
//console.log(analyzeColor("tan"));
//console.log(analyzeColor("yellow"));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//function analyzeColor(color) {
//   switch (color) {
//       case "red":
//           alert("Strawberries are red");
//           break;
//       case "orange":
//           alert("Oranges are orange");
//           break;
//       case "yellow":
//           alert("Bananas are yellow");
//           break;
//       case "green":
//            alert("Apples are green");
//            break;
//        case "blue":
//            alert("blue is the color of the sky");
//            break;
//        case "indigo":
//            alert("Ken's shoes are indigo");
//            break;
//        case "violet":
//            alert("Blueberries are violet");
//            break;
//        default:
//            alert("Sorry, " + color + " is not a defined color!");
//            break;
//    }
//}

//console.log(analyzeColor("violet"));
//console.log(analyzeColor("indigo"));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//var userInput = prompt ("What's your favorite color?")

// analyzeColor(userInput);
//alert(analyzeColor(userInput));
//
//console.log(analyzeColor(userInput));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber,totalAmount){
    var discount;
if (luckyNumber === 0){
    discount = 0;
    alert ("Sorry, unfortunately you do not qualify for a discount!");
} else if (luckyNumber === 1){
    discount = .1;
} else if (luckyNumber === 2){
    discount = .25;
} else if (luckyNumber === 3){
    discount = .35;
} else if (luckyNumber === 4){
    discount = .5;
} else if (luckyNumber === 5){
    discount = 1;
    alert ("Congratulations! You're order is FREE!!")
}

return totalAmount - (totalAmount*discount)
}

//console.log(calculateTotal(2,50));
//console.log(calculateTotal(0,100));
//console.log(calculateTotal(5,200));
//console.log(calculateTotal(4,100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
//var totalBill = parseFloat(prompt ("What's the amount of your total purchase?"));
//
//alert ("Your lucky number is " + luckyNumber);
//alert ("Your total initial price is $" + totalBill);
//alert ("Your total after your discount is applied is $" + calculateTotal(luckyNumber, totalBill));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function numberFromUser(){
    var userInput = parseInt(prompt("Enter number:"));
    if (isNaN(userInput)){
        alert ("Sorry, that is not a valid number!");
        return numberFromUser();
    } else {
        return userInput;
    }
}

function guestNumber(){
    var userNumber = confirm ("Would you like to enter a number?");
if (userNumber){
    var numberEntered = numberFromUser();
    if (numberEntered % 2 === 0){
        alert ("The number is even!");
    } else {
        alert ("The number is odd!");
    }
    alert ("The number you entered plus a hundred is " + (numberEntered + 100));
    alert ("The number is " + (numberEntered < 0 ? "negative" : "positive") + ".")
}
}

console.log(guestNumber());
