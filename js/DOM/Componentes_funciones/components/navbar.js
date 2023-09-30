const url = 'http://127.0.0.1:5500/pages/'

const navElements = [

    {title: 'Home', link: `${url}home/index.html`},
    {title: 'Pagina 1', link: `${url}pagina1/pagina1.html`},
    {title: 'Pagina 2', link: `${url}pagina2/pagina2.html`}
]


export const navbarComponent = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar JS Comp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    ${
                        navElements.map(e=>{
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


/*import y export

antes de importar se debe exportar

*/