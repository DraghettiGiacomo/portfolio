const theme = document.documentElement

function changeTheme(){

    console.log('ciao');

    theme.getAttribute('data-theme') == 'light' ?
    theme.setAttribute('data-theme', 'dark') :
    theme.setAttribute('data-theme', 'light');
}

changeTheme()