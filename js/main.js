

///////////////// variable

let menu_nav = document.querySelector('#menu_nav');
let burger = document.querySelector('#style_burger');
// let burger2 = document.getElementById('#style_burger');

///////////////// fonction



///////////////// programme

document.addEventListener('DOMContentLoaded', function()
{
    // Créé un "toggle class" en Javascrit natif (compatible partout)
    burger.addEventListener("click", function(e) {
    
        e.preventDefault();

        if (!this.getAttribute('class')) {
            this.setAttribute('class', 'clicked');
        }
        else{
            this.removeAttribute('class');
        }
    
    
        // Créé l'effet pour le menu slide (compatible partout)
        if (menu_nav.getAttribute('class') != 'visible') {
            menu_nav.setAttribute('class', 'visible');
        }
        else{
            menu_nav.setAttribute('class', 'invisible');
        }
    
    }, false);
});