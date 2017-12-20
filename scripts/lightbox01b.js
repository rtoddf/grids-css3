$('a.lightbox').on('click', function(){
	var whichImage = $(this).attr('data-thumb')
	var imageSrc = $(this).find('img').attr('src')

	console.log('whichImage: ', whichImage)
	console.log('imageSrc: ', imageSrc)

	var whichLightbox = $('.lightbox-target#' + whichImage + ' figure')

	whichLightbox.find('img').attr('src', imageSrc)
})

