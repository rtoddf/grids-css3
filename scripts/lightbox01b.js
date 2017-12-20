$('a.lightbox').on('click', function(){
	var imageSrc = $(this).find('img').attr('src')

	$('.lightbox-target figure img').attr('src', imageSrc)
	$('.lightbox-target').addClass('open')
})

$('.lightbox-close').on('click', function(){
	$('.lightbox-target').removeClass('open');
})

