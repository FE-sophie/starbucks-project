$(function(){
	$('.main-menu-panel__item').hide(); //2dep 안보이게 처리함.
	$('.nav__main-menu li a').on({
		click:function(){
			var ref=$(this).parents('li').attr('id');
			// var aria=$('.main-menu-panel__item').attr('aria-labelledby')
			
			$("li[aria-labelledby*="+ref+"]").addClass('act').siblings().removeClass('act');
				$("li[aria-labelledby*="+ref+"]").slideToggle(100)
				
		},
		mouseover:function(){
			var ref=$(this).parents('li').attr('id');
			// var aria=$('.main-menu-panel__item').attr('aria-labelledby')
			$("li[aria-labelledby*="+ref+"]").addClass('act').siblings().removeClass('act');
			$("li[aria-labelledby*="+ref+"]").slideDown(300);
			$("li[aria-labelledby*="+ref+"]").mouseleave(function(){
				$(this).hide()
			})
		},
		mouseleave:function(){
			// $('.main-menu-panel__item').hide()
			
		},
		blur:function(){
			$('.act').slideUp(100); 	
		}
	})
	
	
		
})	
$('.total-search__input').hide(300)
$('.total-search__btn').click(function(){
	var ref=$(this).attr('type');
	$('.total-search__input').show(300);
	$(this).attr('type','submit')
	$(this).addClass('total--search__btn--act');
	// alert(ref)
	var val=$('.total-search__input').val()
	if(val==""){
		$('.total-search__input').focus()
	}
	else{
		$('.total-search__input').submit();
		$('.total-search__input').hide(300)
		$(this).removeClass('total--search__btn--act')
		$(this).attr('type','button')
	}
})



