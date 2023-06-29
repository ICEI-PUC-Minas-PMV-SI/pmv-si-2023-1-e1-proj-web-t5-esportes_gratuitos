var modality = "";
var checkedElement = null;

function init() {
  const nextButton = document.getElementById("forward");

  console.log(location.href);
  if (location.href.split("#")[1] === "suggestion") {
    nextButton.href = "/add-group/location";
  }
}

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
/////////PEGAR A MODALIDADE ESCOLHIDA////////
var listaGrupo = [];

document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll("#modality li");
  var nextPage = document.getElementById("forward");
  liElements.forEach((liElement) => {
    liElement.addEventListener("click", function () {
      const modalityName = this.textContent.trim().split(" ")[0];
      listaGrupo.push({
        modalidade: modalityName,
      });
    });
  });
  nextPage.addEventListener("click", () => {
    localStorage.setItem("lista_grupos", JSON.stringify(listaGrupo));
  });
});
