$(window).on('scroll', handler);
function handler(){
  var bottom = Math.floor($(window).scrollTop() + $(window).height())

  $('.animation').each(function(){
      var mid = $(this).position().top + $(this).height() / 2
      if (mid < bottom){
          $(this).animate({'opacity': '1'}, 1500);
      }
  });
}
handler();
