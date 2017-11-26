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
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $('header').height()) {
      $('h1').addClass('on');
    } else {
      $('h1').removeClass('on');
    }
  });

  $('.top_btn a').click(function () {
      $('body,html').animate({
        scrollTop: 0,
      }, 2000);
      return false;
    });

  $('header').prepend('<div class="layer"></div>');
});
