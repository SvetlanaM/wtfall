/**	01. SCROLL TO
 *************************************************** **/
jQuery('a.scrollTo').bind('click', function (e) {
	e.preventDefault();

	var href = jQuery(this).attr('href');
	if (href != '#') {
		jQuery('html,body').animate(
			{ scrollTop: jQuery(href).offset().top - window.navHeight },
			_scrollSpeed,
			'easeInOutExpo'
		);
	}
});

jQuery('a.toTop').bind('click', function (e) {
	e.preventDefault();
	jQuery('html,body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
});

/**	05. ELEMENTS ANIMATION
 *************************************************** **/
jQuery('.animate_from_top').each(function () {
	jQuery(this).appear(function () {
		jQuery(this).delay(150).animate({ opacity: 1, top: '0px' }, 1000);
	});
});

jQuery('.animate_from_bottom').each(function () {
	jQuery(this).appear(function () {
		jQuery(this).delay(150).animate({ opacity: 1, bottom: '0px' }, 1000);
	});
});

jQuery('.animate_from_left').each(function () {
	jQuery(this).appear(function () {
		jQuery(this).delay(150).animate({ opacity: 1, left: '0px' }, 1000);
	});
});

jQuery('.animate_from_right').each(function () {
	jQuery(this).appear(function () {
		jQuery(this).delay(150).animate({ opacity: 1, right: '0px' }, 1000);
	});
});

jQuery('.animate_fade_in').each(function () {
	jQuery(this).appear(function () {
		jQuery(this).delay(150).animate({ opacity: 1, right: '0px' }, 1000);
	});
});

/**	@ANIMATE ELEMENTS **/
if (jQuery().appear) {
	jQuery('*').each(function () {
		if (jQuery(this).attr('data-animation')) {
			var $animationName = jQuery(this).attr('data-animation');
			jQuery(this).appear(function () {
				jQuery(this).addClass('animated').addClass($animationName);
			});
		}
	});
}
