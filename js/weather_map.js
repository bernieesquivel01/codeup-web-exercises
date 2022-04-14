<!-- OpenWeatherMap API -->

//Five Day Weather Info:
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey, //API key variable, from keys.js
    lat: 29.423017,
    lon: -98.4853,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    // console.log(data.daily[4].temp.day);
    var dailyWeather = "";

//Time Converter:
function timeConverter(dtNum){
    var a = new Date(dtNum * 1000);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = days[a.getDay()]
    var date = a.getDate();
//     var hour = a.getHours();
//     var min = a.getMinutes();
//     var sec = a.getSeconds();
    var time = day + ' ' + '<br>' + date;
    console.log(time);
    return time;
}

function hourlyConverter (dtNum) {
    var a = new Date(dtNum * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var hourlytime = hour + ' ' + min + ' ' + sec;
    console.log(hourlytime)

    return hourlytime
}
// console.log(timeConverter(1633716000));

// var timeReturn = timeConverter(1633716000);
    // console.log(data.daily[i].temp.day);
    // console.log(timeReturn);
    // var timeReturn = timeConverter(data.daily[i].dt);
    // console.log(data)
    // console.log(data.hourly[0])
    // console.log(data.hourly[0].dt)





    for (i = 0; i < 6; i++) {
        if (i === 0) {
            for(j = 0; j < 6; j++) {
                $("#day" + [i]).append("<b>"
                    + hourlyConverter(data.hourly[j].dt)
                    + "</b>"
                    + "<br>").append("Temp: "
                    + data.hourly[j].temp);
            }
        } else {
            $("#day" + [i]).append("<b>"
                + timeConverter(data.daily[i].dt)
                + "</b>" + "<br>").append("Temp: "
                + data.daily[i].temp.day);
        }


    }

    //     dailyWeather += "<div>";
    // // dailyWeather += timeConverter(dtNum).daily[0].dt.day;
    // dailyWeather += "Temp: " + "<br>" + data.daily[i].temp.day;
    // // dailyWeather += "Feels like: " + data.daily[i].feels_like.day + "<br>";
    // // dailyWeather += "Humidity: " + data.daily[i].humidity + "<br>";
    // // dailyWeather += "Wind: " + data.daily[i].wind_speed + "<br>";
    // // dailyWeather += "UV Index: " + data.daily[i].uvi + "<br>";
    //
    // dailyWeather += "</div>";


    console.log(dailyWeather);

    // $("#dailyWeather").append(dailyWeather);
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


// map.addControl(new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     bbox: [-74.390249, 40.414685, -73.519390, 40.976805] ,
//     zoom: 15,}));

// const geocoder = new MapboxGeocoder({
//     // Initialize the geocoder
//     accessToken: mapboxgl.accessToken, // Set the access token
//     mapboxgl: mapboxgl, // Set the mapbox-gl instance
//     marker: false, // Do not use the default marker style
//     placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
//     bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
//     proximity: {
//         longitude: -122.25948,
//         latitude: 37.87221
//     } // Coordinates of UC Berkeley
// });

// <!-- Adding Weather Icons -->
// "weather": [
//     {
//         "id": 500,
//         "main": "Rain",
//         "description": "light rain",
//         "icon": "10n"
//     }
// ],