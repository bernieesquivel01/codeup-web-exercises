// fetch(url, {headers: {'Authorization': promisesAPIKey}})

function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${promisesAPIKey}`}})
        .then((data) => {
            // console.log(data);
            return data.json()
        }).then((jsonData) => {
            // console.log(jsonData);
            return jsonData[0].actor.display_login + "'s" + " last commit was on " + jsonData[0].created_at;
        })
}

console.log(lastCommit('bernieesquivel01'));

//BONUS:

function wait(number) {

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
}