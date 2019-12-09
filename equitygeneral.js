function initMap() {
  // The location of Uluru
  var everett = {lat: 47.963, lng: -122.200556};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: everett});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: everett, map: map});
}
