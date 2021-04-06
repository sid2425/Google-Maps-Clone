const ACCESS_TOKEN =
  "pk.eyJ1Ijoic2lkMjQyNSIsImEiOiJja241cnRqN2EwNzUwMnNxcTZkbjk3NGc3In0.vQaERnQHHrgRE2Xm0sZwDw";
navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
  enableHighAccuracy: true,
});
function setUpMap(currentPosition) {
  var map = new mapboxgl.Map({
    accessToken: ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-79.4512, 43.6568],
    center: currentPosition,
    zoom: 15,
  });
  var marker = new mapboxgl.Marker({
    color: "red",
    draggable: true,
  })
    .setLngLat(currentPosition)
    .addTo(map);
  let nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.addControl(
    new MapboxDirections({
      accessToken: ACCESS_TOKEN,
    }),
    "top-left"
  );
}
function successPosition(position) {
  setUpMap([position.coords.longitude, position.coords.latitude]);
}
function errorPosition() {
  setUpMap([-2.24, 53.48]);
}
