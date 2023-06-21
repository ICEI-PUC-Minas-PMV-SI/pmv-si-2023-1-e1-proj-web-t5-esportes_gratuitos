function validateForm() {
  var loginURL = "../login";
  var nome = document.getElementById("inputNome").value;
  var celular = document.getElementById("inputCelular").value;
  var email = document.getElementById("inputEmail").value;
  var senha = document.getElementById("inputSenha").value;
  var senha2 = document.getElementById("inputSenha2").value;

  if (
    nome === "" ||
    celular === "" ||
    email === "" ||
    senha === "" ||
    senha2 === ""
  ) {
    alert("preencha todos os campos para se cadastrar");
    return;
  } else if (senha !== senha2) {
    alert("verifique se as senhas estão iguais");
  } else {
    addData();
    alert("cadastro feito com sucesso");
    document.getElementById("inputNome").value = "";
    document.getElementById("inputCelular").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputSenha").value = "";
    document.getElementById("inputSenha2").value = "";
    window.location.href = loginURL;
  }
}
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
function addData() {
  /*
      if (localStorage.getItem("lista_usuarios") == null) {
        listaUsuarios = [];
      } else {
        listaUsuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
      }
      
    */
  var nome = document.getElementById("inputNome").value;
  var celular = document.getElementById("inputCelular").value;
  var email = document.getElementById("inputEmail").value;
  var senha = document.getElementById("inputSenha").value;
  var listaUsuarios = [];
  listaUsuarios.push({
    id: generateUUID(),
    nome: nome,
    celular: celular,
    email: email,
    senha: senha,
  });

  localStorage.setItem("lista_usuarios", JSON.stringify(listaUsuarios));
}

/*
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
      element.name,
      element.celular,
      element.email,
      element.senha
    );
  });
}
document.onload = showData();
*/
