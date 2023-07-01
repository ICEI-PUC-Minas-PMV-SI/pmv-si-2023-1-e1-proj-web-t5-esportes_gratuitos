var modality = "";
var checkedElement = null;

function init() {
  const nextButton = document.getElementById("forward");

  console.log(location.href);
  if (location.href.split("#")[1] === "suggestion") {
    nextButton.href = "/add-group/location";
  }

  preencherModalidade();
}

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

function preencherModalidade() {
  const ulElement = document.getElementById("listaModalidade");
  var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  for (const modalidade of window.modalidades) {
    const li = document.createElement("li");
    li.value = modalidade.id;
    li.innerHTML =
      modalidade.modalidade + ' <i class="bi bi-check2-circle"></i>';
    li.addEventListener("click", () => {
      checkMarker(li);
    });
    ulElement.appendChild(li);
    if (grupo.modalidade === modalidade.id) {
      checkMarker(li);
    }
  }
}
////////////////////////////////////
////////GERANDO ID PRO GRUPO//////
function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
/////////PEGAR A MODALIDADE ESCOLHIDA////////
/*
var listaGrupo = [];

const liElements = document.querySelectorAll("#modality li");
var nextPage = document.getElementById("forward");
liElements.forEach((liElement) => {
  liElement.addEventListener("click", function () {
    const modalityName = this.textContent.trim().split(" ")[0];
    if (localStorage.getItem("lista_grupos") == null) {
      listaGrupo.push({
        id: generateUUID(),
        modalidade: modalityName,
      });
    } else {
      listaGrupo = JSON.parse(localStorage.getItem("lista_grupos"));
      listaGrupo.push({
        id: generateUUID(),
        modalidade: modalityName,
      });
      localStorage.setItem("lista_usuarios", JSON.stringify(listaGrupo));
    }
  });
});
nextPage.addEventListener("click", () => {
  localStorage.setItem("lista_grupos", JSON.stringify(listaGrupo));
});
*/
