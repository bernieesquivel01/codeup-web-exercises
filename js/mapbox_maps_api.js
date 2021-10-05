mapboxgl.accessToken = mapboxApiKey;
console.log(mapboxApiKey);

// geocode ("761 boylston st, boston, ma 02116", mapboxApiKey).then(function(results){
//     console.log (results);
// })

// created map
var mapBoston = new mapboxgl.Map (
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-71.081495, 42.349071],
        zoom: 15,
    }
);

// created marker
const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat([-71.081495, 42.349071])
    .setPopup(new mapboxgl.Popup().setHTML("<p>Atlantic Fish Company</p>"))
    .addTo(mapBoston)


//create popup
// var popup = new mapboxgl.Popup()
//     .setLngLat([-71.081495, 42.349071])
//     .setHTML("")
//     .addTo(mapBoston);

var restaurants = [
    {
        name: "Fox & The Knife",
        location: "28 W Broadway, Boston, MA 02127",
        type: "Italian",
        price: "$$$"
    },
    {
        name: "Yvonne's",
        location: "2 Winter Pl, Boston, MA 02108",
        type: "American",
        price: "$$$"
    },
    {
        name: "No.9 Park",
        location: "9 Park St Pl, Boston, MA 02108",
        type: "French",
        price: "$$$$"
    }
];

function bostonRestaurants (restaurants, mapBoston, mapboxApiKey){

}