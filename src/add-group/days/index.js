/*
var days = [];
var checkedElement = null;

function init() {}

function checkMarker(element) {
  let index = days.indexOf(element.childNodes[0]);

  if (index < 0) {
    days.push(element.childNodes[0]);
    element.childNodes[1].setAttribute("marked", "true");
  } else {
    days.splice(index, 1);
    element.childNodes[1].removeAttribute("marked");
  }
}
//PEGAR OS DIAS ESCOLHIDOS PELO USUÁRIO

document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll("#days li");
  var nextPage = document.getElementById("forward");
  var ultimoObj; // Definindo a variável fora dos eventos

  liElements.forEach((liElement) => {
    liElement.addEventListener("click", function () {
      const day = this.textContent.trim().split(" ")[0];
      listaGrupo = JSON.parse(localStorage.getItem("lista_grupos"));
      ultimoObj = listaGrupo[listaGrupo.length - 1];
      ultimoObj.dia = day;
    });
  });

  nextPage.addEventListener("click", () => {
    localStorage.setItem("lista_grupos", JSON.stringify(listaGrupo));
  });
});
*/
///////////////////////////////////
var days = [];
var checkedElement = null;

function init() {}

function checkMarker(element) {
  let index = days.indexOf(element.childNodes[0]);

  if (index < 0) {
    days.push(element.childNodes[0]);
    element.childNodes[1].setAttribute("marked", "true");
  } else {
    days.splice(index, 1);
    element.childNodes[1].removeAttribute("marked");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll("#days li");
  var nextPage = document.getElementById("forward");
  var ultimoObj;
  var listaGrupo;
  liElements.forEach((liElement) => {
    if (liElement.hasAttribute("marked")) {
      listaGrupo = JSON.parse(localStorage.getItem("lista_grupos"));
      ultimoObj = listaGrupo[listaGrupo.length - 1];
      ultimoObj.dia = [];
      const day = liElement.textContent.trim().split(" ")[0];
      ultimoObj.dia.push(day);
    }
  });

  nextPage.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("lista_grupos", JSON.stringify(listaGrupo));
    console.log(ultimoObj);
  });
});
