let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// MODO CLARO / ESCURO
const btnTema = document.getElementById('btn-tema');
const iconeTema = btnTema.querySelector('i');

if (localStorage.getItem('tema') === 'claro') {
    document.body.classList.add('modo-claro');
    iconeTema.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
}

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-claro');

    if (document.body.classList.contains('modo-claro')) {
        iconeTema.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        localStorage.setItem('tema', 'claro');
    } else {
        iconeTema.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        localStorage.setItem('tema', 'escuro');
    }
});