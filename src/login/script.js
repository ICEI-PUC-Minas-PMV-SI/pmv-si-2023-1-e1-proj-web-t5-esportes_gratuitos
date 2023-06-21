
  function loginUsuario() {
        console.log("funcionando")
        var inputEmail = document.getElementById("inputEmail").value
  
    var inputSenha = document.getElementById("inputSenha").value
  
    var listaUsuario = JSON.parse(localStorage.getItem("lista_usuarios"));
    for (var i in listaUsuario) {
  
        var entry = listaUsuario[i];
    
        if (inputEmail == entry.email && inputSenha == entry.senha) {
    
          alert("Log in successfull");
    
          window.location.href = "../map";
    
        } else {
    
          alert("wrong username or password");
    
        }
    
      }
    }