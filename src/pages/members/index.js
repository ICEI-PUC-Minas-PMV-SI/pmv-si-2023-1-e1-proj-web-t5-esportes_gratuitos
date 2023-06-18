function init () {
    var options = {
        center: new google.maps.LatLng(-19.923444, -43.934890),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        panControl: false,
        mapTypeControl: false,
        draggable: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        styles: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
        ],
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat: -19.923761, lng: -43.934267},
        map,
        title: "Vôlei do Lalá",
        icon: {
            url: "../assets/get-alt-fill.svg",
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    
}