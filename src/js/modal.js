$(document).ready(() => {

	$('.button').on('click', () => {
		$('.overlay').show();
	});

	$('.popup-form-close').on('click', () => {
		$('.overlay').hide();
	});

})