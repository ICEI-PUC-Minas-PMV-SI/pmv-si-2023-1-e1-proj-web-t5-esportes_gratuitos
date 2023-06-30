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
  liElements.forEach((liElement) => {
    liElement.addEventListener("click", function () {
      const day = this.textContent.trim().split(" ")[0];
      listaGrupo = JSON.parse(localStorage.getItem("lista_grupos"));
      console.log(listaGrupo);
      listaGrupo.find((grupo) => {
        if (grupo.id != null) {
          grupo.dia = day;
        }
      });
      console.log(listaGrupo);
    });
  });
  nextPage.addEventListener("click", () => {
    localStorage.setItem("lista_grupos", JSON.stringify(listaGrupo));
  });
});
///////////////////////////////////
