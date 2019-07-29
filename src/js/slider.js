$(document).ready(() => {

	$('.slider').slick({
		arrows: true,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow-left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow-right"></div>'
	});

	$('.slider-main-wrap').slick({
  		arrow: true,
  		slidesToScroll: 1,
  		prevArrow: '.slide-arrow-left',
  		nextArrow: '.slide-arrow-right'
  	});

  	$('.slider-feedback-wrap').slick({
  		arrow: true,
  		slidesToScroll: 1,
  		prevArrow: '.slide-arrow-feedback-left',
  		nextArrow: '.slide-arrow-feedback-right'
  	});

});