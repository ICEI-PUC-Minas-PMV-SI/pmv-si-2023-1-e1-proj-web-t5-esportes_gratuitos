var accessibility = "";
var checkedElement = null;
var group = {}

function init() {
  verifyUser();
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");

  if (!group.descricao) {
    window.location.replace("/add-group/description");
  } else if (group.acessibilidade !== undefined && group.acessibilidade !== null ) {
    var listItem = document.querySelector(`#listaAcessibilidade li[value=${group.acessibilidade.toString()}]`); 
    listItem && checkMarker(listItem);
  }
}

function checkMarker(element) {
  if (element.childNodes[0] != accessibility) {
    accessibility = element.childNodes[0];
    element.childNodes[1].setAttribute("marked", "true");

    if (null != checkedElement) {
      checkedElement.childNodes[1].removeAttribute("marked");
    }

    checkedElement = element;

    var boolString = checkedElement.getAttribute("value");
    group.acessibilidade = boolString.toLowerCase() === "true";
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
  } else {
    accessibility = "";
    element.childNodes[1].removeAttribute("marked");

    var boolString = element.getAttribute("value");
    group.acessibilidade = boolString.toLowerCase() === "true";
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
  }

  element.scrollIntoView({
    behavior: 'auto',
    block: 'center',  
    inline: 'center'
  });
}

function previous () { 
  window.location.replace("/add-group/description");
}

function next() {
  if (!group || typeof group.acessibilidade !== 'boolean') {
    showToast("Preencha a acesssibilidade do grupo!");
  } else {
    window.location.replace("/add-group/location");
  }
}

function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add('show-toast');

  setTimeout(() => {
    toast.classList.remove('show-toast');
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
