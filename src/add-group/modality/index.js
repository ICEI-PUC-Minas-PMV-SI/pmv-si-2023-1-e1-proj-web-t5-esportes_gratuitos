var group = {};
var modality = "";
var checkedElement = null;

function init() {
  verifyUser();
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  fillModalities();
}

function checkMarker(element, bypass = false) {

  if (!bypass && group.id && group.sugestao) {
    showToast("Campo bloqueado, grupos criados a partir de sugestão não é possível alterar a modalidade!");
    return;
  } 

  if (element.childNodes[0] != modality) {
    modality = element.childNodes[0];
    element.childNodes[1].setAttribute("marked", "true");

    if (checkedElement && checkedElement != element) {
      checkedElement.childNodes[1].removeAttribute("marked");
    }

    checkedElement = element;

    group.modalidade = parseInt(checkedElement.getAttribute("value"));
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
  } else {
    modality = "";
    element.childNodes[1].removeAttribute("marked");
    group.modalidade = null;
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
  }

  element.scrollIntoView({
    behavior: 'auto',
    block: 'center',  
    inline: 'center'
  });
}

function fillModalities() {
  const ulElement = document.getElementById("listaModalidade");
  for (const modalidade of window.modalidades) {
    const li = document.createElement("li");
    li.value = modalidade.id;
    li.innerHTML =
      modalidade.modalidade + ' <i class="bi bi-check2-circle"></i>';
    li.addEventListener("click", () => {
      checkMarker(li);
    });
    ulElement.appendChild(li);
    if (group.modalidade === modalidade.id) {
      checkMarker(li, true);
    }
  }
}

function previous () { 
  window.location.replace("/map");
}

function next() {
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  if (!group.modalidade && group.modalidade !== 0) {
    showToast("Selecione uma modalidade!");
  } else if (group.sugestao && !group.id) {
    window.location.replace("/add-group/description");
  } else {
    window.location.replace("/add-group/days");
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
