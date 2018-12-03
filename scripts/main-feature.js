var height

$( document ).ready(function() {
	height = ($('.content-holder').height() - $('.content-holder h3').height()) * -1
	$('.mainFeature').find('.content-holder').css('bottom', height)
})

$('.mainFeature').on('mouseover', function(){
	$(this).find('.content-holder').css('bottom', 0);
})

$('.mainFeature').on('mouseout', function(){
	$(this).find('.content-holder').css('bottom', height);
})