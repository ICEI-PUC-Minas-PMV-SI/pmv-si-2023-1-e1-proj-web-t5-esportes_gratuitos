var modality = "";
var checkedElement = null;

function init() {
  var verificar = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  //if (verificar.reunioes === undefined || verificar.reunioes.length === 0) {
  // window.location.replace("/add-group/hours");
  //}
  var inputNomeGrupo = document.getElementById("inputNomeGrupo");

  inputNomeGrupo.addEventListener("change", (event) => {
    var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
    grupo.nome = event.target.value;
    localStorage.setItem("adicionar_grupo", JSON.stringify(grupo));
  });
}
