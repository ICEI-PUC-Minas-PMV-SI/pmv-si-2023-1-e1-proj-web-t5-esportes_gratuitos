function loginUsuario() {
  var inputEmail = document.getElementById("inputEmail").value;

  var inputSenha = document.getElementById("inputSenha").value;

  var listaUsuario = JSON.parse(localStorage.getItem("lista_usuarios"));
  listaUsuario.filter((user) => {
    console.log(user);
    if (user.email == inputEmail && user.senha == inputSenha) {
      alert("Log in successfull");
      window.location.href = "../map";
    } else {
      //alert("wrong username or password");
      return;
    }
  });
}