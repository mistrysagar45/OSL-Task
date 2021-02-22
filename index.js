let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.090240, lng: -95.712891 },
    zoom: 5
  });

  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );

  //call Marker
  addMarker({lat: 40.712776,lng: -74.005974});
  addMarker({lat: 36.169941,lng: -115.139832});

  //add marker
            function addMarker(coords){
            var marker = new google.maps.Marker({
            position:coords,
            map:map,
        });
    }
}

fetch('https://api.github.com/users')
.then(res => res.json())
.then(data => console.log(data));
