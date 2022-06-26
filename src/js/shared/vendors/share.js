$(function () {
	var META = {
		URL: window.location.href,
		TITLE: $('title').text(),
		DESCRIPTION: $('meta[name="description"]').attr('content'),
		IMAGE: $('meta[property="og:image"]').attr('content'),
	};
	$('.js-share-btn').click(function () {
		$(this).children('.share-box').toggle('fast');
	});
	$('.js-share-facebook').click(function () {
		VanillaSharing.fbButton({
			url: META.URL,
		});
	});
	$('.js-share-twitter').click(function () {
		VanillaSharing.tw({
			url: META.URL,
			title: META.TITLE,
		});
	});
	$('.js-share-email').click(function () {
		VanillaSharing.email({
			url: META.URL,
			title: META.TITLE,
			description: META.DESCRIPTION,
			image: META.IMAGE,
		});
	});
	$('.js-share-whatsapp').click(function () {
		VanillaSharing.whatsapp({
			url: META.URL,
			title: META.TITLE,
		});
	});
	$('.js-share-messenger').click(function () {
		VanillaSharing.messenger({
			url: META.URL,
			title: META.TITLE,
		});
	});
});
