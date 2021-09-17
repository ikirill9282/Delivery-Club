let button = document.querySelector('.show-button'),
    noneButton = document.querySelector('.none-button'),
    none = document.querySelector('.none'),
    noneOne = document.querySelector('.none1'),
    span = document.querySelector('.span-show__title');

button.addEventListener('click', function(){
    none.style.display = 'block';
    noneOne.style.display = 'block';
    button.style.display = 'none'
    noneButton.style.display = 'block'
});
noneButton.addEventListener('click', function(){
    none.style.display = 'none';
    noneOne.style.display = 'none';
    button.style.display = 'flex'
    noneButton.style.display = 'none'
});



$(document).ready(function(){
    // Маска для телефона 
    $('.phone').mask('+7 (999) 999-99-99');
    // Скрипт для слайдера 
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
});