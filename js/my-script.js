// swiper //
var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {
  var prof = $('#prof').height();
  var work = $('#work').height();
  var study = $('#study').height();
  var footer = $('#footer').height();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= prof) {
      $('h1').addClass('on');
      $('header nav ul li:first-child').addClass('on');
    } else {
      $('h1').removeClass('on');
      $('header nav ul li:first-child').removeClass('on');
    }

    //
    // if ($(this).scrollTop() >= work) {
    //   $('header nav ul li:nth-child(2)').addClass('on');
    //   $('header nav ul li:first-child').removeClass('on');
    // } else {
    //   $('header nav ul li:nth-child(2)').removeClass('on');
    // }
    //
    // if ($(this).scrollTop() >= study) {
    //   $('header nav ul li:last-child').addClass('on');
    //   $('header nav ul li:nth-child(2)').removeClass('on');
    // } else if ($(this).scrollTop() >= footer) {
    //   $('header nav ul li:last-child').removeClass('on');
    // } else {
    //   $('header nav ul li:last-child').removeClass('on');
    // }
  });

  $('.top_btn a').click(function () {
      $('body,html').animate({
        scrollTop: 0,
      }, 2000);
      return false;
    });
});
