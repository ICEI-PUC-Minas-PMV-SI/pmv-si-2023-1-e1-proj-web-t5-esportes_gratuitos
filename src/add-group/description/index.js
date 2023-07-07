var group = {}

function init() {
  verifyUser();

  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");

  if (group.sugestao && group.modalidade === undefined) {
    window.location.replace("/add-group/modality");
  } else if (!group.sugestao && !group.nome) {
    window.location.replace("/add-group/name-group");
  }

  var inputDescricao = document.getElementById("inputDescricao");

  if (group.descricao) {
    inputDescricao.value = group.descricao;
  }

  inputDescricao.addEventListener("input", (event) => {
    group.descricao = event.target.value;
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
  });
}

function previous () { 
  if (group.sugestao) {
    window.location.replace("/add-group/modality");
  } else {
    window.location.replace("/add-group/name-group");
  } 
}

function next() {
  if (!group || !group.descricao) {
    showToast("Preencha a descrição do grupo!");
  } else if (group.sugestao) {
    window.location.replace("/add-group/location")
  } else {
    window.location.replace("/add-group/accesibility");
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
