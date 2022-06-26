const $productSlider = $('.js-product-slider');
const $productsSlider = $('.js-products-slider');
const $commentSlider = $('.js-comments-slider');
const $blogSlider = $('.js-blog-slider');
const $responsibilitySlider = $('.js-responsibility-slider');
const sliderPrevArrow =
	'<button class="slick-arrow slick-arrow slick-prev prev"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1393 14.1393L5.13928 8.13931L11.1393 2.13931" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
const sliderNextArrow =
	'<button class="slick-arrow slick-arrow slick-next next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2L11 8L5 14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

$(function () {
	$productsSlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1.3,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: false,
		prevArrow: sliderPrevArrow,
		nextArrow: sliderNextArrow,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
	});
	$productSlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: true,
		dots: true,
		prevArrow: sliderPrevArrow,
		nextArrow: sliderNextArrow,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$commentSlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1.3,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: false,
		prevArrow: sliderPrevArrow,
		nextArrow: sliderNextArrow,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
	});
	$blogSlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1.3,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: false,
		prevArrow: sliderPrevArrow,
		nextArrow: sliderNextArrow,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
	});
	$responsibilitySlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1.3,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: false,
		prevArrow: sliderPrevArrow,
		nextArrow: sliderNextArrow,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
	});
});
