
const form = document.querySelector(".formulario-fale-conosco")
let mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
  
}
  
function clicarNaMascara(){
    mascara.style.visibility = "hidden"
    form.style.left = "-110px"
    form.style.top = "30%"   
}