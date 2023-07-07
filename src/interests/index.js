var map, marker, group;
var groups = [];
var joined = false;

function init() {
    createMap();
    getGroup();
    verifyUser();
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
    }

    fillGroup();
}

function fillGroup() {
    try {
        document.getElementById("description").innerHTML = group.descricao;

        const modalities = JSON.parse(
            localStorage.getItem("modalidades") || "[]"
        );
        const nomeModalidade =
            modalities.find((m) => m.id === group.modalidade)?.modalidade || "";
        document.getElementById("modality").innerHTML = nomeModalidade;

        const [lat, lng] = group.localizacao;
        const position = { lat, lng };
        map.setCenter(position);
        marker = new google.maps.Marker({
            map,
            position,
            title: group.name,
            icon: {
                url: "/assets/geo-alt.svg",
                scaledSize: new google.maps.Size(40, 40),
            },
        });

        const userList = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
        const usersFilter = userList.filter(user => group.membros?.includes(user.id));
        
        const membersNumber = document.getElementById('members-number');
        membersNumber.innerHTML = `Últimos interessados (${usersFilter.length})`;
        
        const members = document.getElementById('members');
        members.innerHTML = '';
        usersFilter.forEach(element => {
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

function toggleEnter() {
    var joinGroup = document.getElementById("enter-group");
    const userId = localStorage.getItem('usuarioLogadoID') || '';
    var joined = group?.membros?.includes(userId);

    if (joined){
        joinGroup.innerHTML = "Estou interessado";
        joinGroup.className = 'not-joined';
        group.membros = group.membros.filter(item => item !== userId);
    } else {
        joinGroup.innerHTML = "Retirar interesse";
        joinGroup.className = 'joined';
        (group.membros ??=[]).push(userId);
    }

    localStorage.setItem('grupos', JSON.stringify(groups));
    getGroup()
}

function createGroup() {
    localStorage.setItem('adicionar_grupo', JSON.stringify(group));
    window.location.replace('/add-group/modality');
}

function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.classList.add("show-toast");

    setTimeout(() => {
        toast.classList.remove("show-toast");
    }, 3000);
}

function verifyUser() {
    const userList = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
    const userId = localStorage.getItem('usuarioLogadoID');
    var user = userList.find(item => item.id === userId);

    if (!userId || !user) {
        document.getElementById('enter-group').style.display = 'none';
        return;
    }

    var joinGroup = document.getElementById("enter-group");
    if (group?.membros?.includes(userId)) {
        joinGroup.innerHTML = "Retirar interesse";
        joinGroup.className = 'joined';
    } else {
        joinGroup.innerHTML = "Estou interessado";
        joinGroup.className = 'not-joined';
    }
}
