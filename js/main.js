var navArrow = document.querySelector('.mobile-dropdown');
var navMenuHandler = function() {
    var ulItem = document.querySelector('nav ul');

    navArrow.classList.toggle('js-ease-arrow');

    ulItem.classList.toggle('js-nav-visible');
    // for(var i=0; i<navItems.length; i++) {
    //     if(i === 0) {
    //         navItems[i].classList.toggle('js-divider');
    //     }
    //     navItems[i].classList.toggle('js-nav-visible');
    // }
};
navArrow.addEventListener('click', navMenuHandler, false);



/*
navArrow.onclick = function() {
    var navItems = document.querySelectorAll('nav ul li');

    navArrow.classList.toggle('js-ease-arrow');

    for(var i=0; i<navItems.length; i++) {
        if(i === 0) {
            navItems[i].classList.toggle('js-divider');
        }
        navItems[i].classList.toggle('js-nav-visible');
    }
};
*/
