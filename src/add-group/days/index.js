var days = [];
var checkedElement = null;

function init() {
  preencherDias();
  var verificar = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  if (verificar.modalidade === undefined) {
    window.location.replace("/add-group/modality");
  }
}

function checkMarker(element) {
  let index = days.indexOf(element.getAttribute("value"));

  if (index < 0) {
    days.push(element.getAttribute("value"));
    element.childNodes[1].setAttribute("marked", "true");
  } else {
    days.splice(index, 1);
    element.childNodes[1].removeAttribute("marked");
  }
  var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  grupo.reunioes = window.dias.filter((d) => {
    return days.indexOf(d.id.toString()) >= 0;
  });
  localStorage.setItem("adicionar_grupo", JSON.stringify(grupo));
}

function preencherDias() {
  const ulElement = document.getElementById("listaDias");
  var grupo = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  for (const dia of window.dias) {
    const li = document.createElement("li");
    li.value = dia.id;
    li.innerHTML = dia.dia + ' <i class="bi bi-check2-circle"></i>';
    li.addEventListener("click", () => {
      checkMarker(li);
    });
    ulElement.appendChild(li);
    if (grupo.reunioes === dia.dia) {
      checkMarker(li);
    }
  }
}
