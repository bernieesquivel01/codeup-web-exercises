//if and if/else example;

var isSunny = true;
var haveSunscreen = true;

if (isSunny && haveSunscreen){
 //do some stuff
 alert("Don't forget your sunscreen!");
} else {
 alert("Good - too much sun can cause some issues as you get older!");
}

//if/else if/else example;
//if (condition){
 // code here rus if condition evaluates to true;
//}else if (condition2){
 //code here runs if condition1 is false *and* condition evaluates to true;
//}else {
 //code here gets executed if condition1 nor condition2 evaluate to true;
//}

var isSunny = confirm("Is it sunny outside today?");
var haveSunscreen = confirm("Did you remember your sunscreen?");

if (isSunny && haveSunscreen){
 //with condition1 being true, do the following;
 alert ("Great! You brought sunscreen, don't forget to apply!");
} else if (isSunny && !haveSunscreen) {
 //with condition1 being false, IF condition2 is true;
 alert ("Ahh man, be careful! It's a sunny day out there!");
} else {
 alert ("Well, hopefully it's not too sunny for you out there overall and you'll be alright!");
}

