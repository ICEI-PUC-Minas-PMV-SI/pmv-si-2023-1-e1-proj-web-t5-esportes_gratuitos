// DOM ELEMENTS


var map, markers = [];
var modalities = [];
var element = '';
var openedDescription = false;

async function init () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(-21.786642989870952, -46.588988926483765),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
        ],
    });

    map.addListener('click', closeDescription);

    await getModalities();
    await getGroups();

    const darkBlue = getComputedStyle(document.documentElement).getPropertyValue("--dark-blue")
    console.log(darkBlue);
    const cityCircle = new google.maps.Circle({
        map,    
        strokeColor: darkBlue,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: darkBlue,
        fillOpacity: 0.35,
        center: new google.maps.LatLng(-21.786642989870952, -46.588988926483765),
        radius: 2.3 * 1000,
    });
    
}

async function getGroups(name = '') {
    try {
        let query = '';
        if (name) {
            query = "?q=" + name;
        }

        const grupos = await fetch('http://localhost:3000/api/grupos' + query)
            .then(response => response.json());

        setMapOnAll(null);
        markers = [];

        for (let grupo of grupos) {
            const [latitude, longitude] = grupo.localizacao;
            
            let marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude},
                title: grupo.nome,
                icon: {
                    url: "../../assets/get-alt-fill.svg",
                    scaledSize: new google.maps.Size(35, 35)
                }
            });
            
            marker.addListener('click', () => openDescription(grupo));
            markers.push(marker);
        }

        setMapOnAll(map);
    } catch (e) {
        console.log(e);
    }
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

async function getModalities(name = '') {
    try {
        modalities = await fetch('http://localhost:3000/api/modalidades')
            .then(response => response.json());

        const modalidades = document.getElementById("modalidades");
        for (let m of modalities) {
            var option = document.createElement("option");
            option.value = m.id ;
            option.text = m.modalidade;
            modalidades.appendChild(option);
        }
        
    } catch (e) {
        console.log(e);
    }
}

function openDescription(grupo) {
    const nomeModalidade = modalities.find(m => m.id === grupo.modalidade)?.modalidade || '';
    document.getElementById("group-modality").innerHTML = nomeModalidade;

    document.getElementById("group-name").innerHTML = grupo.nome;
    document.getElementById("group-button").href = "/grupo/" + grupo.id;
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

function search(e) {
    getGroups(e)
}