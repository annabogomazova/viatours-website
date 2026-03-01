//slider trending-section
const catalog = document.querySelector('.trending__catalog');
const btnPrev = document.querySelector('.trending__btn-prev');
const btnNext = document.querySelector('.trending__btn-next');
//создала переменные и сохранила елементы страницы которые нахожу через document.querySelector по классам

// ширина прокрутки = ширина одной карточки
const cardWidth = document.querySelector('.trending__catalog-card').offsetWidth + 32;
btnNext.addEventListener('click', () => {
    catalog.scrollLeft += cardWidth; // листаем на карточку
});

btnPrev.addEventListener('click', () => {
    catalog.scrollLeft -= cardWidth;
});
