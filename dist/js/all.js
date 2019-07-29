$(document).ready(() => {

	$('.button').on('click', () => {
		$('.overlay').show();
	});

	$('.popup-form-close').on('click', () => {
		$('.overlay').hide();
	});

})
const elements = document.querySelectorAll(".services-nav-link");
const linkEl = document.querySelectorAll(".lang-block-link");

for (let i = 0; i < elements.length; i++) {

  elements[i].addEventListener('click', function () {  
    for (let i = 0; i < elements.length; i++) {

      elements[i].classList.remove('active-services-link'); 

    };

    this.classList.add('active-services-link');

  });

};

for (let i = 0; i < linkEl.length; i++) {

  linkEl[i].addEventListener('click', function () {  
    for (let i = 0; i < linkEl.length; i++) {

      linkEl[i].classList.remove('active-lang-link'); 

    };

    this.classList.add('active-lang-link');

  });

};

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