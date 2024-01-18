const contactContainer = document.getElementById('contactSection')

const populateContactContainer = () => {
    let contact = document.createElement('div')
    contact.innerHTML = `
    <div class="row d-flex justify-content-center justify-content-sm-between align-items-center gap-2">
        <h5 class="col-12 col-lg-8 display-2 fw-bold">Let's work together on your next project</h5>
        <div class="col-12 col-lg-2 d-flex flex-row flex-lg-column gap-2 gap-md-5 mx-auto mt-5 mt-lg-0">
            <a href="mailto:jack.draghetti2002@gmail.com" class="bottoneCss col-6 col-sm-3 col-lg-12 ">Send email<div class="sfondo"></div></a>
            <a href="tel:+39 3703305068" class="bottoneCss col-6 col-sm-3 col-lg-12">Call me<div class="sfondo"></div></a>
        </div>
    </div> 
    `

    contactContainer.appendChild(contact)
}

populateContactContainer()

/* <div class="row d-flex justify-content-center justify-content-sm-between align-items-center gap-2">
           <h5 class="col-12 col-lg-8 display-2 fw-bold">Let's work together on your next project</h5>
           <div class="col-12 col-lg-2 d-flex flex-row flex-lg-column gap-2 gap-md-5 mx-auto mt-5 mt-lg-0">
               <a href="mailto:jack.draghetti2002@gmail.com" class="bottoneCss col-6 col-sm-3 col-lg-12 ">Send email<div class="sfondo"></div></a>
               <a href="tel:+39 3703305068" class="bottoneCss col-6 col-sm-3 col-lg-12">Call me<div class="sfondo"></div></a>
           </div>
       </div> */