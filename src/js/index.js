// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import $ from 'jquery';
import './libs/slick';
import inputNumber from './modules/inputNumber';


inputNumber();
$('.shop-desc__text').hide();
$('.shop-desc__toggle').on('click', function() {
    if ($(this).contains(''))
    $('.shop-desc__toggle').removeClass('active');
    $(this).addClass('active');
    $('.shop-desc__text').hide();
    $(this).siblings('.shop-desc__text').show();
});

$('.menu-btn').on('click', function () {
  $(this).addClass('active');
  $('.menu-small').addClass('active');
});

$('.menu-btn').off('click', function () {
  $(this).addClass('active');
  $('.menu-small').addClass('active');
});




