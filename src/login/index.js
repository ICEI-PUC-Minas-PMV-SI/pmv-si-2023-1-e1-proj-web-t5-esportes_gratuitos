localStorage.removeItem("usuarioLogadoID")
document.getElementById("inputSenha").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("login").click();
    }
});

async function loginUsuario() {
    var inputEmail = document.getElementById("inputEmail");
    var inputSenha = document.getElementById("inputSenha");

    if (
        !inputEmail.value ||
        !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(inputEmail.value)
    ) {
        showToast("Preencha o e-mail corretamente!");
        return;
    }

    if (!inputSenha.value) {
        showToast("Preencha a senha corretamente!");
        return;
    }

    var listaUsuario = [];
    listaUsuario = JSON.parse(localStorage.getItem("lista_usuarios") || "[]");
    var user = listaUsuario.find(
        (user) =>
            user.email == inputEmail.value && user.senha == inputSenha.value
    );
    if (user) {
        try {
          localStorage.setItem("usuarioLogadoID", user.id);
          await showLoading('Entrando...')
        } finally {
          window.location.replace("/map");
        }
    } else {
        showToast("E-mail e/ou senha incorreto(s)!");
        return;
    }
}

function loginWithoutUser() {
  localStorage.removeItem("usuarioLogadoID");
  window.location.replace("/map");
}

function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.classList.add("show-toast");

    setTimeout(() => {
        toast.classList.remove("show-toast");
    }, 3000);
}

function showLoading(message) {
  return new Promise(resolve => {
      let loading = document.getElementById("loading");
      let loadingMessage = loading.querySelector('.loading-message');
  
      loadingMessage.innerHTML = message;
      loading.style.display = 'flex';

      setTimeout(() => {
          loading.style.display = 'none';
          resolve();
      }, 2000);
  })
}