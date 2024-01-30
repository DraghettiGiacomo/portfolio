
let footerContainer = document.getElementById('footerContainer')

let populationFooterContainer = () => {
    let footer = document.createElement('div')
    footer.innerHTML = `
        <div id="copyrightSection" class="container py-4 mt-1">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="copy col">Copyright © 2024. All rights are reserved</div>
                <div class="col text-center">
                    <a /* onclick="scrollToTop();" */ href="#" id="arrowForTop" uk-scroll><i class="bi bi-arrow-up-short"></i></a>
                </div>
                <div class="col d-flex gap-2 justify-content-end">
                    <a class="hoverIconContacts" href="https://www.linkedin.com/in/giacomo-draghetti-111398264/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a class="hoverIconContacts" href="https://github.com/DraghettiGiacomo" target="_blank"><i class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    `
    footerContainer.appendChild(footer)
}

populationFooterContainer()


// Funzione per lo scorrimento fluido verso l'alto
/* function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
} */