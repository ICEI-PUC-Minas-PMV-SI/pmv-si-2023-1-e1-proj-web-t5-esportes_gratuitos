var map;

function init() {
    verifyUser();

    var options = {
        center: new google.maps.LatLng(
            -21.786642989870952,
            -46.588988926483765
        ),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
        ],
    };

    map = new google.maps.Map(document.getElementById("map"), options);

    group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
    if (group.acessibilidade === undefined || group.acessibilidade === null) {
        window.location.replace("/add-group/accesibility");
    } else if (group?.localizacao?.length) {
        const [lat, lng] = group.localizacao;
        map.setCenter({ lat, lng });
    } else {
        group.localizacao = [map.getCenter().lat(), map.getCenter().lng()];
        localStorage.setItem("adicionar_grupo", JSON.stringify(group));
    }
}

function previous() {
    group.localizacao = [map.getCenter().lat(), map.getCenter().lng()];
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
    window.location.replace("/add-group/accesibility");
}

async function next() {
    group.localizacao = [map.getCenter().lat(), map.getCenter().lng()];
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));

    try {
        var groups = JSON.parse(localStorage.getItem("grupos") || "[]");
        groups.push({
            id: Date.now(),
            ...group,
        });
        await showLoading("Criando grupo ");
        localStorage.setItem("grupos", JSON.stringify(groups));
    } finally {
        window.location.replace("/map");
    }
}

function showLoading(message) {
    return new Promise((resolve) => {
        let loading = document.getElementById("loading");
        let loadingMessage = loading.querySelector(".loading-message");

        loadingMessage.innerHTML = message;
        loading.style.display = "flex";

        setTimeout(() => {
            showToast("Grupo criado com sucesso");
        }, 1000);

        setTimeout(() => {
            loading.style.display = "none";
            resolve();
        }, 2000);
    });
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
        window.location.replace('/login');
    }
  }
  