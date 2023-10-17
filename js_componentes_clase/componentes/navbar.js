const navLinks = [
    {title:'Home', link:'./index.html', subLinks:[], acceso:[1,2,3]},
    {title:'Paginas', link:'', subLinks:[
        {title:'Pagina 1', link:'./pagina1.html'},
        {title:'Pagina 2', link:'./pagina2.html'}
    ],
    acceso:[1,2]
    },
    {title:'Pagina particular', link:'./other.html', subLinks:[], acceso:[1,3]},
    {title:'Otra pagina 2', link:'./other2.html', subLinks:[],acceso:[1]}
]


export const navBarElement = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        ${
            navLinks.map(e=>{
                if(e.subLinks.length == 0){
                    return `
                    <li class="nav-item">
                        <a class="nav-link" href=${e.link}>${e.title}</a>
                    </li>
                    `
                }else{
                    return `
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${e.title}
                            </a>
                            <ul class="dropdown-menu">
                                ${e.subLinks.map(i =>{
                                    return `
                                        <li><a class="dropdown-item" href=${i.link}>${i.title}</a></li>
                                    `
                                }).join('')}
                            </ul>
                        </li>
                    `
                }
               
            }).join('')
        }
      </ul>
    </div>
    <button class="btn btn-warning" id="btnChangeTheme">Cambiar tema</button>
  </div>
</nav>
`