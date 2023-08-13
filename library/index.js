// вывод итоговой самооценки
console.log(`
Итоговая оценка: 50/50

1. Вёрстка соответствует макету. Ширина экрана 768px +26

2. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12

3. На ширине экрана 768рх реализовано адаптивное меню +12
`);

// бургер меню
const burger = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');
const navigationListItem = document.querySelectorAll('.navigation__list-item');
const burgerOpen = document.querySelector('burger-menu_open');

burger.addEventListener('click', function() {
    navigation.classList.toggle('burger-menu_open');
    burger.classList.toggle('burger-menu_open');
});

// burger menu closes if click to link
navigationListItem.forEach(function(item) {
    item.addEventListener('click', function() {
        navigation.classList.remove('burger-menu_open');
        burger.classList.remove('burger-menu_open');
    })
});

// burger menu closes if click outside it
document.addEventListener('click', function(e) {
    if (!burger.contains(e.target) && !navigation.contains(e.target)) {
        navigation.classList.remove('burger-menu_open');
        burger.classList.remove('burger-menu_open');
    }
});