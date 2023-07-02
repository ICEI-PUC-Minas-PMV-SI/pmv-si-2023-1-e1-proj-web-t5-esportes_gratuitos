const formElements = {
  nome: {
    element: () => document.getElementById("inputNome"),
    message: 'Preencha seu nome com pelo menos 3 caracteres!',
    valid: function() {
      const {value} = this.element();
      return value && value.length >= 3;
    },
  },
  idade: {
    element: () => document.getElementById("inputIdade"),
    message: 'Preencha sua idade corretamente!',
    valid: function() {
      const {value} = this.element();
      return value && /[0-9]/.test(value);
    },
  },
  celular: {
    element: () => document.getElementById("inputCelular"),
    message: 'Preencha seu celular incluindo o DDD corretamente!',
    valid: function() {
      const {value} = this.element();
      return value && value.length >= 11;
    },
  },
  email: {
    element: () => document.getElementById("inputEmail"),
    message: 'Preencha seu email corretamente!',
    valid: function() {
      const {value} = this.element();
      return value && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
    }
  },
  senha: {
    element: () => document.getElementById("inputSenha"),
    message: 'Preencha sua senha com pelo menos 6 caracteres!',
    valid: function() {
      const {value} = this.element();
      return value && value.length >= 6;
    }
  },
  senha2: {
    element: () => document.getElementById("inputSenha2"),
    message: 'As senhas não coincidem!',
    valid: function() {
      const {value} = this.element();
      return value && formElements.senha.element().value === value;
    }
  },
}

async function validateForm() {
  for (let key in formElements) {
    const formElement = formElements[key];

    if (!formElement.valid()) {
      showToast(formElement.message);
      return;
    }
  }

  try {
    saveUser();
    await showLoading("Cadastrando usuário...");
    window.location.replace('/login');
  } catch(e) {
    showToast("Erro ao cadastrar usuário!");
  } 
}

function saveUser() {
  const user = getUserObject()
  var listaUsuarios = JSON.parse(localStorage.getItem('lista_usuarios') || '[]');
  listaUsuarios.push({
    id: generateUUID(),
    ...user
  });
  localStorage.setItem("lista_usuarios", JSON.stringify(listaUsuarios)); 
}

function getUserObject() {
  const map = Object.keys(formElements).filter(key => key !== 'senha2').map(key => ([key, formElements[key].element().value]));
  return Object.fromEntries(map);
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

function showLoading(message) {
  return new Promise(resolve => {
      let loading = document.getElementById("loading");
      let loadingMessage = loading.querySelector('.loading-message');
  
      loadingMessage.innerHTML = message;
      loading.style.display = 'flex';

      setTimeout(() => {
          showToast("Cadastro feito com sucesso!");
      }, 1000);
  
      setTimeout(() => {
          loading.style.display = 'none';
          resolve();
      }, 2000);
  })
}

function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add('show-toast');
  
  setTimeout(() => {
    toast.classList.remove('show-toast');
  }, 3000);
}
