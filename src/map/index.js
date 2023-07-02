var map, markers = [];
var modalities = [];
var element = '';
var openedDescription = false;
var circle;

const filters = {
    nome: {
        initialValue: '',
        callbackType: 'change',
        element: () => document.getElementById('nome'),
        active: function() {
            const { value } = this.element();
            return !!value;
        },
        filter: function (array) {
            const { value } = this.element();
            return array.filter(item => item.nome.toLowerCase().includes(value.toLowerCase()));
        },
        callback: function (array) {
            getGroups();
        },
    },
    modalidades: {
        initialValue: '',
        element: () => document.getElementById('modalidades'),
        active: function() {
            const { value } = this.element();
            return value ;
        },
        filter: function (array) {
            const { value } = this.element();
            return array.filter(item => item.modalidade === value);
        }
    },
    // sugestoes: {
    //     element: () => document.getElementById('sugestoes'),
    //     active: function() {
    //         const { checked } = this.element();
    //         return checked;
    //     },
    //     filter: function (array) {
    //         const { checked } = this.element();
    //         return array.filter(item => item.acessivel === checked);
    //     }
    // },
    acessibilidade: {
        initialValue: false,
        element: () => document.getElementById('acessibilidade'),
        active: function() {
            const { checked } = this.element();
            return checked;
        },
        filter: function (array) {
            const { checked } = this.element();
            return array.filter(item => item.acessivel === checked);
        }
    },
    distancia: {
        initialValue: 0,
        element: () => document.getElementById('distancia'),
        active: function() {
            const { min, max, value } = this.element();
            return value != min && value != max;
        },
        filter: function (array)  {
            const radius = this.element().value;
            const center = [map.getCenter().lat(), map.getCenter().lng()];
            return array.filter((item) => {
                const distance = calculateDistance(center, item.localizacao);
                return distance <= parseFloat(radius);
            });
        },
        callback: function () {
            const { value } = this.element();
            const distanceValue = document.getElementById('distance-value');

            if (this.active()) {
                distanceValue.innerHTML = value + 'km'
            } else {
                distanceValue.innerHTML = "Indefinido"
            }
        },
        callbackType: 'input'
    }
}

async function init () {
    verifyUser();
    createMap();
    getModalities();
    getGroups();
    getFilters();
    clearForm();
}

function createMap() {
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
}

function getFilters() {
    for (let filter in filters) {
        let f = filters[filter];

        f.element().value = f.initialValue;

        if (f?.callback) {
            f.callback();
            f.element().addEventListener(f.callbackType, () => {
                f.callback();
            });
        }
    }
}
function clearFilters() {
    for (let filter in filters) {
        let f = filters[filter];

        if (typeof f.initialValue === 'boolean') {
            f.element().checked = f.initialValue;
        } else {
            f.element().value = f.initialValue;
        }

        if (f.callback && f.callbackType === 'input') {
            f.callback();
        }
    }
}

function searchFilters() {
    getGroups();
    closeElement();
}

function getGroups() {
    try {
        let grupos = JSON.parse(localStorage.getItem('grupos'), '[]');

        for (let filter in filters) {
            const f = filters[filter];
            if (f.active()) {
                grupos = f.filter(grupos);
            }
        }

        setMapOnAllMarkers(null);
        markers = [];

        for (let grupo of grupos) {
            const [latitude, longitude] = grupo.localizacao;
            
            let marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude},
                title: grupo.nome,
                icon: {
                    url: "/assets/get-alt-fill.svg",
                    scaledSize: new google.maps.Size(35, 35)
                }
            });
            
            marker.addListener('click', () => openDescription(grupo));
            markers.push(marker);
        }

        setMapOnAllMarkers(map);
    } catch (e) {
        console.error(e);
    }
}


function getModalities() {
    try {
        modalities = JSON.parse(localStorage.getItem('modalidades'), '[]');
        const modalidades = document.getElementById("modalidades");
        for (let m of modalities) {
            var option = document.createElement("option");
            option.value = m.id;
            option.text = m.modalidade;
            modalidades.appendChild(option);
        }
        
    } catch (e) {
        console.log(e);
    }
}

function setMapOnAllMarkers(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function openDescription(grupo) {
    const nomeModalidade = modalities.find(m => m.id === grupo.modalidade)?.modalidade || '';
    document.getElementById("group-modality").innerHTML = nomeModalidade;
    
    document.getElementById("group-name").innerHTML = grupo.nome;
    document.getElementById("group-button").href = "/group/?id=" + grupo.id;
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

function clearForm() {
    localStorage.removeItem('adicionar_grupo');
}

function verifyUser() {
    if (!localStorage.getItem('usuarioLogadoID')) {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('add-group').style.display = 'none'
    }
}

function returnToLogin() {
    window.location.replace('/login');
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function calculateDistance(from, to) {
    const earthRadius = 6371;

    const [latFrom, lngFrom] = from;
    const [latTo, lngTo] = to;

    const dLat = toRadians(latTo - latFrom);
    const dLon = toRadians(lngTo - lngFrom);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(latFrom)) * Math.cos(toRadians(latTo)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
}