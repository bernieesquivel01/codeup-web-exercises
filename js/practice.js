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

// function rollSixSided(num){
//
//     for(var i = 0; i < num; i++) {
//
//         var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
//
//         console.log("You rolled a " + random + " on your dice!")
//     }
// }
//
//
// rollSixSided(10);


// A warmup that might take a little research:
//
// So we've seen this dt property come up with some numbers in our work yesterday -
//
//     "dt": 1618317040
//
// Would you be able to write me a function named convertDateTime() - convertDateTime will take in a single num parameter along the lines of the property above []
//
// convertDateTime will return a form with human readable meaning - a date with a distinct month/year and perhaps other information.

function convertDateTime(num) {
    var a = new Date(num * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = a.getDate();
    var month = months[a.getMonth()]
    var year = a.getFullYear()
    var time = date + ' ' + month + ' ' + year;


    return time;

}

console.log(convertDateTime(1633701944));

//TA Example:

var thisMorning = 1633702800;

function convertDateTime (dtNum){
    var dtinMs = dtNum * 1000; converting to milliseconds

    var dateObj = new Date(dtinMs);

    // return dateObj

    return dateObj.toLocaleString()
}

convertDateTime(1633701944);

// function timeConverter(UNIX_timestamp){
//     var a = new Date(UNIX_timestamp * 1000);
//     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     var year = a.getFullYear();
//     var month = months[a.getMonth()];
//     var date = a.getDate();
//     var hour = a.getHours();
//     var min = a.getMinutes();
//     var sec = a.getSeconds();
//     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//     return time;
// }
// console.log(timeConverter(0));