import { userCard } from "../components/userCard.js";

const getUserData = (key)=>{
    return JSON.parse(sessionStorage.getItem(key))
}
const logOut = (key)=>{
    sessionStorage.removeItem(key)
}

window.addEventListener('load', ()=>{

    /*Obtener la data desde sessionStorage */
    const userInfo = getUserData('userData')
    console.log(userInfo)
    const userContainer = document.getElementById('userContainer')
    const card = userCard(userInfo)
    
    userContainer.innerHTML = card

    document.getElementById('btnLogOut').addEventListener('click',()=>{
        logOut('userData')
        window.location.href = 'http://127.0.0.1:5501/index.html';
    })
})


