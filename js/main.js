// $(function(){
// 	$('.menu ul ul').hide(1);
// 	$('.menu>ul>li').click(function(){
// 		$(this).toggleClass('active');
// 		$(this).find('ul').sildeToggle(400);
// 	});
// });
$(function(){
	$('.menu ul ul').hide(1); //2dep 안보이게 처리함.
	$('.menu>ul>li').click(function(){
		//클릭한 li 클래스값을 줌
		$(this).addClass('active').siblings().removeClass('active');
		
		$('.menu>ul>li').each(function(){
			//클래스값(active)이 있으면 slideDown()
			//클래스값(active)이 없으면 slideUP()
			if($(this).attr('class')) $(this).find('ul').slideDown(200);
			else $(this).find('ul').slideUp(200);
		});
		//2dep 없으면 경고창을 띄워주세요
	});
});

