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
