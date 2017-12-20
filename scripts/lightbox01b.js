$('figure img').on('click', function(){
	var imageSrc = $(this).attr('src')

	$('.lightbox-target figure img').attr('src', imageSrc)
	$('.lightbox-target').addClass('open')
})

$('.lightbox-close').on('click', function(){
	$('.lightbox-target').removeClass('open');
})

