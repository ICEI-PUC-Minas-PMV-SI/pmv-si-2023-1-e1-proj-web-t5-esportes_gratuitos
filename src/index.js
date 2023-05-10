window.onload = function() {
    var myOptions = {
        center: new google.maps.LatLng(-19.923444, -43.934890),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
}