
let footerContainer = document.getElementById('footerContainer')

let populationFooterContainer = () => {
    let footer = document.createElement('div')
    footer.innerHTML = `
        <div id="copyrightSection" class="container py-4 mt-1">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col">Copyright © 2024. All rights are reserved</div>
                <div class="col text-center">
                    <a id="arrowForTop" href="#"><i class="bi bi-arrow-up-short"></i></a>
                </div>
                <div class="col d-flex gap-2 justify-content-end">
                    <a href="https://www.linkedin.com/in/giacomo-draghetti-111398264/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    `
    footerContainer.appendChild(footer)
}

populationFooterContainer()


