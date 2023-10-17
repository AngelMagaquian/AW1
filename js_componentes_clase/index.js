import { navBarElement } from "./componentes/navbar.js"
const bodyElement = document.querySelector('body')
const navContainer = document.getElementById('navContainer')



window.addEventListener('load',()=>{
    navContainer.innerHTML = navBarElement
    let theme = bodyElement.dataset.bsTheme || 'dark'

    /* if(bodyElement.dataset.bsTheme){
        theme = bodyElement.dataset.bsTheme 
    }else{
        theme = 'dark'
    } */

    bodyElement.dataset.bsTheme = theme

    const btnChangeTheme = document.getElementById('btnChangeTheme');

    btnChangeTheme.addEventListener('click', ()=>{
        let theme = bodyElement.dataset.bsTheme
        /* if(theme == 'dark'){
            bodyElement.dataset.bsTheme ='ligth'
        }else{
            bodyElement.dataset.bsTheme ='dark'
        } */
        bodyElement.dataset.bsTheme = theme == 'dark' ? 'ligth' : 'dark'
    }) 

    
})


