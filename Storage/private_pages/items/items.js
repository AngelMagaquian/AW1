import { getData, setData, deleteCollection } from "../../utils/localStorage.controller.js"


const selectItems = document.getElementById('items')
const btnAdd = document.getElementById('btnAdd')
const btnEdit = document.getElementById('btnEdit')
const btnDelete = document.getElementById('btnDelete')


window.addEventListener('load', ()=>{
    /*Obtener la información del localStorage */
    const items = getData('itemsData')
    let options = ``

    items.map(e=> {
        options += `<option value="${e.name}">${e.name}</option>`
    })

    selectItems.innerHTML = options
    console.log(items)
})

selectItems.addEventListener('change', ()=>{
    const selectedItem = selectItems.value
    const item = getData('itemsData').find(e => e.name === selectedItem)

    document.getElementById('editName').value = item.name
    document.getElementById('editDesc').value = item.desc

})

btnAdd.addEventListener('click', ()=>{
    /*Agregar un nuevo elemento al LS */
    const newName = document.getElementById('newName').value
    const newDesc = document.getElementById('newDesc').value
    const newItem = {name: newName, desc: newDesc}

    /*Obtener los datos de LS */
    const items = getData('itemsData')

    /*Agregarlo localmente */
    items.push(newItem)
    
    /*Setear el LS con el nuevo array */
    setData('itemsData', items)
})

btnEdit.addEventListener('click', ()=>{
    /*Encontrar el elemento */
    const selectedItem = selectItems.value
    const editedName = document.getElementById('editName').value
    const editedDesc = document.getElementById('editDesc').value
    /*Modificarlo localmente */
    const items = getData('itemsData')

    const index = items.findIndex(e => e.name == selectedItem)
    items[index] = {name: editedName, desc: editedDesc}
    
    /*Setear el LS con el nuevo array */
    setData('itemsData', items)
})

btnDelete.addEventListener('click', ()=>{
    /*Encontrar el elemento */
    const selectedItem = selectItems.value
    /*Modificarlo localmente */
    const items = getData('itemsData')

    const index = items.findIndex(e => e.name == selectedItem)
    items.splice(index,1)
    /*Setear el LS con el nuevo array */
    setData('itemsData', items)
})


