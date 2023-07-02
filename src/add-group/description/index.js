var group = {}

function init() {
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  if (!group.nome) {
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
  window.location.replace("/add-group/name-group");
}

function next() {
  if (!group || !group.descricao) {
    showToast("Preencha a descrição do grupo!");
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