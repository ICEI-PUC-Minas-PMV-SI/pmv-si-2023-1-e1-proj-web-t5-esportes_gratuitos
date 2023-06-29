var modal = document.querySelector(".modal");
var shadow = document.querySelector(".shadow");
var button = document.querySelector(".button");
var buttonCodigo = document.querySelector(".button-codigo");
button.addEventListener("click", () => {
  modal.classList.toggle("active");
  shadow.classList.toggle("active");
});
buttonCodigo.addEventListener("click", () => {
  modal.classList.toggle("active");
  shadow.classList.toggle("active");
});

var codigoAleatorio = Math.floor(Math.random() * 9999) + 1;
var listaUsuario = [];
function enviarCodigo() {
  var recuperarEmail = document.getElementById("recuperarEmail").value;

  listaUsuario = JSON.parse(localStorage.getItem("lista_usuarios"));

  listaUsuario.find((user) => {
    if (recuperarEmail == user.email) {
      console.log("email encontrado");

      console.log(codigoAleatorio);
    } else {
      alert("email nao encontrado");
      modal.style.display = "none";
      shadow.style.display = "none";
    }
  });
}
function confirmarCodigo() {
  var inputCodigo = document.getElementById("inputCodigo").value;
  var novaSenha = document.getElementById("novaSenha").value;
  if (codigoAleatorio == inputCodigo) {
    console.log("codigo confirmado");

    listaUsuario = JSON.parse(localStorage.getItem("lista_usuarios"));
    listaUsuario.find((user) => {
      user.senha = novaSenha;
      localStorage.setItem("lista_usuarios", JSON.stringify(listaUsuario));
      console.log(user);
    });
    window.location.href = "../login";
  }
}
/*
function confirmarCodigo() {
  var inputCodigo = document.getElementById("inputCodigo").value;
  var novaSenha = document.getElementById("novaSenha").value;

  if (codigoAleatorio == inputCodigo) {
    console.log("Código confirmado");

    var listaUsuario = JSON.parse(localStorage.getItem("lista_usuarios"));
    var usuarioIndex = listaUsuario.findIndex(
      (user) => user.codigo === codigoAleatorio
    );

    if (usuarioIndex !== -1) {
      listaUsuario[usuarioIndex].senha = novaSenha;
      localStorage.setItem("lista_usuarios", JSON.stringify(listaUsuario));
      console.log("Senha atualizada:", listaUsuario[usuarioIndex]);
    } else {
      console.log("Usuário não encontrado");
    }
  }
}
*/
