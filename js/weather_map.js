<!-- OpenWeatherMap API -->
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey, //API key variable, from keys.js
    lat: 29.423017,
    lon: -98.4853,
    units: "imperial"
}).done(function(data) {
    console.log('5 day forecast', data);

});


// <!-- Adding Weather Icons -->
// "weather": [
//     {
//         "id": 500,
//         "main": "Rain",
//         "description": "light rain",
//         "icon": "10n"
//     }
// ],