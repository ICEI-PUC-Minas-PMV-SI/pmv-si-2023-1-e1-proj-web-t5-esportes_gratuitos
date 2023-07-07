var group = {};
var meetings = [];
var toastControl = false;

function init() {
  verifyUser();
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  if (group.modalidade === undefined) {
    window.location.replace("/add-group/modality");
  }

  meetings = group.reunioes || [];
  fillDays();
}

function checkMarker(element) {
  let value = parseInt(element.getAttribute("value"));
  let index = meetings.findIndex(item => item.id === value);

  if (index < 0) {
    meetings.push(getDay(value));
    element.childNodes[1].setAttribute("marked", "true");
  } else {
    meetings.splice(index, 1);
    element.childNodes[1].removeAttribute("marked");
  }

  group.reunioes = meetings.sort((a, b) => a.id - b.id);
  localStorage.setItem("adicionar_grupo", JSON.stringify(group));

  element.scrollIntoView({
    behavior: 'auto',
    block: 'center',  
    inline: 'center'
  });
}

function fillDays() {
  const ulElement = document.getElementById("listaDias");
  for (const dia of window.dias) {
    const markItem = meetings.find(item => item.id === dia.id);
    const li = document.createElement("li");
    li.value = dia.id;
    li.innerHTML = `${dia.dia} <i class="bi bi-check2-circle" ${markItem !== undefined ? 'marked' : ''}></i>`;
    li.addEventListener("click", () => {
      checkMarker(li);
    });
    ulElement.appendChild(li);
  }
}

function getDay(day) {
  return window.dias.find(item => item.id === parseInt(day));
}

function previous () { 
  window.location.replace("/add-group/modality");
}

function next() {
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  if (!group.reunioes || group.reunioes.length === 0) {
    showToast("Selecione os dias em que o grupo irá se reunir!");
  } else {
    window.location.replace("/add-group/hours");
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

function verifyUser() {
  const userList = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
  const userId = localStorage.getItem('usuarioLogadoID');
  var user = userList.find(item => item.id === userId);

  if (!userId || !user) {
      window.location.replace('/login');
  }
}
