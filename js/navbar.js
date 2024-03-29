//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
	if ($('.navbar').offset().top > 100) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});

$(window).scroll(function () {
	if ($('.navbar').offset().top > 100) {
		$('.test').removeClass('btn-remove');
	} else {
		$('.test').addClass('btn-remove');
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('.page-scroll a').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr('href')).offset().top,
				},
				1500,
				'easeInOutExpo'
			);
		event.preventDefault();
	});
});
