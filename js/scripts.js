$(document).ready(function() {
	$('.bxslider').bxSlider();
	$('input[type=tel]').inputmask("+7 (999) 999-99-99");
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		},
		padding: 0,
	});
	$('a[href*=#bid-form]').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 35
		}, 600);
	});
	$('.rev-slider').bxSlider({
		slideWidth: 350,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 33,
		pager: false,
	});
	$('.news-slider').bxSlider({
		slideWidth: 268,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 20,
		pager: false,
	});

	function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.each(
			function() {
				currentHeight = $(this).height();
				if (currentHeight > tallestcolumn) {
					tallestcolumn = currentHeight;
				}
			}
		);
		columns.height(tallestcolumn);
	}
	setEqualHeight($(".rev-slider li"));
	$('a.to-top').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
});