function scrollHandler() {
  var windownBottom = $(window).scrollTop() + $(window).height();
  // 이미지 중간위치에 도착하면 opacity 1설정
  var appear = $('.appear');
  var appearHalf = appear.offset().top + appear.outerHeight() / 2;
  
  if(appearHalf < windownBottom){
    appear.animate({'opacity' : '1'}, 1500);
  }
  
}
$(window).on('scroll', scrollHandler);

scrollHandler();