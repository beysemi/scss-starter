$('.js-dropdown-toggle').on('click', function () {
	var targetID = $(this).data('target');
	console.log(targetID);
	$(targetID).slideToggle();
	$(this).toggleClass('active');
});

// FAQ DROPDOWN
$('.js-faq-dropdown-toggle').on('click', function () {
	var elParent = $(this).parent('.js-faq-dropdown');
	elParent.toggleClass('active');
	elParent.find('p').slideToggle(400);
});

$('.js-dropdown-menu-toggle').on('click', function () {
	if ($(window).width() < 768) {
		$(this).parent('.mobile-header__dropdown-item').toggleClass('active');
		$(this).parent('.mobile-header__dropdown-item').find('ul').slideToggle(400);
	} else {
		$(this).toggleClass('active');
		$(this).find('ul').slideToggle(400);
	}
});
