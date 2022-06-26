var hrefImage = {};
var $sizeBtn = $('.js-size-btn');
var $packageBtn = $('.js-package-btn');
var $slider = $('.js-product-slider');
function getSlide() {
	var hrefID = hrefImage.size + hrefImage.package;
	var sliderID = $slider.find('[data-id="' + hrefID + '"]').data('slick-index');
	$slider.slick('slickGoTo', sliderID);
}
function init() {
	var selectedList = $('[data-selected="true"]');
	$.each(selectedList, function (key, value) {
		if (key == 0) {
			hrefImage.size = $(value).data('size');
		} else if (key == 1) {
			hrefImage.package = $(value).data('package');
		}
	});
	getSlide(hrefImage.size, hrefImage.package);
}

$(function () {
	init();
	$sizeBtn.on('click', function () {
		$('.js-size-btn').parent().removeClass('active');
		$(this).parent().addClass('active');
		hrefImage.size = $(this).data('size');
		getSlide();
	});
	$packageBtn.on('click', function () {
		$('.js-package-btn').parent().removeClass('active');
		$(this).parent().addClass('active');
		hrefImage.package = $(this).data('package');
		getSlide();
	});
});
