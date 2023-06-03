var element = '';
var openedDescription = false;

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

    map.addListener('click', closeDescription);

    console.log(getComputedStyle(document.documentElement).getPropertyValue("--blue"));
    var marker = new google.maps.Marker({
        position: { lat: -19.923761, lng: -43.934267},
        map,
        title: "Vôlei do Lalá",
        icon: {
            url: "../assets/get-alt-fill.svg",
            scaledSize: new google.maps.Size(35, 35)
        }
    });

    marker.addListener('click', openDescription);
    
}

function openDescription() {
    document.getElementById("group").style.transform = "translateY(0)";
}

function closeDescription() {
    document.getElementById("group").style.transform = "translateY(120px)";
}

function openElement(e) {
    element = e;

    switch (e) {
        case 'sidebar': {
            document.getElementById("sidebar").style.transform = "translateX(0)";
            break;
        }

        case 'modal': {
            document.getElementById("modal-add-group").style.display = "flex";
            break;
        }
    }

    showShadow();
}

function closeElement() {
    
    switch (element) {
        case 'sidebar': {
            document.getElementById("sidebar").style.transform = "translateX(-360px)";
            break;
        };

        case 'modal': {
            document.getElementById("modal-add-group").style.display = "none";
            break;
        };
    }
    
    hideShadow();
}

function showShadow() {
    document.getElementById("shadow").style.display = "block";
}

function hideShadow() {
    document.getElementById("shadow").style.display = "none";
}