$(function () {


  // СЛАЙДЕР Slick
$('.products__slider').slick({
prevArrow:'<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
nextArrow: '<button class="slider-btn slider-btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
infinite: false,
});

// АКАРДИОН
$('.questions__item-title').on('click', function(){
  $('.questions__item').removeClass('questions__item--active');
  $(this).parent().addClass('questions__item--active');
});

// СКРОЛСАЙТА
$('#fullpage').fullpage({
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  sectionSelector: '.page-section',
  scrollOverflow: true,
});

// МЕНЮ БУРГЕР
$('.menu__btn').on('click', function() {
  $('.menu__btn').toggleClass('menu__btn--active');
  $('.menu__list').toggleClass('menu__list--active');
});

// ЗАКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ ПРИ КЛИКЕ
$('.menu__list-link').on('click', function() {
  $('.menu__btn').removeClass('menu__btn--active');
  $('.menu__list').toggleClass('menu__list--active');
});


});
