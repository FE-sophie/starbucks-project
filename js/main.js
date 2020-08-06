$(function(){
	$('.main-menu-panel__item').hide(); //2dep 안보이게 처리함.
	$('.nav__main-menu li a').on({
		click:function(){
			var ref=$(this).parents('li').attr('id');
			var aria=$('.main-menu-panel__item').attr('aria-labelledby')

				$("li[aria-labelledby*="+ref+"]").addClass('act').siblings().removeClass('act');
				$("li[aria-labelledby*="+ref+"]").slideToggle(300)

		},
		mouseover:function(){
			var ref=$(this).parents('li').attr('id');
			// var aria=$('.main-menu-panel__item').attr('aria-labelledby')
			$("li[aria-labelledby*="+ref+"]").addClass('act').siblings().removeClass('act');
			$("li[aria-labelledby*="+ref+"]").slideDown(300);
		},
			// $('.main-menu-panel__list>li').mouseleave(function(){
			// 	$(this).slideUp(300)
			// })
		//},
		mouseleave:function(){
			$('.act').slideUp(300);
		},
		blur:function(){
			$('.act').slideUp(300); 	
		}
	});
		
		})	
	

	$('.total-search__btn').click(function(){
			// alert('검색창 열림');
			$(this).attr('type','submit');
			$('.total-search__btn').toggleClass('total--search__btn--act');
			$('.total--search__btn--act').attr('type','button');

			$('.total--search__btn--act').submit(function(){
			$(this).attr('type','button');
			})	
	
	
	

})

});


