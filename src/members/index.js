var map, marker, group;
var groups = [];
var joined = false;

function init() {
    createMap();
    getGroup();
}

function createMap() {
    var options = {
        center: new google.maps.LatLng(
            -21.786642989870952,
            -46.588988926483765
        ),
        zoom: 18,
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

    map = new google.maps.Map(document.getElementById("map"), options);
}

function getGroup() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (!id) {
        showToast("ID do grupo não informado!");
        setTimeout(() => {
            window.location.replace("/map");
        }, 3000);
        return;
    }

    groups = JSON.parse(localStorage.getItem("grupos") || "[]");
    group = groups.find((item) => item.id.toString() === id);

    if (!group) {
        showToast("Grupo não encontrado!");
        setTimeout(() => {
            window.location.replace("/map");
        }, 3000);
        return;
    } else if (!group.membros || group.membros.length === 0) {
        showToast("O grupo não possui participantes!");
        setTimeout(() => {
            window.location.replace("/group/?id=" + group.id);
        }, 3000);
        return;
    }

    fillGroup();
}

function fillGroup() {
    try {
        document.getElementById("name").innerHTML = group.nome;
        const [lat, lng] = group.localizacao;
        const position = { lat, lng };
        map.setCenter(position);
        marker = new google.maps.Marker({
            map,
            position,
            title: group.name,
            icon: {
                url: "/assets/get-alt-fill.svg",
                scaledSize: new google.maps.Size(40, 40),
            },
        });

        const members = document.getElementById('members');
        const userList = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
        userList.filter(user => group.membros.includes(user.id)).forEach(element => {
            members.innerHTML += `
            <li>
                <i class="bi bi-person-circle"></i>
                <section>
                    <span class="name">${element.nome}</span>
                    <span class="phone">${element.celular}</span>
                </section>
            </li>
            `
        });

    } catch (e) {
        console.error(e);
        showToast("Erro ao preencher dados do grupo!");
        setTimeout(() => {
            window.location.replace("/map");
        }, 3000);
        return;
    }
}

function returnToGroup() {
    window.location.replace('/group/?id=' + group.id);
}

function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.classList.add("show-toast");

    setTimeout(() => {
        toast.classList.remove("show-toast");
    }, 3000);
}