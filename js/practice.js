//Our warmup prompt:
//    Create a function named rollSixSided that takes in a number as a parameter. Write code within your function that would generate the number between 1 and 6 [the dice] and then console.log the result to the user. Your loop should run the number of times as specified by the argument provided.
//    Example:
//rollSixSided(10)
//Result:
//    You rolled a 1
//You rolled a 5
//You rolled a 2
//You rolled a 3
//You rolled a 6
//You rolled a 6
//You rolled a 3
//You rolled a 1
//You rolled a 6
//You rolled a 4

//var number = Math.floor(Math.random() * 6) + 1;

//function rollSixSided(num){
//
//    for(var i = 0; i < num; i++) {
//
//        var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
//
//        console.log("You rolled a " + random + " on your dice!")
//    }
//}
//Write a function named tellFortune that:
//    takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

function tellFortune(jobTitle,location,partner,numKids){
    var fortune = "You will be " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."

    return fortune;
    //console.log(fortune);
    //return "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
}

//console.log(tellFortune("developer", "san antonio", "Holly", "5"))

//Write a function named calculateDogAge that:
//takes 1 argument: your puppy's age
//calculates your dogs age based on the conversion rate of 1 human year to 7 dog years
//call the function three times with different sets of values;

//Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.

function calculateDogAge(age){//dog to human; 1 human year = 7 dog years.
     var humanYears = age/7;
    console.log("Your dog is " + humanYears + " years old, in human years!")
}
//    return age / 7;
//}
//
//console.log(calculateDogAge(21));
calculateDogAge(21);
calculateDogAge(35);
calculateDogAge(42);
calculateDogAge(12);

//OR:

//function calculateDogAge(age) { //Human to dog years; 7 dog years = 1 human year
//    var dogYears = 7*age
//    console.log("Your dog is " + dogYears + " years old, in dog years!")
//}
//
//calculateDogAge(3)

//instructor example: including bonus:
//function calculateDogAge
//2 parameters: my puppys age and the conversion rate to human years
//output : return a formatted string

function calculateDogAge(puppyAge, conversionNum){
    var ageInHumanYears = puppyAge * conversionNum;

    return "Hello there! Your dog is " + ageInHumanYears + " years old. I arrived at that number by multiplying your dogs age of " + puppyAge + " with a converter of " + conversionNum + "."
}

