class Header extends HTMLElement {
  constructor() {
    super();
    // Componente header para todas as páginas
    const template = `
        <header>
            <nav class="navbar navbar-custom navbar-expand-lg sticky-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                </svg>
                <a class="navbar-brand" href="/pages/about/index.html"><span class="brand-name">Bruna Silva</span><span class="brand-function">  Software Developer</span></a>
                <div id="login-menu">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="fas fa-user user">
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                            <a href= "/pages/about/index.html">
                                <button id="logout-button" class="dropdown-item" type="button" action="/logout"  method="POST">Sair</button>
                            </a>
                            <a href= "/pages/blog/criarPost.html">
                                <button id="createPost-button" class="dropdown-item" type="button">Criar novo post</button>
                            </a>
                        </div>
                    </div>
                </div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
                    <span class="navbar-toggler-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </span>
                </button>
                <div id="navb" class="navbar-collapse collapse hide">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link nav-link-custom" href="/pages/cv/cv.html">Currículo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-custom" href="/pages/projects/projects.html">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-custom" href="/pages/blog/blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-custom" href="/pages/contacts/contacts.html">Contato</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
    `;
    this.innerHTML = template;

    const token = localStorage.getItem('token');

    const loginMenu = document.getElementById('login-menu');

    if (token == null) {
        loginMenu.style.display= "none";
    } else {
        loginMenu.style.display= "block";
    }
    
    document.querySelector('#logout-button').addEventListener('click', async (event) => {
        event.preventDefault();

        localStorage.removeItem('token');
        loginMenu.style.display= "none";
        window.location.href = `../about/index.html`;
    });
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
    // Componente footer para todas as páginas
    const template = `
        <footer class="footer-custom">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-12 col-md-4 mb-4 mb-md-0">
                        <span class="titles"><b>E-mail</b></span>
                        <p>
                            <a class="footer-email" href="mailto:myEmail@teste.com">myEmail@teste.com</a>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 mb-4 mb-md-0">
                        <a class="social-icon" href="#" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="social-icon" href="#" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <div class="col-12 col-md-4 mb-4 mb-md-0">
                        <p class="footer-copyright">&copy; Copyright Grupo1</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    this.innerHTML = template;
  }
}


class Post extends HTMLElement {
  get id() {
    return this.hasAttribute("id") && this.getAttribute("id");
  }
  get title() {
    return this.hasAttribute("title") && this.getAttribute("title");
  }
  get date() {
    return this.hasAttribute("date") && this.getAttribute("date");
  }
  get text() {
    return this.hasAttribute("text") && decodeHTML(this.getAttribute("text"));
  }
  get image() {
    return this.hasAttribute("image") && this.getAttribute("image") != "null" && this.getAttribute("image");
  }

  constructor() {
    super();

    const dataHora = this.date;

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const dataHoraFormatada = new Date(dataHora).toLocaleString('pt-PT', options);
    const hasToken = localStorage.getItem('token');
    
    
    // Começo
    let template = '<div class="row">';

    // Imagem
    if (this.image) {
      template += `
        <div class="col-12 col-md-3 card-body-image">
            <div class="card border-0">
            <div class="card-body">
                <img
                class="card-img-top mb-2 image-post"
                src="${this.image}"
                alt="Post main image"
                />
            </div>
            </div>
        </div>
      `;
    }

    // Conteudo
    template += `
        <div class="col-12 ${this.image ? "col-md-9" : ""}">
            <div class="card border-0">
            <div class="card-body">
                <a href= "verPost.html?id=${this.id}">
                    <h3 class="title">${this.title}</h3>
                </a>
                ${hasToken ?
                    `<div class="buttons-container left">
                        <a href= "criarPost.html?id=${this.id}">
                            <input id="edit-button" class="button" type="button" value="Editar Post" />
                        </a>
                    </div>` : ''
                }
                <p class="data">${dataHoraFormatada}</p>
                <div class="card-text text">${this.text.substring(0, this.text.indexOf(".") + 1)}</div>
                <a href= "verPost.html?id=${this.id}">
                    <button type="button" class="btn btn-link">Ver Mais</button>
                </a>
            </div>
            </div>
        </div>
    `;

    // Fim
    template += "</div>";

    this.innerHTML = template;
  }
}

customElements.define("my-header", Header);
customElements.define("my-footer", Footer);
customElements.define("my-post", Post);
