import { cardComponent } from "../../components/card.js";


let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {title: 'caculo 1', a: 6, b:4, footer: 'Soy un footer :D'},
    {title: 'caculo 2', a: 2, b:0, footer: 'Soy un footer 2 :D'},
    {title: 'caculo 3', a: 7, b:8, footer: 'Soy un footer 3 :D'},
    {title: 'caculo 4', a: 10, b:9, footer: 'Soy un footer 4 :D'},
]


window.addEventListener('load', ()=>{

    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')


    cardContainer.innerHTML = cards

})