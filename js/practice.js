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

function tellFortune(jobTitle,location,partner,numKids){
    var fortune = "You will be " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."

    return fortune;
    //console.log(fortune);
    //return "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
}

//console.log(tellFortune("developer", "san antonio", "Holly", "5"))
