const navElements = [
    {title:'Index', link:'./index.html'},
    {title:'Home', link:'./home.html'},
    {title:'Pagina', link:'./pagina.html'},
    {title:'Pagina 2', link:'./pagina2.html'},
]


const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar JS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
              ${
                navElements.map(e =>{
                    return `
                    <li class="nav-item">
                      <a class="nav-link" href=${e.link}>${e.title}</a>
                    </li>
                    `
                }).join('')
              }
            </ul>
          </div>
        </div>
    </nav>
`

let navContainer = document.querySelector('header')
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navBar
    title.textContent = `Bienvenido a ${pageName}`
    document.title = pageName
})