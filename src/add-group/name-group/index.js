var modality = "";
var checkedElement = null;

function init() {}

function checkMarker(element) {
  if (element.childNodes[0] != modality) {
    modality = element.childNodes[0];
    element.childNodes[1].setAttribute("marked", "true");

    if (null != checkedElement) {
      checkedElement.childNodes[1].removeAttribute("marked");
    }

    checkedElement = element;
  } else {
    modality = "";
    element.childNodes[1].removeAttribute("marked");
  }
}
/////////////PEGAR O NOME SELECIONADO//////////
document.addEventListener("DOMContentLoaded", function () {
  var inputNomeGrupo = document.getElementById("inputNomeGrupo").value;
});
///////////////////////////////////////
