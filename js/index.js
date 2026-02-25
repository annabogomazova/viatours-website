const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});

//slider trending-section
const catalog = document.querySelector('.trending__catalog');
const btnPrev = document.querySelector('.trending__btn-prev');
const btnNext = document.querySelector('.trending__btn-next');
//создала переменные и сохранила елементы страницы которые нахожу через document.querySelector по классам

// ширина прокрутки = ширина одной карточки
const cardWidth = document.querySelector('.trending__catalog-card').offsetWidth + 32;
// +32 потому что у тебя gap: 32px


//обработчик событий
//На кнопку btnNext вешаю обработчик события click.
btnNext.addEventListener('click', () => {
    catalog.scrollLeft += cardWidth; // листаем на карточку
});

btnPrev.addEventListener('click', () => {
    catalog.scrollLeft -= cardWidth;
});

//slider reviews-section

const slides = document.querySelectorAll('.reviews__item');
const dots = document.querySelectorAll('.dot');
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {

        // скрываем все слайды
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove('active');
            dots[j].classList.remove('active');
        }
        // показываем выбранный
        slides[i].classList.add('active');
        dots[i].classList.add('active');
    }
}

const button = document.querySelector('.home-banner__btn');
const home = document.querySelector('.home');

button.addEventListener('click', function () {
    home.classList.toggle('home--active');
});

    document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero__banner-title');
    const colors = ['red', 'blue', 'green', 'orange'];
    let i = 0;

    setInterval(() => {
    title.style.color = colors[i % colors.length];
    i++;
}, 2000);
});



