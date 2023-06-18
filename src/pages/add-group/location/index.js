function init () {
    var options = {
        center: new google.maps.LatLng(-19.923444, -43.934890),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
        ],
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    var forwardButtton = document.getElementById("forward");
    forwardButtton.addEventListener('click',  () => {
        console.log(map.getCenter().lat(), map.getCenter().lng());
    });

}