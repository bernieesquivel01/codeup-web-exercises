const API_URL = 'https://vagabond-glacier-verse.glitch.me/dogs';

//Get all the dogs!
function getDogs() {
    return fetch(API_URL).then((response) => response.json());//response.json() returns a promise
}

//getDogs().then((dogs)=>console.log(dogs));


//Get a dog by ID;
function getDogs(id) {
    return fetch(`${API_URL}/${id}`)
        .then((response) => response.json())
}

//getDog(11).then((dog)=>console.log(dog));

//Edit a dog by ID;
function editDog(dog) {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)//convert the JS object into a JSON string before sending it up to the server.
    }
    return fetch(`${API_URL}/${dog.id}`, options)
        .then((response) => response.json())
}
// let piper = {
//     name: 'Piper',
//     isGoodDog: true,
//     id: 11,
//     age: 8};
//
// editDog(piper).then((data)=>console.log(data));

//Delete dog by ID
function deleteDog(id){
    let options= {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json',
        },
    }
    fetch(`${API_URL}/${id}`, options)
        .then((response)=>response.json())
}

//Create a dog.
function createDog(dog) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)//convert the JS object into a JSON string before sending it up to the server.
    }
    return fetch(`${API_URL}`, options)
        .then((response) => response.json())
}

let kewpie = {
    name: 'Kewpie',
    isGoodDog: true,
    age: 8
};

// createDog(kewpie).then((newDog)=>console.log(newDog));