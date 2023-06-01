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
