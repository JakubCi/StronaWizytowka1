function initMap() {
    const uluru = { lat: 54.52151573692574, lng: 18.532850661385865};
    const uluru2={lat:54.352695629126, lng:18.55153032277171};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru,
    });
    const map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 13,
        center: uluru2, 
      });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: uluru2,
        map: map2,
      });
  }
  
  window.initMap = initMap;

