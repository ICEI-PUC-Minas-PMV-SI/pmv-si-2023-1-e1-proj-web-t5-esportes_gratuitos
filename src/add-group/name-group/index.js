var group = {};

function init() {
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  if (hasMissingHours()) {
    window.location.replace("/add-group/hours");
  }
  var inputNomeGrupo = document.getElementById("inputNomeGrupo");
  
  if (group.nome) {
    inputNomeGrupo.value = group.nome;
  }

  inputNomeGrupo.addEventListener("input", (event) => {
    group.nome = event.target.value;
    localStorage.setItem("adicionar_grupo", JSON.stringify(group));
  });

}

function previous () { 
  window.location.replace("/add-group/hours");
}

function next() {
  if (!group || !group.nome) {
    showToast("Preencha o nome do grupo!");
  } else {
    window.location.replace("/add-group/description");
  }
}

function hasMissingHours () {
  try {
    return group.reunioes.find(item => 
      !item?.horario || 
      (!item?.horario?.horas && item?.horario?.horas !== 0) || 
      (!item?.horario?.minutos && item?.horario?.minutos !== 0));
  } catch (e) {
    console.error(e);
    return true;
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