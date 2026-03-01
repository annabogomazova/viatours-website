const hero = document.querySelector('.hero');

const backgrounds = [
    'img/destination/dubai.jpg',
    'img/destination/norway.jpeg',
    'img/destination/italy3.jpg'
];
let current = 0;
console.log(hero)
// первый фон сразу
hero.style.backgroundImage = 'url(' + backgrounds[current] + ')';

// функция смены фона
function changeBackground() {
    current++;
    if (current >= backgrounds.length) current = 0;
    hero.style.backgroundImage = 'url(' + backgrounds[current] + ')';
}
// каждые 10 секунд
setInterval(changeBackground, 10000);

