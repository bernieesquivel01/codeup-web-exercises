<!-- OpenWeatherMap API -->
//
// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: openWeatherKey, //API key variable, from keys.js
//     lat: 29.423017,
//     lon: -98.4853,
//     units: "imperial"
// }).get(dailyWeather[0]) {
//     console.log(dailyWeather[0]);

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey, //API key variable, from keys.js
    lat: 29.423017,
    lon: -98.4853,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    // console.log(data.daily[4].temp.day);
    var dailyWeather = "";

    for (i = 1; i < 5; i++){


    dailyWeather += "<div>";
    dailyWeather += "Temperature: " + data.daily[i].temp.day + "<br>";
    dailyWeather += "Feels like: " + data.daily[i].feels_like.day + "<br>";
    dailyWeather += "Humidity: " + data.daily[i].humidity + "<br>";
    dailyWeather += "Wind: " + data.daily[i].wind_speed + "<br>";
    dailyWeather += "UV Index: " + data.daily[i].uvi + "<br>";

    dailyWeather += "</div>";

    }
    console.log(dailyWeather);

    $("#weeklyWeather").append(dailyWeather);
});


<!-- Created Map -->

mapboxgl.accessToken = mapboxApiKey;
console.log(mapboxApiKey);

var saWeatherMap = new mapboxgl.Map (
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.4895, 29.4267],
        zoom: 10,
    }
);

// created marker
const marker = new mapboxgl.Marker({color: "black"})
    .setLngLat([-98.4895, 29.4267])
    .setPopup()
    .addTo(saWeatherMap)

// <!-- Adding Weather Icons -->
// "weather": [
//     {
//         "id": 500,
//         "main": "Rain",
//         "description": "light rain",
//         "icon": "10n"
//     }
// ],