let userName = document.getElementById('txtName')
let btnSend = document.getElementById('btnSend')
let lblName = document.getElementById('lblName')

let select = document.getElementById('provincias')
let select2 = document.getElementById('provincias2') 


const provincias = [
    {name:'Cordoba', id:1}, 
    {name:'La Rioja', id:2}, 
    {name:'San Luis', id:3}, 
    {name:'Santiago del estero', id:4}
]

/*
    1- Declarar las variables referentes a los componentes
    2- Capturar el evento, en este caso el click del boton.
    3- Mostrar el resultado en un label

*/

btnSend.addEventListener('click', ()=>{
    lblName.textContent = userName.value
})

/*keypress, keyup, keydown 
this => esto
*/
userName.addEventListener('keyup', (e)=>{
   /*  console.log(e.key)
    console.log(e.target.id, e.target.value) */
    lblName.textContent =  e.target.value
})


select.addEventListener('change', (e)=>{
    /* console.log(e.target.options) */
    const selectValue = e.target.value
    const selectText = e.target.options[e.target.selectedIndex].text


    console.log('Valor seleccionado = ', selectValue)

    console.log('Texto de la seleccion = ', selectText)

    console.log('Texto del indice 0 = ', e.target.options[0].text)
})

window.addEventListener('load', ()=>{
    alert('Hola window')

    
    provincias.forEach(e =>{
        let option = document.createElement('option')
        option.value = e.id
        option.text = e.name

        select.appendChild(option)
    })


    let option2; 

    for(let e = 0; e < provincias.length; e++){
        option2 = document.createElement('option')

        option2.value = provincias[e].id
        option2.text = provincias[e].name

        select2.prepend(option2)
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    alert('Hola document')
})

