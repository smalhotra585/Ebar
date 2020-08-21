

let isTransparent = true;
const nav = document.querySelector('#navbars');

window.addEventListener('scroll', event =>{
    if (window.pageYOffset > 70 && isTransparent){
        nav.classList.add('fixed');
        isTransparent = false;
    }
    if (window.pageYOffset <= 70 && !isTransparent){
        nav.classList.remove('fixed');
        isTransparent = true;
    }
})
