//1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

    const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeLanguages = users.filter(function (user) {
    return user.languages.length >= 3;
})

console.log(threeLanguages);

//OR this option would work:
// console.log(users.filter(user => user.languages.length >= 3));

//TA Example:
// var threeLanguages = users.filter(function(person){
//     return person.languages.length >= 3;
// })
//
// console.log(threeLanguages);
//
//Using an arrow function:
// let threeLanguages = users.filter((person) => person.languages.length > 2);
//
// console.log(threeLanguages);

//3. Use .map to create an array of strings where each element is a user's email address

let emailAddresses = users.map(function(user){
    return user.email;
});

console.log(emailAddresses);

//OR this option would work:
// console.log(users.map(user => user.email));

//TA Example:
// var userEmails = users.map(function(person){
//     return person.email
// })
//
// console.log(userEmails);

//Example of Arrow Function:
// let userEmails = users.map((person) => person.email)
//
// console.log(userEmails);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce(function (yearsOfExperience, user) {
    return yearsOfExperience + user.yearsOfExperience;
}, 0) //[0] sets the initial value; completely optional.

console.log(totalYears/users.length);

//TA Example:
// var totalYears = users.reduce(function(total, user){
//     return total + user.yearsOfExperience
// }, 0)
//
// console.log(totalYears);
//
// let avgYears = totalYears/users.length;
//
// console.log(avgYears);

//5. Use .reduce to get the longest email from the list of users.
var longestEmail = users.reduce(function(longestEmail, user){
    if (longestEmail.length > user.email.length){
        return longestEmail;
    } else {
        return user.email;
    }
})

console.log(longestEmail);

//Solution 1; works.
// const longestEmail = Math.max(...users.map(users => users.email.length));
//
// console.log(longestEmail);

//Solution 2; works.
// var longestEmail = users.reduce(function (a, b) {
//     return a.email.length > b.email.length ? a : b;
// });
//     console.log(longestEmail);

//TA Example:
// var longestEmail = users.reduce(function(longestEmail, user){
//     return longestEmail.length > user.email.length ? longestEmail : user.email
// }, "")
//
// console.log(longestEmail);

//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//TA Example:
// var nameString = users.reduce(function(name, user, index) {
//     if(index != users.length -1) {
//         return name + (user.name + ", ")
//     };
//     return name + (user.name + ".")
// }, "Your instructors are : ");
//
// console.log(nameString);

var nameString = users.map(function(user){
    return user.name;
}).join(", ")

console.log(nameString);

// Bonus
//1. Use .reduce to get the unique list of languages from the list of users.