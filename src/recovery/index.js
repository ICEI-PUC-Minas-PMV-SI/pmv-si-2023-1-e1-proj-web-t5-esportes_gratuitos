var modal = document.querySelector(".modal")
var shadow = document.querySelector(".shadow")
var button = document.querySelector(".button")
var buttonCodigo = document.querySelector(".button-codigo")
button.addEventListener("click",()=>{
   modal.classList.toggle("active")
   shadow.classList.toggle("active")
})
buttonCodigo.addEventListener("click",()=>{
    modal.classList.toggle("active")
    shadow.classList.toggle("active")
 })

 var codigoAleatorio=Math.floor(Math.random() * 9999) +1
 function enviarCodigo(){
   var recuperarEmail=document.getElementById("recuperarEmail").value
   
   var listaUsuario=JSON.parse(localStorage.getItem("lista_usuarios"))
   for(var i in listaUsuario){
      var entry = listaUsuario[i]
      if(recuperarEmail==entry.email){
         console.log("email encontrado")
        
         console.log(codigoAleatorio)
      }else{
         alert("email nao encontrado")
      
         modal.style.display="none"
         shadow.style.display="none"

      }
   }
 }
function confirmarCodigo(){
   var inputCodigo=document.getElementById("inputCodigo").value
var novaSenha=document.getElementById("novaSenha").value
if(codigoAleatorio==inputCodigo){
   console.log("codigo confirmado")
   var listaUsuario=JSON.parse(localStorage.getItem("lista_usuarios"))
   for(var i in listaUsuario){
      var entry = listaUsuario[i]
      console.log(entry.senha)
      entry.senha=novaSenha
      console.log(entry.senha)
      localStorage.setItem("lista_usuarios",JSON.stringify(entry.senha))
      //entry.senha=novaSenha
      //localStorage.setItem("lista_usuarios",novaSenha)
      

   }

}
}