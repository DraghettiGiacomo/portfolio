
/* ---------*************** ANIMATION TITLE ***************--------- */

let posizioneFinale = 18;
let incremento = 0;

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 400){
        animationTitle()     
    }
});

function animationTitle(){
    if(incremento > posizioneFinale){
        console.log('finito');
        incremento = 0;
        Session.Contents.Remove( incremento )
        /* document.getElementById('works').style.margin = '0 auto'
        document.getElementById('works').style.left = '0' */
    } else {
        document.getElementById('works').style.left = incremento + '%'
        incremento += 2
    }
}

/* ---------*************** ANIMATION TITLE ***************--------- */