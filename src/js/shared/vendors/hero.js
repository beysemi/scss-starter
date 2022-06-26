$('.intro-hero__item').on('mouseover', function () {
	$('.intro-hero__item').addClass('passive');
	$(this).removeClass('passive');
});
$('.intro-hero__item').on('mouseleave', function () {
	$('.intro-hero__item').removeClass('passive');
});
