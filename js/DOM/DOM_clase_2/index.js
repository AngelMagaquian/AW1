console.log('Hola mundo!!!')

const navContainer = document.getElementById("navContainer")

const navLinks = [
    {title:'Home', link:'./index.html'},
    {title:'Pagina 2', link:'./pagina2.html'},
    {title:'Pagina 3', link:'./pagina3.html'}
]

const navBar = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar hecho con js</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      ${
        navLinks.map(e => {
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
</nav>`

/*
      ['<li>....</li>','<li>....</li>' ]
      '<li>....</li><li>....</li>' 
*/


window.addEventListener('load',()=>{
    navContainer.innerHTML = navBar
})