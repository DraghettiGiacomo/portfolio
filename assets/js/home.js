
/* ---------*************** ANIMATION TITLE ***************--------- */

let posizioneFinale = 18;
let incremento = 2;

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 400){
        animationTitle()     
    }
});

function animationTitle(){
    if(incremento > posizioneFinale){
        console.log('finito');
        Session.Contents.Remove( incremento )
        document.getElementById('works').style.margin = '0 auto'
    } else {
        document.getElementById('works').style.left = incremento + '%'
        incremento += 2
    }
}

/* ---------*************** ANIMATION TITLE ***************--------- */