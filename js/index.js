const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
});

//slider
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
    catalog.scrollLeft += cardWidth ; // листаем на карточку
});

btnPrev.addEventListener('click', () => {
    catalog.scrollLeft -= cardWidth ;
});

