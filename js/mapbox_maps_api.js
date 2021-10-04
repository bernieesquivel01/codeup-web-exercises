mapboxgl.accessToken = mapboxApiKey;
console.log(mapboxApiKey);

// created map
var mapBoston = new mapboxgl.Map (
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-71.0589, 42.3601],
        zoom: 15,
    }
);

// created marker
var marker = new mapboxgl.Marker({color: "red"})
    .setLngLat([-71.081495, 42.349071])
    .addTo(mapBoston)