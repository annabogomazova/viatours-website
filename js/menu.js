const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});
