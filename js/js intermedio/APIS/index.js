const jsonContainer = document.getElementById('jsonContainer');

window.addEventListener('load', ()=>{
    console.log('Prueba de api')
    let category = "men's clothing"
    fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json()).then(json=>{

        

        console.log(json) 
    })


    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>{
        let filterItems = json.filter(e => e.category === 'electronics')

        console.log(filterItems)

        jsonContainer.textContent = JSON.stringify(filterItems)
    })
})