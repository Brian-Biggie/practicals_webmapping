// Initialize the map
var map = L.map('map').setView([54.7023545, -3.2765753], 6);

// Add a tile layer using Mapbox tiles
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
}).addTo(map);

// Make a request to the server to fetch data from the database
fetch('get_data.php')
    .then(response => response.json())
    .then(data => {
        // Process the fetched data and create markers on the map
        data.forEach(item => {
            L.marker([item.latitude, item.longitude]).addTo(map).bindPopup(item.name);
        });
    });
