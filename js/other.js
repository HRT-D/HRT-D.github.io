// (function(){
// 	$('.flex-container').waitForImages(function() {
// 		$('.spinner').fadeOut();
// 	}, $.noop, true);
	
// 	$(".flex-slide").each(function(){
// 		$(this).hover(function(){
// 			$(this).find('.flex-title').css({
// 				transform: 'rotate(0deg)',
// 				top: '10%'
// 			});
// 			$(this).find('.flex-about').css({
// 				opacity: '1'
// 			});
// 		}, function(){
// 			$(this).find('.flex-title').css({
// 				transform: 'rotate(90deg)',
// 				top: '15%'
// 			});
// 			$(this).find('.flex-about').css({
// 				opacity: '0'
// 			});
// 		})
// 	});
// })();

function slide_over(x){
	x.getElementsByClassName("flex-title")[0].style.transform = 'rotate(0deg)';
	x.getElementsByClassName("flex-about")[0].style.opacity = 1;
}

function slide_out(x){
	x.getElementsByClassName("flex-title")[0].style.transform = 'rotate(90deg)';
	x.getElementsByClassName("flex-about")[0].style.opacity = 0;
}