var modality = "";
var checkedElement = null;

function init() {
  var verificar = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");

  if (
    verificar.nome === undefined ||
    verificar.modalidade === undefined ||
    verificar.reunioes === undefined ||
    verificar.reunioes.length === 0
  ) {
    window.location.replace("/add-group/name-group");
  }
  var inputDescricao = document.getElementById("inputDescricao");

  inputDescricao.addEventListener("change", (event) => {
    var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
    grupo.descricao = event.target.value;
    localStorage.setItem("adicionar_grupo", JSON.stringify(grupo));
  });
}
