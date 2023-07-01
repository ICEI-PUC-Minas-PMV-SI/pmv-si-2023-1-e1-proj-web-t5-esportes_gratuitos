var checkedElement = null;
var accessibility = "";

function init() {
  var verificar = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");

  if (verificar.descricao === undefined) {
    window.location.replace("/add-group/description");
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
    var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
    var boolString = checkedElement.getAttribute("value");
    grupo.acessibilidade = boolString.toLowerCase() === "true";
    localStorage.setItem("adicionar_grupo", JSON.stringify(grupo));
  } else {
    accessibility = "";
    element.childNodes[1].removeAttribute("marked");
  }
}

/////////////////////////////////
/*
function checkMarker(element) {
  if (element.childNodes[0] != modality) {
    modality = element.childNodes[0];
    element.childNodes[1].setAttribute("marked", "true");

    if (null != checkedElement) {
      checkedElement.childNodes[1].removeAttribute("marked");
    }

    checkedElement = element;

    var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
    grupo.modalidade = parseInt(checkedElement.getAttribute("value"));
    localStorage.setItem("adicionar_grupo", JSON.stringify(grupo));
  } else {
    modality = "";
    element.childNodes[1].removeAttribute("marked");
  }
}
*/
