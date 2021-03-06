(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Bernie",
        lastName: "Esquivel",
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

     shoppers.forEach(function(shoppers){
         if (shoppers.amount > 200){
             console.log(shoppers.name);
             console.log("$" + shoppers.amount.toFixed(2) + " is your amount, before discount!");
             console.log("Your discount is $" + (shoppers.amount * .12).toFixed(2));
             console.log("Your discounted price is $" + (shoppers.amount  - shoppers.amount * .12).toFixed(2));
         } else {
             console.log(shoppers.name);
             console.log("Your total: $" + shoppers.amount.toFixed(2) + " , does not qualify for a discount!");
         }
    });
    //added .toFixed(2) for aesthetics, so that amounts show two digits after decimal (cents).

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties **author has two properties, hence {}**
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    //var books = []
    //books.push({title: "Ferdinand the Bull", author: {firstName: "Munro", lastName: "Leaf"}});
    //books.push({title: "Green Eggs and Ham", author: {firstName: "Doctor", lastName: "Seuss"}});
    //books.push({title: "Where the Wild Things Are", author: {firstName: "Maurice", lastName: "Sendak"}});
    //books.push({title: "Dragons Love Tacos", author: {firstName: "Adam", lastName: "Rubin"}});
    //books.push({title: "Grumpy Monkey", author: {firstName: "Suzanne", lastName: "Lang"}});
//
//
    //console.log(books[2].title);
    //console.log(books[2].author.firstName);
    //console.log(books[2].author.lastName);

    //OR

    var books = [
        {
            title: "Ferdinand the Bull",
            author: {
                firstName: "Munro",
                lastName: "Leaf"
                }//brackets need to be around author because we're giving it it's own properties.
        },
        {
            title: "Green Eggs and Ham",
            author: {
                firstName: "Doctor",
                lastName: "Seuss"
            }
        },
        {
            title: "Where the Wild Things Are",
            author: {
                firstName: "Maurice",
                lastName: "Sendak"
            }
        },
        {
            title: "Dragons Love Tacos",
            author: {
                firstName: "Adam",
                lastName: "Rubin"
            }
        },
        {
            title: "Grumpy Monkey",
            author: {
                firstName: "Suzanne",
                lastName: "Long"
            }
        },
    ];

    console.log(books[2].title);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(books,i){
        console.log("Book # " + (i + 1));//if you don't do +1, output would be book #0, as opposed to Book #1
        console.log("Title: " + books.title);
        console.log("Author: " + books.author.firstName + " " + books.author.lastName);//have to include .author because it has it's own properties.
    });

    //OR for loop example:
    //for (var i = 0; i < books.length ; i++) {
    //    console.log("Book # " + (i + 1));//difference between  brackets and parenthesis, both worked?
    //    console.log("Title: " + books[i].title);
    //    console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    //}

    /**
     * Bonus:
     * 1 - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * 2 - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    //Bonus 1:
    function createBook(title, authorfirstName, authorlastName) {
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorfirstName;
        book.author.lastName = authorlastName;

        return book;
    }

    console.log(createBook("Green Eggs and Ham", "Doctor", "Seuss"));
    console.log(createBook("Grumpy Monkey", "Suzanne", "Long"));
    console.log(createBook("Dragons Love Tacos", "Adam", "Rubin"));

    //Instructor Example During Review:
    // function createBook(title, name){
        //get name array
    //    var nameArr = name.split(" ")
    //    var firstName = nameArr[0]
    //    var lastName = nameArr[1]
    //
    //    return {
    //        title: title;
    //        author: {
    //            firstName: firstName,
    //            lastName: lastName
    //        }
    //    }
    //}

    //Bonus 2:
    function showBookInfo(book, i) {//you can leave out i, but won't get "book #"
        console.log("Book: #" + (i+1));//if you don't include i in the parameters, will be undefined
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    }

    books.forEach(showBookInfo);

})();