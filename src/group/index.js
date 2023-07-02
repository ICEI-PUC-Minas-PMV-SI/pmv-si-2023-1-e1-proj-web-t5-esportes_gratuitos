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
        zoom: 16,
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
        document.getElementById("name").innerHTML = group.nome;
        document.getElementById("description").innerHTML = group.descricao;

        // document.getElementById('likes').innerHTML =`${group.likes || 0} <i class="bi bi-hand-thumbs-up"></i>`;
        // document.getElementById('deslikes').innerHTML = `<i class="bi bi-hand-thumbs-down"></i> ${group.deslikes || 0}`;

        const modalities = JSON.parse(
            localStorage.getItem("modalidades") || "[]"
        );
        const nomeModalidade =
            modalities.find((m) => m.id === group.modalidade)?.modalidade || "";
        document.getElementById("modality").innerHTML = nomeModalidade;

        if (group.acessibilidade) {
            document.getElementById("accesibility").style.display = "block";
        } else {
            document.getElementById("accesibility").style.display = "none";
        }

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

        const days = document.getElementById("days");
        const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
        for (let index = 0; index < weekDays.length; index++) {
            const spanElement = document.createElement("span");
            const day = document.createElement("span");
            const hour = document.createElement("span");

            day.className = "day";
            hour.className = "hour";
            day.textContent = weekDays[index];

            const meeting = group.reunioes.find((item) => item.id === index);
            if (meeting) {
                spanElement.className = "active";

                const { horas, minutos } = meeting.horario;
                hour.textContent = `${String(horas).padStart(2, "0")}:${String(
                    minutos
                ).padStart(2, "0")}h`;
            } else {
                spanElement.className = "inactive";
                hour.textContent = `00:00h`;
            }

            spanElement.appendChild(day);
            spanElement.appendChild(hour);
            days.appendChild(spanElement);
        }
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
        joinGroup.innerHTML = "Entrar no grupo";
        joinGroup.className = 'not-joined';
        group.membros = group.membros.filter(item => item !== userId);
    } else {
        joinGroup.innerHTML = "Sair do grupo";
        joinGroup.className = 'joined';
        (group.membros ??=[]).push(userId);
    }

    localStorage.setItem('grupos', JSON.stringify(groups));
}

function seeMembers() {
    window.location.replace('/members/?id=' + group.id);
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
        joinGroup.innerHTML = "Sair do grupo";
        joinGroup.className = 'joined';
    } else {
        joinGroup.innerHTML = "Entrar no grupo";
        joinGroup.className = 'not-joined';
    }
}
