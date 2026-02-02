const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});