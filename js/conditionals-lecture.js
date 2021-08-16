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
 //code here runs if condition1 is false *and* condition2 evaluates to true;
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

//If, else-if, else w/ strings

var trafficlight;

//if(trafficlight === "red"){
// alert ("Stop!")
//} else if (trafficlight === "yellow"){
// alert ("Slow Down");
//} else if (trafficlight === "green"){
// alert ("Green light, continue through following the other laws of the road!");
//} else {
// alter ("Uh oh, be aware of your surroundings if the traffic light looks a little off!");
//}

//turning it into a function
function trafficColor(){
  var userTrafficLight = prompt ("What color is our traffic light?")

 if(userTrafficLight.toLowerCase() === "red"){
  alert ("Stop!")
 } else if (userTrafficLight.toLowerCase() === "yellow"){
  alert ("Slow Down");
 } else if (userTrafficLight.toLowerCase() === "green"){
  alert ("Green light, continue through following the other laws of the road!");
 } else {
  alert ("Uh oh, be aware of your surroundings if the traffic light looks a little off!");
 }
}

trafficColor();


//Nested Example
function trafficColor(){
 var userTrafficLight = prompt ("What color is our traffic light?")
 var isBlinking = confirm("Uh oh, is the red light blinking?")
 if(userTrafficLight.toLowerCase() === "red"){
  if(isBlinking){
   //Nested conditional to trigger IF condition 1 is true, AND the condition is true
     alert("If the red light is blinking, treat it like a stop sign and be cautious!")
  }
  alert ("Stop!")
 } else if (userTrafficLight.toLowerCase() === "yellow"){
  alert ("Slow Down");
 } else if (userTrafficLight.toLowerCase() === "green"){
  alert ("Green light, continue through following the other laws of the road!");
 } else {
  alert ("Uh oh, be aware of your surroundings if the traffic light looks a little off!");
 }
}

//Switch Statement;

 var userTrafficLight = prompt ("What color is our traffic light?")

     userTrafficLight = userTrafficLight.toLowerCase();

switch (userTrafficLight){
 case "red":
  alert ("Stop!");
  break;
 case "yellow":
  alert ("Slow Down!");
  break;
 case "green":
  alert ("Green Light, continue through the intersection!");
  break;
 default:
  alert ("Uh oh, be aware of your surroundings if the traffic light isn't working!");
  break;
}
