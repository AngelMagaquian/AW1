console.log("Entro al archivo index.js")

const button = document.getElementById('btnSend')
const userName = document.getElementById('txtUserName')
const labelResult = document.getElementById('lblResultado')
let contador = 0
button.addEventListener('click', ()=>{
    
    if (window.confirm("¿Desea registrarse?")) {

        if(userName.value != ''){
            labelResult.textContent = userName.value
        }else{
            alert('No se puede ingresar datos vacios')
        }
    }else{
        alert('Okey :(')
    }

})



/*
    [elemento].addEventListener('[evento]', ()=>{
        [Bloque de código]
    })
*/


userName.addEventListener('keyup',(e)=>{
  console.log(e.target.value)
})