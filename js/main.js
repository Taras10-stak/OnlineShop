$(function () {
  $('.banner-section_slider').slick({
    dots: true,
    prevArrow: ' <button class="banner-section_slider-btn banner-section_slider-btnprev"><img src="images/aroow-left.svg" alt=""></button>',
    nextArrow: ' <button class="banner-section_slider-btn banner-section_slider-btnnext"><img src="images/aroow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  });

  $('.product-item_favorite').on('click', function () {
    $(this).toggleClass('product-item_favorite--active')
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ' <button class="product-slider_slider-btn product-slider_slider-btnprev"><img src="images/aroow-black-left.svg" alt=""></button>',
    nextArrow: ' <button class="product-slider_slider-btn product-slider_slider-btnnext"><img src="images/aroow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  $('.filter-style').styler();

  $('.filter_item-drop, .filter_extra').on('click', function () {
    $(this).toggleClass('filter_item-drop--active');
    $(this).next().slideToggle('200');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 500,
    max: 50000,
  });

  $('.catalog_filter-btngrid').on('click', function () {
    $(this).addClass('catalog_filter-button--active');
    $('.catalog_filter-btnline').removeClass('catalog_filter-button--active');
    $('.product-item_wrapper').removeClass('product-item_wrapper--list');

  });

  $('.catalog_filter-btnline').on('click', function () {
    $(this).addClass('catalog_filter-button--active');
    $('.catalog_filter-btngrid').removeClass('catalog_filter-button--active');
    $('.product-item_wrapper').addClass('product-item_wrapper--list');
  });

  $(".rate-yo").rateYo({
    ratedFill: "#1c62cd",
    spacing: "7px",
    normalFill: "#c4c4c4"
  });

  $('.menu_btn').on('click', function () {
    $('.menu-mobile_list').toggleClass('menu-mobile_list--active');
  });

  $('.footer_topdrop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer_topdrop--active');
  });

  $('.aside_btn').on('click', function () {
    $(this).next().slideToggle();
  });

});