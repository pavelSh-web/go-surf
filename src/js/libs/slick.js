import $ from 'jquery';
import 'slick-carousel';
import 'animate.css';

$('.header__slider').slick({
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    prevArrow: '<img class="slider-arrows slider-arrows_right" src="assets/img/icon/arrows-left.svg" alt="->"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_left" src="assets/img/icon/arrows-right.svg" alt="->"></img>',
    asNavFor: '.slider-dots'
});

$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.header__slider',
    focusOnSelect: true
});



$('.surf-slider').slick({
    slidesToShow: 4,
    prevArrow: '<img class="slider-arrows slider-arrows_right" src="assets/img/icon/arrows-left.svg" alt="->"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_left" src="assets/img/icon/arrows-right.svg" alt="->"></img>',
    asNavFor: '.surf-slider-map',
    focusOnSelect: true
});

$('.surf-slider-map').slick({
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
});

$('.travel__slider').slick({
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<img class="slider-arrows slider-arrows_right" src="assets/img/icon/arrows-left.svg" alt="->"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_left" src="assets/img/icon/arrows-right.svg" alt="->"></img>',
    // asNavFor: '.slider-dots, .slider-info'
});

$('.sleep__slider').slick({
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<img class="slider-arrows slider-arrows_right" src="assets/img/icon/arrows-left.svg" alt="->"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_left" src="assets/img/icon/arrows-right.svg" alt="->"></img>',
    // asNavFor: '.slider-dots, .slider-info'
});




// document.querySelector('.surf-slider-map').addEventListener('click', () => {
//     document.querySelectorAll('.surf-slider-map .slick-slide').forEach(item => {
//         item.classList.remove('slick-current');
//         console.log(1);
//     });
// });
