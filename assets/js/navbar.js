
let navbarContainer = document.getElementById('navbarContainer')

const populateNavbarContainer = () => { //nel link per i lavori ho inserito l'ID del contenitore superiore per far si di far vedere bene la sezione lavori
    let navbar = document.createElement('div')
    navbar.innerHTML = `
    <nav id="navabr" class="navbar navbar-expand-lg px-4 position-fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Giacomo Draghetti</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#programKnow" uk-scroll>Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contactSection" uk-scroll >Contacts</a>
          </li>
        </ul>
      </div>
      <div id="themeMode" class="ms-4" onclick="changeTheme()">
        <i class="bi bi-sun-fill light"></i>
        <i class="bi bi-moon-fill dark"></i>
      </div>
    </div>
  </nav>
    `

    navbarContainer.appendChild(navbar)

}

populateNavbarContainer()

/* <nav id="navabr" class="navbar navbar-expand-lg px-4 shadow-sm position-fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Giacomo Draghetti</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#altezzaContenitoreTitleWorks">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contactSection">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> */