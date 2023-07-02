verifyUser();
var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var email = document.getElementById("email");

var usuarioLogado = localStorage.getItem("usuarioLogadoID");
var infoUsuario = JSON.parse(localStorage.getItem("lista_usuarios"));

infoUsuario.find((user) => {
  if (user.id == usuarioLogado) {
    nome.textContent = user.nome;
    idade.textContent = user.idade + " anos";
    email.textContent = user.email;
  }
});

function verifyUser() {
  const userList = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
  const userId = localStorage.getItem('usuarioLogadoID');
  var user = userList.find(item => item.id === userId);

  if (!userId || !user) {
      window.location.replace('/login');
  }
}

