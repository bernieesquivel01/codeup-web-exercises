"use strict";

//For Loops; Exercise 2; Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(num){
    for (var a = 1; a <= 10; a++){
        console.log(num + "x" + a + "=" + num * a);
    }
}

showMultiplicationTable(7);

//Exercise 3; Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

var randomNumber = Math.floor((Math.random()*200)+1);


for (var x = 1; x <= 10; x++){
    randomNumber += 10;
    if (randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

//Review:
//function randomNumOddEven(){
//    for (var i=0; i < 10; i++){
//        //random formula:
//        //Math.floor(Math.random() * (max-min)) + min
//        var randNum = Math.floor(Math.random() * 180) + 20;
//        var oddOrEven = randNum % 2 == 0 ? "even" : "odd";
//        console.log(randNum +)
//    }
}
//Exercise 4; Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

//Review:
//function numTriangle(){
//    for (var i = 1; i < 10; i++){
//        var output = "";
//
//    for (var j = 0; j < i; j++){
//        output += i;
//    }
//
//    console.log(output);
//    }
//}
//Exercise 5; Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var i = 100; i >= 5; i -=5){//**not including = sign on increment change caused infinite loop!!
    console.log(i);
}

//Review:
//function downByFive(){
//    for (var i = 100; i >= 5; i -=5){
//        console.log(i);
//    }
//}