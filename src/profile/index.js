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
/*
usuarioLogado.find((user) => {
  console.log(user);
});

function showData() {
  var listaUsuarios;
  if (localStorage.getItem("lista_usuarios") == null) {
    listaUsuarios = [];
  } else {
    listaUsuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
  }

  listaUsuarios.forEach((element, index) => {
    console.log(
      index,
      element.id,
      element.nome,
      element.celular,
      element.email,
      element.senha
    );
  });
}
document.onload = showData();
*/
