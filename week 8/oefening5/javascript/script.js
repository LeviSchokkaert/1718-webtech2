function initMap() {
    const myHouseLatLng = {
        lat: 50.800458,
        lng: 3.970916
    };
    const myStyles = [];

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myHouseLatLng,
        styles: myStyles
    });
    let marker = new google.maps.Marker({
        position: myHouseLatLng,
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

//

